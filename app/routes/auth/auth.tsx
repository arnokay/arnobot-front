import { IconGripVertical } from "@tabler/icons-react"
import { useEffect } from "react";
import { useNavigate } from "react-router"

import { LoginForm } from "~/components/login-form"
import { getSessionToken } from "~/lib/session";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getSessionToken();
    if (token) {
      navigate('/dashboard');
      return;
    }
  }, []);
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <IconGripVertical className="size-4" />
          </div>
          arnobot
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
