import React from 'react';
import { Bot, Mail, MapPin, Globe, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleSocialClick = (platform: string) => {
    // In a real app, these would link to actual social media profiles
    const urls = {
      linkedin: 'https://linkedin.com/company/automatevienna',
      twitter: 'https://twitter.com/automatevienna',
      website: 'https://automatevienna.ai'
    };
    
    // For demo purposes, just show an alert
    alert(`This would link to our ${platform} profile: ${urls[platform as keyof typeof urls] || '#'}`);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">AutomateVienna</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Vienna-based AI automation agency helping businesses save time and money through intelligent chatbots and AI workflows. Serving clients in English and German worldwide.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('linkedin')}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('twitter')}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('website')}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Customer Support Automation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Appointment Booking
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  FAQ Handling
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Lead Generation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <button 
                  onClick={() => handleEmailClick('josip@wienartificialintelligence.com')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  josip@wienartificialintelligence.com
                </button>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-blue-400 mt-0.5" />
                <div className="text-sm">
                  Vienna, Austria
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AutomateVienna. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={() => alert('Privacy Policy would be displayed here')}
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => alert('Terms of Service would be displayed here')}
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => alert('Cookie Policy would be displayed here')}
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;