"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-1992 border-b-4 h-32 w-full">
      <div className="flex items-center justify-between px-10 xl:px-28">
        <div className="logo">
          <Image
            className="relative top-7 z-10"
            src="/img/icons/icon.png"
            width={110}
            height={110}
            alt="Logo"
          />
        </div>

        <div className="lg:hidden z-40">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-1992"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7m-16 0h9"
                }
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex text-lg gap-7 uppercase lg:flex-wrap justify-center lg:justify-start">
          <Link className="hover:text-1992" href="/home">
            Home
          </Link>
          <Link className="hover:text-1992" href="/home/#structure">
            Estrutura
          </Link>
          <Link className="hover:text-1992" href="/home/#1992">
            O Clube
          </Link>
          <Link className="hover:text-1992" href="/transparency">
            Transparência
          </Link>
          <Link className="hover:text-1992" href="/team">
            Futebol
          </Link>
        </div>

        <div className="hidden lg:flex justify-center w-auto">
          <Button
            text="Associe-se"
            href="https://wa.me/555496518434"
          />
        </div>

        <div
          className={`fixed  inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-20 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col items-center gap-8 text-2xl uppercase ">
            <Link
              className="hover:text-1992"
              href="/#home"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="hover:text-1992"
              href="/home/#structure"
              onClick={() => setIsOpen(false)}
            >
              Estrutura
            </Link>
            <Link
              className="hover:text-1992"
              href="/home/#1992"
              onClick={() => setIsOpen(false)}
            >
              O Clube
            </Link>
            <Link
              className="hover:text-1992"
              href="/transparency"
              onClick={() => setIsOpen(false)}
            >
              Transparencia
            </Link>
            <Link
              className="hover:text-1992"
              href="/team"
              onClick={() => setIsOpen(false)}
            >
              Futebol
            </Link>
          </div>
          <div className="mt-10">
            <Button
              text="Associe-se"
              href="https://wa.me/555496518434"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
