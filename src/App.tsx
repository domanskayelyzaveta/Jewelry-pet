import { lazy } from "react";
import "./App.css";

const Header = lazy(() => import("./components/Header/Header"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const Wedding = lazy(() => import("./components/Wedding/Wedding"));
const AnEthicalApproach = lazy(
  () => import("./components/AnEthicalApproach/AnEthicalApproach")
);

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Wedding />
      <AnEthicalApproach />
    </>
  );
}

export default App;
