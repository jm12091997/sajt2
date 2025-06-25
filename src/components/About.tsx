import React from 'react';
import { MapPin, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "200+", label: "Businesses Automated", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "24/7", label: "AI Support", icon: Award },
    { number: "2019", label: "Founded in Vienna", icon: MapPin }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-2 text-sm text-blue-600 font-medium mb-4">
              <MapPin className="h-4 w-4" />
              <span>Based in Vienna, Austria</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Leading AI Innovation from the Heart of Europe
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in Vienna in 2019, we've grown from a small team of AI enthusiasts to a leading automation agency serving businesses worldwide. Our expertise in both English and German markets allows us to bridge the gap between local Austrian businesses and international enterprises.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that every business, regardless of size, should have access to cutting-edge AI technology. Our mission is to democratize automation by making it accessible, affordable, and incredibly effective.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl text-center border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="inline-flex p-3 rounded-full bg-blue-100 mb-4">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Why Choose AutomateVienna?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We combine European reliability with cutting-edge AI technology to deliver solutions that truly work for your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Bilingual Expertise</h4>
                <p className="text-gray-600">Native German and English support for seamless international operations.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-gray-600">Track record of reducing support costs by 60% and increasing response speed by 10x.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Personal Touch</h4>
                <p className="text-gray-600">Dedicated account managers and 24/7 support from our Vienna headquarters.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;