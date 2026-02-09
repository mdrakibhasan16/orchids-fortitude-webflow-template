import React from 'react';

/**
 * Navigation component based on specified design instructions and source elements.
 * Features:
 * - Fixed positioning at top
 * - Fortitude logo on left
 * - Quality guarantee text in center (text-caps style)
 * - Cart and Menu icon on right
 * - Minimalist luxury style
 */

const Navigation = () => {
  return (
    <nav 
      className="nav" 
      style={{
        display: 'block',
        position: 'fixed',
        width: '100%',
        height: '32px',
        margin: '0px',
        padding: '0px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: 'rgb(0, 0, 0)',
        zIndex: 1800,
        top: 0,
        left: 0
      }}
    >
      <div 
        className="container-large"
        style={{
          display: 'block',
          position: 'static',
          width: '100%',
          height: '32px',
          margin: '0px',
          padding: '24px 57.5938px 0px', // Adjusted padding to match visual top spacing
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: 'rgb(0, 0, 0)',
          fontSize: '16px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div 
          className="nav-wrap"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            position: 'static',
            width: '100%',
            height: '32px',
          }}
        >
          {/* Logo Left */}
          <div 
            id="w-node-_3af99e86-a567-46ec-628f-ddb71f89f559-ad3d2e91" 
            className="nav-left"
            style={{
              display: 'block',
              position: 'relative',
              width: '158px',
              height: '32px',
              zIndex: 3000
            }}
          >
            <a 
              href="/" 
              className="nav-logo w-inline-block w--current"
              style={{
                display: 'inline-block',
                position: 'static',
                width: '158px',
                height: '32px'
              }}
            >
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/svgs/62627d19fa2a7c4ebda07aeb_logo-1.svg" 
                alt="Fortitude Logo" 
                className="nav-logo-image"
                style={{
                  display: 'inline-block',
                  width: '158px',
                  height: '32px',
                  objectFit: 'contain'
                }}
              />
            </a>
          </div>

          {/* Center Text */}
          <div 
            id="w-node-dd712736-1e87-ab07-60d8-6d0980fa1db4-ad3d2e91" 
            className="nav-center"
            style={{
              display: 'block',
              position: 'relative',
              textAlign: 'center',
              zIndex: 3000
            }}
          >
            <div 
              className="text-style-caps"
              style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgb(0, 0, 0)',
                whiteSpace: 'nowrap'
              }}
            >
              high quality rooms since 1990
            </div>
          </div>

          {/* Utility Right (Cart & Menu) */}
          <div 
            id="w-node-d6ab3b1e-27e0-ecf1-713a-b2f204a15845-ad3d2e91" 
            className="nav-right"
            style={{
              display: 'flex',
              position: 'relative',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '24px',
              zIndex: 3000
            }}
          >
            <div className="w-commerce-commercecartwrapper" style={{ display: 'block', position: 'relative' }}>
              <a 
                href="#" 
                className="w-commerce-commercecartopenlink cart-button w-inline-block"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgb(0, 0, 0)',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 500,
                  textDecoration: 'none'
                }}
              >
                <div className="w-inline-block">Cart</div>
                <div 
                  className="w-commerce-commercecartopenlinkcount"
                  style={{
                    display: 'none', // Based on computed style (0 items)
                    marginLeft: '8px'
                  }}
                >
                  0
                </div>
              </a>
            </div>

            {/* Menu Icon Placeholder - Replaces Lottie for standard implementation */}
            <div 
              data-w-id="8b4ff87b-2942-3948-e8e6-6b39ad3d2e99" 
              className="nav-menu-button"
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px'
              }}
            >
              <div 
                className="nav-menu-button-lottie"
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '4px 0'
                }}
              >
                <div style={{ width: '100%', height: '1px', backgroundColor: '#000' }}></div>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#000' }}></div>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#000' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;