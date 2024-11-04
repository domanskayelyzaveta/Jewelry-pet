import galleryPhoto1 from "../../images/galleryPhoto1.png";
import galleryPhoto2 from "../../images/galleryPhoto2.png";
import galleryPhoto3 from "../../images/galleryPhoto3.png";
import galleryPhoto4 from "../../images/galleryPhoto4.png";
import galleryPhoto5 from "../../images/galleryPhoto5.png";
const GallerySection = () => {
  return (
    <section className="pb-[21px]">
      <div className="bg-blueBg flex">
        <img srcSet={galleryPhoto1} />
        <img srcSet={galleryPhoto2} />
        <img srcSet={galleryPhoto3} />
        <img srcSet={galleryPhoto4} />
        <img srcSet={galleryPhoto5} />
      </div>
    </section>
  );
};

export default GallerySection;
