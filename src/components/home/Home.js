import React, { useEffect, useState } from 'react';
import unsplash from '../../apis/unsplash';
import Results from './Results';
import Search from './Search';

import './Home.css';
import SearchHistory from './SearchHistory';

const Home = () => {
  const [photoData, setPhotoData] = useState(null);
  const getRandomPhoto = async () => {
    const { data } = await unsplash.get('/photos/random', {
      params: { query: 'cooking' },
    });
    setPhotoData(data);
  };
  useEffect(() => {
    document.title = 'Tastify';
    getRandomPhoto();
  }, []);
  return (
    <div className='flex flex-col'>
      <div className='overlay'>
        <section
          className='hero is-primary flex justify-center align-center'
          style={{
            backgroundImage: `linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.5),
            rgba(0, 209, 178, 0.75)
            ),
          url(${photoData?.urls?.regular})`,
          }}>
          <h1
            className='text-9xl text-center'
            style={{ transform: 'translateY(-30%)' }}>
            tastify
          </h1>
        </section>
      </div>
      <section className='main'>
        <Search />
        <SearchHistory />
        <Results />
      </section>
    </div>
  );
};

export default Home;
