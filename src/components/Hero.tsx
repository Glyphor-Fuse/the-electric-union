import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 pointer-events-none"
      >
        <source src="/videos/hero-stage.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-4">
            Live Music • Austin, TX
          </h2>
          <h1 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter mb-8 leading-[0.9]">
            THE ELECTRIC<br /><span className="text-outline-white">UNION</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
             Experience the raw energy of Austin's premier multi-stage complex. 
             Where sound meets structure in a symphony of light.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full text-base font-bold h-14 px-8">
              GET TICKETS
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 border-white/20 hover:bg-white/10 text-white">
              VIEW LINEUP
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-white/50 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
