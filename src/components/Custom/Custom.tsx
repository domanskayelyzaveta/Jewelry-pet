import customImg from "../../images/customImg.png";

const Custom = () => {
  return (
    <section
      id="custom"
      className="flex bg-backgroundGreen pt-[65px] pl-[97px] pr-[70px] pb-[50px] justify-between w-screen"
    >
      <div>
        <p className="text-center text-sm font-normal leading-6 mb-[14px]">
          Tradition in the Making
        </p>
        <h2 className="text-center text-[42px] font-normal leading-[50px] mb-[51px]">
          Custom Design
        </h2>
        <p className="w-[426px] text-center text-[16px] font-normal leading-[26px] mb-[47px]">
          Whether you want to create a future heirloom that can be passed down
          or re-envision a current heirloom while maintaining its sentiment, our
          Custom process brings meaningful designs to life.
        </p>
        <div className="flex gap-[50px]">
          <button
            type="button"
            className="text-center text-sm font-normal bg-buttonWhite rounded-[20px] pt-2 pr-10 pb-2 pl-10  border hover:border-black hover:border-1 focus:outline-none focus:border-black focus:border-1"
          >
            Get Inspired
          </button>
          <button
            type="button"
            className="text-center text-sm font-normal bg-buttonWhite rounded-[20px] pt-2 pr-10 pb-2 pl-10 border hover:border-black hover:border-1 focus:border-black"
          >
            Get an Estimate
          </button>
        </div>
      </div>
      <div>
        <img srcSet={customImg} alt="Rings and hand" />
      </div>
    </section>
  );
};

export default Custom;
