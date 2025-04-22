"use client";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg text-gray-800">
      {/* Profile Image */}
      <div className="w-32 h-32 relative mb-4">
        <Image
          src="/avatar/pic1.jpg" // replace with your image path
          alt="Profile photo"
          fill
          className="rounded-full object-cover border-4 border-[#5D4FE1]"
        />
      </div>

      {/* Name & Role */}
      <h2 className="text-2xl font-bold text-[#2E36A4]">Mohamed Lassoued</h2>
      <p className="text-sm text-gray-600 mt-1">Web Developer & Photographer</p>

      {/* Description */}
      <p className="mt-4 text-center text-sm text-gray-600">
        Passionate about crafting immersive web experiences using React, Next.js, and Tailwind CSS. Currently exploring full-stack magic and design aesthetics.
      </p>

      {/* Additional Details */}
      <div className="mt-4 w-full text-sm">
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-500">Location</span>
          <span className="font-medium">Mahdia, Tunisia</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-500">Status</span>
          <span className="font-medium text-green-600">Available</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-500">Email</span>
          <span className="font-medium">mohamed@example.com</span>
        </div>
      </div>
    </div>
  );
}
