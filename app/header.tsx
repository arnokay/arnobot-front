import { IconRobot } from "@tabler/icons-react";
import { Link } from "react-router";
import config from "./config";
import AppName from "./components/app-name";

export default function Header({ children }: React.PropsWithChildren) {
  return (<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link to="/">
        <div className="flex items-center gap-2">
          <AppName />
        </div>
      </Link>
      {children}
    </div>
  </header>)

}
