import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { IconClock, IconConfetti, IconActivity, type TablerIcon } from "@tabler/icons-react"
import Header from "~/header"
import { Link } from "react-router"
import config from "~/config"

type Command = {
  name: string;
  description?: string;
  usage?: string;
  cooldown: string;
  permission: string;
  example?: string;
}

type CommandGroup = {
  name: string;
  icon: TablerIcon;
  commands: Command[];
}

export default function CommandsPage() {
  const commandCategories: CommandGroup[] = [
    {
      name: "Utility",
      icon: IconActivity,
      commands: [
        {
          name: "!ping",
          description: "Check if bot is up and running",
          cooldown: "5s",
          permission: "Everyone",
        },
      ],
    },
    {
      name: "Fun",
      icon: IconConfetti,
      commands: [
        {
          name: "!dice",
          description: "Roll a dice (1-6)",
          cooldown: "5s",
          permission: "Everyone",
        },
        {
          name: "!8ball",
          description: "Ask the magic 8-ball a question",
          usage: "!8ball [question]",
          cooldown: "5s",
          permission: "Everyone",
          example: "!8ball Will I win today?",
        },
        {
          name: "!coin",
          description: "toss a coin",
          cooldown: "5s",
          permission: "Everyone",
        },
        {
          name: "!gamba",
          description: "play a little roulette",
          cooldown: "5s",
          permission: "Everyone",
        },
      ],
    },
  ]

  const getPermissionVariant = (permission: string) => {
    switch (permission) {
      case "Everyone":
        return "default"
      case "Subscriber":
        return "secondary"
      case "Moderator":
        return "destructive"
      case "Broadcaster":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button asChild>
            <Link to="/auth">Get Started</Link>
          </Button>
        </div>
      </Header>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Bot Commands</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore all available commands for {config.app.name}.
          </p>

          {/*
          <div className="max-w-md mx-auto relative">
            <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="IconSearch commands..." className="pl-10" />
          </div>
          */}
        </div>

        <div className="space-y-12">
          {commandCategories.map((category) => (
            <div key={category.name}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-muted">
                  <category.icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <Badge variant="secondary">{category.commands.length} commands</Badge>
              </div>

              <div className="gap-4 columns-1 md:columns-2 lg:columns-3 space-y-4">
                {category.commands.map((command) => (
                  <Card key={command.name} className="break-inside-avoid mb-4 hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-mono text-primary">{command.name}</CardTitle>
                        <Badge variant={getPermissionVariant(command.permission)}>{command.permission}</Badge>
                      </div>
                      <CardDescription>{command.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {command.usage && (
                        <div>
                          <p className="text-sm font-medium mb-1">Usage:</p>
                          <code className="text-sm bg-muted px-2 py-1 rounded">{command.usage}</code>
                        </div>
                      )}
                      {command.example && (
                        <div>
                          <p className="text-sm font-medium mb-1">Example:</p>
                          <code className="text-sm bg-accent px-2 py-1 rounded">{command.example}</code>
                        </div>
                      )}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <IconClock className="h-3 w-3" />
                          <span>{command.cooldown} cooldown</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/*
        <div className="mt-16 text-center">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-2xl">Custom Commands?</CardTitle>
              <CardDescription className="text-lg">
                You can create your own commands with custom responses in the dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild>
                <Link to="/login">Get Started with StreamBot</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        */}
      </div>
    </div>
  )
}
