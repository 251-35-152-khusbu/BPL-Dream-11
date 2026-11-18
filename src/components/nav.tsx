
import logo from "../assets/logo.png";
import { HiCurrencyDollar } from "react-icons/hi";

const Nav = ({ coin }: { coin: number }) => {
  return (
    <nav className="bg-red-100">
      <div className="container mx-auto grid grid-cols-3 items-center justify-between text-center">
        <img src={logo} alt="BPL Dream 11 logo" />

        <ul className="flex gap-3.5">
          <li>Home</li>
          <li>Feature</li>
          <li>Players</li>
          <li>Schedule</li>
        </ul>

        <h2 className="flex items-center justify-center gap-2 text-2xl font-bold">
          <HiCurrencyDollar />
          {coin}
        </h2>
      </div>
    </nav>
  );
};

export default Nav;