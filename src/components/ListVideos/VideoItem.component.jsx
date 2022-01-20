import React from 'react';
import { Link } from 'react-router-dom';
import { VideoItemCard, VideoItemContent } from '../../theme/components/ListVideos/ListVideos.styles.js';
import { useAuth } from '../../providers/Auth';
import { VideoPlayStar } from '../../theme/pages/Videos/Videos.styles.js';

const VideoItem = ({video, isFavorite}) => {
    
    const { authenticated, addFavorite, removeFavorite } = useAuth();
    

    function handleAddFavorite() {
        if(isFavorite) {
            removeFavorite(video.id)
        }else {
            addFavorite(video)
        }
    }    

    return (
        <VideoItemCard width={video.width} >
            <div>

                <Link to={`/videos/${video.id}`}>
                    <img 
                        width={video.width}
                        height={video.height} 
                        src={video.url}    
                        alt="video"  
                        />
                
                </Link>
            
            </div>
            {
                authenticated ? (
                    <VideoItemContent>
                        <b>{video.title}</b>
                        <VideoPlayStar onClick={handleAddFavorite}>
                            {
                                isFavorite ? (
                                        <i className="fa fa-star" />)
                                    : (
                                        <i className="fa fa-star-half" />
                                    )
                            }
                            <hr/>
                        </VideoPlayStar>
                        {video.description}
                    </VideoItemContent>
                ):(
                    <VideoItemContent>
                        <b>{video.title}</b>
                        <hr />
                        {video.description}
                    </VideoItemContent>
                )
            }
        </VideoItemCard>
    )
};

export default VideoItem;

/*
<div className=' video-item item'>
<img className='ui image' src={} alt={}/>
<div className='content'>
    <div className='header '>{}</div>
</div>
</div>
*/