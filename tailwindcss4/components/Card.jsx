import React from "react";

function Cards({ username = " HC " }) {
  return (
    <div>
      <img
        src="https://i.pinimg.com/736x/16/7a/81/167a8150e32d884db76504befa5e624b.jpg"
        alt=""
      />
      <h1 className="text-2xl bg-green-500 p-3 rounded">Card for photos</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
        nemo.
      </p>
      <p>{username}</p>
    </div>
  );
}

export default Cards;
