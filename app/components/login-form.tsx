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
import { platformColors } from "~/lib/colors"

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
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">
                  <IconBrandTwitch className="stroke-twitch" />
                  Login with Twitch
                </Button>
                <Button disabled variant="outline" className="w-full">
                  <IconBrandYoutube className="stroke-youtube" />
                  Login with Youtube
                </Button>
                <Button disabled variant="outline" className="w-full">
                  <IconBrandKick className="stroke-kick" />
                  Login with Kick
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
