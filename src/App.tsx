import { Button } from "./components/button";
import { useTimer } from "./hooks/useTimer";

function App() {
  const { second, min, hour, startTime, stopTime, resetTime } = useTimer();
  return (
    <>
      <div className="flex justify-center bg-slate-500 p-[20px]">
        <h1 className="text-3xl text-white">stop watch</h1>
      </div>
      <p className="text-center pt-10 text-9xl">{`${hour}:${min}:${second}`}</p>
      <div className="flex justify-center pt-10 gap-10">
        <Button buttonName={"START"} timerFn={startTime} />
        <Button buttonName={"STOP"} timerFn={stopTime} />
        <Button buttonName={"RESET"} timerFn={resetTime} />
      </div>
    </>
  );
}

export default App;
