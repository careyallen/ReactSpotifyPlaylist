import logo from './logo.svg';
import './App.css';
import Spotify from "./Spotify/Spotify";
import Playlist from './Playlist/Playlist';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import { useState, useEffect } from 'react';

function App() {

  const [tracks, setTracks] = useState([]);
  /*useEffect(() => {
    setTracks(
      [
        {id: 1, uri: "spotify-song-111", name: "Orion", artist: "Metallica", album: "Master of Puppets"},
        {id: 2, uri: "spotify-song-222", name: "46 & 2", artist: "Tool", album: "Aenema"},
        {id: 3, uri: "spotify-song-333", name: "Watch Over You", artist: "Alter Bridge", album: "Unknown"},
        {id: 4, uri: "spotify-song-444", name: "Welcome to the Jungle", artist: "Guns N Roses", album: "Appetite for Destruction"},
        {id: 5, uri: "spotify-song-555", name: "Fake Plastic Trees", artist: "Radiohead", album: "The Bends"}
      ]
    );
  }, []);*/
  
  const [playlistTitle, setPlaylistTitle] = useState("New Playlist");
  function handlePlaylistTitleChange(strTitle) {
    setPlaylistTitle(strTitle);
    document.title = "Create Spotify Playlist - " + strTitle;
  }

  const [playlistTracks, setPlaylistTracks] = useState([]);
  /*useEffect(() => {
    setPlaylistTracks(
      [
        {id: 2, uri: "spotify-song-222", name: "46 & 2", artist: "Tool", album: "Aenema"},
        {id: 5, uri: "spotify-song-555", name: "Fake Plastic Trees", artist: "Radiohead", album: "The Bends"}
      ]
    );
  }, []);*/
  function handlePlaylistAddTrack(iTrackId) {
    const matchingTracks = tracks.filter((track) => track.id === iTrackId);
    const trackToAdd = matchingTracks[0];
    //make sure the track doesn't already exist in the playlist
    if(playlistTracks.filter((track) => track.id === trackToAdd.id).length === 0) {
      //alert(`add track '${trackToAdd.id}!`);
      setPlaylistTracks((prev) => [...prev, trackToAdd]);
    } else {
      //alert(`track ${iTrackId} is already added`);
    }
  }
  function handlePlaylistRemoveTrack(iTrackId) {
    //alert(`1. remove track '${iTrackId}!`);
    const matchingTracks = tracks.filter((track) => track.id === iTrackId);
    //alert(`2. matching tracks: ${matchingTracks}`);
    const trackToRemove = matchingTracks[0];
    //alert(`3. remove track '${trackToRemove.id}!`);
    setPlaylistTracks((prev) => prev.filter((track) => track.id !== trackToRemove.id));
  }
  
  function handlePlaylistSave() {
    //alert(`save playlist ${playlistTitle} with ${playlistTracks.length} tracks`);
    const trackUris = playlistTracks.map((track) => track.uri);
    //alert(trackUris);
    Spotify.savePlaylist(playlistTitle, trackUris)
      .then((response) => {
        if(response.ok) {
          console.log("Create playlist results: " + response);  
          alert('Successfully create your new playlist - "' + playlistTitle + '"!');
          setTracks([]);
          setPlaylistTracks([]);
          setPlaylistTitle('New Playlist');
        }
      });
  }

  // search Spotify
  const searchHandler = (searchTerm) => {
    //alert(`search for ${searchTerm}`);
    Spotify.search(searchTerm)
    .then((response) => {
      //alert('results: ' + response);
      console.log("Search results: " + response);
      setTracks(response);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSearch={searchHandler} />
      </header>
      <main className='App-main'>
        <SearchResults tracks={tracks} onAddTrack={handlePlaylistAddTrack} />
        <div id="divSpacer" style={{width: 50}}></div>
        <Playlist playlistTitle={playlistTitle} playlistTracks={playlistTracks} onChange={handlePlaylistTitleChange} onRemoveTrack={handlePlaylistRemoveTrack} onSave={handlePlaylistSave} />
      </main>
      <footer>Made by Carey Allen</footer>
    </div>
  );
}

export default App;
