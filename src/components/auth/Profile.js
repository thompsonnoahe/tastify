import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import FavoriteRecipes from './FavoriteRecipes';

dayjs.extend(relativeTime);

class Profile extends React.Component {
  state = { hideWarning: false };
  render() {
    const { user } = this.props.auth0;
    return (
      <div>
        <section className='hero is-primary flex justify-center align-center'>
          <h1
            className='text-9xl text-center'
            style={{ transform: 'translateY(-30%)' }}>
            My Profile
          </h1>
        </section>
        <main className='flex content-around items-center'>
          <section className='content p-10 flex flex-col'>
            <div>
              <img
                className='rounded-full'
                src={user.picture}
                alt={user.nickname}
              />
              <p className='my-10'>
                Profile pictures powered by{' '}
                <a
                  className='has-text-primary'
                  rel='noreferrer'
                  target='_blank'
                  href='https://en.gravatar.com/'>
                  Gravatar
                </a>
                .
              </p>
            </div>
          </section>
          <section className='content w-1/3'>
            {!user.email_verified ? (
              <div
                className='notification is-warning'
                hidden={this.state.hideWarning}>
                <button
                  className='delete'
                  onClick={() => this.setState({ hideWarning: true })}></button>
                You haven't verified your email address. Please check your inbox
                or spam folder and verify your email address.
              </div>
            ) : null}
            <h1 className='mb-10'>Welcome, {user.nickname}</h1>
            <h3>Your Username</h3>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder={`${user.nickname}`}
                disabled
              />
            </div>
            <h3>Your Email</h3>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder={`${user.email}`}
                disabled
              />
            </div>
            <div className='mt-10'>
              <h4>Profile last updated {dayjs(user.updated_at).fromNow()}</h4>
            </div>
          </section>
        </main>
        <FavoriteRecipes />
      </div>
    );
  }
}

export default withAuth0(Profile);
