import { SiTypescript, SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

export default function About() {
  return (
    <div className="text-center">
      <h1 className={"imperial-script text-6xl"}>About Me</h1>
      <div className="text-xl m-4">
        <p className="my-4">
          I am passionate about software development and have worked as a Web
          Development Intern at{" "}
          <a href="https://ytpr.in/" target="_blank" className="underline">
            Young Thames
          </a>
          .
        </p>
        <p className="my-4">
          I worked at Corizo Edutech as a Business Operations Executive in
          Bengaluru, KA. And I started learning full stack development in 2024.
        </p>
        <p>
          I code in{" "}
          <span className="inline-block">
            <SiTypescript />
          </span>{" "}
          TypeScript,{" "}
          <span className="inline-block">
            <FaJava />
          </span>{" "}
          Java and{" "}
          <span className="inline-block">
            <SiPython />
          </span>{" "}
          Python. I have experience in building web applications using Next.js,
          Node.js, Django, SQL and NoSQL databases, Redux and Zustand.
        </p>
        <p className="my-4">
          I completed BA (Hons.) History at Kirori Mal College, University of
          Delhi in 2021.
        </p>
      </div>
    </div>
  );
}
