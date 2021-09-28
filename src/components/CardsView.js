import ShopCard from "./ShopCard";
import PropTypes from "prop-types";

const CardsView = ({cards}) => {
  return (
    <div className="CardsView">
      {cards.map(card => <ShopCard card={card} />)}
    </div>
  );
};

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
};

CardsView.defaultProps = {
  cards: [],
};

export default CardsView;