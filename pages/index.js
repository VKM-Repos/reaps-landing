import ApplicationProcessSection from "components/landingPageComponents/ApplicationProcessSection";
import ClientSection from "components/landingPageComponents/ClientSection";
import DeliverSection from "components/landingPageComponents/DeliverSection";
import FooterSection from "components/FooterSection";
import PricingSection from "components/landingPageComponents/PricingSection";
import Hero from "/components/landingPageComponents//Hero";
import Navbar from "/components/Navbar";
import FeaturesSection from "components/landingPageComponents/FeaturesOverviewSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ApplicationProcessSection />
      <FeaturesSection />
      <ClientSection />
      <PricingSection />
      <DeliverSection />
    </div>
  )
}
