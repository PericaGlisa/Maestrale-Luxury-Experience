import Navigation from "@/components/brand/Navigation";
import Hero from "@/components/brand/Hero";
import BrandStory from "@/components/brand/BrandStory";
import ColorPalette from "@/components/brand/ColorPalette";
import Typography from "@/components/brand/Typography";
import LogoGuidelines from "@/components/brand/LogoGuidelines";
import MoodBoard from "@/components/brand/MoodBoard";
import BrandVoice from "@/components/brand/BrandVoice";
import Footer from "@/components/brand/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <BrandStory />
        <ColorPalette />
        <Typography />
        <LogoGuidelines />
        <MoodBoard />
        <BrandVoice />
        <Footer />
      </main>
    </>
  );
};

export default Index;
