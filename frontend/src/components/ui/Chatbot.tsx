'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site.config';
import { pricingConfig } from '@/config/pricing.config';
import { servicesConfig } from '@/config/services.config';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: { label: string; action: string }[];
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      type: 'bot',
      text: `Hi! I'm the ${siteConfig.companyName} Virtual Assistant. How can I help you today?`,
      options: [
        { label: 'View Services', action: 'services' },
        { label: 'View Pricing', action: 'pricing' },
        { label: 'Company Info', action: 'company' },
        { label: 'Contact Human', action: 'contact' },
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleAction = (action: string) => {
    let responseText = '';
    let nextOptions: { label: string; action: string }[] | undefined = undefined;

    switch (action) {
      case 'services':
        responseText = 'Here are our core services. Which one would you like to know about?';
        nextOptions = Object.values(pricingConfig.services).map((service) => ({
          label: service.name,
          action: `service_${service.name}`,
        }));
        break;
      
      case 'pricing':
        responseText = 'We have packages for all business sizes. Which category?';
        nextOptions = Object.values(pricingConfig.services).map((service) => ({
          label: service.name + ' Pricing',
          action: `price_${service.name}`,
        }));
        break;

      case 'company':
        responseText = `${siteConfig.companyName} is located at ${siteConfig.contact.location}. You can reach us at ${siteConfig.contact.email} or call ${siteConfig.contact.phone}.`;
        break;

      case 'contact':
        responseText = 'You can reach out to us directly! Would you like to chat on WhatsApp or send an email?';
        nextOptions = [
          { label: 'WhatsApp', action: 'whatsapp' },
          { label: 'Email', action: 'email' },
        ];
        break;

      case 'whatsapp': {
        let phone = siteConfig.contact.whatsapp.replace(/\D/g, '');
        if (phone.length === 10) phone = '91' + phone;
        window.open(`https://wa.me/${phone}`, '_blank');
        responseText = 'Opening WhatsApp...';
        break;
      }

      case 'email':
        window.open(`mailto:${siteConfig.contact.email}`, '_blank');
        responseText = 'Opening your email client...';
        break;

      default:
        // Handle specific service or pricing lookups
        if (action.startsWith('service_')) {
          const sName = action.replace('service_', '');
          const serviceObj = Object.values(servicesConfig).find(s => s.title === sName);
          responseText = serviceObj ? `${serviceObj.title}: ${serviceObj.description}` : `We offer professional ${sName} solutions tailored to your needs.`;
        } else if (action.startsWith('price_')) {
          const pName = action.replace('price_', '');
          const pData = Object.values(pricingConfig.services).find(s => s.name === pName);
          if (pData) {
            responseText = `Pricing for ${pName}:\n` + pData.tiers.map(t => `- ${t.name}: ${'isStartingPrice' in t && t.isStartingPrice ? 'Starting at' : ''} ₹${t.price.toLocaleString()}`).join('\n');
          } else {
            responseText = 'Please contact us for custom pricing!';
          }
        } else {
          responseText = "I'm a simple bot. Please select an option or contact a human!";
          nextOptions = [
            { label: 'Start Over', action: 'init' },
            { label: 'Contact Human', action: 'contact' },
          ];
        }
    }

    if (action === 'init') {
      setMessages([messages[0]]);
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type: 'bot',
        text: responseText,
        options: nextOptions,
      },
    ]);
  };

  const handleUserMessage = (text: string, action?: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), type: 'user', text },
    ]);
    
    setTimeout(() => {
      if (action) {
        handleAction(action);
      } else {
        // Simple keyword matching for typed text
        const lower = text.toLowerCase();
        if (lower.includes('price') || lower.includes('cost') || lower.includes('package')) {
          handleAction('pricing');
        } else if (lower.includes('service') || lower.includes('what do you do')) {
          handleAction('services');
        } else if (lower.includes('contact') || lower.includes('hello') || lower.includes('hi')) {
          handleAction('contact');
        } else {
          handleAction('unknown');
        }
      }
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const msg = input.trim();
    setInput('');
    handleUserMessage(msg);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-2xl hover:scale-105 transition-transform print:hidden"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-background border border-border/50 shadow-2xl rounded-2xl z-50 flex flex-col overflow-hidden print:hidden glass animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-primary/10 p-4 flex items-center justify-between border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-full text-primary-foreground">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">CWD Assistant</h3>
                <p className="text-xs text-foreground/60">Typically replies instantly</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-foreground/50 hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-wrap ${
                    msg.type === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tr-sm'
                      : 'bg-secondary/50 text-foreground border border-border/50 rounded-tl-sm'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
                
                {/* Options Chips */}
                {msg.options && (
                  <div className="flex flex-wrap gap-2 mt-2 max-w-[90%]">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleUserMessage(opt.label, opt.action)}
                        className="text-xs px-3 py-1.5 bg-background border border-primary/20 hover:bg-primary/10 text-primary rounded-full transition-colors text-left"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 bg-background border-t border-border/50 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-secondary/30 border border-border/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button type="submit" size="icon" className="rounded-full shrink-0 h-10 w-10">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
