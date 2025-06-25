import React from 'react';
import { X, Play, MessageCircle, Calendar, HelpCircle, Users } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  serviceType: string;
  description: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, title, serviceType, description }) => {
  if (!isOpen) return null;

  const renderVideoDemo = () => {
    switch (serviceType) {
      case 'customer-support':
        return (
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-8 w-8 text-blue-600 mr-3" />
              <h4 className="text-xl font-bold text-gray-900">Live Customer Support Demo</h4>
            </div>
            
            <div className="space-y-4 bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-800">Hi, I need help with my order #12345</p>
                  <span className="text-xs text-gray-500">Customer - 2:30 PM</span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">I'd be happy to help you with order #12345. Let me check the status for you right away.</p>
                  <span className="text-xs text-blue-200">AI Assistant - 2:30 PM</span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Your order was shipped yesterday and should arrive tomorrow by 5 PM. Tracking number: TR123456789. Would you like me to send you the tracking link?</p>
                  <span className="text-xs text-blue-200">AI Assistant - 2:31 PM</span>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-800">Perfect! Yes, please send the tracking link.</p>
                  <span className="text-xs text-gray-500">Customer - 2:31 PM</span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Here's your tracking link: track.example.com/TR123456789. I've also sent it to your email. Is there anything else I can help you with today?</p>
                  <span className="text-xs text-blue-200">AI Assistant - 2:31 PM</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Response Time: 1.2 seconds
              </span>
            </div>
          </div>
        );
        
      case 'appointment-booking':
        return (
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Calendar className="h-8 w-8 text-green-600 mr-3" />
              <h4 className="text-xl font-bold text-gray-900">Appointment Booking Demo</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-4">Customer Conversation</h5>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm text-gray-800">"I'd like to book a consultation"</p>
                  </div>
                  <div className="bg-green-600 text-white rounded-lg p-3">
                    <p className="text-sm">"I'd be happy to help! What type of consultation do you need?"</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm text-gray-800">"AI automation for my restaurant"</p>
                  </div>
                  <div className="bg-green-600 text-white rounded-lg p-3">
                    <p className="text-sm">"Perfect! I have availability this week. Would Tuesday at 2 PM or Thursday at 10 AM work better?"</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm text-gray-800">"Tuesday at 2 PM sounds great"</p>
                  </div>
                  <div className="bg-green-600 text-white rounded-lg p-3">
                    <p className="text-sm">"Excellent! I've booked you for Tuesday, March 12th at 2:00 PM. You'll receive a confirmation email with the meeting link."</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-4">Calendar Integration</h5>
                <div className="border rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-2">March 2024</div>
                  <div className="grid grid-cols-7 gap-1 text-xs text-center mb-4">
                    <div className="font-medium">S</div>
                    <div className="font-medium">M</div>
                    <div className="font-medium">T</div>
                    <div className="font-medium">W</div>
                    <div className="font-medium">T</div>
                    <div className="font-medium">F</div>
                    <div className="font-medium">S</div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-xs">
                    {[...Array(31)].map((_, i) => (
                      <div key={i} className={`p-1 text-center ${i === 11 ? 'bg-green-600 text-white rounded' : 'text-gray-600'}`}>
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800">✓ Appointment Confirmed</p>
                  <p className="text-xs text-green-600">Tuesday, March 12th - 2:00 PM</p>
                  <p className="text-xs text-green-600">Reminder sent to customer</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'faq-handling':
        return (
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <HelpCircle className="h-8 w-8 text-purple-600 mr-3" />
              <h4 className="text-xl font-bold text-gray-900">FAQ Handling Demo</h4>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-4">Common Questions</h5>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <p className="text-sm font-medium text-gray-800">What are your business hours?</p>
                      <p className="text-xs text-gray-600">Asked 47 times this month</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg border-2 border-purple-200">
                      <p className="text-sm font-medium text-purple-800">How much does AI automation cost?</p>
                      <p className="text-xs text-purple-600">Currently being answered...</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <p className="text-sm font-medium text-gray-800">Do you support German language?</p>
                      <p className="text-xs text-gray-600">Asked 23 times this month</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-4">AI Response</h5>
                  <div className="p-4 bg-purple-600 text-white rounded-lg">
                    <p className="text-sm mb-3">Our AI automation pricing varies based on your specific needs and business size. Here's our typical pricing structure:</p>
                    <ul className="text-sm space-y-1 mb-3">
                      <li>• Starter Package: €299/month</li>
                      <li>• Professional: €599/month</li>
                      <li>• Enterprise: Custom pricing</li>
                    </ul>
                    <p className="text-sm">All packages include setup, training, and 24/7 support. Would you like to schedule a free consultation to discuss your specific requirements?</p>
                  </div>
                  <div className="mt-3 text-xs text-gray-600">
                    ✓ Answer generated from knowledge base
                    <br />
                    ✓ Personalized based on context
                    <br />
                    ✓ Includes call-to-action
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'lead-generation':
        return (
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-orange-600 mr-3" />
              <h4 className="text-xl font-bold text-gray-900">Lead Generation Demo</h4>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-3 text-sm">1. Visitor Engagement</h5>
                <div className="space-y-2">
                  <div className="bg-orange-600 text-white rounded-lg p-2">
                    <p className="text-xs">"Hi! I see you're interested in AI automation. What type of business do you run?"</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2">
                    <p className="text-xs text-gray-800">"I own a dental practice"</p>
                  </div>
                  <div className="bg-orange-600 text-white rounded-lg p-2">
                    <p className="text-xs">"Perfect! AI can really help with appointment scheduling and patient inquiries. How many patients do you see per day?"</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-3 text-sm">2. Qualification</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Business Type:</span>
                    <span className="font-medium">Dental Practice</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Daily Patients:</span>
                    <span className="font-medium">50-100</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Current System:</span>
                    <span className="font-medium">Manual booking</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Pain Point:</span>
                    <span className="font-medium">Phone overload</span>
                  </div>
                  <div className="mt-3 p-2 bg-green-50 rounded">
                    <p className="text-xs font-medium text-green-800">✓ Qualified Lead</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-3 text-sm">3. CRM Integration</h5>
                <div className="space-y-2">
                  <div className="p-2 bg-blue-50 rounded text-xs">
                    <p className="font-medium">Contact Created</p>
                    <p className="text-gray-600">Dr. Sarah Johnson</p>
                    <p className="text-gray-600">sarah@dentalcare.com</p>
                  </div>
                  <div className="p-2 bg-yellow-50 rounded text-xs">
                    <p className="font-medium">Follow-up Scheduled</p>
                    <p className="text-gray-600">Email sequence: Dental AI</p>
                    <p className="text-gray-600">Call reminder: Tomorrow 2PM</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded text-xs">
                    <p className="font-medium">Lead Score: 85/100</p>
                    <p className="text-gray-600">High-value prospect</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium">
                <div className="w-2 h-2 bg-orange-300 rounded-full mr-2 animate-pulse"></div>
                Lead converted to qualified prospect in 3 minutes
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          {renderVideoDemo()}
          
          <div className="mt-8">
            <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Get Started with This Service
            </button>
            <button
              onClick={onClose}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;