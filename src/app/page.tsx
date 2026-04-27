import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Logos } from "@/components/logos";
import { Features } from "@/components/features";
import { Preview } from "@/components/preview";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Preview />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
