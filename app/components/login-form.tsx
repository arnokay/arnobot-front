import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { IconBrandYoutube, IconBrandKick, IconBrandTwitch } from "@tabler/icons-react"
import { authService } from "~/services/auth-service"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome</CardTitle>
          <CardDescription>
            Login with your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <a href={authService.getProviderAuthURL("twitch")} target='_self' rel='noopener noreferrer'>
                <Button variant="outline" className="w-full">
                  <IconBrandTwitch className="stroke-twitch" />
                  login with twitch
                </Button>
              </a>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  coming soon
                </span>
              </div>
              <Button disabled variant="outline" className="w-full">
                <IconBrandYoutube className="stroke-youtube" />
                login with youtube
              </Button>
              <Button disabled variant="outline" className="w-full">
                <IconBrandKick className="stroke-kick" />
                login with kick
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div >
  )
}
