import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import dynamic from "next/dynamic";

const WorkSection = dynamic(() =>
  import("@/components/WorkSection").then((module) => module.WorkSection)
);
const VideoSection = dynamic(() =>
  import("@/components/VideoSection").then((module) => module.VideoSection)
);
const Testimonials = dynamic(() =>
  import("@/components/Testimonials").then((module) => module.Testimonials)
);
const PrayerForm = dynamic(() =>
  import("@/components/PrayerForm").then((module) => module.PrayerForm)
);
const DonateSection = dynamic(() =>
  import("@/components/DonateSection").then((module) => module.DonateSection)
);

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
