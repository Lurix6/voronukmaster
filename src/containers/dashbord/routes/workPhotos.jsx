import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default ({...othherProps}) => {
  const [workPhoto, setWorkPhoto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://us-central1-kurenar-vodar.cloudfunctions.net/main/getWorkImg',
      );
      setWorkPhoto(result.data);
    };
    fetchData();
  }, []);


  return(
    <div className="base">
      <div className="base_wrapper">
        <div className="base_main_container">
          {
            workPhoto.map((item, index) => (
              <div key={index} className="grid_item_wrapper">
                <div className="grid_item">
                  <div className="preview">
                    <img src={item.imgSrc } />
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