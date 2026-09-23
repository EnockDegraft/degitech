import { ButtonLink } from "@/components/ui"

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="glow top-1/4 left-1/2 h-80 w-[36rem] -translate-x-1/2 bg-brand/25" aria-hidden />
      <div className="container-x relative text-center">
        <p className="font-mono text-sm text-brand-300">Error 404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          <span className="text-gradient">Page not found.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted">
          The page you&apos;re looking for has moved or doesn&apos;t exist.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="secondary">
            Contact me
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
