import Bg from "@/app/components/Svgs/Bg";
import Image from "next/image";

const VisitPlace = ({ name, description, maps, image }: any) => {
  return (
    <div className="visitPlace">
      <div className="visitPlace__image">
        <Image src={image} alt="mercato" width="200" height={200} />
      </div>
      <div className="visitPlace__right">
        <div className="visitPlace__name">{name}</div>
        {/* <div className="visitPlace__description">{description}</div> */}
      </div>
      <div className="visitPlace__maps">
        <iframe id="gmap_canvas" src={`${maps}`}></iframe>
      </div>
    </div>
  );
};

export default VisitPlace;
