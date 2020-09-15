import React from 'react';

export default ({...othherProps}) => {

  const photos = [
    {
    img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />
    }
]

  return(
    <div className="base">
      <div className="base_wrapper">
        <div className="base_main_container">
          {
            photos.map((item, index) => (
              <div key={index} className="grid_item_wrapper">
                <div className="grid_item">
                  <div className="preview">
                    { item.img }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}