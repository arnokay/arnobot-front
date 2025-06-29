import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { IconArrowRight, IconBrandTwitch, IconBrandKick } from "@tabler/icons-react"
import { Link } from "react-router"
import AppName from "~/components/app-name"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
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
              <Link to="/auth">
                Get Started
                <IconArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
