import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-padding flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-5xl text-charcoal">Page not found</h1>
      <p className="mt-4 max-w-sm text-sm text-muted">
        This path doesn’t exist in the Purelle demo. Return to the collection.
      </p>
      <Link href="/shop" className="btn-primary mt-10">
        Browse shop
      </Link>
    </div>
  );
}
