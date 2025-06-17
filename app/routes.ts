import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  // index("routes/landing.tsx"),

  route("auth", "routes/auth/auth.tsx"),
  route("auth/callback", "routes/auth/callback.tsx"),
  
  ...prefix("dashboard", [
    layout("guards/auth.guard.tsx", [
      index("routes/home.tsx")
      // layout("routes/dashboard/layout.tsx", [
      //   index("routes/dashboard/dashboard.tsx"),
      //   route("integrations", "routes/dashboard/integrations.tsx"),
      // ])
    ])
  ])
] satisfies RouteConfig;
