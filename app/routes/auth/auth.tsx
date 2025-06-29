import { IconGripVertical } from "@tabler/icons-react"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router"
import AppName from "~/components/app-name";

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
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link to={"/"} className="flex items-center gap-2 self-center font-medium">
          <AppName />
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
