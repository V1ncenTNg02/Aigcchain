import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import TechnologySection from "../components/TechnologySection/TechnologySection";
import ImageCaptionSection1 from "../components/ImageCaptionSection/style1/ImageCaptionSection1";
import ImageCaptionSection2 from "../components/ImageCaptionSection/style2/ImageCaptionSection2";
import ImageCaptionSection3 from "../components/ImageCaptionSection/style3/ImageCaptionSection3";
import Timeline from "../components/Timeline/Timeline";
import CardSection from "../components/CardSection/CardSection";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ContactSection/ContactSection";

export default function Home() {
  return (
    <div className=" bg-white">
      <NavBar />
      <HeroSection />
      <InfoSection />
      <TechnologySection />
      <FeatureSection />
      <ImageCaptionSection1 />
      <ImageCaptionSection3 />
      <CardSection />
      <ImageCaptionSection2 />
      <Timeline />
      <ContactSection />
      <Footer />
    </div>
  );
}
