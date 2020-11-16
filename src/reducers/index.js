import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Macerina', duration: '1:50' },
        { title: 'I want it that way', duration: '2.30' },
        { title: 'Barbie Girl', duration: '4:12' }
    ];
}

const selectedSongReducer = (songSelected = null, action) => {
    if (action.type == 'SONG_SELECTED')
        return action.payload;

    return songSelected;
}

export default combineReducers({
    songs: songsReducer,
    songSelected: selectedSongReducer
});