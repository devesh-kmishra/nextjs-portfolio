import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='text-center'>
      <div className='my-8 text-blue-500'>
        <div className='text-6xl'>Hello!</div>
        <div className='text-4xl'>I'm Devesh Krishna Mishra.</div>
      </div>
      <div className='my-4'>
        <div className='text-4xl'>Projects</div>

        <div className='flex justify-center gap-4 m-4'>
          <Link href='https://chat-messenger-cgvz.onrender.com' target='_blank'>
            <div className='w-[100vw] md:w-[300px] h-[350px] border-1 rounded flex-col hover:scale-95 transition-all duration-200'>
              <Image
                src='/chat-messenger-screenshot.png'
                alt='Chat Messenger Screenshot'
                width={300}
                height={200}
              />
              <h2 className='my-4'>Chat Messenger</h2>
              <p className='px-4'>
                A chat messenger application built using React, Express.js,
                Daisy UI, Zustand, MongoDB, JWT authentication and Socket.io.
              </p>
            </div>
          </Link>

          <Link href='https://helioweb-bingo.vercel.app/' target='_blank'>
            <div className='w-[100vw] md:w-[300px] h-[350px] border-1 rounded flex-col hover:scale-95 transition-all duration-200'>
              <Image
                src='/bingo-game-screenshot.png'
                alt='Bingo Game Screenshot'
                width={300}
                height={200}
              />
              <h2 className='my-4'>Bingo Game</h2>
              <p className='px-4'>
                A basic bingo-style game built using React, Material UI,
                Express.js and MongoDB.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
