import React from 'react';
import Track from '../Track/Track';

function Tracklist({tracks, src, onAddTrack, onRemoveTrack}) {

    return (
        <div id="divTracklist">
            Tracklist
            {tracks.map((track) => (
                <Track key={track.id} id={track.id} name={track.name} artist={track.artist} album={track.album} src={src} onAddTrack={onAddTrack} onRemoveTrack={onRemoveTrack} />
            ))}
        </div>
    );
}

export default Tracklist;