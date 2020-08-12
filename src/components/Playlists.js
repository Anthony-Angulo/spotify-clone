import React from "react";
import { ReactComponent as PlayIcon } from "../svgs/play.svg";
import { Link } from "react-router-dom";

const Playlists = (props) => {
  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: "Home Playlist 1",
      img:
        "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
      desc: "lorem ipsum",
    },
    {
      id: 102,
      category_id: 3,
      name: "Home Playlist 2",
      img:
        "https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      desc: "lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1451934403379-ffeff84932da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=942&q=80",
      desc: "lorem ipsum",
    },
    {
      id: 104,
      category_id: 1,
      name: "Focus Playlist 1",
      img:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
      desc: "lorem ipsum",
    },
    {
      id: 105,
      category_id: 4,
      name: "Sunday Playlist 2",
      img:
        "https://images.unsplash.com/photo-1536000674552-16be34a8e08a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      desc: "lorem ipsum",
    },
    {
      id: 106,
      category_id: 2,
      name: "Mood Playlist 1",
      img:
        "https://images.unsplash.com/photo-1517245480009-64056ebabb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      desc: "lorem ipsum",
    },
    {
      id: 107,
      category_id: 2,
      name: "Mood Playlist 2",
      img:
        "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      desc: "lorem ipsum",
    },
  ];

  const matchedPlaylist = dataPlaylists.filter(
    (playlist) => playlist.category_id == props.categoryId
  );

  return (
    <div className="cardWrapperInner">
      {matchedPlaylist.map((playlist, id) => (
        <Link to={`/playlist/` + playlist.id}>
          <div className="card" key={id}>
            <div className="cardImage">
              <img src={playlist.img} alt="music"></img>
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              <span>{playlist.desc}</span>
            </div>
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Playlists;
