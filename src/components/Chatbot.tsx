import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant from AutomateVienna. How can I help you learn about our automation services today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('service') || input.includes('what do you do')) {
      return "We offer four main AI automation services: Customer Support Automation, Appointment Booking, FAQ Handling, and Lead Generation. All services work in both English and German. Which service interests you most?";
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('pricing')) {
      return "Our pricing varies based on your specific needs and business size. We offer flexible packages starting from €299/month. Would you like to schedule a free consultation to discuss a custom quote for your business?";
    }
    
    if (input.includes('appointment') || input.includes('booking') || input.includes('schedule')) {
      return "I can help you schedule a free consultation with our team! Our Vienna office is available Monday-Friday 9:00-18:00 CET. What day would work best for you?";
    }
    
    if (input.includes('vienna') || input.includes('austria') || input.includes('location')) {
      return "We're proudly based in Vienna, Austria, at Mariahilfer Straße 123. While we serve international clients, our Austrian roots give us unique insight into both European and global markets. Would you like to visit our office?";
    }
    
    if (input.includes('language') || input.includes('german') || input.includes('english')) {
      return "All our AI systems work seamlessly in both English and German! Our team is also bilingual, so we can support your business whether you're serving local Austrian customers or international clients.";
    }
    
    if (input.includes('how') || input.includes('work') || input.includes('process')) {
      return "Our process is simple: 1) Free consultation to understand your needs, 2) Custom AI solution design, 3) Implementation and testing, 4) Launch and ongoing support. The whole process typically takes 2-4 weeks. Want to get started?";
    }
    
    return "That's a great question! I'd love to connect you with one of our AI automation specialists who can give you detailed information. Would you like to schedule a free 30-minute consultation to discuss your specific needs?";
  };

  const suggestedQuestions = [
    "What services do you offer?",
    "How much does it cost?",
    "Can you schedule an appointment?",
    "Do you support German language?"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 z-50 ${isOpen ? 'hidden' : 'flex'} items-center justify-center group`}
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          1
        </div>
        <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with AI Assistant
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white/20 p-2 rounded-full mr-3">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-blue-100">AutomateVienna</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">Try asking:</p>
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(question)}
                    className="w-full text-left text-sm p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;