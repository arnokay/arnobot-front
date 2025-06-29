import config from "~/config";

export default function AppName() {
  const appName = config.app.name;
  let firstPart: string = '';
  let secondPart: string = '';
  if (appName.length <= 3) {
    secondPart = appName
  } else {
    firstPart = appName.slice(0, appName.length - 3)
    secondPart = appName.slice(-3)
  }
  return (
    <span className="font-bold">
      {firstPart}<span className="text-primary">{secondPart}<span className="animate-[blink_2s_ease-in-out_infinite] [animation-fill-mode:both]">_</span></span>
    </span>
  );
}
