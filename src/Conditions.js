import React from "react";

function Conditions(props) {
  if (props.weather === null && props.icon === null) {
    return null;
  } else {
    return (
      <div>
        <img src={props.icon} alt="icon" />
        <ul>
          {props.weather.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Conditions;
