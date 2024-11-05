// const Footer = () => {
//   return (
//     <div className="bg-buttonWhite">
//       footer
//       <h2>We Find Always in All Ways.</h2>
//     </div>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="bg-buttonWhite text-additionalTextColor pt-[143px] pl-[40px] pr-[88px] pb-[48px]">
      <div className="flex gap-11">
        {/* Column 1: Get In Touch */}
        <div>
          <h3 className="mb-3">Get In Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact</li>
            <li>Appointments</li>
            <li>Philadelphia Shop</li>
            <li>NYC Shop</li>
            <li>Newsletter</li>
            <li>Get an Estimate</li>
          </ul>
        </div>

        {/* Column 2: About */}
        <div>
          <h3 className="mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Reviews</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Column 3: Social */}
        <div>
          <h3 className="mb-3">Social</h3>
          <ul className="space-y-2 text-sm">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Pinterest</li>
          </ul>
        </div>

        {/* Column 4: Centered Text */}
        <div className="col-span-1 flex flex-col items-center">
          <h2 className="text-center text-[41px] font-normal leading-tight mb-6 w-[300px]">
            We Find Always in All Ways.
          </h2>
          <div className="flex items-center border border-gray-300 rounded-full pl-[12px]">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent outline-none flex-grow"
            />
            <button className="bg-backgroundGreen text-white text-[16px] px-4 rounded-full ml-2 border hover:border-black border-1">
              CAPTCHA
            </button>
          </div>
        </div>

        {/* Column 5: Policy and FAQs */}
        <div className="grid grid-cols-2 gap-4">
          {/* Policy */}
          <div>
            <h3 className="mb-3">Policy</h3>
            <ul className="space-y-2 text-sm">
              <li>Log In</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Returns & Exchanges</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* FAQs */}
          <div>
            <h3 className="mb-3">FAQs</h3>
            <ul className="space-y-2 text-sm">
              <li>Warranty & Repairs</li>
              <li>Ring Resizing</li>
              <li>Jewelry Care</li>
              <li>Hand-Made For You</li>
              <li>Shipping</li>
              <li>International Orders</li>
              <li>Pricing</li>
              <li>Covid Updates</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
