import { Link, useLocation } from "wouter";
import { 
  Battery, 
  Signal, 
  Wifi, 
  CheckCircle2, 
  ShieldCheck, 
  Download,
  Info
} from "lucide-react";
import logoImg from "@assets/Pink_Black_and_White_Pixelated_Pixel_Dust_Marketing_Agency_Log_1766923995371.png";
import xLogo from "@assets/X_logo_1766920324567.png";
import linkedInLogo from "@assets/LinkedIn_logo_1766920324568.png";
import instagramLogo from "@assets/1_1766923167507.png";
import redditLogo from "@assets/2_1766923167508.png";
import facebookLogo from "@assets/3_1766923167509.png";
import planeImage from "@assets/download_(24)_1766925695539.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useLocation();
  const [openStep, setOpenStep] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto w-full backdrop-blur-sm bg-[#050511]/50 md:bg-transparent">
        <div className="flex items-center gap-8 hidden md:flex">
          <button onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">How It Works</button>
          <button onClick={() => scrollToSection('what-we-review')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">What We Review</button>
          <button onClick={() => scrollToSection('sample-report')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Sample Report</button>
          <button onClick={() => scrollToSection('reviews')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Client Reviews</button>
        </div>
        
        {/* Mobile Menu Placeholder (Simplified) */}
        <div className="md:hidden text-gray-300">Menu</div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoImg} alt="VisaVet Logo" className="w-10 h-10 object-contain rounded-md" />
          <span className="font-bold text-lg tracking-tight hidden md:block">VisaVet</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-900/20">
            Request Review
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-32 pb-24 relative z-10 px-4 w-full min-h-[90vh]">
        {/* Hero Text */}
        <div className="text-center max-w-4xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 z-30 relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            See What Your<br />
            Online Presence Signals<br />
            for your <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">VISA.</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
            A professional review of your public online presence
            to understand how it may be viewed during your US visa screening
            and identify any signals that could raise questions.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
              Request Review
            </button>
            <button className="glass text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 transition-colors">
              View Sample
            </button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div id="sample-report" className="relative mt-4 z-20 w-[300px] md:w-[340px] animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200">
          {/* Phone Frame */}
          <div className="bg-[#0a0a16] rounded-[3.5rem] p-3 border-[6px] border-[#2a2a40] shadow-2xl relative overflow-hidden ring-1 ring-white/10">
            {/* Screen */}
            <div className="bg-[#0f172a] h-[640px] rounded-[2.8rem] relative overflow-hidden flex flex-col">
              
              {/* Internal Screen Background - Deep Blue Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-[#0f172a] to-[#0f172a] z-0"></div>
              
              {/* Status Bar */}
              <div className="relative z-10 px-6 pt-5 flex justify-between items-center text-white text-xs font-medium">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <Signal size={14} />
                  <Wifi size={14} />
                  <Battery size={14} />
                </div>
              </div>

              {/* App Content */}
              <div className="relative z-10 p-5 mt-4 space-y-4 flex flex-col h-full">
                
                {/* Header Card */}
                <div className="bg-blue-600 rounded-2xl p-4 text-white shadow-lg shadow-blue-900/20 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-3 opacity-10">
                     <ShieldCheck size={64} />
                   </div>
                   <div className="relative z-10">
                     <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold mb-1">Status: Completed</div>
                     <div className="font-mono text-sm opacity-80 mb-2">Applicant ID: VV-1047</div>
                     <div className="text-xs text-blue-100">Review Period: Last 5 years</div>
                   </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-2 gap-3">
                   {/* Coverage Metric */}
                   <div className="glass-card rounded-2xl p-3 flex flex-col justify-between border border-white/5">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Public Content</div>
                      <div className="mt-2">
                        <div className="text-2xl font-bold text-white">5</div>
                        <div className="text-[10px] text-blue-300">Platforms found</div>
                      </div>
                      <div className="mt-2 flex gap-1">
                        <div className="h-1 flex-1 bg-green-500 rounded-full"></div>
                        <div className="h-1 flex-1 bg-green-500 rounded-full"></div>
                        <div className="h-1 flex-1 bg-green-500 rounded-full"></div>
                      </div>
                   </div>

                   {/* Risk Metric */}
                   <div className="glass-card rounded-2xl p-3 flex flex-col justify-between border border-white/5">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Risk Signals</div>
                      <div className="mt-2">
                        <div className="text-2xl font-bold text-green-400">Low</div>
                        <div className="text-[10px] text-gray-400">Observed</div>
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-[10px] text-green-400">
                        <CheckCircle2 size={10} />
                        <span>Clear</span>
                      </div>
                   </div>
                </div>

                {/* Profile Consistency Card */}
                <div className="glass-card rounded-2xl p-4 border border-white/5">
                   <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xs font-semibold text-gray-200">Profile Consistency</h3>
                      <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">94% Match</span>
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>Biographical Data</span>
                        <div className="flex gap-0.5">
                           {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-1 bg-blue-500 rounded-sm"></div>)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>Employment History</span>
                         <div className="flex gap-0.5">
                           {[1,2,3,4].map(i => <div key={i} className="w-4 h-1 bg-blue-500 rounded-sm"></div>)}
                           <div className="w-4 h-1 bg-gray-700 rounded-sm"></div>
                        </div>
                      </div>
                   </div>
                </div>

                 {/* Platforms Strip */}
                <div className="glass-card rounded-2xl p-3 border border-white/5 flex items-center justify-between">
                   <div className="text-[10px] text-gray-400 font-medium rotate-180" style={{writingMode: 'vertical-rl'}}>INCLUDED</div>
                   <div className="h-8 w-[1px] bg-white/10 mx-1"></div>
                   <div className="flex-1 flex justify-around items-center px-1">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center overflow-hidden bg-black p-0.5">
                        <img src={xLogo} alt="X" className="w-full h-full object-contain invert" />
                      </div>
                      <div className="w-6 h-6 rounded-md flex items-center justify-center overflow-hidden">
                        <img src={instagramLogo} alt="Instagram" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-6 h-6 rounded-sm flex items-center justify-center overflow-hidden">
                        <img src={linkedInLogo} alt="LinkedIn" className="w-full h-full object-contain" />
                      </div>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center overflow-hidden">
                        <img src={facebookLogo} alt="Facebook" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center overflow-hidden">
                         <img src={redditLogo} alt="Reddit" className="w-full h-full object-cover transform scale-110" />
                      </div>
                   </div>
                </div>

                {/* Download Button */}
                <div className="mt-auto pb-8">
                  <button className="w-full bg-white text-black py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg">
                    <Download size={16} />
                    Download Full Review (PDF)
                  </button>
                </div>

              </div>

              {/* Bottom Nav on Phone */}
              <div className="absolute bottom-2 left-0 right-0 px-8 flex justify-center items-center text-white/50 pb-2">
                 <div className="w-32 h-1 bg-white/20 rounded-full"></div>
              </div>

            </div>
             {/* Notch */}
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-[#0a0a16] rounded-b-2xl z-20 flex items-end justify-center pb-1">
                <div className="w-16 h-1 bg-gray-800/50 rounded-full"></div>
             </div>
          </div>
        </div>

        {/* Giant Background Text */}
        <div className="fixed bottom-[-6vw] left-0 right-0 text-center pointer-events-none z-0 select-none w-full flex justify-center">
          <h1 className="text-[26vw] font-bold text-white leading-none tracking-tighter opacity-100 whitespace-nowrap">
            VisaVet
          </h1>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-[#050511] relative z-20 py-24 md:py-32 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[4/5] w-full max-w-md mx-auto md:mx-0">
               <img 
                 src={planeImage} 
                 alt="Plane flying between buildings" 
                 className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050511] via-transparent to-transparent opacity-30"></div>
            </div>

            {/* Right Column: Text Steps */}
            <div className="relative">
              {/* Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 space-y-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                    How VisaVet Works
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base">
                    A structured, context-aware review — not a scan.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Step 1 */}
                  <Dialog open={openStep === 1} onOpenChange={(open) => setOpenStep(open ? 1 : null)}>
                    <DialogTrigger asChild>
                      <div className="group cursor-pointer rounded-xl p-6 transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] border border-transparent hover:border-white/10">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Tell Us Your Context</h3>
                          <p className="text-gray-400 text-base leading-relaxed max-w-sm group-hover:text-gray-300 transition-colors">
                            You share your background, visa type, and public profiles — the same way an officer sees your case.
                          </p>
                          <div className="pt-2 flex items-center text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                             <Info size={14} className="mr-2" /> Learn more
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="bg-white text-black border-none max-w-lg p-8 rounded-2xl">
                      <div className="space-y-6">
                         <h3 className="text-2xl font-bold">Tell Us Your Context</h3>
                         
                         <div className="space-y-4">
                            <div>
                              <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600 mb-2">Why this matters</h4>
                              <p className="text-gray-700 leading-relaxed">Visa screening is contextual. The same online activity can be interpreted very differently depending on visa category, travel history, and stated intent.</p>
                            </div>
                            
                            <div>
                              <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600 mb-2">What you provide</h4>
                              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>Visa category you’re applying for</li>
                                <li>High-level purpose of travel</li>
                                <li>Public social media platforms used</li>
                                <li>Optional context you would otherwise explain in an interview</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600 mb-2">How this is used</h4>
                              <p className="text-gray-700 leading-relaxed">This information frames how your public digital presence is interpreted — not judged in isolation.</p>
                            </div>
                         </div>
                         
                         <div className="pt-4 flex justify-end">
                            <button onClick={() => setOpenStep(null)} className="text-sm font-semibold text-gray-500 hover:text-black transition-colors">Close</button>
                         </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Step 2 */}
                  <Dialog open={openStep === 2} onOpenChange={(open) => setOpenStep(open ? 2 : null)}>
                    <DialogTrigger asChild>
                      <div className="group cursor-pointer rounded-xl p-6 transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] border border-transparent hover:border-white/10">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Structured Digital Review</h3>
                          <p className="text-gray-400 text-base leading-relaxed max-w-sm group-hover:text-gray-300 transition-colors">
                            Your public online presence is reviewed the way modern screening systems interpret it.
                          </p>
                           <div className="pt-2 flex items-center text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                             <Info size={14} className="mr-2" /> Learn more
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="bg-white text-black border-none max-w-lg p-8 rounded-2xl">
                       <div className="space-y-6">
                         <h3 className="text-2xl font-bold">Structured Digital Review</h3>
                         
                         <div className="space-y-4">
                            <div>
                              <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600 mb-2">How the review is done</h4>
                              <p className="text-gray-700 leading-relaxed">We combine automated pattern analysis with human evaluation to review your publicly visible digital footprint.</p>
                            </div>
                            
                            <div>
                              <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600 mb-2">What is examined</h4>
                              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>Consistency across platforms</li>
                                <li>Public biographical signals</li>
                                <li>Timeline alignment</li>
                                <li>Language tone and associations</li>
                                <li>Public visibility and discoverability</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600 mb-2">What this is not</h4>
                              <p className="text-gray-700 leading-relaxed">This is not keyword hunting, sentiment scoring, or automated flagging. Context and interpretation matter.</p>
                            </div>
                         </div>
                         
                         <div className="pt-4 flex justify-end">
                            <button onClick={() => setOpenStep(null)} className="text-sm font-semibold text-gray-500 hover:text-black transition-colors">Close</button>
                         </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Step 3 */}
                  <Dialog open={openStep === 3} onOpenChange={(open) => setOpenStep(open ? 3 : null)}>
                    <DialogTrigger asChild>
                      <div className="group cursor-pointer rounded-xl p-6 transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] border border-transparent hover:border-white/10">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Receive a Human-Written Report</h3>
                          <p className="text-gray-400 text-base leading-relaxed max-w-sm group-hover:text-gray-300 transition-colors">
                            You receive a written report — clear, calm, and actionable.
                          </p>
                           <div className="pt-2 flex items-center text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                             <Info size={14} className="mr-2" /> Learn more
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="bg-white text-black border-none max-w-lg p-8 rounded-2xl">
                       <div className="space-y-6">
                         <h3 className="text-2xl font-bold">Receive a Human-Written Report</h3>
                         
                         <div className="space-y-4">
                            <div>
                              <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600 mb-2">What you receive</h4>
                              <p className="text-gray-700 leading-relaxed mb-2">A structured report outlining:</p>
                              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>Observations (what is visible)</li>
                                <li>Consistency checks (what aligns or conflicts)</li>
                                <li>Advisory notes (what to be mindful of)</li>
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600 mb-2">How it helps</h4>
                              <p className="text-gray-700 leading-relaxed">The report helps you understand how your public presence may appear during visa screening — before it’s evaluated officially.</p>
                            </div>

                            <div>
                              <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600 mb-2">What we don’t do</h4>
                              <p className="text-gray-700 leading-relaxed">We don’t predict outcomes, assign scores, or promise approvals.</p>
                            </div>
                         </div>
                         
                         <div className="pt-4 flex justify-end">
                            <button onClick={() => setOpenStep(null)} className="text-sm font-semibold text-gray-500 hover:text-black transition-colors">Close</button>
                         </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Review Section */}
      <section id="what-we-review" className="relative z-20 py-32 w-full bg-gradient-to-b from-[#050511] via-[#0a0f2e] to-[#050511]">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-20 text-center md:text-left">
             What We Review
           </h2>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Public social media posts", desc: "We review publicly visible posts across major platforms." },
                { title: "Profile biographies", desc: "Bios are checked for consistency and clarity." },
                { title: "Usernames and identifiers", desc: "We look at how identifiers appear across platforms." },
                { title: "Employment references", desc: "Public mentions of work history are reviewed." },
                { title: "Education references", desc: "Publicly stated education details are checked." },
                { title: "Location indicators", desc: "Public location signals are reviewed for consistency." },
                { title: "Public comments", desc: "Visible interactions are included in the review." },
                { title: "Shared links and content", desc: "Frequently shared content is reviewed at a high level." },
                { title: "Group associations", desc: "Public group affiliations are considered." },
                { title: "Account visibility", desc: "We confirm what information is publicly accessible." },
                { title: "Timeline consistency", desc: "Public timelines are reviewed for alignment." },
                { title: "Language tone", desc: "General tone is reviewed contextually." },
                { title: "Public profile images", desc: "Profile images are reviewed as part of identity context." },
                { title: "Activity frequency", desc: "Activity patterns are observed at a high level." },
                { title: "Search visibility", desc: "We check what appears when names are searched publicly." },
                { title: "General footprint", desc: "A summary view of overall public presence." },
              ].map((item, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-shadow duration-500">
                  <h3 className="text-black font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
         </div>
      </section>

      {/* Client Reviews Section */}
      <section id="reviews" className="relative z-20 py-32 w-full bg-[#050511] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-center md:text-left">
             Client Reviews
           </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
           <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-8 px-8">
              {[
                { quote: "The process felt thoughtful and measured. The report didn’t rush to conclusions, which made it easier to trust.", role: "F-1 Applicant" },
                { quote: "What stood out was the context. It wasn’t just about posts, but how everything fits together.", role: "H-1B Applicant" },
                { quote: "This felt closer to an advisory service than a tool. That mattered to us.", role: "Parent of Graduate Student" },
                { quote: "The process felt thoughtful and measured. The report didn’t rush to conclusions, which made it easier to trust.", role: "F-1 Applicant" },
                { quote: "What stood out was the context. It wasn’t just about posts, but how everything fits together.", role: "H-1B Applicant" },
                { quote: "This felt closer to an advisory service than a tool. That mattered to us.", role: "Parent of Graduate Student" },
              ].map((review, i) => (
                <div key={i} className="bg-blue-600 border border-blue-500/30 shadow-[0_0_20px_rgba(255,255,255,0.1)] rounded-xl p-8 w-[400px] flex-shrink-0">
                   <p className="text-white text-sm leading-relaxed mb-6 font-medium">"{review.quote}"</p>
                   <div className="text-blue-100 text-xs font-bold uppercase tracking-wider">{review.role}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}