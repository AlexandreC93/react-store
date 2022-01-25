import { useState } from "react";

export default function Form({
  name,
  handleName,
  price,
  handlePrice,
  handleSubmit,
}) {
  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleName}
          placeholder="Product Name..."
        />
        <input
          type="number"
          name=""
          id=""
          value={price}
          onChange={handlePrice}
          placeholder="Price..."
        />
        <button className="create" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
