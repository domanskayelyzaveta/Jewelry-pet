import guysPhoto from "../../images/guys.png";
const Love = () => {
  return (
    <section className="flex pb-5 w-screen">
      <img srcSet={guysPhoto} alt="Two boys" />
      <div className="bg-blueBg pt-[64px] pr-[75px] pb-[57px] pl-[75px]">
        <p className="mb-[14px]">The Heart of It</p>
        <h2 className="text-center text-[41px] mb-[17px]">Love in All Ways</h2>
        <p className="text-center text-[16px] w-[450px] mb-[43px]">
          We embrace love in all forms, and our jewelry is made to celebrate any
          milestone. We strive for inclusivity at every step, from a
          non-gendered design ethos and comprehensive sizing to our founding
          belief in marriage equality and the right to love who you choose. In
          an industry that perpetuates heteronormative ideals, we eliminate
          presumptions and create jewelry that celebrates every experience and
          identity.
        </p>
        <button
          type="button"
          className="text-center text-sm font-normal bg-buttonWhite rounded-[20px] pt-2 pr-10 pb-2 pl-10 border hover:border-black hover:border-1 focus:border-black"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Love;
