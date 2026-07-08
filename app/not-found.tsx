

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-white px-6 py-20 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-[800px] w-full mx-auto flex flex-col items-center justify-center relative z-10 text-center">
        
        {/* Centered Content */}
        <div className="flex flex-col items-center mt-10 lg:mt-0">
          <div className="relative inline-block mx-auto">
            <h1 className="text-[140px] md:text-[180px] font-black leading-none text-[#6b3deb] tracking-tighter">
              404
            </h1>
            {/* Sparkle decorative element */}
            <div className="absolute -top-4 -right-10 text-[#6b3deb] text-4xl">✨</div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e293b] mb-6 mt-2">
            Oops! Page Not Found
          </h2>
          <p className="text-[#64748b] text-lg max-w-[500px] mx-auto mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Don&apos;t worry, you can go back to homepage or explore more from below.
          </p>

        </div>

      </div>
    </div>
  );
}
