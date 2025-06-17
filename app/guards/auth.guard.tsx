import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router"
import { getSessionToken } from "~/lib/session";

export default function AuthGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getSessionToken();
    if (!token) {
      navigate('/auth', { replace: true });
    }
  }, [navigate]);

  const token = getSessionToken();
  if (!token) {
    return null;
  }

  return <Outlet />
}
