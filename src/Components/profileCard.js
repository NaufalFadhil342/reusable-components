import React from 'react';

export const ProfileCard = (props) => {
  const { title, handle, image } = props;

  return (
    <div className="profileCard">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className='title'>
        <h3>{title}</h3>
        <p>{handle}</p>
        </div>
        <br />
        <div className='desc'>
        <p>Vivamus pellentesque libero at turpis convallis imperdiet. Donec condimentum 
        quis magna eget aliquam. Suspendisse non odio at nisi convallis 
        tincidunt ac quis lacus.</p>
        </div>
      </div>
    </div>
  );
};
