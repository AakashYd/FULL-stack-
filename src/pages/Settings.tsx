import React, { useState, useEffect } from 'react';
    import PageTransition from '../components/PageTransition';
    import { motion } from 'framer-motion';
    import { Save } from 'lucide-react';
    import { useAuth } from '../context/AuthContext';

    export default function Settings() {
      const { user, settings, updateSettings } = useAuth();
      const [localSettings, setLocalSettings] = useState({
        notifications: true,
        darkMode: true,
        newsletter: false
      });
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
        if (settings) {
          setLocalSettings(settings);
        }
      }, [settings]);

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
          await updateSettings(localSettings);
        } catch (err) {
          setError('Failed to update settings');
        } finally {
          setLoading(false);
        }
      };

      return (
        <PageTransition>
          <div className="relative min-h-screen pt-20">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-8"
              >
                <h1 className="text-4xl font-bold mb-6">Settings</h1>
                {user && (
                  <div className="mb-8">
                    <p className="text-gray-300">Signed in as: {user.email}</p>
                  </div>
                )}
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label htmlFor="notifications" className="text-sm font-medium">
                        Enable Notifications
                      </label>
                      <input
                        type="checkbox"
                        id="notifications"
                        checked={localSettings.notifications}
                        onChange={(e) => setLocalSettings({ ...localSettings, notifications: e.target.checked })}
                        className="w-4 h-4"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="darkMode" className="text-sm font-medium">
                        Dark Mode
                      </label>
                      <input
                        type="checkbox"
                        id="darkMode"
                        checked={localSettings.darkMode}
                        onChange={(e) => setLocalSettings({ ...localSettings, darkMode: e.target.checked })}
                        className="w-4 h-4"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="newsletter" className="text-sm font-medium">
                        Subscribe to Newsletter
                      </label>
                      <input
                        type="checkbox"
                        id="newsletter"
                        checked={localSettings.newsletter}
                        onChange={(e) => setLocalSettings({ ...localSettings, newsletter: e.target.checked })}
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Save Settings'}
                    <Save className="w-4 h-4" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </PageTransition>
      );
    }
