import Nav from "./components/nav"
import Banner from "./components/banner"
import Player from "./components/players/player"
import { Suspense, useState } from "react"
import type CricketPlayer from "./components/playertype"

const playerFetch = async (): Promise<CricketPlayer[]> => {
  const res = await fetch("/data.json")
  if (!res.ok) {
    throw new Error(`Failed to load players: ${res.status} ${res.statusText}`)
  }

  const data = (await res.json()) as CricketPlayer[]
  return data
}

function App() {
  const [coin, setCoin] = useState(5000)
  const [selectedPlayers, setSelectedPlayers] = useState<CricketPlayer[]>([])
  const [playerPromise] = useState<Promise<CricketPlayer[]>>(playerFetch());

  return (
    <>
      <Nav coin={coin} />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Player
          playerPromise={playerPromise}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      </Suspense>
    </>
  )
}

export default App
