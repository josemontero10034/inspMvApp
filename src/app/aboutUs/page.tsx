import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          About <span className="text-[hsl(280,100%,70%)]">Us</span>
        </h1>
        <p className="text-lg text-center">This is the about page for our application. We are dedicated to providing the best service possible.</p>
        <Link href="/" className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20">
          Go to Home
        </Link>
      </div>
    </div>
  );
};
export default About;