import React from 'react';
import { useParams } from 'react-router';
import VideosGrid from '../../components/ListVideos/VideosGrid.component';
import { useAuth } from '../../providers/Auth';
import { VideoPlayCard, VideoPlayContainer, VideoPlayContent} from '../../theme/pages/Videos/Videos.styles.js';

function VideoPlay() {
    const { videos } = useAuth();
    const { videosId } = useParams();
    
    const video = videos.find( element => element.id === videosId );
    return (
        <VideoPlayContainer>
            <div>
                <VideoPlayCard>
                    <iframe 
                            title="wizeline video"
                            height={400} 
                            src={`https://www.youtube.com/embed/${video.id}`} 
                            allowFullScreen 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    />
                </VideoPlayCard>
                <VideoPlayContent>
                        <b>{video.title}</b>
                        <hr/> 
                        {video.description}
                </VideoPlayContent>
            </div>
                <VideosGrid videos={videos} direction={'column'} />
        </VideoPlayContainer>
    )
}

export default VideoPlay;

