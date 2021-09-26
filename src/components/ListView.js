import ShopItem from "./ShopItem";

const ListView = ({cards}) => {
  return (
    <div className="ListView">
      {cards.map(card => <ShopItem card={card} />)}
    </div>
  );
}

export default ListView;