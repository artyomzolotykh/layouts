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
}

export default ShopItem;