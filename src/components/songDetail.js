import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (song)
        return (
            <React.Fragment>
                <h3>Details for:</h3>
                <p>
                    Song Name: {song.title}
                    <br />
                    Song duration: {song.duration}
                </p>
            </React.Fragment>
        );

    return <React.Fragment>
        <b>Please select a song!</b>
    </React.Fragment>
}

const mapStateToProps = (state) => {
    return { song: state.songSelected }
};

export default connect(mapStateToProps)(SongDetail);
