import Link from "next/link";

export default function Header() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/education", label: "Education" },
    { href: "/agent-network", label: "Agents" },
    { href: "/reforestation", label: "Reforestation" },
    { href: "/impact", label: "Impact" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="py-4 border-b">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          CeloHT
        </Link>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-green-600">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
