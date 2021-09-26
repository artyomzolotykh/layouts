import ShopCard from "./ShopCard";

const CardsView = ({cards}) => {
  return (
    <div className="CardsView">
      {cards.map(card => <ShopCard card={card} />)}
    </div>
  );
}

export default CardsView;