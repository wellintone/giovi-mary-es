import Bg from "@/app/components/Svgs/Bg";
import Image from "next/image";

const VisitEat = ({ name, description, maps, image }: any) => {
  return (
    <div className="visitEat">
      {/*   <Bg className={"visitEat__bg-svg"} /> */}
      <div className="visitEat__image">
        <Image src={image} alt="mercato" width="200" height={200} />
      </div>
      <div className="visitEat__right">
        <div className="visitEat__name">{name}</div>
        <div className="visitEat__description">{description}</div>
      </div>
      <div className="visitEat__maps">
        <iframe id="gmap_canvas" src={`${maps}`}></iframe>
      </div>
    </div>
  );
};

export default VisitEat;
