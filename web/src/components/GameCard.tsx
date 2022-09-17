export interface GameCardProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameCard({ bannerUrl, title, adsCount }: GameCardProps) {
  const adsText = adsCount > 1 ? 'anúncios' : 'anúncio';

  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt={`Imagem que representa o jogo ${title}`} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0 left-0">
        <strong className="font-bold text-white block">{title}</strong>

        <span className="text-zinc-300 text-sm block">
          {adsCount} {adsText}
        </span>
      </div>
    </a>
  );
}
