import React from "react";
import ListSong from "./ListSong";

const SongList = ({songs}) => {
  // const songsItems = songs.map((song) => {
  //   return <ListSong song={song}/>
  // })
  
  return (
    <div>
    <ul>
      <ListSong/>
    </ul>
    </div>
  )
}

export default SongList;