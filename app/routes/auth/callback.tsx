import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router"
import { setSessionToken } from "~/lib/session";

export default function LoginCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const session = searchParams.get('session');
    if (!session) {
      navigate('/auth', { replace: true });
      return;
    }

    setSessionToken(session);
    navigate('/dashboard', { replace: true });
  }, []);
  return null;
}
