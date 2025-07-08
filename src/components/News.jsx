import React from "react";
import './News.css';

import Watermark from '../assets/logo-bg.png'; 

import TopLeftImage from '../assets/image 10.png'; // replace with actual image
import TopRightImage from '../assets/image 11.png';     // replace with actual image
import BottomRightImage from '../assets/image 12.png';     // replace with actual image
import MainImage from '../assets/image 13.png';      // replace with actual image

const News = () => {
  return (
    <section className="news-container" id="news">
      <div className="news-content">
        <h2 className="news-header">Rage Esports News</h2>
        <div className="news-grid">

          {/* Left column */}
          <div className="left-column">
            <img src={TopLeftImage} alt="card" className="top-left-image" />
            <h3 className="news-title">Imp 1</h3>
            <p className="news-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt est reiciendis? Labore sed ex, veniam, at doloribus temporibus, distinctio incidunt quis voluptates alias dolorum!
            </p>
            <hr />
            <h3 className="news-title">Lorem, ipsum dolor.</h3>
            <p className="news-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi explicabo, natus quam voluptatum praesentium ipsa? Iusto exercitationem numquam doloremque! Rem aut consequuntur deserunt sequi iusto.            
            </p>
          </div>

          {/* Center column */}
          <div className="center-column">
            <img src={MainImage} alt="main" className="main-image" />
            <h3 className="news-title">Lorem ipsum dolor sit amet.</h3>
            <p className="news-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit hic voluptates dicta inventore enim doloribus, iusto recusandae nobis ducimus amet excepturi consectetur a cum eaque distinctio non corporis facilis porro earum fuga esse! Adipisci reprehenderit quae velit. Neque, consectetur nostrum.
            </p>
          </div>

          {/* Right column */}
          <div className="right-column">
            <img src={TopRightImage} alt="side1" className="top-right-image" />
            <hr />

            <img src={BottomRightImage} alt="side2" className="bottom-right-image" />
            <h3 className="news-title">Lorem ipsum dolor sit amet.</h3>
            <p className="news-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad dignissimos autem, consequuntur mollitia sed earum quod illum tenetur quibusdam.            
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default News;
