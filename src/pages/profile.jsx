import React from 'react';
import Profilebody from '../components/profileCon/Profilebody';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export function Component() {
  return (
    <div>
      <section className='w-full h-full overflow-x-hidden '>
        <Navbar />
        <section className='relative mt-20 mb-20'>
          <Profilebody />
        </section>
        <Footer />
      </section>
    </div>
  );
}

