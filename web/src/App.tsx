import { useEffect, useState } from 'react';

import { GameCard } from './components/GameCard';
import { CreateAdCard } from './components/CreateAdCard';

import logoImg from './assets/logo.svg';

import './styles/main.css';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data => {
        setGames(data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo do nlw e-sports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-esports-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      {/* Carousel */}
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => (
          <GameCard
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      {/* Box */}
      <CreateAdCard />
    </div>
  );
}

export default App;
