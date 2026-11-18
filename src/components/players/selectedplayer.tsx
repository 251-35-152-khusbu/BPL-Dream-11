import type { Dispatch, SetStateAction } from "react";
import type CricketPlayer from "../playertype";

interface SelectedPlayerProps {
  Player: CricketPlayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers?: CricketPlayer[];
  setSelectedPlayers?: Dispatch<SetStateAction<CricketPlayer[]>>;
}

const SelectedPlayer = ({ Player, coin, setCoin }: SelectedPlayerProps) => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="mb-4 text-2xl font-bold">Selected Players</h2>
      <p className="mb-6">Coins remaining: {coin}</p>

      {Player.length === 0 ? (
        <p>No players selected.</p>
      ) : (
        <ul className="space-y-2">
          {Player.map((player, index) => (
            <li key={`${player.playerName}-${index}`} className="rounded-lg border p-3">
              {player.playerName}
              {player.Playertype ? ` - ${player.Playertype}` : ""}
              {player.Playing ? ` (${player.Playing})` : ""}
            </li>
          ))}
        </ul>
      )}

      <button type="button" onClick={() => setCoin(5000)} className="btn btn-secondary mt-6">
        Reset Coins
      </button>
    </div>
  );
};

export default SelectedPlayer;