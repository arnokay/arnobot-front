import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router"

export default function AuthGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth', { replace: true });
    }
  }, [navigate]);

  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  return <Outlet />
}
