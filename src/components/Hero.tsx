import React from 'react';
import { ArrowRight, Zap, Globe, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartAutomation = () => {
    scrollToSection('contact');
  };

  const handleViewCaseStudies = () => {
    scrollToSection('about');
  };

  return (
    <section id="hero" className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 text-sm text-blue-600 font-medium mb-4">
              <Globe className="h-4 w-4" />
              <span>Vienna • Austria • International</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automate Your Business with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> AI Excellence</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Save time and money with intelligent chatbots and AI workflows. We help businesses automate customer support, appointment booking, FAQ handling, and lead generation with cutting-edge AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleStartAutomation}
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl"
              >
                Start Your Automation Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleViewCaseStudies}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold"
              >
                View Case Studies
              </button>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-green-500" />
                <span>24/7 AI Support</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                <span>Instant Deployment</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-blue-500" />
                <span>English & German</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-2xl">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">AI Assistant Demo</h3>
                <p className="text-blue-100 text-sm">Experience our intelligent automation</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm font-medium">Customer: "What are your business hours?"</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 ml-4">
                  <p className="text-sm">AI: "We're available 24/7! Our Vienna office operates from 9 AM to 6 PM CET, but our AI systems work around the clock to assist you."</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm font-medium">Customer: "Can you book an appointment?"</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 ml-4">
                  <p className="text-sm">AI: "Absolutely! I can schedule a consultation for you. What day works best?"</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-100">Response time:</span>
                  <span className="font-semibold">{'< 2 seconds'}</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              Live Demo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;