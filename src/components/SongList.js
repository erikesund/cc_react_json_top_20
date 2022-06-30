import React from "react";
import ListSong from "./ListSong";

const SongList = ({songs}) => {
  const songsItems = songs.map(song => (
    <ListSong song={song} name={song.feed.entry['im:name']}/>
  ))
  
  return (
    <div>
    <ul>
      {songsItems}
    </ul>
    </div>
  )
}

export default SongList;