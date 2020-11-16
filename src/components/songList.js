import { Component } from 'react';
import { connect } from 'react-redux';
import { songSelected } from '../actions'

class SongList extends Component {
    render() {
        return <div className='ui divided list'>
            {this.renderList()}
        </div>
    }

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button className='ui button primary' onClick={() => this.props.songSelected(song)}>
                            Select
                        </button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            )
        })
    }
}

//OUTSIDE THE CLASS!!
const mapStateToProps = (state) => {
    return { songs: state.songs }
}

export default connect(mapStateToProps, { songSelected })(SongList);  // We pass mapStateToProps as well as any action creators 
                                                                     //we need to dispatch from the component in a JSON object
