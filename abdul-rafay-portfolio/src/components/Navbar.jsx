import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-heading"
        >
          Abdul Rafay<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-heading"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/Abdul-Rafay-Siddiqui-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-heading px-5 py-2.5 text-sm font-semibold text-heading transition-all hover:bg-heading hover:text-white"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-black/5 bg-background px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-muted"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/Abdul-Rafay-Siddiqui-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-heading"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;