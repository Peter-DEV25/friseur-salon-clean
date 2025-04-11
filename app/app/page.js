import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Friseur App
      <Link className="text-decoration text-purple-500" href="/kunde_anlegen">Kunde anlegen</Link>
      <Link className="text-decoration text-purple-500" href="/kunde_anlegen">Kunde anzeigen</Link>
    </div>
  );
}
