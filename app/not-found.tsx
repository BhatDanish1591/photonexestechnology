import Link from "next/link";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-white px-6 py-20 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col text-center lg:text-left mt-10 lg:mt-0">
          <div className="relative inline-block mx-auto lg:mx-0">
            <h1 className="text-[140px] md:text-[180px] font-black leading-none text-[#6b3deb] tracking-tighter">
              404
            </h1>
            {/* Sparkle decorative element */}
            <div className="absolute -top-4 -right-10 text-[#6b3deb] text-4xl">✨</div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e293b] mb-6 mt-2">
            Oops! Page Not Found
          </h2>
          <p className="text-[#64748b] text-lg max-w-[500px] mx-auto lg:mx-0 mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Don't worry, you can go back to homepage or explore more from below.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-8 py-4 bg-[#6b3deb] hover:bg-[#582bcf] text-white rounded-xl font-semibold transition-all shadow-lg shadow-[#6b3deb]/30 w-full sm:w-auto justify-center group"
            >
              <Home size={20} className="group-hover:-translate-y-0.5 transition-transform" />
              Back to Home
            </Link>
            <Link 
              href="/contact" 
              className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 hover:border-[#6b3deb] hover:text-[#6b3deb] text-slate-700 rounded-xl font-semibold transition-all w-full sm:w-auto justify-center group"
            >
              <Phone size={20} className="group-hover:-translate-y-0.5 transition-transform" />
              Contact Us
            </Link>
          </div>


        </div>

        {/* Right Content - Generated Image */}
        <div className="relative flex justify-center items-center mt-8 lg:mt-0">
          <div className="relative w-full max-w-[700px] aspect-square lg:aspect-auto lg:h-[650px] hover:scale-[1.02] transition-transform duration-500">
            <img 
              loading="eager"
              fetchPriority="high"
              src="/404-robot.png" 
              alt="404 Page Not Found Illustration" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
