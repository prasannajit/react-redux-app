import { combineReducers } from 'redux';
const songReducer = () => {
    return [
        { title: 'raja babu', duration: '4:35' },
        { title: 'raja babua', duration: '2:45' },
        { title: 'rajjo babu', duration: '1:55' },
        { title: 'rajua babua', duration: '0:55' },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
});