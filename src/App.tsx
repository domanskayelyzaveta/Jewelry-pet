import { lazy } from "react";
import "./App.css";

const Header = lazy(() => import("./components/Header/Header"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const Wedding = lazy(() => import("./components/Wedding/Wedding"));
const AnEthicalApproach = lazy(
  () => import("./components/AnEthicalApproach/AnEthicalApproach")
);
const StripeSection = lazy(
  () => import("./components/StripeSection/StripeSection")
);
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const OurJewelry = lazy(() => import("./components/OurJewelry/OurJewelry"));
const Custom = lazy(() => import("./components/Custom/Custom"));
const SecondStripeSection = lazy(
  () => import("./components/RunningStripeSection/RunningStripeSection")
);
const Love = lazy(() => import("./components/Love/Love"));
const GallerySection = lazy(
  () => import("./components/GallerySection/GallerySection")
);
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Wedding />
      <AnEthicalApproach />
      <StripeSection />
      <AboutUs />
      <OurJewelry />
      <Custom />
      <SecondStripeSection />
      <Love />
      <GallerySection />
      <Footer />
    </>
  );
}

export default App;
