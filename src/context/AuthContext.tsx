import React, { createContext, useContext, useEffect, useState } from 'react';
    import { supabase, isSupabaseConfigured } from '../lib/supabase';
    import type { User } from '@supabase/supabase-js';

    interface AuthContextType {
      user: User | null;
      signIn: (email: string, password: string) => Promise<void>;
      signUp: (email: string, password: string) => Promise<void>;
      signOut: () => Promise<void>;
      isConfigured: boolean;
      updateSettings: (settings: { notifications: boolean, darkMode: boolean, newsletter: boolean }) => Promise<void>;
      settings: { notifications: boolean, darkMode: boolean, newsletter: boolean } | null;
    }

    const AuthContext = createContext<AuthContextType | undefined>(undefined);

    export function AuthProvider({ children }: { children: React.ReactNode }) {
      const [user, setUser] = useState<User | null>(null);
      const [settings, setSettings] = useState<{ notifications: boolean, darkMode: boolean, newsletter: boolean } | null>(null);
      const isConfigured = isSupabaseConfigured();

      useEffect(() => {
        if (!isConfigured) return;

        supabase.auth.getSession().then(({ data: { session } }) => {
          setUser(session?.user ?? null);
          if (session?.user) {
            fetchUserSettings(session.user.id);
          }
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
          setUser(session?.user ?? null);
          if (session?.user) {
            fetchUserSettings(session.user.id);
          }
        });

        return () => subscription.unsubscribe();
      }, [isConfigured]);

      const fetchUserSettings = async (userId: string) => {
        try {
          const { data, error } = await supabase
            .from('user_settings')
            .select('*')
            .eq('user_id', userId)
            .single();

          if (error) {
            console.error('Error fetching user settings:', error);
            return;
          }

          if (data) {
            setSettings({
              notifications: data.notifications,
              darkMode: data.dark_mode,
              newsletter: data.newsletter,
            });
          }
        } catch (error) {
          console.error('Unexpected error fetching user settings:', error);
        }
      };

      const signIn = async (email: string, password: string) => {
        if (!isConfigured) throw new Error('Supabase is not configured');
        const { error, data } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        if (data?.user) {
          fetchUserSettings(data.user.id);
        }
      };

      const signUp = async (email: string, password: string) => {
        if (!isConfigured) throw new Error('Supabase is not configured');
        const { error, data } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        if (data?.user) {
          fetchUserSettings(data.user.id);
        }
      };

      const signOut = async () => {
        if (!isConfigured) throw new Error('Supabase is not configured');
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        setUser(null);
        setSettings(null);
      };

      const updateSettings = async (newSettings: { notifications: boolean, darkMode: boolean, newsletter: boolean }) => {
        if (!user) throw new Error('Not authenticated');
        if (!isConfigured) throw new Error('Supabase is not configured');
        try {
          const { error } = await supabase
            .from('user_settings')
            .update({
              notifications: newSettings.notifications,
              dark_mode: newSettings.darkMode,
              newsletter: newSettings.newsletter,
              updated_at: new Date().toISOString(),
            })
            .eq('user_id', user.id);

          if (error) {
            console.error('Error updating user settings:', error);
            throw error;
          }
          setSettings(newSettings);
        } catch (error) {
          console.error('Unexpected error updating user settings:', error);
          throw error;
        }
      };

      return (
        <AuthContext.Provider value={{ user, signIn, signUp, signOut, isConfigured, updateSettings, settings }}>
          {children}
        </AuthContext.Provider>
      );
    }

    export function useAuth() {
      const context = useContext(AuthContext);
      if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
      }
      return context;
    }
