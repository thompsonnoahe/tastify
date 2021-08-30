import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='has-text-centered'>
        <p>
          Made with
          <span className='icon'>
            <i className='fas fa-heart'></i>
          </span>
          by Noah Thompson. Ingredients include&nbsp;
          <a
            href='https://bulma.io'
            rel='noreferrer'
            target='_blank'
            className='has-text-primary'>
            Bulma
          </a>
          ,&nbsp;
          <a
            href='https://tailwindcss.com'
            rel='noreferrer'
            target='_blank'
            className='has-text-primary'>
            TailwindCSS
          </a>
          ,&nbsp;
          <a
            href='https://spoonacular.com/'
            rel='noreferrer'
            target='_blank'
            className='has-text-primary'>
            Spoonacular
          </a>
          , and&nbsp;
          <a
            href='https://reactjs.org/'
            rel='noreferrer'
            target='_blank'
            className='has-text-primary'>
            React.js
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
