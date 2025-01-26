import React from 'react';
    import PageTransition from '../components/PageTransition';
    import { motion } from 'framer-motion';
    import Spline from '@splinetool/react-spline';

    const images = [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571127236794-81c2bca55aea?auto=format&fit=crop&w=1600&q=80"
    ];

    export default function About() {
      return (
        <PageTransition>
          <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
              <Spline scene="https://prod.spline.design/NYnTe3YctwcC8ihb/scene.splinecode" />
            </div>
            
            <div className="relative z-10 pt-20">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-black/40 backdrop-blur-lg rounded-lg p-12 mb-12"
                >
                  <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    About Electric Cars
                  </h1>
                  
                  <div className="prose prose-lg prose-invert max-w-none">
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                      Welcome to Electric Cars, the premier destination for all things related to electric vehicles (EVs). 
                      In an era where sustainability, innovation, and clean energy are at the forefront of global discussions, 
                      we’re dedicated to providing you with the most up-to-date information about electric cars. Our mission is to educate, inspire, and empower individuals who are passionate about the future of transportation and the environment.
                    </p>

                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                      The shift towards electric cars is not just a trend but a movement that has the potential to transform the automotive industry and the way we think about driving. With advancements in battery technology, increasing government incentives, and growing awareness about climate change, electric vehicles are poised to become the primary mode of transportation for future generations. At Electric Cars, we are excited to be a part of this transformation.
                    </p>

                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                      Whether you're a car enthusiast looking to stay ahead of the curve or someone considering making the switch to an EV, our platform is designed to provide a comprehensive guide for every stage of your journey. From new car reviews to expert insights into the latest technological developments, we aim to be your go-to source for all things electric cars.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                      {images.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="relative h-64 rounded-lg overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={`Electric Car ${index + 1}`}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-white">What We Offer</h2>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
                      <li>Electric Car Reviews – We provide detailed, unbiased reviews of the latest electric vehicles on the market. Whether you're looking for performance specs, range comparisons, or driving experiences, our in-depth reviews give you all the information you need to make an informed decision.</li>
                      <li>News and Trends – The electric car industry is evolving rapidly. Stay up-to-date with the latest developments in electric vehicle technology, news about major car manufacturers, and government policies that impact the EV market. From new vehicle releases to cutting-edge battery technology, we cover the full spectrum.</li>
                      <li>Buying Guides – Not sure which electric car is right for you? Our expert buying guides break down factors such as price, range, charging infrastructure, and performance, helping you choose the EV that best suits your needs.</li>
                      <li>Sustainability and Impact – Electric vehicles play a crucial role in reducing carbon emissions and combating climate change. Our site provides resources on the environmental benefits of EVs, including how they help reduce our reliance on fossil fuels and create a cleaner, greener future.</li>
                      <li>EV Technology – Dive deep into the technology that powers electric vehicles. From the basics of battery technology to advancements in autonomous driving and smart car features, we explore the exciting tech behind modern electric cars.</li>
                    </ul>

                    <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Electric Cars?</h2>
                    <p className="text-gray-300 mb-8">
                      Our platform isn’t just about the vehicles; it’s about the community we build. Electric Cars brings together enthusiasts, potential buyers, and industry experts who share a common goal: to make electric vehicles mainstream. Whether you’re interested in learning about EVs for the first time or you’re a seasoned electric car owner, our content is tailored to your interests.
                    </p>

                    <p className="text-gray-300 mb-8">
                      We understand that making the switch to an electric vehicle can feel overwhelming, and that’s why we’re here to guide you every step of the way. We provide you with reliable, accurate, and engaging content to ensure you make the best decisions about your electric car journey.
                    </p>

                    <h2 className="text-3xl font-bold mb-4 text-white">Join the Electric Car Movement</h2>
                    <p className="text-gray-300 mb-8">
                      At Electric Cars, we believe in the power of change — change for the environment, for our cities, and for the future of mobility. We’re here to inform, inspire, and help you navigate the exciting world of electric vehicles. As we look toward the future, we’re committed to being your trusted resource for everything related to electric cars.
                    </p>

                    <p className="text-gray-300 mb-8">
                      Thank you for visiting Electric Cars, and we hope you enjoy exploring our content. Together, let’s drive towards a cleaner, more sustainable future.
                    </p>

                    <div className="text-right text-gray-400 italic">
                      Made by Aakash
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </PageTransition>
      );
    }
