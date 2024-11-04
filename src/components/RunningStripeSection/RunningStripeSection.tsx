const RunningStripeSection = () => {
  return (
    <section className="overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex justify-between">
        {Array(18)
          .fill("Check Out Our Blog")
          .map((text, index) => (
            <span key={index} className="text-[12px] px-4 inline-block">
              {text}
            </span>
          ))}
      </div>
    </section>
  );
};

export default RunningStripeSection;
