import React, { useState } from 'react';
import { MessageCircle, Calendar, HelpCircle, Users, ArrowRight, CheckCircle, Play } from 'lucide-react';
import VideoModal from './VideoModal';

const Services = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    serviceType: string;
    description: string;
  } | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = (service: any) => {
    setSelectedVideo({
      title: service.title,
      serviceType: service.serviceType,
      description: service.videoDescription
    });
  };

  const handleScheduleConsultation = () => {
    scrollToSection('contact');
  };

  const services = [
    {
      icon: MessageCircle,
      title: "Customer Support Automation",
      description: "24/7 intelligent customer service that handles inquiries, resolves issues, and escalates complex cases to human agents when needed.",
      features: ["Multi-language support", "Instant responses", "Issue resolution", "Human handoff"],
      color: "from-blue-500 to-blue-600",
      serviceType: "customer-support",
      videoDescription: "Our AI customer support system handles real customer inquiries in real-time, processing questions and providing accurate answers within seconds. The system supports both English and German, making it perfect for Austrian businesses serving international customers. Watch how it seamlessly transfers complex issues to human agents when needed, ensuring customer satisfaction while reducing support costs by up to 60%."
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Seamlessly schedule meetings, consultations, and services with intelligent calendar integration and automated reminders.",
      features: ["Calendar sync", "Automated reminders", "Rescheduling", "Time zone handling"],
      color: "from-green-500 to-green-600",
      serviceType: "appointment-booking",
      videoDescription: "Experience our intelligent appointment booking system that allows customers to easily schedule appointments through natural conversation. The system automatically synchronizes with your calendar, handles time zones, sends reminders, and manages rescheduling requests without any human intervention. Perfect for medical practices, consultancies, and service businesses looking to streamline their booking process."
    },
    {
      icon: HelpCircle,
      title: "FAQ Handling",
      description: "Instantly answer common questions with AI that learns from your knowledge base and improves over time.",
      features: ["Smart knowledge base", "Learning AI", "Quick answers", "Content updates"],
      color: "from-purple-500 to-purple-600",
      serviceType: "faq-handling",
      videoDescription: "Discover how our FAQ automation system transforms your knowledge base into an intelligent assistant. The AI learns from your existing documentation, provides instant accurate answers, and continuously improves its responses based on customer interactions. This system is perfect for reducing support ticket volume while improving customer satisfaction and freeing up your team for more complex tasks."
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Qualify prospects, capture contact information, and nurture leads through intelligent conversations and follow-ups.",
      features: ["Lead qualification", "Contact capture", "Follow-up sequences", "CRM integration"],
      color: "from-orange-500 to-orange-600",
      serviceType: "lead-generation",
      videoDescription: "See our lead generation AI in action as it engages website visitors, qualifies prospects through intelligent questioning, and captures contact information naturally. The system automatically nurtures leads with personalized follow-up sequences and integrates seamlessly with your existing CRM system to maximize conversion rates. Perfect for businesses looking to increase qualified leads and improve sales efficiency."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our AI Automation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to streamline your business operations and enhance customer experience across all touchpoints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => handleLearnMore(service)}
                className="group/btn flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already saving time and money with our AI automation solutions.
          </p>
          <button 
            onClick={handleScheduleConsultation}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>

      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        title={selectedVideo?.title || ''}
        serviceType={selectedVideo?.serviceType || ''}
        description={selectedVideo?.description || ''}
      />
    </section>
  );
};

export default Services;