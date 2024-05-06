import "./card_item_component_style.css";

const CardItem = ({ id, name, email }) => {
  <div className="card-container" key={id}>
    <img
      src={`https://robohash.org/${id}?set=set4&size=180x180`}
      alt={`it's a ${name}`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>;
};

export default CardItem;
