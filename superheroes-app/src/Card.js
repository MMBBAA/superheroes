import React from "react";

/*stateless o presentacional no manejo un estado y solo se está preocupando 
de representar un componente visualmente, no tiene ninguna logica interna*/
const Card = (props) => {
  return (
    <div className="card w-25 mr-2 mb-2">
      <img className="card-img-top" src={props.imageUrl} alt="superheroe" />
      <div className="card-body">
        <p className="card-text">{props.name}</p>
      </div>
    </div>
  );
};

export default Card;
