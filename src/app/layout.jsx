import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaHome, FaGithub, FaLinkedin } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "Devesh's Portfolio",
  description:
    "A portfolio website showcasing work and skills of Devesh Krishna Mishra.",
};

export default function RootLayout({ children }) {
  const resumeUrl =
    "https://drive.google.com/file/d/1II3wRAMFG851aPUKHLk7zTv2Se8CkN99/view?usp=sharing";

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
      >
        <div className='h-full flex items-center lg:justify-between px-4 lg:px-12 py-4 lg:text-xl'>
          <Link
            href='/'
            className='flex hover:scale-95 transition-all duration-100 mr-6'
          >
            <FaHome className='text-2xl mr-1 self-center' />
            Home
          </Link>
          <div className='flex gap-6 lg:gap-12'>
            <Link
              href='/about'
              className='hover:scale-95 transition-all duration-100'
            >
              About
            </Link>
            <Link
              href={resumeUrl}
              target='_blank'
              className='hover:scale-95 transition-all duration-100'
            >
              Resume
            </Link>
            <Link
              href='https://github.com/devesh-kmishra'
              target='_blank'
              className='flex hover:scale-95 transition-all duration-100'
            >
              <FaGithub className='text-2xl self-center' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/devesh-krishna-mishra-0563b5235'
              target='_blank'
              className='flex hover:scale-95 transition-all duration-100'
            >
              <FaLinkedin className='text-2xl self-center' />
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
