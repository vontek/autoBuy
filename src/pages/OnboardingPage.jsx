import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import illustration from '../assets/Illustration.png';

export function Component() {
  return (
    <div>
      <section className='bg-white w-full h-screen'>
        <Navbar />
        <section className='flex flex-col items-center justify-center mt-10'>
          <h1 className='text-center text-primary-normal font-normal text-2xl'>
            Why Choose Carxperto
          </h1>
          <div className='flex lg:flex-row flex-col items-center gap-16 mt-16'>
            <Link to='/signup'>
              <div className='flex flex-col items-center  w-72 h-72 border-white shadow-md'>
                <img src={illustration} alt='illustration' className='w-36 h-30' />
                <h1 className='text-base text-primary-darker font-bold mt-10'>
                  Find Your Dream Car
                </h1>
                <p className='text-base text-primary-darker'>
                  Explore a vast selection of cars from <br />
                  trusted sellers, all in one place.
                </p>
              </div>
            </Link>

            <Link to='/signup'>
              <div className='flex flex-col items-center w-72 h-72 border-white shadow-md'>
                <img src={illustration} alt='illustration' className='w-36 h-30' />
                <h1 className='text-base text-primary-darker font-bold mt-10'>
                  Sell Your Car with Ease
                </h1>
                <p className='text-base text-primary-darker'>
                  {' '}
                  Showcase your car to thousands
                  <br />
                  of potential buyers across the
                  <br /> platform.
                </p>
              </div>
            </Link>

            <Link to='/signup'>
              <div className='flex flex-col items-center w-72 h-72 border-white shadow-md'>
                <img src={illustration} alt='illustration' className='w-36 h-30' />
                <h1 className='text-base text-primary-darker font-bold mt-10'>
                  Manage Your Platform Effectively
                </h1>
                <p>
                  {' '}
                  Access a comprehensive admin <br />
                  dashboard to monitor and manage
                  <br />
                  all aspects of your platform.
                </p>
              </div>
            </Link>
          </div>

          <div className='flex flex-row mt-16 gap-2 mb-6'>
            <Link
              to='/signup'
              className='py-2 px-4 rounded-md text-base text-accent-white bg-primary-normal hover:bg-secondary-normalhover '
            >
              Sign Up
            </Link>

            <Link
              to='/signin'
              className='py-2 px-6 rounded-md text-base text-accent-white bg-secondary-darker hover:bg-secondary-normalhover'
            >
              Login
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
