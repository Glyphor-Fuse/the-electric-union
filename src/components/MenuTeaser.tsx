import { WobbleCard } from "@/components/ui/wobble-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function MenuTeaser() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/venue-indoor.png')] bg-cover bg-fixed opacity-5 grayscale" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-display font-bold text-white text-center mb-12">FUEL THE NIGHT</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-indigo-900 min-h-[300px]"
            className="relative"
          >
            <div className="max-w-xs relative z-10">
              <h3 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Signature Cocktails
              </h3>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                Try the "Electric Blue" — our house signature with blue curaçao, gin, and tonic, glowing under the UV lights.
              </p>
              <Button variant="link" className="text-white p-0 mt-4 h-auto hover:text-white/80">
                View Drink Menu <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <img
              src="/images/bar-cocktail.png"
              width={500}
              height={500}
              alt="Cocktail"
              className="absolute -right-4 lg:-right-[10%] grayscale hover:grayscale-0 transition-all duration-500 -bottom-10 object-contain rounded-2xl w-[60%]"
            />
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-slate-800">
            <h3 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Street Eats
            </h3>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Local food trucks on rotation at the Outdoor Amp. Tacos, sliders, and late-night bites.
            </p>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}

export default MenuTeaser;
