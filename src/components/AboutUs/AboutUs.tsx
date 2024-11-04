import photo1 from "../../images/aboutUs-ring1.png";
import photo2 from "../../images/aboutUs-ring2.png";
const AboutUs = () => {
  return (
    <section className="pt-[79px] pl-[125px] pr-[125px] pb-[103px] bg-aboutUsBg">
      <h2 className="text-sm font-normal leading-6 text-center mb-[74px]">
        AboutUs
      </h2>
      <div className="flex justify-center gap-16 mb-[52px]">
        <img srcSet={photo1} />
        <img srcSet={photo2} />
      </div>
      <p className="text-center text-[50px] font-normal leading-[58px] ">
        Each Bario Neal piece is crafted with ethically sourced precious metals
        to reflect our commitment to human rights and environmental
        sustainability.
      </p>
    </section>
  );
};

export default AboutUs;

// pt-79px pl-125 pr-125 pb-103
// h2

// font-size: 14px;
// font-weight: 400;
// line-height: 22.75px;
// letter-spacing: 0.2800000011920929px;
// text-align: center;

// p

// font-size: 50px;
// font-weight: 400;
// line-height: 58.59px;
// text-align: center;
