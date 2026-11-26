import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container-site py-24 text-center">
      <h1 className="h1">Page introuvable</h1>
      <p className="lead mt-4">Cette page n&apos;existe pas ou a été déplacée.</p>
      <Link href="/" className="btn btn-call mt-8">Retour à l&apos;accueil</Link>
    </section>
  );
}
