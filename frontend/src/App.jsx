import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const wave = () => {};

  useEffect(() => {
    checkIfWalletIsConnected();
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
            onClick={wave}
          >
            Wave at Me
          </button>
          {!currentAccount && (
            <button
              className="p-2 w-fit bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-700"
              onClick={connectWallet}
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
