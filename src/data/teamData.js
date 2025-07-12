import Cod from '../assets/cod-banner.jpg';     
import Fc25 from '../assets/fc25-banner2.jpg';     
import Rainbow from '../assets/r6-banner13.jpg';     
import Pubg from '../assets/pubg-banner4.jpg'; 

// Players:
import cod1 from '../assets/cod1.jpg'; 
import cod2 from '../assets/cod2.jpg'; 
import cod3 from '../assets/cod3.jpg'; 
import cod4 from '../assets/cod4.jpg'; 
import cod5 from '../assets/cod5.jpg'; 

const teamData = {
  pubg: {
    name: 'pubg',
    image: Pubg,
    players: [
      { name: 'Johan Meyer', nickname: 'Sn1perX', role: 'Scout', country: '🇩🇪' },
      { name: 'Ali Mahmoud', nickname: 'Smokez', role: 'Support', country: '🇮🇶' },
      { name: 'Tariq Faisal', nickname: 'Clutcher', role: 'Fragger', country: '🇯🇴' },
    ],
  },
    cod: {
    name: 'cod',
    image: Cod,
    players: [
      { nickname: 'Ace', country: 'IQ', image: cod1 },
      { nickname: 'Ali Hanzo', country: '🇮🇶', image: cod2 },
      { nickname: 'ImJustBetter', country: 'IQ', image: cod3 },      
      { nickname: 'Ghadeer', country: 'IQ', image: cod4 },
      { nickname: 'Yousef', country: 'IQ', image: cod5 },
    ],
  },
  fc25: {
    name: 'FC25',
    image: Fc25,
    players: [
      { name: 'Carlos Mendes', nickname: 'Strik3r', role: 'Forward', country: '🇵🇹' },
      { name: 'Omar Said', nickname: 'MidKing', role: 'Midfielder', country: '🇪🇬' },

    ],
  },
  // rainbow6: {
  //   name: 'Rainbow',
  //   image: Rainbow,
  //   players: [
  //     { name: 'Kyle Wren', nickname: 'SilentFox', role: 'Entry', country: '🇺🇸' },
  //     { name: 'Victor Leblanc', nickname: 'ReconV', role: 'Intel', country: '🇫🇷' },
  //     { name: 'Rami Al-Hassan', nickname: 'Breaker', role: 'Breacher', country: '🇸🇾' },
  //     { name: 'Rami Al-Hassan', nickname: 'Breaker', role: 'Breacher', country: '🇸🇾' },
  //     { name: 'Rami Al-Hassan', nickname: 'Breaker', role: 'Breacher', country: '🇸🇾' },

  //   ],
  // },
};

export default teamData;
