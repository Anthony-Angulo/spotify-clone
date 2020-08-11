import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">dummy text</div>
      <div className="mainContent">
        <h1>Escuchado Recientemente</h1>
        <div className="cardWrap">
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="music"
              ></img>
            </div>
            <div className="cardContent">
               <h3>Liked songs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
