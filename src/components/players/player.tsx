
import { use, useState, type Dispatch, type SetStateAction } from "react";
import type CricketPlayer from "../playertype";
import AvailablePlayer from "../availableplayer";
import SelectedPlayer from "./selectedplayer";

type PlayerProps = {
  playerPromise: Promise<CricketPlayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: CricketPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<CricketPlayer[]>>;
};

const Player = ({
  playerPromise,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: PlayerProps) => {
  const players = use(playerPromise);

  const [button, setButton] = useState("AvailablePlayer");
  const handleButtonClick = (type: "AvailablePlayer" | "SelectedPlayer") => {
    setButton(type);
  };

  return (
    <>
      <div className="flex justify-end items-end gap-4 my-4">
        <button
          onClick={() => handleButtonClick("AvailablePlayer")}
          className={`btn ${button === "AvailablePlayer" ? "btn-primary" : "btn-secondary"} rounded-r-none`}
        >
          Available players
        </button>
        <button
          onClick={() => handleButtonClick("SelectedPlayer")}
          className={`btn ${button === "SelectedPlayer" ? "btn-primary" : "btn-secondary"} rounded-l-none`}
        >
          Selected players
        </button>
      </div>
      {button === "AvailablePlayer" ? (
        <AvailablePlayer
          player={players}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ) : (
        <SelectedPlayer
          Player={selectedPlayers}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      )}
    </>
  );
};

export default Player;
