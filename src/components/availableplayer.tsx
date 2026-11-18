import type { Dispatch, SetStateAction } from "react";
import PlayerCard from "./players/playercard";
import type CricketPlayer from "./playertype";

interface AvailablePlayerProps {
  player: CricketPlayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: CricketPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<CricketPlayer[]>>;
}

const AvailablePlayer = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: AvailablePlayerProps) => {
  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="mb-6 text-2xl font-bold">Available Players</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {player.map((singlePlayer, index) => (
          <PlayerCard
            key={singlePlayer.playerName ?? index}
            player={{ ...singlePlayer, id: singlePlayer.playerName ?? index }}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ))}
      </div>
    </section>
  );
};

export default AvailablePlayer;
