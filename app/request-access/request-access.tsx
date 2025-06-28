"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { IconRobot, IconArrowLeft, IconSend, IconBrandKick, IconBrandTwitch } from "@tabler/icons-react"
import { Link } from "react-router"
import config from "~/config"

export default function RequestAccessPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    channelName: "",
    platform: "",
    followerCount: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconSend className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-primary">Request Submitted!</CardTitle>
              <CardDescription>
                Thank you for your interest in {config.app.name}. We'll review your application and get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/">Return Home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center gap-2">
              <IconRobot className="h-8 w-8" />
              <span className="text-xl font-bold">{config.app.name}</span>
            </div>
          </Link>
          <Button variant="ghost" asChild>
            <Link to="/">
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <div className="flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Request Access</h1>
            <p className="text-muted-foreground">
              {config.app.name} is currently in early alpha and requires approval to join.
            </p>
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
              <CardDescription>
                Please provide some information about your channel so i can review your application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="channelName">Channel Name *</Label>
                    <Input
                      id="channelName"
                      placeholder="your_channel_name"
                      value={formData.channelName}
                      onChange={(e) => handleInputChange("channelName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="platform">Primary Platform *</Label>
                    <Select value={formData.platform} onValueChange={(value) => handleInputChange("platform", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem key={"kick"} value={"kick"}>
                          <IconBrandKick className="stroke-kick" /> kick
                        </SelectItem>
                        <SelectItem key={"twitch"} value={"twitch"}>
                          <IconBrandTwitch className="stroke-twitch" /> twitch
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Why do you want to use {config.app.name}? *</Label>
                  <Textarea
                    id="description"
                    placeholder={`tell about your channel, what features you're most interested in, and how you plan to use ${config.app.name}...`}
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">What happens next?</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• i'll review your application when i can 😉</li>
                    <li>• if approved, bot will be enabled on platform you've been registered from</li>
                    <li>• You'll get access to enable {config.app.name} on any supported platform</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <IconSend className="h-4 w-4 mr-2" />
                  submit application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

