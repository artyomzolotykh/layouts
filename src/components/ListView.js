import ShopItem from "./ShopItem";
import PropTypes from "prop-types";

const ListView = ({cards}) => {
  return (
    <div className="ListView">
      {cards.map(card => <ShopItem card={card} />)}
    </div>
  );
};

ListView.propTypes = {
  cards: PropTypes.array.isRequired,
};

ListView.defaultProps = {
  cards: [],
};

export default ListView;