import React from 'react';
import Image from 'next/image';

/**
 * LocationBranding Component
 * 
 * Clones the high-impact branding section with a large centered heading about gardens
 * and luxury settings, featuring the floating "Premium" circular badge.
 * 
 * Primary Reference:
 * - HTML Structure: <div class="section padding-bottom-0"> containing .about-hero-title
 * - Design Instructions: "Located in a luxury setting of new-growth trees and beautiful looking gardens"
 * - High Level Design: Minimalist Luxury, Playfair Display for headings.
 */
const LocationBranding: React.FC = () => {
  return (
    <section className="bg-[#F5F1E6] pt-[120px] pb-0 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20">
        <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto">
          {/* Top Caption - text-style-caps */}
          <div 
            className="mb-6 font-sans font-medium text-[12px] leading-[1.2] uppercase tracking-[0.1em] text-[#4A4A4A]"
          >
            We are open 24 hours a day, 365 days per year
          </div>

          {/* Title and Badge Container */}
          <div className="relative mb-[80px] w-full">
            {/* Centered Heading - Playfair Display Lowercase */}
            <h2 
              className="font-display font-normal text-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.0] lowercase"
              style={{ textWrap: 'balance' }}
            >
              Located in a luxury setting of new-growth trees and beautiful looking gardens
            </h2>

            {/* Floating Premium Badge */}
            <div className="absolute top-[-20%] right-[-5%] md:right-[-2%] lg:right-[0%] w-[100px] h-[100px] md:w-[124px] md:h-[124px] pointer-events-none transform translate-y-1/2">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/svgs/626292e720e3333f36135393_badge-premium-4.svg"
                alt="Premium Badge"
                width={124}
                height={124}
                className="w-full h-full animate-[spin_10s_linear_infinite]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Location Images - From HTML structure .location-inner */}
      <div className="w-full mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0 items-end">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image 
              src="https://cdn.prod.website-files.com/625a7fd81dde5ff598e46825/626297b2edfda7146af3a158_location-01.jpg" 
              alt="Luxury Setting 1" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/6] overflow-hidden">
            <Image 
              src="https://cdn.prod.website-files.com/625a7fd81dde5ff598e46825/62629614335cf4b7937f69ca_location-02.jpg" 
              alt="Luxury Setting 2" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden lg:block hidden">
            <Image 
              src="https://cdn.prod.website-files.com/625a7fd81dde5ff598e46825/626296144ea9defee7d7048b_location-03.jpg" 
              alt="Luxury Setting 3" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/6] overflow-hidden">
            <Image 
              src="https://cdn.prod.website-files.com/625a7fd81dde5ff598e46825/62629614edfda77fcff391cb_location-04.jpg" 
              alt="Luxury Setting 4" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image 
              src="https://cdn.prod.website-files.com/625a7fd81dde5ff598e46825/626297b14e44b41beacb4303_location-05.jpg" 
              alt="Luxury Setting 5" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationBranding;