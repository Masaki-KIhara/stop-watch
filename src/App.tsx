import { useState } from "react";

function App() {
  const [second, setSecond] = useState<string>("00");
  const [min, setMin] = useState<string>("00");
  const [hour, setHour] = useState<string>("00");

  const startTime = async () => {
    let secondOnePlace = Number(min.slice(1, 2));
    let secondTenPlace = Number(min.slice(0, 1));
    let totalSecond = 0;
    setInterval(() => {
      if (totalSecond < 59) {
        totalSecond++;
        secondOnePlace++;
        if (secondOnePlace > 9) {
          secondTenPlace++;
          secondOnePlace = 0;
        }
      }
      setSecond(`${secondTenPlace}${secondOnePlace}`);
    }, 1000);
  };

  console.log(second);

  const stopTime = () => {
    console.log("stop");
  };

  const resetTime = () => {
    console.log("reset");
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
