'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  const { menu, logoSrc, logoAlt, currentSection } = useMemo(() => {
    const normalizedPath = pathname === "/" ? "/main" : pathname;

    if (normalizedPath.startsWith("/vfx")) {
      return {
        menu: [
          { label: "Home", href: "/vfx" },
          { label: "Showcase", href: "/vfx/showcase" },
          { label: "Our Work", href: "/vfx/ourwork" },
        ],
        logoSrc: "/assets/VFXlogo.png",
        logoAlt: "LodhongKrupuk VFX Logo",
        currentSection: "vfx" as const,
      };
    }

    if (normalizedPath.startsWith("/interactive")) {
      return {
        menu: [
          { label: "Home", href: "/interactive" },
          { label: "Newsroom", href: "/interactive/devlog" },
          { label: "Our Works", href: "/interactive/collection" },
        ],
        logoSrc: "/assets/LogoInteractive.png",
        logoAlt: "LodhongKrupuk Interactive Logo",
        currentSection: "interactive" as const,
      };
    }

    if (normalizedPath.startsWith("/inquiry")) {
      return {
        menu: [{ label: "Home", href: "/inquiry" }],
        logoSrc: "/assets/LogoAkasacaraV2.png",
        logoAlt: "Akasacara Film Logo",
        currentSection: "inquiry" as const,
      };
    }

    return {
      menu: [
        { label: "Home", href: "/main" },
        { label: "Newsroom", href: "/main/announcement" },
        { label: "Our Works", href: "/main/ourworks" },
      ],
      logoSrc: "/assets/LogoAkasacaraV2.png",
      logoAlt: "Akasacara Film Logo",
      currentSection: "main" as const,
    };
  }, [pathname]);

  const isActive = (href: string) => {
    if (
      href === "/main" ||
      href === "/vfx" ||
      href === "/interactive") {
      return pathname === href || (href === "/main" && pathname === "/");
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  const sectionLinks = [
    { name: "Akasacara Film", href: "/main", section: "main" },
    { name: "LodhongKrupuk VFX", href: "/vfx", section: "vfx" },
    { name: "LodhongKrupuk Interactive", href: "/interactive", section: "interactive" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isDropdownOpen) {
        // Jika dropdown terbuka, jangan sembunyikan navbar
        setIsNavbarVisible(true);
      } else {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scroll ke bawah & sudah lewat 100px
          setIsNavbarVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          // Scroll ke atas
          setIsNavbarVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDropdownOpen]);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 px-6 py-1 md:px-8 md:py-2 
          bg-black/20 backdrop-blur-sm border-b border-white/10
          transition-transform duration-500 ease-out
          ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoSrc} alt={logoAlt} className="h-10 md:h-14 w-auto object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center gap-5 md:gap-20 lg:gap-34">
            {menu.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-s md:text-l lg:text-xl  font-medium text-stone-300 transition-all duration-300 hover:text-white"
              >
                <span className={isActive(link.href) ? "text-white" : ""}>
                  {link.label}
                </span>
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-white" />
                )}
              </Link>
            ))}
          </div>

          {/* Hamburger Button - SELALU MUNCUL (mobile + desktop) */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`
              relative w-16 h-16 flex flex-col items-center justify-center gap-1.5 transition-all duration-300
              ${isDropdownOpen 
                ? "bg-yellow-500" 
                : "bg-transparent hover:bg-yellow-500"
              }
            `}
          >
            {/* Garis 1 */}
            <span className={`w-8 h-0.5 transition-all duration-300 ${
              isDropdownOpen ? "bg-black" : "bg-white"
            }`} />
            {/* Garis 2 */}
            <span className={`w-8 h-0.5 transition-all duration-300 ${
              isDropdownOpen ? "bg-black" : "bg-white"
            }`} />
            {/* Garis 3 */}
            <span className={`w-8 h-0.5 transition-all duration-300 ${
              isDropdownOpen ? "bg-black" : "bg-white"
            }`} />
          </button>
        </div>

        {/* Dropdown Panel - Muncul di semua ukuran layar */}
        <div className={`fixed top-2 md:top-14 lg:top-14 right-1 md:right-2 left-auto
        transition-all duration-500 ease-out origin-top-right  ${
          isDropdownOpen 
            ? "top-24 opacity-100" 
            : "top-0 opacity-0 pointer-events-none"
        }`}>
          <div className="max-w-5xl mx-auto px-8">
            <div className="bg-black/95 backdrop-blur-2xl shadow-2xl py-10 px-12 border border-white/10 mt-4">
              <div className="space-y-6">
                {sectionLinks.map((item) => (
                  <Link
                    key={item.section}
                    href={item.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className="block text-center"
                  >
                    <span className={`
                      text-2xl transition-all duration-300
                      ${currentSection === item.section
                        ? "text-yellow-400 font-semibold underline italic"
                        : "text-white/90 font-semibold hover:text-yellow-400 hover:italic hover:underline"
                      }
                    `}>
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </>
  );
}