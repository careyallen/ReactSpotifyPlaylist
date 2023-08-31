import React from 'react';
import styles from './Track.module.css'

function Track({id,name,artist,album,src,onAddTrack,onRemoveTrack}) {

    function handleAdd(e) {
        //alert('add ' + e.target.value);
        onAddTrack(id);
    }
    
    function handleRemove(e) {
        //alert('remove local ' + e.target.value);
        onRemoveTrack(id);
    }

    return (
        <div id="divTrack" className={styles.track}>
            <table width="300">
                <tbody>
                    <tr>
                        <td style={{fontSize: 24}}>
                        {name}
                        </td>
                        <td width="25" align="right">
                            {
                                src === 'search' ? <button id="btnAdd" name="btnAdd" value={id} onClick={handleAdd}>+</button> : <button id="btnRemove" name="btnRemove" value={id} onClick={handleRemove}>-</button>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td style={{fontSize: 14}} colSpan={2}>
                        {artist} - {album}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Track;