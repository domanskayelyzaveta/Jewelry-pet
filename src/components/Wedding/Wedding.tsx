import ClusterRings from "../../images/ClusterRings.png";
import Bands from "../../images/Bands.png";
import Rings from "../../images/Rings.png";
import CustomDesign from "../../images/CustomDesign.png";
const Wedding = () => {
  return (
    <>
      <div>
        <p>Handcrafted Jewelry</p>
        <h3 className="text-[43px] font-normal leading-[60px]">
          Wedding & Engagement
        </h3>
      </div>

      <div className="flex row gap-5 justify-center">
        <div className="flex flex-col items-center gap-[22px]">
          <img srcSet={ClusterRings} alt="Cluster Rings" />
          <p>Cluster Rings</p>
        </div>
        <div className="flex flex-col items-center gap-[22px]">
          <img srcSet={Bands} alt="Bands" />
          <p>Bands</p>
        </div>
        <div className="flex flex-col items-center gap-[22px]">
          <img srcSet={Rings} alt="Rings" />
          <p>Rings</p>
        </div>
        <div className="flex flex-col items-center gap-[22px]">
          <img srcSet={CustomDesign} alt="Custom Design" />
          <p>Custom Design</p>
        </div>
      </div>
    </>
  );
};

export default Wedding;

// font-family: Roboto;
// font-size: 43px;
// font-weight: 400;
// line-height: 60px;
// text-align: center;