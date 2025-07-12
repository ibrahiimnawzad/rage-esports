import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import teamData from '../data/teamData';
import './Esports.css';

import codMobileBanner from '../assets/cod-banner1.jpg';


const TeamPage = () => {
  const { teamId } = useParams();
  const team = teamData[teamId];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.backgroundImage = 'none';

    return () => {
      document.body.style.backgroundColor = '#760012';
      document.body.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/otis-redding.png")';
    };
  }, []);

  if (!team) {
    return <div className="not-found">Coming Soon</div>;
  }

  return (
    <section className={`team-section ${team.name}-theme`}>
{team.name === 'cod' && isMobile ? (
  <img className="team-banner" src={codMobileBanner} alt="COD mobile banner" />
) : (
  <img className="team-banner" src={team.image} alt={`${team.name} banner`} />
)}
 
      <div className="player-grid">
        {team.players.map((player, index) => (
          <div key={index} className="player-card">
            <div className="player-image-placeholder"><img className="player-image-placeholder" src={player.image} alt="" /></div>
            <h3>{player.nickname}</h3>
            <span className="country">{player.country}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
