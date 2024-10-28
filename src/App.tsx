import { lazy } from "react";
import "./App.css";

const Header = lazy(() => import("./components/Header/Header"));
const Hero = lazy(() => import("./components/Hero/Hero"));

function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
