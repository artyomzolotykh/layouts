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

export default ShopCard;