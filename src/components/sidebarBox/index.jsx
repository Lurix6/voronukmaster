import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SidebarBox = ({children}) => {
  return (
    <div className="sidebar-box">
      { children }
    </div>
  )
};

SidebarBox.propTypes = {

};

export default SidebarBox;
