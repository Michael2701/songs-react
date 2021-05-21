import React from 'react';
import  { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    
    if(!song){
        return <div>Select asong</div>;
    }

    const {title, duration} = song;
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {title}
            </p>
            <p>
                Duration: {duration}
            </p>
        </div>
    );
};

const marStateTopProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(marStateTopProps)(SongDetail);