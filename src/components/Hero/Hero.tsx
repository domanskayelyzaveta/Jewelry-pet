import heroImage from "../../images/hero.png";

const Hero = () => {
  return (
    <div>
      <img srcSet={heroImage} alt="hero image" className="w-full h-auto" />
      <h2>We Find Always in All Ways</h2>
      <p>Our design ethos is gender-neutral and size-inclusive.</p>
      <button>Shop Rings</button>
      <button>Book Appointment</button>
    </div>
  );
};

export default Hero;
