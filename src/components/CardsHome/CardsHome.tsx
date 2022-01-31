import "./CardsHome.css";
interface propsCard {
  imgs: string;
  page: string;
  desc: string;
}

// image?: HTMLImageElement
// image?: String
// image?: File

const CardsHome = ({ imgs, page, desc }: propsCard) => {
  return (
    <div className="CardsHome__container">
      <div className="CardsHome__card bg-gray-800">
        <div className="CardsHome__imgBx">
          <img src={imgs} alt={"img RyM"} />
        </div>
        <div className="CardsHome__content">
          <div className="text-xl font-medium text-slate-300">{page}</div>
          <p className="text-slate-50">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CardsHome;
