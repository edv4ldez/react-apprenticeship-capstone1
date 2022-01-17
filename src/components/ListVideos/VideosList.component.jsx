import React from 'react';
import VideoItem from './VideoItem.component';

function VideosList({ videos }){
    console.log(videos);
    return (
        <>
        {
            videos.map( (video) => (
                <VideoItem key={video.id} video={video}/>
            ))
        }
        </>
    )
}

export default VideosList;