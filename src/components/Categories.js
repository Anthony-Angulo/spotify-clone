import React from "react";
import Playlists from './Playlists'

const Categories = () => {

  const dataCategories = [
    {
      id: 1,
      name: "Focus",
      tagLine: "Music to help you concentrate"
    },
    {
      id: 2,
      name: "Mood",
      tagLine: "Playlists to match your mood"
    },
    {
      id: 3,
      name: "Soundtrack your home",
      tagLine: ""
    },
    {
      id: 4,
      name: "Kick back this sunday...",
      tagLine: "This is a description"
    },
  ];

  return (
    <div class="mainInner">
      {dataCategories.map((category, id) => (
        <div className="cardWrap" key={id}>
          <h1>{category.name}</h1>
          {/* <span className="seeAll">See All</span> */}
          <Playlists categoryId ={category.id}/>
        </div>
      ))}
    </div>
  );
};

export default Categories;
