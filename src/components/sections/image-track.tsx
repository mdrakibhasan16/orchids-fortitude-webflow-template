"use client";

import React from 'react';
import Image from 'next/image';

/**
 * ImageTrack Component
 * Clones the horizontal scrolling image gallery section with high-end luxury resort photography.
 * Uses a continuous scrolling animation (marquee style).
 */
const ImageTrack = () => {
  const images = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/images/62628ab9e5968469f4f47334_hm-ab-01-1.jpg",
      alt: "Resort Life 1",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/images/62628ab920e333caf213239a_hm-ab-02-2.jpg",
      alt: "Resort Life 2",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/images/62628ab9e9b9b8c0b5e825e7_hm-ab-03-3.jpg",
      alt: "Resort Life 3",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/images/62628ab9335cf43c8b7ee652_hm-ab-04-4.jpg",
      alt: "Resort Life 4",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/images/62628ab981180fd278077510_hm-ab-05-5.jpg",
      alt: "Resort Life 5",
    },
  ];

  return (
    <section 
      className="section track-section overflow-hidden py-0"
      style={{ backgroundColor: 'rgb(245, 241, 230)' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .track-animate {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        .track-animate:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="container-large px-0 max-w-none">
        <div className="track-wrapper relative flex overflow-hidden">
          {/* Track container that duplicates to create seamless loop */}
          <div className="track-animate flex gap-0">
            {/* First Set */}
            <div className="flex shrink-0">
              {images.map((img, idx) => (
                <div 
                  key={`track-1-${idx}`} 
                  className="relative h-[640px] w-[500px] shrink-0 overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Second Set (Duplicate for Marquee Effect) */}
            <div className="flex shrink-0">
              {images.map((img, idx) => (
                <div 
                  key={`track-2-${idx}`} 
                  className="relative h-[640px] w-[500px] shrink-0 overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTrack;