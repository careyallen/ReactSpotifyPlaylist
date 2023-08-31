import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

function Playlist({playlistTitle, playlistTracks, onChange, onRemoveTrack, onSave}) {

    function handlePlaylistTitleChange(e) {
        onChange(e.target.value);
    }

    return (
        <div id="divPlaylist">
            <h1>Playlist</h1>
            <input
                id="title"
                name="title"
                type="text"
                value={playlistTitle}
                onChange={handlePlaylistTitleChange}
            /><br />
            <Tracklist tracks={playlistTracks} src="playlist" onRemoveTrack={onRemoveTrack} />
            {playlistTracks.length > 0 ? ( <button name="saveToSpotify" onClick={onSave}>Save {playlistTitle} To Spotify</button> ) : <></>}
        </div>
    );
}

export default Playlist;