import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ImageTrack from "@/components/sections/image-track";
import RoomShowcase from "@/components/sections/room-showcase";
import LocationBranding from "@/components/sections/location-branding";
import AmenitiesGrid from "@/components/sections/amenities-grid";
import BlogPreview from "@/components/sections/blog-preview";
import CTABanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutSection />
      <ImageTrack />
      <RoomShowcase />
      <LocationBranding />
      <AmenitiesGrid />
      <BlogPreview />
      <CTABanner />
      <Footer />
    </>
  );
}
