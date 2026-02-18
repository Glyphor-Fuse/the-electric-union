import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-[#0b0c10] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-display font-black text-white mb-6 tracking-tighter">
              THE ELECTRIC<span className="text-primary">UNION</span>
            </h2>
            <p className="text-muted-foreground max-w-sm mb-8">
              Austin's home for electronic, indie, and alternative soundscapes. 
              Music is the current that connects us.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/10 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/10 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/10 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Venue</h3>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Private Events</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ & Rules</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lost & Found</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Stay Connected</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get presale codes and lineup drops.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Email Address" className="bg-white/5 border-white/10 text-white" />
              <Button size="icon" className="shrink-0">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 The Electric Union. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export default Footer;
