type HeaderProps = {
  handleSetActiveLink: (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => void;
};
const Header: React.FC<HeaderProps> = ({ handleSetActiveLink }) => {
  return (
    <>
      <div className="bg-backgroundGreen w-screen top-0 flex items-center justify-center gap-5 pt-2.5 pb-2.5">
        <p className="font-sans text-xs font-normal leading-5 text-left">
          Read Our
        </p>
        <p className="font-sans text-xs font-normal leading-5 text-left">
          Customer Reviews
        </p>
      </div>
      <nav className="flex items-center justify-center gap-[60px] text-sm font-normal leading-[22.75px] pt-[24px] pb-[26px]">
        <a
          href="#engagement"
          onClick={(e) => {
            e.preventDefault();
            handleSetActiveLink("wedding", e);
          }}
        >
          Engagement
        </a>
        <a href="#wedding">Wedding</a>
        <a href="#custom">Custom</a>
        <a href="#fineJewelry">Fine Jewelry</a>
        <a href="#ethics">Ethics</a>
        <a href="#about">About</a>
      </nav>
    </>
  );
};

export default Header;

// font-family: Roboto;
// font-size: 12px;
// font-weight: 400;
// line-height: 19.5px;
// text-align: left;

// font-family: Roboto;
// font-size: 14px;
// font-weight: 400;
// line-height: 22.75px;
// letter-spacing: 0.2800000011920929px;
// text-align: left;
