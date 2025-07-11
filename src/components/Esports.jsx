import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import './Esports.css';

import FC25 from '../assets/fc25.jpg';     
import Rainbow from '../assets/rainbow7.jpg';   
import Pubg from '../assets/pubg5.jpg';     
import Cod from '../assets/cod.jpg';     


import TitleBg from '../assets/title-bg4.webp';      


const gameCards = [
  { title: 'Rainbow Six', image: Rainbow, path: '/teams/rainbow6' },
  { title: 'COD', image: Cod, path: '/teams/cod' },
  { title: 'PUBG', image: Pubg, path: '/teams/pubg' },
  { title: 'FC25', image: FC25, path: '/teams/fc25' },
  
];

const Esports = () => {
  const navigate = useNavigate();

  return (
    <section className="esports-overview" id="esports">
      <div className="title-wrapper">
        <img src={TitleBg} alt='' className="title-image" />
        <div className="title-overlay">
          <h3>Rage Teams</h3>
        </div>
      </div>

      <div className="game-card-grid">
{gameCards.map((card, index) => (
  <Tilt
    key={index}
    options={{ max: 25, scale: 1.05, speed: 400 }}
    className="tilt-wrapper"
  >
    <div className="game-card" onClick={() => navigate(card.path)}>
      <img src={card.image} alt={card.title} className="game-image" />
    </div>
  </Tilt>
))}

      </div>
    </section>
  );
};

export default Esports;
