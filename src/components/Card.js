import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
