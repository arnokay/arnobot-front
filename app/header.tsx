import { Link, useLocation } from "react-router";
import AppName from "./components/app-name";
import { cn } from "./lib/utils";

type HeaderProps = {
  className?: string;
}

export default function Header({ children, className }: React.PropsWithChildren<HeaderProps>) {
  const location = useLocation();
  const isDashboard = location.pathname.includes('dashboard');

  return (<header className={cn("border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link to={isDashboard ? "/dashboard" : "/"}>
        <div className="flex items-center gap-2">
          <AppName />
        </div>
      </Link>
      {children}
    </div>
  </header>)

}
