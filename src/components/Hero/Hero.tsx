import sprite from "../../assets/sprite.svg";
const Hero = () => {
  return (
    <div className="hero-wrapper flex items-end gap-[558px] pt-0 pr-[66px] pb-[120px] pl-[131px] relative">
      <button
        type="button"
        className="absolute top-[220px] left-0 text-[16px] flex flex-row-reverse items-center gap-2 w-[42px] pt-[20px] pb-[11px] bg-beigeBg text-white border border-transparent  hover:text-black"
        style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
      >
        Reviews
        <svg className="w-3 h-3 fill-white hover:fill-black">
          <use href={`${sprite}#star`} />
        </svg>
      </button>

      <div className="flex flex-col gap-[2px]">
        <h2 className="text-[32px] font-normal leading-10 text-center w-[219px]">
          We Find Always in All Ways
        </h2>
        <p className="text-[16px] font-normal leading-6 text-center w-[204px]">
          Our design ethos is gender-neutral and size-inclusive.
        </p>
        <button
          type="button"
          className="mt-[19px] text-[14px] text-center font-normal leading-4 rounded-[20px] pt-[8px] pb-[8px] w-[170px] bg-buttonColor border border-transparent hover:border-black hover:border-1 focus:outline-none focus:border-black focus:border-1"
        >
          Shop Rings
        </button>
      </div>

      <div>
        <button
          type="button"
          className="mt-[19px] text-[14px] text-center font-normal leading-4 rounded-[20px] pt-[8px] pb-[8px] w-[226px] bg-buttonColor  border border-transparent hover:border-black hover:border-1 focus:outline-none focus:border-black focus:border-1"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Hero;

// h2

// font-family: Roboto;
// font-size: 31px;
// font-weight: 400;
// line-height: 43.2px;
// text-align: center;

// p

// font-family: Roboto;
// font-size: 16px;
// font-weight: 400;
// line-height: 26px;
// text-align: center;

// button

// font-family: Roboto;
// font-size: 14px;
// font-weight: 400;
// line-height: 16.41px;
// text-align: center;

// background: #CFE1E7;

// width: 170px;
// height: 33px;
// top: 687px;
// left: 155px;
// gap: 0px;
// border-radius: 20px 0px 0px 0px;
// opacity: 0px;
