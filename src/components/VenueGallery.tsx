import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconGlassFull, IconMusic, IconBuildingSkyscraper, IconUsers } from "@tabler/icons-react";

export function VenueGallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-6">THE COMPLEX</h2>
          <p className="text-muted-foreground text-lg">
            Three stages. Four bars. Infinite possibilities. 
            Explore the spaces that make The Electric Union a sonic landmark.
          </p>
        </div>
        
        <BentoGrid className="max-w-6xl mx-auto">
          <BentoGridItem
            title="The Main Hall"
            description="Our primary indoor cathedral of sound, featuring a state-of-the-art L-Acoustics K2 system."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-cover bg-center" style={{ backgroundImage: 'url(/images/venue-indoor.png)' }} />}
            className="md:col-span-2"
            icon={<IconMusic className="h-4 w-4 text-neutral-500" />}
          />
          <BentoGridItem
            title="The Lawn"
            description="Open-air amphitheater for nights under the Texas stars."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-cover bg-center" style={{ backgroundImage: 'url(/images/venue-outdoor.png)' }} />}
            className="md:col-span-1"
            icon={<IconBuildingSkyscraper className="h-4 w-4 text-neutral-500" />}
          />
          <BentoGridItem
            title="VIP Lounge"
            description="Exclusive mezzanine access with private bar and viewing decks."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-cover bg-center" style={{ backgroundImage: 'url(/images/bar-cocktail.png)' }} />}
            className="md:col-span-1"
            icon={<IconGlassFull className="h-4 w-4 text-neutral-500" />}
          />
          <BentoGridItem
            title="The Crowd"
            description="Join 5,000+ fans in our high-capacity energetic zones."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-cover bg-center" style={{ backgroundImage: 'url(/images/crowd-cheering.png)' }} />}
            className="md:col-span-2"
            icon={<IconUsers className="h-4 w-4 text-neutral-500" />}
          />
        </BentoGrid>
      </div>
    </section>
  );
}

export default VenueGallery;
