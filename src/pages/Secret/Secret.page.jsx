import React from 'react';
import { Link } from 'react-router-dom';
import VideosGrid from '../../components/ListVideos/VideosGrid.component';
import { useAuth } from '../../providers/Auth';

//Favorites
function SecretPage() {
  const { favorites } = useAuth();
  const videos = Object.values(favorites);

  return (
    <section>
      <pre style={{'textAlign': 'center', 'fontSize': '30px'}}>
        Favorites
        <Link to="/">← go back</Link>
      </pre>
      <VideosGrid videos={videos}/>
    </section>
  );
}

export default SecretPage;
