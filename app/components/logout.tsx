import { IconLogout } from "@tabler/icons-react";
import { Button } from "./ui/button";

export default function Logout() {
  return (
    <Button variant="outline" size="sm">
      <IconLogout />
      logout
    </Button>
  )
}
