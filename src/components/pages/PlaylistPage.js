import React from "react";
import { useParams } from "react-router-dom";

const PlaylistPage = () => {
  let { id } = useParams();

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"></img>
          </div>
          <div className="playlistPageContent">
            <h1>Playlist</h1>
            <span>A Perfect Day</span>
            <div className="icons"></div>
            <div className="iconDots"></div>
            <p>Minimilism, electronica and modernd classica to concentrate</p>
            <p>Spotify</p>
          </div>
        </div>
        <div className="playlistPageSongs">
        <button>Play</button>
          <ul>
            <li>Song one</li>
            <li>Song two</li>
            <li>Song three</li>
            <li>Song four</li>
            <li>Song five</li>
            <li>Song six</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
