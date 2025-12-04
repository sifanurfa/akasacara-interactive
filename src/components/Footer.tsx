'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  // Fungsi untuk menentukan quick links berdasarkan divisi
  const getQuickLinks = () => {
    return [
      { label: "Home", href: "/interactive" },
      { label: "Newsroom", href: "/interactive/devlog" },
      { label: "Our Works", href: "/interactive/collection" },
    ];
  };
  const quickLinks = getQuickLinks();

  const getLogoAndBrand = () => {
    return {
      logo: "/assets/LogoInteractive.png",        
      alt: "LodhongKrupuk Interactive Logo",
    };
  };
  const { logo, alt } = getLogoAndBrand();

  const getSocialLinks = () => {

    return [
      { platform: "Instagram", url: "https://www.instagram.com/akasacarafilm", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M17.6453 0C19.4452 0.00479988 20.3588 0.0143997 21.1476 0.0367991L21.458 0.0479988C21.8164 0.0607985 22.17 0.0767981 22.5972 0.0959976C24.2995 0.175996 25.4611 0.444789 26.4803 0.83998C27.5362 1.24637 28.4258 1.79676 29.3154 2.68474C30.1293 3.48429 30.7589 4.45185 31.1602 5.51987C31.5553 6.53904 31.8241 7.70061 31.9041 9.40457C31.9233 9.83016 31.9393 10.1838 31.9521 10.5437L31.9617 10.8541C31.9857 11.6413 31.9953 12.5549 31.9985 14.3549L32.0001 15.5484V17.6444C32.004 18.8114 31.9918 19.9784 31.9633 21.1451L31.9537 21.4555C31.9409 21.8155 31.9249 22.1691 31.9057 22.5947C31.8257 24.2986 31.5537 25.4586 31.1602 26.4794C30.7589 27.5474 30.1293 28.5149 29.3154 29.3145C28.5158 30.1284 27.5483 30.758 26.4803 31.1592C25.4611 31.5544 24.2995 31.8232 22.5972 31.9032L21.458 31.9512L21.1476 31.9608C20.3588 31.9832 19.4452 31.9944 17.6453 31.9976L16.4517 31.9992H14.3574C13.1898 32.0033 12.0223 31.9911 10.855 31.9624L10.5447 31.9528C10.1648 31.9384 9.78511 31.9219 9.40548 31.9032C7.70312 31.8232 6.54155 31.5544 5.52078 31.1592C4.45333 30.7577 3.48633 30.1282 2.68724 29.3145C1.87278 28.5151 1.24265 27.5475 0.84089 26.4794C0.445699 25.4602 0.176906 24.2986 0.0969076 22.5947L0.0489088 21.4555L0.0409092 21.1451C0.0114156 19.9784 -0.00191883 18.8114 0.000910053 17.6444V14.3549C-0.00351847 13.1878 0.00821583 12.0208 0.0361093 10.8541L0.047309 10.5437C0.0601087 10.1838 0.0761083 9.83016 0.0953078 9.40457C0.175306 7.70061 0.444099 6.54064 0.83929 5.51987C1.24199 4.45141 1.87322 3.48381 2.68884 2.68474C3.48747 1.87123 4.4539 1.24169 5.52078 0.83998C6.54155 0.444789 7.70152 0.175996 9.40548 0.0959976C9.83107 0.0767981 10.1863 0.0607985 10.5447 0.0479988L10.855 0.038399C12.0217 0.00997209 13.1887 -0.00229546 14.3558 0.00159985L17.6453 0ZM16.0005 7.99981C13.8788 7.99981 11.8441 8.84264 10.3438 10.3429C8.84355 11.8432 8.00072 13.8779 8.00072 15.9996C8.00072 18.1213 8.84355 20.1561 10.3438 21.6563C11.8441 23.1566 13.8788 23.9994 16.0005 23.9994C18.1222 23.9994 20.157 23.1566 21.6572 21.6563C23.1575 20.1561 24.0003 18.1213 24.0003 15.9996C24.0003 13.8779 23.1575 11.8432 21.6572 10.3429C20.157 8.84264 18.1222 7.99981 16.0005 7.99981ZM16.0005 11.1997C16.6309 11.1996 17.255 11.3237 17.8374 11.5648C18.4198 11.8059 18.949 12.1594 19.3948 12.605C19.8406 13.0507 20.1942 13.5797 20.4355 14.162C20.6768 14.7443 20.8011 15.3685 20.8012 15.9988C20.8013 16.6291 20.6773 17.2533 20.4361 17.8357C20.195 18.4181 19.8416 18.9473 19.3959 19.3931C18.9503 19.8389 18.4212 20.1925 17.8389 20.4338C17.2566 20.6751 16.6325 20.7994 16.0021 20.7995C14.7291 20.7995 13.5082 20.2938 12.6081 19.3936C11.7079 18.4935 11.2022 17.2726 11.2022 15.9996C11.2022 14.7266 11.7079 13.5057 12.6081 12.6056C13.5082 11.7054 14.7291 11.1997 16.0021 11.1997M24.4019 5.59986C23.8715 5.59986 23.3628 5.81057 22.9877 6.18564C22.6127 6.5607 22.402 7.0694 22.402 7.59982C22.402 8.13024 22.6127 8.63893 22.9877 9.014C23.3628 9.38906 23.8715 9.59977 24.4019 9.59977C24.9323 9.59977 25.441 9.38906 25.8161 9.014C26.1912 8.63893 26.4019 8.13024 26.4019 7.59982C26.4019 7.0694 26.1912 6.5607 25.8161 6.18564C25.441 5.81057 24.9323 5.59986 24.4019 5.59986Z" fill="white"/>
      </svg>) },
      { platform: "Youtube", url: "https://www.youtube.com/Akasacarafilm", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M20.0973 0C22.5293 0 24.488 -5.01934e-08 26.0307 0.261053C27.6307 0.533895 28.9773 1.11495 30.0467 2.46737C31.1173 3.81811 31.5773 5.52084 31.7933 7.54189C32 9.48884 32 11.9629 32 15.0349V16.9651C32 20.0371 32 22.5112 31.7933 24.4598C31.5773 26.4808 31.1173 28.1819 30.0467 29.5326C28.9773 30.8851 27.6307 31.4661 26.0293 31.7389C24.488 32 22.5293 32 20.0973 32H11.9027C9.47067 32 7.512 32 5.96933 31.7389C4.36933 31.4661 3.02267 30.8851 1.952 29.5326C0.882667 28.1819 0.422667 26.4808 0.206667 24.4581C0 22.5112 0 20.0371 0 16.9651V15.0349C0 11.9629 0 9.48884 0.206667 7.54021C0.422667 5.51916 0.882667 3.81811 1.95333 2.46568C3.02267 1.11495 4.37067 0.533895 5.97067 0.261053C7.512 -5.01934e-08 9.47067 0 11.9027 0H20.0973ZM21.9987 16.0017L12.4 8.98021V23.0232L21.9987 16.0017Z" fill="white"/>
      </svg>) },
    ];
  };
  const socialLinks = getSocialLinks();

  const isActiveBrand = (href: string) => {
    if (
      href === "/main" ||
      href === "/vfx" ||
      href === "/interactive" ||
      href === "/inquiry"
    ) {
      // main punya pengecualian: "/" juga dianggap main
      if (href === "/main") return pathname === "/main" || pathname === "/";
      return pathname === href; // EXACT MATCH SAJA!
    }

    // untuk halaman child
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isActiveQuickLink = (link: { label: string; href: string }) => {
    if (link.label === "Home") {
      if (link.href === "/main") {
        return pathname === "/" || pathname === "/main";
      } else {
        return pathname === link.href;
      }
    } else {
      return pathname === link.href || pathname.startsWith(link.href + "/");
    }
  };

  return (
    <div className="bg-black flex flex-col py-section px-container items-start">
      <div className="self-stretch flex md:flex-row flex-col items-start">
        <div className="flex md:flex-[2] flex-col items-start gap-2xl w-full md:w-auto">
          {/* Logo */}
          <div className="relative w-full max-w-52 sm:max-w-64 md:max-w-72 h-auto">
            <img
              src={logo}
              alt={alt}
              className="object-contain w-full h-auto"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start items-center gap-4 md:gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex md:flex-[5] flex-col justify-center md:items-end items-start gap-2xl w-full md:w-auto mt-8 md:mt-0">
          {/* Brand Navigation */}
          <div className="self-stretch flex flex-col justify-center md:items-end items-start">
            <div className="flex flex-wrap items-center md:justify-end justify-start gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6 text-white">
              {[
                { label: "Akasacara Film", href: "https://film.akasacara.web.id/", bold: true },
                { label: "LodhongKrupuk VFX", href: "https://vfx.akasacara.web.id/", bold: false },
                { label: "LodhongKrupuk Interactive", href: "https://interactive.akasacara.web.id/", bold: false },
                { label: "Inquiry", href: "/inquiry", bold: false },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    group relative px-2 md:px-4 py-2 md:py-3 text-base md:text-lg lg:text-xl leading-7 transition-all duration-300
                    ${item.bold ? "font-normal" : "font-light"}
                    ${isActiveBrand(item.href) ? "text-akasacara-yellow" : "text-white hover:text-akasacara-yellow"}
                  `}
                >
                  {item.label}

                  {/* GARIS ATAS */}
                  <span
                    className={`
                      absolute inset-x-0 top-0 h-px bg-white transition-transform duration-300 origin-left
                      ${isActiveBrand(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                  />

                  {/* GARIS BAWAH */}
                  <span
                    className={`
                      absolute inset-x-0 bottom-0 h-px bg-white transition-transform duration-300 origin-right
                      ${isActiveBrand(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-end items-start gap-10 md:gap-20  md:pl-[48px] lg:pl-[120px]">
            {/* Quick Links */}
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1 w-full md:min-w-[15rem] md:max-w-[50%]">
              <div className="self-stretch text-white text-lg md:text-xl font-medium font-['Poppins'] leading-7">
                Quick Links
              </div>
              <div className="self-stretch pl-0 md:pl-0 pr-1 md:pr-2.5 py-2.5 flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  {quickLinks.map((link) => {
                    const isActive = isActiveQuickLink(link);

                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`
                          group relative text-lg md:text-xl font-light leading-7 transition-all duration-300
                          ${isActive ? "text-yellow-400" : "text-white"}
                        `}
                      >
                        {link.label}

                        {/* Garis panjang abu-abu permanen */}
                        <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/30" />

                        {/* Garis putih yang muncul saat hover atau aktif */}
                        <span
                          className={`
                            absolute -bottom-1 left-0 h-px bg-white origin-left
                            transition-transform duration-400
                            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                          `}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex-1 flex flex-col items-start gap-1 min-w-[15rem] md:max-w-[50%]">
              <div className="self-stretch text-white text-lg md:text-xl font-medium font-['Poppins'] leading-7">
                Location
              </div>
              <div className=" pr-1 md:pr-2.5 py-2.5">
                <div className="text-white text-lg md:text-xl font-light font-['Poppins'] leading-7">
                  Jalan Patuk Ngoro Oro, KM 0.4, No. 207, Patuk, Patuk, Gunungkidul, D.I. Yogyakarta 55862
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}