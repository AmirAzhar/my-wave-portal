import "./App.css";
import { useEffect, useState } from "react";

import {
  checkIfWalletIsConnected,
  connectWallet,
} from "./lib/walletConnection";

import { addNewSong } from "./lib/sing";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");

  const connectWalletHandler = () => {
    connectWallet().then((res) => {
      if (res) setCurrentAccount(res);
    });
  };

  useEffect(() => {
    checkIfWalletIsConnected().then((res) => {
      if (res) setCurrentAccount(res);
    });
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col text-center justify-center item-center gap-y-4">
        <div className="text-3xl font-bold ">👋 Hey there!</div>

        <div className="text-xl ">
          I am Amir! Connect your Ethereum wallet and wave at me!
        </div>
        {currentAccount && (
          <div className="italic text-sm text-gray-400">{`Wallet Connected: ${currentAccount}`}</div>
        )}
        <div className="flex item-center justify-center gap-3">
          <button
            className="p-2 w-fit bg-green-500 text-white rounded-md transition duration-300 hover:bg-green-700"
            onClick={addNewSong}
          >
            Add Song!
          </button>
          {!currentAccount && (
            <button
              className="p-2 w-fit bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-700"
              onClick={connectWalletHandler}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
