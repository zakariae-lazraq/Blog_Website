import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col cursor-pointer transition-transform transform hover:scale-105 w-full max-w-lg">
      <Link to={`/blogs/${item.id}`}>
        <img
          src={item.image}
          alt={item.content}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6 flex-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h2>
          <p className="text-gray-700 mb-4">{item.content}</p>
          <div className="text-sm text-gray-500 mb-2">{item.author}</div>
          <div className="text-sm text-gray-500">Published: {item.published_date}</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
