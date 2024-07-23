"use client"

import { useState } from "react";
import { LinkIcon }  from "@heroicons/react/20/solid"

export default function Sharelinkbutton() {
    const [copied , setCopiet] = useState(false)
    function handleCliked(){
        navigator.clipboard.writeText(window.location.href)
        setCopiet(true);
        setTimeout(() => setCopiet(false), 1500 )
    }

  return (
    
    <button  onClick={handleCliked}  className="border flex gap-1 items-center  px-2 py-1 rounded text-gray-500 text-sm hover:bg-gray-50 hover:text-gray-800  ">
        <LinkIcon className="w-4 h-5" />
        {copied ? "Clikced" : "click"}
    </button>
  );
}
