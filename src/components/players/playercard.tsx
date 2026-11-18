
import { memo } from "react";
import { FaArrowRight } from "react-icons/fa6";
import type CricketPlayer from "../playertype";
import { toast } from "react-toastify";

type Player = CricketPlayer & {
  id?: string | number;
  playerName: string;
  image: string;
  Playing: string;
  Playertype: string;
  battingstyle: string;
  bowlingstyle: string;
  price: number;
};

const priceFormatter = new Intl.NumberFormat("en-BD", {
  maximumFractionDigits: 0,
});

const PlayerCard = memo(function PlayerCard({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: {
  player: Player;
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
  selectedPlayers: CricketPlayer[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<CricketPlayer[]>>;
}) {

  const {
    playerName,
    image,
    Playing,
    Playertype,
    battingstyle,
    bowlingstyle,
    price,
  } = player;

  const isSelected = selectedPlayers.some(
    (selectedPlayer) => selectedPlayer.playerName === playerName
  );
  const isAvailable = true;

  const handleSelectPlayer = () => {
    if (!isAvailable) {
      alert("Player is not available for selection.");
      return;
    }

    if (isSelected) {
      return;
    }

    const newPrice = coin - price;
    if (newPrice >= 0) {
      setSelectedPlayers((currentPlayers) => [...currentPlayers, player]);
      setCoin(newPrice);
      toast.success(`You have selected ${playerName}. Remaining coins: ${newPrice}`);
    } else {
      toast.error("Insufficient coins to select this player.");
    }
  };
  return (
    <article className="
      group overflow-hidden rounded-2xl
      border border-base-300 bg-base-100
      shadow-sm transition-all duration-300
      hover:-translate-y-2 hover:shadow-xl
    ">

      {/* Image Section */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={`${playerName} - cricket player`}
          loading="lazy"
          decoding="async"
          className="
            h-72 w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Image Gradient */}
        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/70 via-transparent to-transparent
        " />

        {/* Availability */}
        <span className="
          absolute right-4 top-4
          rounded-full bg-success px-3 py-1
          text-xs font-semibold text-success-content
        ">
          {isAvailable ? "Available" : "Unavailable"}
        </span>

        {/* Player Name */}
        <div className="absolute bottom-4 left-4 text-white">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/70">
            {Playertype}
          </p>

          <h3 className="text-2xl font-bold">
            {playerName}
          </h3>
        </div>

      </div>

      {/* Card Content */}
      <div className="space-y-5 p-5">

        {/* Player Information */}
        <div className="flex items-center justify-between gap-3">

          <div>
            <p className="text-xs text-base-content/50">
              Playing Status
            </p>
            <p className="font-semibold">
              {Playing}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-base-content/50">
              Player Type
            </p>
            <p className="font-semibold">
              {Playertype}
            </p>
          </div>

        </div>

        <div className="divider my-0" />

        {/* Cricket Details */}
        <div className="grid grid-cols-2 gap-4">

          <div>
            <p className="mb-1 text-xs text-base-content/50">
              Batting Style
            </p>
            <p className="text-sm font-semibold">
              {battingstyle}
            </p>
          </div>

          <div>
            <p className="mb-1 text-xs text-base-content/50">
              Bowling Style
            </p>
            <p className="text-sm font-semibold">
              {bowlingstyle}
            </p>
          </div>

        </div>

        <div className="divider my-0" />

        {/* Price and Action */}
        <div className="flex items-center justify-between gap-3">

          <div>
            <p className="text-xs text-base-content/50">
              Player Price
            </p>

            <h4 className="text-2xl font-extrabold text-primary">
              ৳{priceFormatter.format(price)}
            </h4>
          </div>

          <button
            type="button"
            className="
              btn btn-primary btn-sm rounded-xl
              gap-2 transition-all
              hover:gap-3
            "
            onClick={handleSelectPlayer}
            disabled={isSelected}
          >
            {isSelected ? "Selected" : "Choose Player"}
            {!isSelected && <FaArrowRight aria-hidden="true" />}
          </button>

        </div>

      </div>
    </article>
  );
});

PlayerCard.displayName = "PlayerCard";

export default PlayerCard;
