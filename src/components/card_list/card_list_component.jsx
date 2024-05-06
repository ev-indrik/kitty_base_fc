import "./card_list_component_style.css";
import CardItem from "";

const CardsList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardItem monsterIt={monster} />;
    })}
  </div>
);

export default CardsList;
