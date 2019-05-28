import React from 'react';


const Services = () => (

    <section id='services' className='services'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-12'>
            <h3 className='title'>Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              sunt, pariatur dolores molestiae autem veniam ratione numquam,
              eligendi impedit illum ut, rerum quaerat fugit alias.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-md-4 mb-4'>
            <div className='services__box '>
              <img
                src='/svgs/deliveries.svg'
                alt='deliveries'
                className='img-fluid'
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                sunt, pariatur dolores molestiae autem veniam ratione numquam,
                eligendi impedit illum ut, rerum quaerat fugit alias. Dolorum
                pariatur commodi blanditiis eveniet.
              </p>
            </div>
          </div>
          <div className='col-xs-12 col-md-4 mb-4'>
            <div className='services__box '>
              <img
                src='/svgs/container-ship.svg'
                alt='deliveries'
                className='img-fluid'
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                sunt, pariatur dolores molestiae autem veniam ratione numquam,
                eligendi impedit illum ut, rerum quaerat fugit alias. Dolorum
                pariatur commodi blanditiis eveniet.
              </p>
            </div>
          </div>
          <div className='col-xs-12 col-md-4 mb-4'>
            <div className='services__box '>
              <img
                src='/svgs/aircraft.svg'
                alt='deliveries'
                className='img-fluid'
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                sunt, pariatur dolores molestiae autem veniam ratione numquam,
                eligendi impedit illum ut, rerum quaerat fugit alias. Dolorum
                pariatur commodi blanditiis eveniet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
 
);

export default Services;
