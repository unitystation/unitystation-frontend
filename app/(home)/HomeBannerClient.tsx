'use client';

import layoutChildren from "../../types/layoutChildren";
import {useEffect, useState} from "react";

const images: string[] = [
    "https://unitystationfile.b-cdn.net/Website-Statics/heroImages/bar-engine.png",
    "https://unitystationfile.b-cdn.net/Website-Statics/heroImages/clowns.png",
    "https://unitystationfile.b-cdn.net/Website-Statics/heroImages/conveyor.jpg",
    "https://unitystationfile.b-cdn.net/Website-Statics/heroImages/df.jpg",
    "https://unitystationfile.b-cdn.net/Website-Statics/heroImages/go-outsid.png",
    "https://unitystationfile.b-cdn.net/Website-Statics/heroImages/honk.jpg",
    "https://unitystationfile.b-cdn.net/Website-Statics/heroImages/hugger.png",
    "https://unitystationfile.b-cdn.net/Website-Statics/heroImages/lemons.png",
    "https://unitystationfile.b-cdn.net/Website-Statics/heroImages/shuttlecrash.png",
    "https://unitystationfile.b-cdn.net/Website-Statics/heroImages/chairs.jpg",
];

let currentIndex = 0;

const getNextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    return images[currentIndex];
};

const HomeBannerClient = (props: layoutChildren) => {
    const {children} = props;

    const [image1, setImage1] = useState<string>(getNextImage());
    const [image2, setImage2] = useState<string>(getNextImage());
    const [showImage1, setShowImage1] = useState<boolean>(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowImage1(!showImage1);
            if (showImage1) {
                setImage2(getNextImage());
            } else {
                setImage1(getNextImage());
            }
        }, 10000);

        return () => clearInterval(intervalId);
    }, [showImage1]);


    return (
        <div className="relative w-full h-full p-32">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-xs transition-opacity duration-1000 ease-in-out ${showImage1 ? 'opacity-100' : 'opacity-0'}`}
                    style={{backgroundImage: `url(${image1})`, backgroundPosition: `center`}}></div>
                <div
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-xs transition-opacity duration-1000 ease-in-out ${showImage1 ? 'opacity-0' : 'opacity-100'}`}
                    style={{backgroundImage: `url(${image2})`, backgroundPosition: `center`}}></div>
                <div className="absolute inset-0 bg-black opacity-50 "></div>
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )

}

export default HomeBannerClient;