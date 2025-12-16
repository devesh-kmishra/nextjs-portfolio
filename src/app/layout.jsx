import { Roboto, Roboto_Slab, Imperial_Script } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaHome, FaGithub, FaLinkedin } from "react-icons/fa";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-slab",
});

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  variable: "--font-imperial-script",
  weight: "400",
});

export const metadata = {
  title: "Devesh's Portfolio",
  description:
    "A portfolio website showcasing work and skills of Devesh Krishna Mishra.",
};

export default function RootLayout({ children }) {
  const resumeUrl =
    "https://drive.google.com/file/d/1I7p6xhBBVuAKtyZ-6JSVraoD9fKoTK-9/view?usp=sharing";

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoSlab.variable} ${imperialScript.variable} antialiased`}
      >
        <div className="h-full flex items-center lg:justify-between px-4 lg:px-12 py-4 lg:text-xl">
          <Link
            href="/"
            className="flex hover:scale-95 transition-all duration-100 mr-6"
          >
            <FaHome className="text-2xl mr-1 self-center" />
            Home
          </Link>
          <div className="flex grow justify-end gap-6 lg:gap-12">
            <Link
              href="/about"
              className="hover:scale-95 transition-all duration-100"
            >
              About
            </Link>
            <Link
              href={resumeUrl}
              target="_blank"
              className="hover:scale-95 transition-all duration-100"
            >
              Resume
            </Link>
            <Link
              href="https://github.com/devesh-kmishra"
              target="_blank"
              className="flex hover:scale-95 transition-all duration-100"
            >
              <FaGithub className="text-2xl self-center" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/devesh-krishna-mishra-0563b5235"
              target="_blank"
              className="flex hover:scale-95 transition-all duration-100"
            >
              <FaLinkedin className="text-2xl self-center" />
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
