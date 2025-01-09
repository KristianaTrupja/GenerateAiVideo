import Image from "next/image";
import React, { useState } from "react";

function SelectStyle({onUserSelect}) {
  const styleOptions = [
    {
      name: "Realistic",
      image: "/real.jpg",
    },
    {
      name: "Cartoon",
      image: "/carton.jpg",
    },
    {
      name: "Comic",
      image: "/comic.jpg",
    },
    {
      name: "WaterColor",
      image: "/waterColor.jpg",
    },
    {
      name: "GTA",
      image: "/GTA.jpg",
    },
  ];
  const [selectedOption,setSelectedOption] = useState()
  return (
    <div className="mt-7">
      <h2 className="font-bold text-xl text-primary">Style</h2>
      <p className="text-gray-500">Select your video style</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3">
        {styleOptions.map((item, index) => (
          <div key={index} className={`relative hover:scale-105 transition-all hover:cursor-pointer ${selectedOption == item.name && 'border-4 border-primary rounded-xl'}`}>
            <Image
              src={item.image}
              width={100}
              height={100}
              className="h-48 object-cover rounded-lg w-full"
              alt="image"
              onClick={()=>{
                setSelectedOption(item.name)
                onUserSelect('imageStyle',item.name)
            }}
            />
            <h2 className="p-1 absolute bg-black bottom-0 w-full text-white text-center rounded-b-lg">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectStyle;
