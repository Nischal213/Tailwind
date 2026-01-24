import React from "react";

interface FooterProp {
    images : string[]
}

export const Footer = (prop : FooterProp) => {
    const {images} = prop

    return (
        <div className="bg-black flex-col-centered py-20 gap-y-3">
            <div className="flex-row-centered gap-x-3">
                {images.map(i => 
                <img key={i} src={"/footer/"+ i + ".png"} className="w-10 h-10 rounded-3xl animate-pop-up"></img>)}
            </div>
            <h4 className="text-white heading-4"> Nischal Gurung</h4>
            <h4 className="text-white heading-4"> Copyright © 2026 Nischal Gurung </h4>
        </div>
    );
}