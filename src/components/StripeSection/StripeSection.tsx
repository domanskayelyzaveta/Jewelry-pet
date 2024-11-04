const StripeSection = () => {
  return (
    <section className="flex flex-row pl-20 pr-20 justify-around">
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
