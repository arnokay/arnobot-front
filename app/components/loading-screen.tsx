import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";

export function LoadingScreen() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-cente">
      <Progress value={progress} />
    </div>
  )
}

