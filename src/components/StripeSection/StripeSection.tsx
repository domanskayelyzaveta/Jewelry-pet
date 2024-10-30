const StripeSection = () => {
  return (
    <section className="flex flex-row pl-20 pr-20 gap-[112px]">
      {[
        "Traceable Gems",
        "Reclaimed Metals",
        "Fairmined Gold",
        "Love in All Ways",
        "Small Footprint",
      ].map((text) => (
        <p key={text} className="addition-text-style">
          {text}
        </p>
      ))}
    </section>
  );
};

export default StripeSection;
