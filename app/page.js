import Image from "next/image";
import Hero from "./components/hero";
import TrustedClients from "./components/TrustedClients";
import InstantEngagement from "./components/InstantEngagement";
import LimitlessPossibilities from "./components/LimitlessPossibilities";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedClients />
      <InstantEngagement />
      <HowItWorks />
      <LimitlessPossibilities />
    </div>
  );
}
