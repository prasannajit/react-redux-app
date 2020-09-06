import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongList extends Component {
    render() {
        return (<div>{this.props.songs.map((song, index) =>
            <p key={index}>
                {song.title}
                <button onClick={() => this.props.selectSong(song)}>Select</button>
            </p>)}
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songs };
}
export default connect(mapStateToProps, { selectSong })(SongList);