import Link from "next/link";

export default function NotFound() {
  return (
    <section className="on-dark text-center" style={{ padding: "120px 0" }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This path doesn&apos;t lead home</h1>
        <p className="lede" style={{ margin: "0 auto 28px" }}>
          The page you&apos;re looking for has moved or doesn&apos;t exist.
        </p>
        <Link href="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </section>
  );
}
