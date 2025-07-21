import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Switch } from "~/components/ui/switch"
import { Separator } from "~/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import {
  IconSettings,
  IconBrandTwitch,
  IconBrandYoutube,
  IconMessage,
  IconExternalLink,
  IconCheck,
  IconX,
  IconEdit,
  IconTrash,
  IconClock,
  IconShield,
  IconCommand,
  IconBrandKick,
  IconBrandDiscord,
} from "@tabler/icons-react"
import Header from "~/header"
import Logout from "~/components/logout"
import { cn } from "~/lib/utils"
import CommandDialog from "~/components/command-dialog"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("platforms")

  // Mock data - replace with real data from your auth system
  const platforms = [
    {
      id: "twitch",
      name: "IconBrandTwitch",
      icon: IconBrandTwitch,
      iconStyles: "stroke-twitch",
      connected: true,
      enabled: true,
      disabled: false,
      username: "your_twitch_channel",
    },
    {
      id: "kick",
      name: "Kick",
      icon: IconBrandKick,
      iconStyles: "stroke-kick",
      connected: false,
      enabled: false,
      disabled: false,
      username: null,
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: IconBrandYoutube,
      iconStyles: "stroke-youtube",
      connected: true,
      enabled: false,
      disabled: true,
      username: null,
    },
    {
      id: "discord",
      name: "Discord",
      icon: IconBrandDiscord,
      iconStyles: "stroke-discord",
      connected: true,
      enabled: true,
      disabled: true,
      username: null,
    },
  ]

  const defaultIconCommands = [
    { id: 1, name: "!uptime", description: "Show stream uptime", enabled: true, cooldown: 10, permission: "Everyone" },
    {
      id: 2,
      name: "!followage",
      description: "Check follow duration",
      enabled: true,
      cooldown: 15,
      permission: "Everyone",
    },
    { id: 3, name: "!ban", description: "Ban a user", enabled: true, cooldown: 0, permission: "Moderator" },
    { id: 4, name: "!timeout", description: "Timeout a user", enabled: true, cooldown: 0, permission: "Moderator" },
    { id: 5, name: "!socials", description: "Show social links", enabled: false, cooldown: 30, permission: "Everyone" },
  ]

  const customIconCommands = [
    { id: 1, name: "!discord", response: "Join our Discord: https://discord.gg/example", enabled: true, cooldown: 20 },
    { id: 2, name: "!schedule", response: "I stream Monday-Friday at 7 PM EST!", enabled: true, cooldown: 60 },
  ]

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
      <Header className="z-10">
        <Logout />
      </Header>
      <div className="relative container z-10 mx-auto px-4 py-8 max-w-7xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">hey hey. :)</h1>
          <p className="text-muted-foreground">Manage your bot connections, commands, and settings.</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="platforms">platforms</TabsTrigger>
            <TabsTrigger value="commands">commands</TabsTrigger>
            <TabsTrigger value="custom-commands">custom commands</TabsTrigger>
          </TabsList>

          <TabsContent value="platforms">
            <Card>
              <CardHeader>
                <CardTitle>Platform Connections</CardTitle>
                <CardDescription>Connect and manage your bot across different streaming platforms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {platforms.map((platform, index) => (
                  <div key={platform.id}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-muted">
                          {platform.icon && (
                            <platform.icon className={cn("h-6 w-6", platform.iconStyles)} />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{platform.name}</h3>
                            {!platform.disabled && (platform.connected ? (
                              <Badge variant="default">
                                <IconCheck className="h-3 w-3 mr-1" />
                                Connected
                              </Badge>
                            ) : (
                              <Badge variant="secondary">
                                <IconX className="h-3 w-3 mr-1" />
                                Not Connected
                              </Badge>
                            ))}
                          </div>
                          {platform.connected && platform.username && (
                            <p className="text-sm text-muted-foreground">@{platform.username}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {platform.disabled ?
                          (<Button disabled>
                            <IconExternalLink className="h-4 w-4 mr-2" />
                            comming soon
                          </Button>) : platform.connected ? (
                            <>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">Bot Enabled</span>
                                <Switch checked={platform.enabled} />
                              </div>
                              <Button variant="outline" size="sm">
                                Disconnect
                              </Button>
                            </>
                          ) : (
                            <Button>
                              <IconExternalLink className="h-4 w-4 mr-2" />
                              Connect {platform.name}
                            </Button>
                          )
                        }
                      </div>
                    </div>
                    {index < platforms.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="commands">
            <Card>
              <CardHeader>
                <CardTitle>Default Commands</CardTitle>
                <CardDescription>Enable or disable built-in bot commands</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {defaultIconCommands.map((command) => (
                    <div key={command.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconCommand className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold font-mono">{command.name}</h3>
                          <p className="text-sm text-muted-foreground">{command.description}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <IconClock className="h-3 w-3" />
                              {command.cooldown}s cooldown
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <IconShield className="h-3 w-3" />
                              {command.permission}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Switch checked={command.enabled} />
                        <Button variant="outline" size="sm">
                          <IconSettings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom-commands">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Custom Commands</CardTitle>
                      <CardDescription>Create and manage your own custom commands</CardDescription>
                    </div>
                    <CommandDialog />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customIconCommands.map((command) => (
                      <div key={command.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                            <IconMessage className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold font-mono">{command.name}</h3>
                            <p className="text-sm text-muted-foreground">{command.response}</p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                              <IconClock className="h-3 w-3" />
                              {command.cooldown}s cooldown
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch checked={command.enabled} />
                          <Button variant="outline" size="sm">
                            <IconEdit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <IconTrash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Create New Command</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="commandName">Command Name</Label>
                        <Input id="commandName" placeholder="-1" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cooldown">Cooldown (seconds)</Label>
                        <Input id="cooldown" type="number" placeholder="30" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="response">Response</Label>
                      <Textarea id="response" placeholder="OMEGALUL missed" rows={3} />
                    </div>
                    {/*
                    <div className="space-y-2">
                      <Label htmlFor="permission">Permission Level</Label>
                      <Select defaultValue="everyone">
                        <SelectTrigger>
                          <SelectValue placeholder="Select permission level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="everyone">Everyone</SelectItem>
                          <SelectItem value="subscriber">Subscribers</SelectItem>
                          <SelectItem value="moderator">Moderators</SelectItem>
                          <SelectItem value="broadcaster">Broadcaster Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    */}
                    <Button type="submit">Create IconCommand</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

