import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { IconArrowRight, IconBrandTwitch, IconBrandKick } from "@tabler/icons-react"
import { Link } from "react-router"
import AppName from "~/components/app-name"
import { useEffect, useState } from "react"
import { getSessionToken } from "~/lib/session"

export default function LandingPage() {
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
        <div className="text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            early alpha
          </Badge>
          <h1 className="text-6xl md:text-7xl mb-8 leading-tight">
            <AppName />
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Right now only support Kick and Twitch, Youtube is cancer to implement so i will do this later.
            <br />🍺~(￣▽￣)~💅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              {
                isLoggedIn ? (
                  <Link to="/dashboard">
                    Dashboard
                    <IconArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                ) :
                  (
                    <Link to="/auth">
                      Get Started
                      <IconArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  )
              }
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
              <Link to="/commands">View Commands</Link>
            </Button>
          </div>

          {/* Platform Icons */}
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <IconBrandTwitch className="stroke-twitch h-6 w-6" />
              <span className="text-sm font-medium">Twitch</span>
            </div>
            <div className="flex items-center gap-2">
              <IconBrandKick className="stroke-kick h-6 w-6" />
              <span className="text-sm font-medium">Kick</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
