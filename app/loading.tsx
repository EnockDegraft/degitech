import { Loader } from "@/components/loader"

/** Shown by Next.js while a route segment is loading during navigation. */
export default function Loading() {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <Loader />
    </div>
  )
}
