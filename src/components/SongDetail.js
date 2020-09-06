import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
    render() {
        return (<div>
            <p>{this.props.selectedSong && this.props.selectedSong.title}</p>
        </div>);
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return { selectedSong: state.selectedSong }
};
export default connect(mapStateToProps)(SongDetail);