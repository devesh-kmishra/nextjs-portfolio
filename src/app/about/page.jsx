import { Imperial_Script } from "next/font/google";

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export default function About() {
  return (
    <div className='text-center'>
      <h1 className={`${imperialScript.className} text-6xl`}>About Me</h1>
      <div className='text-xl m-4'>
        <p className='my-4'>
          I am passionate about software development and looking to start my
          career in this field.
        </p>
        <p className='my-4'>
          I worked at Corizo Edutech as a Business Operations Executive in
          Bengaluru, KA. And I started learning full-stack web development in
          2024.
        </p>
        <p>
          I know TypeScript and Python. I have experience in building web
          applications using React, Express.js, SQL and NoSQL databases, Redux
          and Zustand.
        </p>
        <p className='my-4'>
          I completed BA (Hons.) History at Kirori Mal College, University of
          Delhi in 2021.
        </p>
      </div>
    </div>
  );
}
