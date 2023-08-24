type Props = {
  buttonName: string;
  timerFn: () => void;
};

const colorList: Array<[string, string]> = [
  ["START", "bg-green-400"],
  ["STOP", "bg-red-500"],
  ["RESET", "bg-yellow-300"],
];

const checkColorStyle = (buttonName: string) => {
  const map = new Map<string, string>(colorList);
  return map.get(buttonName);
};

export const Button = ({ buttonName, timerFn }: Props) => {
  return (
    <button
      className={`w-[200px] text-3xl p-[10px] rounded ${checkColorStyle(
        buttonName
      )}`}
      onClick={timerFn}
    >
      {buttonName}
    </button>
  );
};
