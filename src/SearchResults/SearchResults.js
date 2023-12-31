import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults({tracks, onAddTrack}) {

    return (
        <div id="divSearchResults">
            <h1>Search Results</h1>
            {tracks.length > 0 ? ( <Tracklist tracks={tracks} onAddTrack={onAddTrack} src="search" /> ) : (<></>)}
        </div>
    );
}

export default SearchResults;