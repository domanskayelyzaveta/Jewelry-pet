import rings from "../../images/ourRings.png";
import bracelets from "../../images/bracelets.png";
import necklaces from "../../images/necklaces.png";
import earrings from "../../images/earrings.png";

const OurJewelry = () => {
  const jewelryItems = [
    { src: rings, alt: "Rings" },
    { src: bracelets, alt: "Bracelets" },
    { src: necklaces, alt: "Necklaces" },
    { src: earrings, alt: "Earrings" },
  ];

  return (
    <section className="pt-12 pr-[60px] pl-[60px] pb-[50px]">
      <p className="mb-[14px]">Consciously Made</p>
      <h2 className="text-center text-[42px] font-normal leading-[60px] mb-[50px]">
        Our Jewelry
      </h2>
      <div className="flex gap-5">
        {jewelryItems.map((item) => (
          <div key={item.alt} className="text-center">
            <img srcSet={item.src} alt={item.alt} />
            <p className="text-[14px] mt-2">{item.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurJewelry;

// h2

// font-size: 42px;
// font-weight: 400;
// line-height: 60px;
// text-align: center;
