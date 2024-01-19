import React from 'react';
import { Button, Carousel, Image, Input } from 'antd';
import SearchAppBar from './Navbar';


function Home() {

  return (
    <div>
      <SearchAppBar />
      <div>
        <div className='homeImage'>
          <div className='inputBox'>
          <Input placeholder='Search'/>
          <Button>Search</Button>
          </div>
        </div>
      </div>
      <Carousel autoplay>
        <div>
          <h3>
            <Image
              src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg"
            />
          </h3>
        </div>
        <div>
          <h3>
            <Image
              src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg"
            />
          </h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>

    </div>
  )
}

export default Home;