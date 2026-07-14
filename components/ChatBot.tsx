"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Step = "name" | "email" | "phone" | "query" | "chatting";

interface Message {
  text: string;
  isBot: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("name");
  const [hasSubmittedLead, setHasSubmittedLead] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! 👋 I'm here to help you get connected with our team.", isBot: true },
    { text: "First, what's your name?", isBot: true }
  ]);
  
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const submitLead = async (finalData: typeof formData) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            access_key: "3bf0b3cf-d842-42eb-9543-05030f042a6c",
            name: finalData.name,
            company: "Chatbot Lead",
            email: finalData.email,
            phone: finalData.phone,
            message: finalData.message,
            subject: "New ChatBot Lead - Photonexes"
        })
      });
      console.log("Email Status:", response.status);
    } catch (error) {
      console.error("Failed to send lead");
    }
  };

  const getBotReply = (text: string) => {
    const lower = text.toLowerCase();
    
    if (lower.includes("about") || lower.includes("who")) {
      return "Photonexes is a premier IT software company in Zirakpur, Punjab. With over 5+ years of experience, we specialize in enterprise software, web development, mobile apps, and AI solutions.";
    } 
    if (lower.includes("career") || lower.includes("job") || lower.includes("internship") || lower.includes("hiring")) {
      return "We are always looking for talented individuals! We offer great career opportunities and professional internships in Zirakpur. Please check our Careers page to apply.";
    }
    if (lower.includes("service") || lower.includes("web") || lower.includes("app") || lower.includes("software")) {
      return "We offer comprehensive IT services including Custom Software Development, Mobile Apps, Cloud Migration, AI Solutions, and Managed IT Support tailored to your business needs.";
    }
    if (lower.includes("contact") || lower.includes("phone") || lower.includes("address") || lower.includes("location") || lower.includes("where")) {
      return "We are located in Zirakpur, Punjab. You can reach us directly at +91-7006291591 or through our Contact page!";
    }
    if (lower.includes("price") || lower.includes("cost") || lower.includes("quote")) {
      return "Our pricing depends on the scope of your project. Since I've already notified our team, an expert will contact you shortly to provide a customized quote!";
    }
    
    // Default fallback
    return "Thanks for sharing! Photonexes provides enterprise IT solutions to help businesses grow. I've sent your details to our human team, and they will contact you shortly to assist you further. Is there anything else you'd like to know?";
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const val = inputMessage.trim();
    if (!val) return;

    // Add user message to chat
    setMessages(prev => [...prev, { text: val, isBot: false }]);
    setInputMessage("");

    // Process step
    if (step === "name") {
      setFormData(prev => ({ ...prev, name: val }));
      setStep("email");
      setTimeout(() => {
        setMessages(prev => [...prev, { text: `Nice to meet you, ${val}! What's your email address?`, isBot: true }]);
      }, 600);
    } 
    else if (step === "email") {
      if (!validateEmail(val)) {
        setTimeout(() => {
          setMessages(prev => [...prev, { text: "That doesn't look like a valid email. Could you double-check it?", isBot: true }]);
        }, 600);
        return;
      }
      setFormData(prev => ({ ...prev, email: val }));
      setStep("phone");
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Got it! What's the best phone number to reach you at?", isBot: true }]);
      }, 600);
    } 
    else if (step === "phone") {
      setFormData(prev => ({ ...prev, phone: val }));
      setStep("query");
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks. Lastly, how can we help you today?", isBot: true }]);
      }, 600);
    } 
    else if (step === "query") {
      const finalData = { ...formData, message: val };
      setFormData(finalData);
      setStep("chatting"); // Enter open-ended QA mode
      
      // Send the email in the background silently
      submitLead(finalData);

      // Reply based on keywords
      setTimeout(() => {
        setMessages(prev => [...prev, { text: getBotReply(val), isBot: true }]);
      }, 800);
    }
    else if (step === "chatting") {
      // In chatting mode, just keep answering based on keywords
      setTimeout(() => {
        setMessages(prev => [...prev, { text: getBotReply(val), isBot: true }]);
      }, 800);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[320px] sm:w-[350px] h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2dd4bf] to-[#0ea5e9] p-4 flex items-center justify-between text-white shadow-md z-10 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[1rem]">Photonexes Support</h3>
                  <p className="text-teal-50 text-xs">We typically reply instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-4">
              {messages.map((msg, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={index} 
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div 
                    className={`max-w-[85%] p-3.5 rounded-2xl text-[0.95rem] leading-relaxed shadow-sm
                      ${msg.isBot 
                        ? "bg-white text-slate-700 border border-slate-100 rounded-tl-sm" 
                        : "bg-gradient-to-br from-[#2dd4bf] to-[#0ea5e9] text-white rounded-tr-sm"
                      }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 relative z-10">
              <input 
                type={step === "email" ? "email" : step === "phone" ? "tel" : "text"} 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-slate-100/80 px-4 py-3 rounded-full text-[0.95rem] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf]/50 placeholder:text-slate-400"
              />
              <button 
                type="submit"
                disabled={!inputMessage.trim()}
                className="w-12 h-12 bg-[#2dd4bf] text-white rounded-full flex items-center justify-center hover:bg-[#14b8a6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-teal-500/20 shrink-0"
                aria-label="Send Message"
              >
                <Send size={18} className="ml-[-2px]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-[#2dd4bf] to-[#0ea5e9] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(45,212,191,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(45,212,191,0.6)] transition-shadow relative z-[100]"
        aria-label="Toggle Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
