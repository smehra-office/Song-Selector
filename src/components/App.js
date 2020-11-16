import React from 'react';
import SongList from '../components/songList';
import SongDetail from './songDetail';

const App = () => {
    return (
        <div className='ui container grid' style={{ 'marginTop': '3%' }}>
            <div className='ui row'>
                <div className='column eight wide'>
                    <SongList />
                </div>
                <div className='column eight wide'>
                    <SongDetail />
                </div>
            </div>
        </div>
    );
}

export default App;