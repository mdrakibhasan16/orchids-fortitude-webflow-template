import React from 'react';

const AmenitiesGrid = () => {
  const amenities = [
    'Hot Shower',
    'Spa Services',
    'Free Airport Shuttle',
    'Private Balcony',
    'Parking',
    'Room Service',
    'Mini Fridge',
    'Laundry Service',
    'Breakfast Included',
    'Fitness Center',
    'King Size Bed',
    'Free Wi-Fi'
  ];

  return (
    <section className="bg-[#F5F1E6] pt-[120px] pb-[120px]">
      <div className="container mx-auto px-8 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          {/* Left Column: Title */}
          <div className="lg:w-1/3">
            <h2 className="font-display text-[2.5rem] md:text-[3rem] leading-[1.0] text-black uppercase break-words">
              Luxury is just the <br />
              beginning, check <br />
              our amenities
            </h2>
          </div>

          {/* Right Column: Content and Grid */}
          <div className="lg:w-2/3">
            <div className="mb-12">
              <p className="font-sans text-[1.125rem] leading-[1.6] text-[#4A4A4A] max-w-[640px]">
                A touch of luxury, we want you to feel like royalty in our resort, so our luxurious rooms are designed with your comfort in mind. You&apos;ll enjoy amenities such as jacuzzis and balconies, not to mention the stunning views of our magnificent scenery.
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {amenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className={`border border-black p-6 flex items-center bg-transparent font-sans text-[0.875rem] font-medium transition-colors duration-300 hover:bg-[#E5E1D5]
                    ${index % 2 === 0 ? 'border-r-0' : ''} 
                    ${index >= 2 ? 'border-t-0' : ''}
                    /* Mobile border handling */
                    max-md:border-r-1 
                    max-md:[&:not(:first-child)]:border-t-0
                  `}
                >
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      </section>
  );
};

export default AmenitiesGrid;