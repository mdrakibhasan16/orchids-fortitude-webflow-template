import React from 'react';

/**
 * Footer Component
 * 
 * A pixel-perfect clone of the multi-column footer from the Fortitude website.
 * Features a large address on the left and organized navigation/utility links on the right,
 * followed by a copyright and credits footer bar.
 */
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F5F1E6] pt-[120px] pb-[40px] px-[2rem] md:px-[4rem] flex flex-col items-center">
      <div className="container-large w-full max-w-[1440px]">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 mb-[120px]">
          {/* Left Side: Large Address Information */}
          <div className="md:col-span-6 lg:col-span-7">
            <h2 className="font-display text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.1] text-black max-w-[500px] uppercase">
              Merston Manor Farm Cottage, Chapel Lane, Merstone, PO30 3BZ
            </h2>
          </div>

          {/* Right Side: Navigation & Utility Links */}
          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-8">
            {/* Navigation Column */}
            <div>
              <div className="text-[0.75rem] font-sans font-medium uppercase tracking-[0.1em] text-black mb-[24px]">
                Navigation
              </div>
              <ul className="flex flex-col gap-y-4">
                {['Home', 'Rooms', 'Blog', 'Resorts', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                      className="text-[0.9375rem] font-sans text-black hover:opacity-60 transition-opacity duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utility Column */}
            <div>
              <div className="text-[0.75rem] font-sans font-medium uppercase tracking-[0.1em] text-black mb-[24px]">
                Utility
              </div>
              <ul className="flex flex-col gap-y-4">
                {['Get Started', 'Style Guide', 'Licenses', 'Changelog', 'Support'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-[0.9375rem] font-sans text-black hover:opacity-60 transition-opacity duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="w-full h-[1px] bg-black mb-[40px]" />

        {/* Footer Credit Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4">
          <div className="text-[0.75rem] font-sans text-black">
            © Fortitude Hotel&Resort
          </div>

          <div className="text-[0.75rem] font-sans text-black">
            Powered by <a href="https://webflow.com" className="hover:opacity-60 transition-opacity underline-offset-4 decoration-black/30">Webflow</a>
          </div>

          <div className="text-[0.75rem] font-sans text-black">
            Template by <a href="#" className="hover:opacity-60 transition-opacity underline-offset-4 decoration-black/30">Leonardo Mattar</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;