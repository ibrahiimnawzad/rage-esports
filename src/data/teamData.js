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

//PUBG
import pubg1 from '../assets/pubg 1.png'; 
import pubg2 from '../assets/pubg 2.png'; 
import pubg3 from '../assets/pubg 3.png'; 
import pubg4 from '../assets/pubg 4.png'; 
import pubg5 from '../assets/pubg 5.png'; 


const teamData = {
  pubg: {
    name: 'pubg',
    image: Pubg,
    players: [
      { name: 'Johan Meyer', nickname: 'Sn1perX', role: 'Scout', country: '🇩🇪', image :pubg1},
      { name: 'Ali Mahmoud', nickname: 'Smokez', role: 'Support', country: '🇮🇶', image :pubg2 },
      { name: 'Tariq Faisal', nickname: 'Clutcher', role: 'Fragger', country: '🇯🇴', image :pubg3 },
      { name: 'Tariq Faisal', nickname: 'Clutcher', role: 'Fragger', country: '🇯🇴', image :pubg4 },
      { name: 'Tariq Faisal', nickname: 'Clutcher', role: 'Fragger', country: '🇯🇴', image :pubg5 },

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
  rainbow: {
    name: 'rainbow',
    image: Rainbow,
    players: [
      { name: 'Kyle Wren', nickname: 'SilentFox', role: 'Entry', country: '🇺🇸' },
      { name: 'Victor Leblanc', nickname: 'ReconV', role: 'Intel', country: '🇫🇷' },
      { name: 'Rami Al-Hassan', nickname: 'Breaker', role: 'Breacher', country: '🇸🇾' },
      { name: 'Rami Al-Hassan', nickname: 'Breaker', role: 'Breacher', country: '🇸🇾' },
      { name: 'Rami Al-Hassan', nickname: 'Breaker', role: 'Breacher', country: '🇸🇾' },

    ],
  },
};

export default teamData;
