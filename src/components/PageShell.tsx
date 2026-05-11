import { About } from "@/components/About";
import { DonateSection } from "@/components/DonateSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PrayerForm } from "@/components/PrayerForm";
import { Testimonials } from "@/components/Testimonials";
import { VideoSection } from "@/components/VideoSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WorkSection } from "@/components/WorkSection";

export function PageShell() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkSection />
        <VideoSection />
        <Testimonials />
        <PrayerForm />
        <DonateSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
