import PropTypes from "prop-types";

const ShopCard = (props) => {
  const {name, price, color, img} = props.card;
  return (
    <div className="ShopCard">
      <div className="shopcard-title">
        {name}
      </div>
      <div className="shopcard-color">
        {color}
      </div>
      <div className="shopcard-img">
        <img src={img} />
      </div>
      <div className="shopcard-row">
        <div className="shopcard-price">
          ${price}
        </div>
        <div className="shopcard-button">
          add to cart
        </div>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

ShopCard.defaultProps = {
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
};

export default ShopCard;