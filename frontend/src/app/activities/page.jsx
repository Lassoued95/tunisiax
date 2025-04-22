"use client"
import {Activities} from "../data/data"
import Image from "next/image";
import Navbar from "../../components/navbar/page";


export default function ActivitiesPage() {
    return (
        <>
        <Navbar/>
        <div className="bg-[#2E36A4]">
        <div className="max-w-4xl mx-auto p-4 pt-8 pb-16">
            <h2 className="text-white font-semibold mb-4 text-lg text-center">
            Recent Activities
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {Activities.map((activity) => (
                <div
                key={activity.id}
                className="bg-white rounded-xl p-4 text-gray-700 shadow-md hover:shadow-lg transition duration-300"
                >
                <div className="flex items-center gap-3 mb-3">
                    {activity.images.map((img, index) => (
                    <Image
                        key={index}
                        {...img}
                        width={120}
                        height={60}
                        className="rounded-lg object-cover"
                    />
                    ))}
                </div>
                <div className="flex justify-between items-start mb-2">
                    <div>
                    <h3 className="text-lg font-semibold">{activity.title}</h3>
                    <p className="text-sm text-gray-500">{activity.description}</p>
                    </div>
                    <span className="text-sm font-semibold">{activity.points} pts</span>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
        </>
    )
}