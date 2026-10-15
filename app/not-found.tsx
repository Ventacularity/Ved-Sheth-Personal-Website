import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-head">
      <h1 className="page-title">Page not found</h1>
      <p className="page-lead">That address doesn&apos;t match anything on this site.</p>
      <p style={{ marginTop: "1.5rem" }}>
        <Link href="/">Go to the home page</Link>
      </p>
    </div>
  );
}
