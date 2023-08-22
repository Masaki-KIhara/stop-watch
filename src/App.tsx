import { useState } from "react";

function App() {
  const [second, setSecond] = useState<string>("55");
  const [min, setMin] = useState<string>("59");
  const [hour, setHour] = useState<string>("00");

  const startTime = async () => {
    let secondOnePlace = Number(second.slice(1, 2));
    let secondTenPlace = Number(second.slice(0, 1));
    let minOnePlace = Number(min.slice(1, 2));
    let minTenPlace = Number(min.slice(0, 1));
    let hourOnePlace = Number(hour.slice(1, 2));
    let hourTenPlace = Number(hour.slice(0, 1));
    setInterval(() => {
      if (`${secondTenPlace}${secondOnePlace}` < "59") {
        secondOnePlace++;
        if (secondOnePlace > 9) {
          secondTenPlace++;
          secondOnePlace = 0;
        }
      } else if (`${secondTenPlace}${secondOnePlace}` === "59") {
        secondTenPlace = 0;
        secondOnePlace = 0;
        minOnePlace++;
        if (minOnePlace > 9) {
          minTenPlace++;
          minOnePlace = 0;
        }
      }
      if (`${minTenPlace}${minOnePlace}` > "59") {
        minTenPlace = 0;
        minOnePlace = 0;
        hourOnePlace++;
        if (hourOnePlace > 9) {
          hourTenPlace++;
          hourOnePlace = 0;
        }
      }
      setSecond(`${secondTenPlace}${secondOnePlace}`);
      setMin(`${minTenPlace}${minOnePlace}`);
      setHour(`${hourTenPlace}${hourOnePlace}`);
    }, 1000);
  };

  const stopTime = () => {
    console.log("stop");
  };

  const resetTime = () => {
    setSecond("00");
    setMin("00");
    setHour("00");
  };

  return (
    <>
      <div className="flex justify-center bg-slate-500 p-[20px]">
        <h1 className="text-3xl text-white">stop watch</h1>
      </div>
      <p className="text-center pt-10 text-9xl">{`${hour}:${min}:${second}`}</p>
      <div className="flex justify-center pt-10 gap-10">
        <button
          className="w-[200px] text-3xl bg-green-400 p-[10px] rounded"
          onClick={startTime}
        >
          START
        </button>
        <button
          className="w-[200px] text-3xl bg-red-500 rounded"
          onClick={stopTime}
        >
          STOP
        </button>
        <button
          className="w-[200px] text-3xl bg-yellow-300 rounded"
          onClick={resetTime}
        >
          RESET
        </button>
      </div>
    </>
  );
}

export default App;
