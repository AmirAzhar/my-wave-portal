import "./App.css";

function App() {
  const wave = () => {};
  return (
    <div className="p-4">
      <div className="flex flex-col text-center justify-center item-center gap-y-4">
        <div className="text-3xl font-bold ">👋 Hey there!</div>

        <div className="text-xl ">
          I am Amir! Connect your Ethereum wallet and wave at me!
        </div>
        <div>
          <button
            className="p-2 w-fit bg-green-500 text-white rounded-md transition duration-300 hover:bg-green-700"
            onClick={wave}
          >
            Wave at Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
