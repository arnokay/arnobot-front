import { LoadingSpinner } from "./loading-spinner";

export function LoadingScreen() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoadingSpinner />
    </div>
  )
}

