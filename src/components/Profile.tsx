import React from 'react';

const avatar =
  'https://mir-s3-cdn-cf.behance.net/project_modules/fs/715807125578251.611c1a5c196d9.jpg';

export const Profile = () => {
  return (
    <>
      <section id='header' className='mt-8'>
        <div className='text-center'>
          <h1>
            The League Release training <br /> I'll get you in shape!
          </h1>
        </div>
      </section>

      <section id='image_services' className='grid grid-cols-2 gap-4 mt-8'>
        <div id='image'>
          <img src={avatar} alt='The League Release Training' />
        </div>
        <div id='services'>
          <h3>I offer you:</h3>
          <ul>
            <li>
              Lessons via Skype and you can record all sessions and watch them
              again later.{' '}
            </li>
            <li>Holistic full body training</li>
            <li>Training without equipment</li>
            <li>Pain reduction</li>
            <li>Tailored nutrition plans</li>
          </ul>
          <h3>My qualifications:</h3>
          <ul>
            <li>Certified nutritionist</li>
            <li>Certified fitness trainer</li>
            <li>5 years of experience in 1: 1 training</li>
          </ul>
        </div>
      </section>

      <section id='price_payment' className='mt-8'>
        <div className='w-8/12 mx-auto'>
          <h2>Prices and payment</h2>
          <p>My most important goal is that you get ahead with your goals.</p>
          <p>
            In a free opening session we will discuss what you want to achieve
            and how much you can or want to spend. Then we are guaranteed to
            find a solution that suits you.
          </p>
        </div>
      </section>

      <section id='contact' className='mt-8'>
        <div className='grid w-8/12 grid-cols-2 gap-4 mx-auto'>
          <div id='email'>
            <p>Your message:</p>
            <a href='mailto:Corey@CoreyJenkinsPhoto.com'>Send an Email</a>
          </div>
          <div id='telefon'>
            <p>Corey Jenkins:</p>919-610-8897
          </div>
        </div>
      </section>
    </>
  );
};
