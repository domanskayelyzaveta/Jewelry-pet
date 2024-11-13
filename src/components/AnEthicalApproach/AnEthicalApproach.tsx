import ethicalImg from "../../images/ethical.png";
const AnEthicalApproach = () => {
  return (
    <section id="ethics" className="flex flex-row">
      <img srcSet={ethicalImg} className="w-[600px] h-[570px]" />
      <div className="bg-backgroundGreen w-screen pl-[75px] pr-[75px] pt-16 pb-[57px]">
        <p className="text-[14px] font-normal leading-5 mb-[14px]">
          Sustainability
        </p>
        <h3 className="text-[43px] font-normal leading-[60px] mb-[146px]">
          An Ethical Approach
        </h3>
        <p className="text-[16px] w-[449px] font-normal leading-6 mb-[43px]">
          Making jewelry requires responsibility to the earth that creates our
          materials and respect for the people who inhabit it. From day one, we
          committed to creating designs of ethical origins from mine to market.
          Today, we’re a proud leader in sustainable sourcing and mindful
          production.
        </p>
        <button
          type="button"
          className="text-[14px] bg-buttonWhite rounded-[20px] pt-2 pb-2 pl-10 pr-10 hover:border hover:border-black focus:border focus:border-black"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AnEthicalApproach;
