import React from 'react';
import { useParams } from 'react-router-dom';
import teamData from '../data/teamData';
import './Esports.css';

const TeamPage = () => {
  const { teamId } = useParams();
  const team = teamData[teamId];

  if (!team) {
    return <div className="not-found">Team not found.</div>;
  }

  return (
    <section className="team-section">
      <h2 className="team-title">{team.name} Roster</h2>
      <div className="player-grid">
        {team.players.map((player, index) => (
          <div key={index} className="player-card">
            <div className="player-image-placeholder">IMG</div>
            <h3>{player.nickname}</h3>
            <p className="real-name">{player.name}</p>
            <p className="role">{player.role}</p>
            <span className="country">{player.country}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
