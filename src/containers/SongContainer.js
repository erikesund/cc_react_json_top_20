import React, { useEffect, useState } from "react";
import SongList from "../components/SongList";

const SongContainer = () => {
  const [songs, setSongs] = useState([]);

  // useEffect(() => {
  //   getSongs();
  // })
  
  
  const getSongs = async function(){
    const res = await fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json');
    const songs = await res.json();
    setSongs(songs);
  }
  
  

return (
  <div>
  <p>This is the Song Container</p>
  <SongList songs={songs}/>
  </div>
);
}
export default SongContainer;