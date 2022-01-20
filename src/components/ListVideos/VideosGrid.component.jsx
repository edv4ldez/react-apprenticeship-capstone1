import React from 'react';
import { VideosGridContainer } from '../../theme/pages/Videos/Videos.styles';


import VideosList from './VideosList';

function VideosGrid({videos, direction}) {
    
    return(   
        <VideosGridContainer direction={direction} className="animate__animated animate__zoomIn">
            <VideosList videos = {videos}/>
        </VideosGridContainer>         
    )
}

export default VideosGrid;