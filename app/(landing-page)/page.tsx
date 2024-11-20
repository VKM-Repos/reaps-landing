import { Benefits } from "./benefits";
import { Contact } from "./contact";
import { FAQ } from "./faq";
import { Features } from "./features";
import { Hero } from "./hero";
import { Pricing } from "./pricing";

export default function LandingPage() {
  return (
    <main className="mx-auto flex w-full flex-col items-center">
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
