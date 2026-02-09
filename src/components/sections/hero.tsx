import React from 'react';
import Image from 'next/image';

/**
 * Hero component for the Fortitude website.
 * Features large editorial typography with a rotating badge and a cinematic video backdrop.
 */
export default function Hero() {
  return (
    <div className="flex flex-col bg-[#F5F1E6]">
      {/* Top Section: Heading Typography */}
      <section className="pt-[160px] pb-[40px] md:pt-[200px] md:pb-[60px] relative overflow-hidden">
        <div className="container px-4 md:px-[57.59px] mx-auto">
          <div className="flex flex-col items-center justify-center relative text-center">
            
            {/* Row 1: hotel&resort */}
            <div className="overflow-hidden mb-[-1vw] md:mb-[-0.5vw] z-10 w-full">
              <h1 className="font-display text-[12vw] leading-[0.9] uppercase tracking-[-0.02em] whitespace-nowrap">
                hotel&amp;resort
              </h1>
            </div>

            {/* Rotating Badge - Positioned between the two heading rows */}
            <div className="relative z-20 h-[80px] w-full flex justify-center items-center pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] md:w-[124px] md:h-[124px] pointer-events-auto">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/svgs/626285c2d089a6f600e71725_badge-hotel-2.svg"
                  alt="Hotel & Resort Badge"
                  width={124}
                  height={124}
                  className="w-full h-full animate-[spin_10s_linear_infinite]"
                  priority
                />
              </div>
            </div>

            {/* Row 2: fortitude */}
            <div className="overflow-hidden mt-[-1vw] md:mt-[-0.5vw] z-10 w-full">
              <h1 className="font-display text-[12vw] leading-[0.9] uppercase tracking-[-0.02em] whitespace-nowrap">
                fortitude
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section: Aerial beach view */}
      <section className="w-full px-4 md:px-[57.59px] pb-[120px]">
        <div className="relative w-full aspect-[21/9] md:aspect-[2.35/1] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/images/626286e5774f0992162467d8_hm-hero-light-poster-0000-18.jpg"
            className="w-full h-full object-cover"
          >
            <source 
              src="https://cdn.prod.website-files.com/625a7fd81dde5ff598e46825/626286e5774f0992162467d8_hm-hero-light-transcode.mp4" 
              type="video/mp4" 
            />
            <source 
              src="https://cdn.prod.website-files.com/625a7fd81dde5ff598e46825/626286e5774f0992162467d8_hm-hero-light-transcode.webm" 
              type="video/webm" 
            />
          </video>
        </div>
      </section>

    </div>
  );
}