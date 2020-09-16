import React, { useEffect } from 'react';
import './vseOtveti.scss'
import moment from 'moment'

export default ({comments, ...othherProps}) => {

  useEffect(() => {
    document.querySelector('.scrollBox').scrollTo(0, 0);
  }, []);
  return(
    <div className="vse_otzivi">
      <div className="base_wrapper">
        <div className="base_heder">
          <h1>Váše odpovede</h1>
        </div>
        <div className="base_main_container">
          {
            comments.map((item, index) => (
              <div key={index} className="grid_item_wrapper">
                <div className="grid_item">
                  <div className="grid_item__header">
                    <p>
                      { item.name }
                    </p>
                    <p>
                      { moment.unix(item.date._seconds).format('DD-MM-YYYY') }
                    </p>
                  </div>
                  <div className="grid_item__text">
                    {item.text}
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