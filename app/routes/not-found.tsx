import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { IconRobot, IconHome, IconSearch } from "@tabler/icons-react"
import { Link } from "react-router"
import { useEffect, useState } from "react"
import { getSessionToken } from "~/lib/session"

export default function NotFound() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const session = getSessionToken();
    setIsLoggedIn(!!session);

  }, [isLoggedIn]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-20 left-20 w-60 h-60 bg-primary/5 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 leading-none">404</h1>
            <div className="relative -mt-8">
              <IconRobot className="h-16 w-16 mx-auto text-primary animate-bounce" />
            </div>
          </div>

          <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Page Not There</CardTitle>
              <CardDescription className="text-lg">
                Oops! saawwwyyy, seems like i routed you in some deep parts, there is nothing here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to={isLoggedIn ? "/dashboard" : "/"}>
                    <IconHome className="mr-2 h-5 w-5" />
                    {isLoggedIn ? "Dashboard" : "Home"}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/commands">
                    <IconSearch className="mr-2 h-5 w-5" />
                    Browse Commands
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
