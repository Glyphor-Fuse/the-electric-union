import * as React from "react"
import { cn } from "@/lib/utils";


function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
      isScrolled ? "bg-[#0f1015]/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-display font-black text-white tracking-tighter">
          THE ELECTRIC<span className="text-primary">UNION</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="#calendar" className="hover:text-primary transition-colors">Calendar</a>
          <a href="#" className="hover:text-primary transition-colors">Venue</a>
          <a href="#" className="hover:text-primary transition-colors">Private Events</a>
          <a href="#" className="hover:text-primary transition-colors">Info</a>
          <button className="bg-white/10 hover:bg-white text-white hover:text-black px-5 py-2 rounded-full transition-all font-bold text-xs uppercase tracking-wide">
            My Tickets
          </button>
        </div>
      </div>
    </nav>
  )
}

export { Navigation }
