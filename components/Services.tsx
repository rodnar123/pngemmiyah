"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const Services = () => {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <PinContainer title="Web Apss" href="https://unitech.ac.pg">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Olgeta
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">Putim olgeta wantaim</span>
            </div>
            <Image
              src="/images/image3.jpg"
              alt="image"
              width={200}
              height={200}
              className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            />
          </div>
        </PinContainer>
        <PinContainer title="Web Apps" href="https://unitech.ac.pg">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Wanpla
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">Wanpla blo ol wok</span>
            </div>
            <Image
              src="/images/image2.jpg"
              alt="image"
              width={200}
              height={200}
              className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            />
          </div>
        </PinContainer>
        <PinContainer title="Web Apps" href="https://unitech.ac.pg">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Narapla
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">Narapla blo ol wok</span>
            </div>
            <Image
              src="/images/image4.jpg"
              alt="image"
              width={200}
              height={200}
              className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            />
          </div>
        </PinContainer>
      </div>
    </div>
  );
};

export default Services;
