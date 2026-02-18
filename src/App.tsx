import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { StageSchedule } from "@/components/StageSchedule";
import { ArtistLineup } from "@/components/ArtistLineup";
import { VenueGallery } from "@/components/VenueGallery";
import { MenuTeaser } from "@/components/MenuTeaser";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Navigation />
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
          <Hero />
          <StageSchedule />
          <ArtistLineup />
          <VenueGallery />
          <MenuTeaser />
        </main>
        <Footer />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
