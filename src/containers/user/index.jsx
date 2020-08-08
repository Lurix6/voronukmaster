import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/';
import Location from '../../assets/img/location.svg';
import Configuration from '../../assets/img/conf.svg';
import ViewIcon from '../../assets/img/eyeFull.svg';
import { PlusOutlined, InstagramOutlined } from '@ant-design/icons';
import Header from '../../assets/img/header.jpg';
import SidebarBox from '../../components/sidebarBox/';
import Tag from '../../components/uielements/tag';
import './style.scss';

class User extends Component {

  render() {

    return (
      <div className="user-page">
        <header style={{background: `#000 url(${Header})`}} className="user-header">
          <div className="header__content">
            <div className="avatar">
              <img src={'https://avatarfiles.alphacoders.com/849/84917.jpg' }>
              </img>
            </div>
            <div className="meta">
              <div className="name">Team Hushkal Studios</div>
              <div className="location"><Location />UKR</div>
              <div className="about">Solo asset store creator</div>
              <div className="actions">
                <Button className="fallowBtn">
                  <PlusOutlined />
                  Follow
                </Button> 
                <Button>
                  <Configuration />
                </Button>
              </div>
              <div className="stats">
                <Link><span>53</span> Followers</Link>
                <Link><span>53</span> Followings</Link>
              </div>
            </div>
            <div className="social">
              <Button>
                <InstagramOutlined />
              </Button>
              <Button>
                <InstagramOutlined />
              </Button>
            </div>
          </div>
        </header>
        <div className="user-page__container">
          <ul>
            <li className="active" >SUMMARY</li>
            <li>8 MODELS</li>
            <li>STORE</li>
            <li>COLLECTIONS</li>
            <li>33 LIKES</li>
          </ul>
        </div>
        <section className="user-page__content">
          <div className="columns-wrapper">
            <div className="left">
              <SidebarBox>
                <h3>About</h3>
                <p>Hi I am an experienced 3d artist in the uk. </p>
                <p>I am here to make art that make me smile and hopefully art that people and use and enjoy.</p>
                <h3>Category</h3>
                <p>Individual / Artist</p>
                <h3>Website</h3>
                <p>https://www.artstation.com/krishammes</p>
                <h3>Member since</h3>
                <p>August 14th 2017</p>
              </SidebarBox>
              <SidebarBox>
                <h3>stats</h3>
                <p><ViewIcon /><span>11.3k</span> views</p>
                <p><ViewIcon /><span>242</span> likes</p>
              </SidebarBox>
              <SidebarBox>
                <h3>Skils</h3>
                <p>
                  <Tag>3D Coat</Tag>
                  <Tag>Blender</Tag>
                  <Tag>Photoshop</Tag>
                  <Tag>ZBrush</Tag>
                </p>
              </SidebarBox>
            </div>
            <div className="right">
              <div className="models">
                <div className="info">

                </div>
                <div className="models-list">

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default User;