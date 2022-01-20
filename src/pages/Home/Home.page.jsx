import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import VideosGrid from '../../components/ListVideos/VideosGrid.component';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  //to Read code
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout, videos} = useAuth();
  console.log(useAuth());
  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <>
      <section className="homepage animate__animated animate__zoomIn" ref={sectionRef}>
          <h1>Hello stranger!</h1>
          {authenticated ? (
            <>
              <h2>Good to have you back</h2>
              <span>
                <Link to="/" onClick={deAuthenticate}>
                  ← logout
                </Link>
                <span className="separator" />
                <Link to="/secret">show me something cool →</Link>
              </span>
            </>
          ) : (
            <Link to="/login">let me in →</Link>
          )}
      </section>
      <VideosGrid videos={videos} direction={'row'}/>
    </>
  );
}

export default HomePage;
