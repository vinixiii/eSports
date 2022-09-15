import { MagnifyingGlassPlus } from 'phosphor-react';

import logoImg from './assets/logo.svg';
import './styles/main.css';

function App() {
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
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game1.png" alt="Imagem do game um" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game2.png" alt="Imagem do game dois" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game3.png" alt="Imagem do game três" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game4.png" alt="Imagem do game quatro" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game5.png" alt="Imagem do game cinco" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game6.png" alt="Imagem do game seis" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>

      {/* Box */}
      <div className="pt-1 mt-8 bg-esports-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
