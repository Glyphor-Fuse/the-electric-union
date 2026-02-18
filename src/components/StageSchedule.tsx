import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Show {
  id: string;
  artist: string;
  date: string;
  time: string;
  price: string;
  image: string;
  genre: string;
}

const INDOOR_SHOWS: Show[] = [
  { id: "1", artist: "Neon Pulse", date: "OCT 14", time: "9:00 PM", price: "$35", genre: "Synthwave", image: "/images/artist-dj.png" },
  { id: "2", artist: "Cyber Haze", date: "OCT 15", time: "10:30 PM", price: "$40", genre: "Techno", image: "/images/artist-rock.png" },
  { id: "3", artist: "Velvet Void", date: "OCT 18", time: "8:00 PM", price: "$30", genre: "Indie Rock", image: "/images/artist-indie.png" },
];

const OUTDOOR_SHOWS: Show[] = [
  { id: "4", artist: "Solar Flares", date: "OCT 14", time: "7:00 PM", price: "$55", genre: "Alt Rock", image: "/images/venue-outdoor.png" },
  { id: "5", artist: "Lunar Tides", date: "OCT 16", time: "6:30 PM", price: "$45", genre: "Dream Pop", image: "/images/crowd-cheering.png" },
];

export function StageSchedule() {
  const [activeStage, setActiveStage] = useState<"indoor" | "outdoor">("indoor");

  return (
    <section className="py-24 bg-background relative" id="calendar">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">LIVE SCHEDULE</h2>
          <p className="text-muted-foreground">Select a stage to view upcoming performances</p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="relative flex bg-muted/50 rounded-full p-1 border border-white/5 backdrop-blur-sm">
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-primary shadow-[0_0_15px_-3px_rgba(69,113,217,0.7)]"
              layoutId="activeTab"
              initial={false}
              animate={{
                left: activeStage === "indoor" ? "4px" : "50%",
                width: "calc(50% - 4px)",
                x: activeStage === "indoor" ? 0 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            <button
              onClick={() => setActiveStage("indoor")}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-wider transition-colors duration-200 w-40 ${
                activeStage === "indoor" ? "text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              INDOOR STAGE
            </button>
            <button
              onClick={() => setActiveStage("outdoor")}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-wider transition-colors duration-200 w-40 ${
                activeStage === "outdoor" ? "text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              OUTDOOR AMP
            </button>
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {(activeStage === "indoor" ? INDOOR_SHOWS : OUTDOOR_SHOWS).map((show) => (
                <div 
                  key={show.id}
                  className="group relative overflow-hidden rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-[0_0_30px_-10px_rgba(69,113,217,0.2)]"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-muted/50 border border-white/10 text-center shrink-0">
                      <span className="text-xs font-bold text-primary uppercase">{show.date.split(' ')[0]}</span>
                      <span className="text-2xl font-display font-bold text-white">{show.date.split(' ')[1]}</span>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {show.genre}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {show.artist}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {show.time}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {activeStage === 'indoor' ? 'Main Hall' : 'The Lawn'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-6 mt-4 sm:mt-0">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Starting at</p>
                      <p className="text-xl font-bold text-white">{show.price}</p>
                    </div>
                    <Button className="w-full sm:w-auto gap-2">
                      <Star className="w-4 h-4" /> Get Tickets
                    </Button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default StageSchedule;
