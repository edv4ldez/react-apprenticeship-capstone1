import React from 'react';
import { useAuth } from '../../providers/Auth';
import VideoItem from './VideoItem.component';

function VideosList({ videos }){

    const { favorites } = useAuth();
    
    return videos.map( (video) => {
        const isFavorite = !!favorites[video.id];
        console.log(isFavorite);
        return <VideoItem key={video.id} video={video} isFavorite={isFavorite}/>
    }) 
            
}

export default VideosList;
