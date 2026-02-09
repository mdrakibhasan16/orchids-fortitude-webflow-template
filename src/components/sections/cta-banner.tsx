import React from 'react';

const CTABanner = () => {
  return (
    <section 
      className="bg-[#C4C1B6] section-padding flex flex-col items-center justify-center text-center px-4"
      style={{
        minHeight: '600px',
        backgroundColor: '#C4C1B6',
      }}
    >
      <div className="container mx-auto">
        {/* Subtle subheader in all caps */}
        <div 
          className="text-caps mb-6"
          style={{
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            color: '#000000',
            opacity: 0.8
          }}
        >
          EXPERIENCE WHAT YOU&apos;VE ALWAYS WANTED
        </div>

        {/* Large serif heading */}
        <h2 
          className="font-display mb-12 max-w-4xl mx-auto"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: '1.0',
            textTransform: 'uppercase',
            color: '#000000',
            fontWeight: 400,
            letterSpacing: '-0.02em'
          }}
        >
          The Hotel & Resort <br /> You Deserve
        </h2>

        {/* Prominent black pill-shaped button */}
        <div className="mt-4">
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center bg-black text-[#F5F1E6] rounded-full transition-transform duration-300 hover:scale-105"
            style={{
              padding: '18px 48px',
              fontSize: '12px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontFamily: 'var(--font-sans)',
              borderRadius: '100px',
              minWidth: '200px'
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;