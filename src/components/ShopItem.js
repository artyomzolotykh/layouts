import PropTypes from "prop-types";

const ShopItem = (props) => {
  const {name, price, color, img} = props.card;
  return (
    <div className="ShopItem">
      <div className="shopitem-img">
        <img src={img} />
      </div>
      <div className="shopitem-title">
        {name}
      </div>
      <div className="shopitem-color">
        {color}
      </div>
      <div className="shopitem-price">
        ${price}
      </div>
      <div className="shopitem-button">
        add to cart
      </div>
    </div>
  );
};

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

ShopItem.defaultProps = {
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
};

export default ShopItem;