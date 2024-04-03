"use client";

/* eslint-disable react/jsx-key */
import { useEffect, useRef } from "react";
import { Rabbit, Squirrel, Bird, Rat, Fish, Snail, Turtle } from "lucide-react";

const animals = [
  <Rabbit className="w-60 h-60" strokeWidth={1} />,
  <Squirrel className="w-60 h-60" strokeWidth={1} />,
  <Bird className="w-60 h-60" strokeWidth={1} />,
  <Rat className="w-60 h-60" strokeWidth={1} />,
  <Fish className="w-60 h-60" strokeWidth={1} />,
  <Snail className="w-60 h-60" strokeWidth={1} />,
  <Turtle className="w-60 h-60" strokeWidth={1} />,
];

export default function NotFound() {
  const animal = useRef<HTMLDivElement>(null);

  // add animation to the animal element when mouse position across the middle of animal element
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!animal.current) return;
      const { x, y, width, height } = animal.current.getBoundingClientRect();
      const offsetX = x + width / 2 - e.clientX;
      const offsetY = y + height / 2 - e.clientY;
      const rotateX = offsetY / 10;
      const rotateY = offsetX / 10;
      animal.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className="center flex-col h-screen">
      <div ref={animal}>
        {animals[Math.floor(Math.random() * animals.length)]}
      </div>

      <div className="flex mt-6 mb-8">
        <h1 className="inline-block mr-5 pr-6 vertical-top font-medium text-2xl leading-10 border-r">
          404
        </h1>
        <div className="inline-block">
          <h2 className="font-sm font-normal m-0 leading-10">
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  );
}
