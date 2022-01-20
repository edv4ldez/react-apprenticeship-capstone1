import { useEffect, useRef, useState } from "react";

function useVideosFetch(category){
    const API_KEY = 'AIzaSyCrSoy7RbcW2fEfna7ipATtTs4qyjloW2I';
  
    const isMounted = useRef(true);
    const [ state, setState ] = useState({ videos: [], loading: true, error: null});

    useEffect( () => {
      return () => {
        isMounted.current = false;
      }
    }, [])

    useEffect( () => {
      setState({ videos: [], loading: true, error: null})
      fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${category}&part=snippet&maxResults=25`,
          {
          headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              }
          }
      )
      .then( resp => resp.json() )
      .then( videosData => {
        if( isMounted.current ) {
          
          let { items } = videosData;
          items = items.filter( (item) => item.id.kind === "youtube#video" )
          setState({
            loading: false,
            error: null,
            videos: items.map( (item) => {
      
              return {
                id: item.id.videoId,
                channelId: item.snippet.channelId,
                channelTitle: item.snippet.channelTitle,
                description: item.snippet.description,
                thumbnails: item.snippet.thumbnails,
                width : item.snippet.thumbnails.medium.width,
                height: item.snippet.thumbnails.medium.height,
                title: item.snippet.title,
                url: item.snippet.thumbnails.medium.url,
                favorite: false
              }
            })
          })
        }
      })
    }, [category]);
    
    return state;
}

export default useVideosFetch;


/*
const getData = () => {
    fetch('./data/youtube-videos-mock.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }
  useEffect(()=>{
    getData()
  },[])
  */