import { Link } from "wouter";
import { ArrowUpRight, Battery, Signal, Wifi, X, TrendingUp, TrendingDown } from "lucide-react";
import logoImg from "@assets/generated_images/minimalist_white_circular_logo_with_cross.png";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-8">
          <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Investing ▾</Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Cash</Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Planning</Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <img src={logoImg} alt="Swapify Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain invert" />
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" className="text-white hover:text-gray-200 transition-colors text-sm font-medium">Sign In</Link>
          <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-900/20">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-0 relative z-10 px-4 w-full">
        
        {/* Hero Text */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 z-30 relative">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Built, invest,<br />
            adjust, enjoy.
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-8">
            Swapify is a comprehensive platform that enables users to 
            effortlessly buy, trade, create, and secure their crypto assets.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors">
              Install Now
            </button>
            <button className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <X size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative mt-8 z-20 w-[300px] md:w-[340px] animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200">
          {/* Phone Frame */}
          <div className="bg-[#0a0a16] rounded-[3rem] p-3 border-[6px] border-[#2a2a40] shadow-2xl relative overflow-hidden ring-1 ring-white/10">
            {/* Screen */}
            <div className="bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#000] h-[600px] rounded-[2.2rem] relative overflow-hidden flex flex-col">
              
              {/* Internal Screen Background Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,92,246,0.3),transparent_70%)] pointer-events-none"></div>

              {/* Status Bar */}
              <div className="relative z-10 px-6 pt-5 flex justify-between items-center text-white text-xs font-medium">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <Signal size={14} />
                  <Wifi size={14} />
                  <Battery size={14} />
                </div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 p-5 mt-12 space-y-4">
                
                {/* Ethereum Card */}
                <div className="glass-card rounded-2xl p-4 text-white relative overflow-hidden transform transition-transform hover:scale-[1.02] border border-white/10 shadow-lg shadow-black/20">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10">
                        <svg viewBox="0 0 32 32" className="w-5 h-5 text-white fill-current">
                           <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Ethereum</div>
                        <div className="text-xs text-white/60">ETH</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">$1,467.38</div>
                      <div className="text-xs text-green-400 flex items-center justify-end gap-0.5">
                         +7% <TrendingUp size={10} />
                      </div>
                    </div>
                  </div>
                  {/* Fake Chart Line */}
                  <svg className="w-full h-8 stroke-white/60 fill-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 C 20 15, 40 5, 50 10 S 80 15, 100 5" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* BinanceUSD Card */}
                <div className="glass-card rounded-2xl p-4 text-white relative overflow-hidden transform translate-y-2 border border-white/10 shadow-lg shadow-black/20">
                   <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center backdrop-blur-md border border-yellow-500/20">
                        <svg viewBox="0 0 32 32" className="w-5 h-5 text-yellow-400 fill-current">
                           <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.884-17.59l-2.06 2.06 5.944 5.944 5.944-5.944-2.06-2.06-3.884 3.884-3.884-3.884zm0-3.884l3.884-3.884 3.884 3.884 2.06-2.06L16 2.522l-5.944 5.944 2.06 2.06z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">BinanceUSD</div>
                        <div className="text-xs text-white/60">BUSD</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">$1.65</div>
                      <div className="text-xs text-red-400 flex items-center justify-end gap-0.5">
                         -0.1% <TrendingDown size={10} />
                      </div>
                    </div>
                  </div>
                  {/* Fake Chart Line */}
                  <svg className="w-full h-8 stroke-white/40 fill-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 C 30 5, 60 15, 100 12" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

              </div>

              {/* Bottom Nav on Phone */}
              <div className="absolute bottom-4 left-0 right-0 px-8 flex justify-center items-center text-white/50">
                 <div className="w-32 h-1 bg-white/20 rounded-full"></div>
              </div>

            </div>
             {/* Notch */}
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-[#0a0a16] rounded-b-2xl z-20 flex items-end justify-center pb-1">
                <div className="w-16 h-1 bg-gray-800/50 rounded-full"></div>
             </div>
          </div>
        </div>

      </main>

      {/* Giant Background Text */}
      <div className="fixed bottom-[-6vw] left-0 right-0 text-center pointer-events-none z-0 select-none w-full flex justify-center">
         <h1 className="text-[26vw] font-bold text-white leading-none tracking-tighter opacity-100 whitespace-nowrap">
           Swapify
         </h1>
      </div>

    </div>
  );
}