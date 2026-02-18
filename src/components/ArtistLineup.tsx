import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const ARTISTS = [
  {
    quote: "October 14 • Indoor Stage",
    name: "Neon Pulse",
    title: "Synthwave / Electronic",
    image: "/images/artist-dj.png"
  },
  {
    quote: "October 15 • Indoor Stage",
    name: "Cyber Haze",
    title: "Industrial Techno",
    image: "/images/artist-rock.png"
  },
  {
    quote: "October 16 • Outdoor Amp",
    name: "Lunar Tides",
    title: "Dream Pop",
    image: "/images/artist-indie.png"
  },
  {
    quote: "October 18 • Indoor Stage",
    name: "Velvet Void",
    title: "Alternative Rock",
    image: "/images/venue-outdoor.png"
  },
  {
    quote: "October 20 • Outdoor Amp",
    name: "Solar Flares",
    title: "Psych Rock",
    image: "/images/crowd-cheering.png"
  },
];

export function ArtistLineup() {
  return (
    <section className="py-20 bg-muted/30 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl font-display font-bold text-white tracking-wide">
          FEATURED ARTISTS
        </h2>
      </div>
      <InfiniteMovingCards
        items={ARTISTS}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

export default ArtistLineup;
