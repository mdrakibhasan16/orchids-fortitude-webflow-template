import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-[#F5F1E6] pt-[120px] pb-[120px]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <div className="max-w-[1200px]">
          {/* Main Heading */}
          <h2 className="font-display text-[2.5rem] md:text-[4.5rem] leading-[1.0] lowercase mb-20 tracking-[-0.02em]">
            located on the calm waters of North Lake Taho, a delightful experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Core Philosophy Text */}
            <div className="md:col-span-7">
              <div className="space-y-6">
                <p className="text-[#4A4A4A] font-sans text-[1.125rem] md:text-[1.25rem] leading-[1.6]">
                  Experience the best service and accommodation in a relaxing, natural environment. Stay at Hotel to escape your daily routine! A wide variety of rooms for all budgets, with a range of luxury rooms to suit any budget, there is something for everyone at Hotel. Choose from our deluxe, executive and presidential suites as well as our standard rooms.
                </p>
                <p className="text-[#4A4A4A] font-sans text-[1.125rem] md:text-[1.25rem] leading-[1.6]">
                  Spa treatments and massages to make you feel good. We offer a range of treatments with our professional spa therapists that will make you feel better than ever. Whether you want to relax or take care of your health, we have the perfect treatment for you here at Hotel.
                </p>
                <p className="text-[#4A4A4A] font-sans text-[1.125rem] md:text-[1.25rem] leading-[1.6]">
                  The hotel and resort you deserve! Luxury rooms and suites, from large luxury suites to spacious rooms with spectacular views, we have the perfect room for all budgets. Our picturesque surroundings will make your stay even more enjoyable.
                </p>
              </div>
            </div>

            {/* Numbered List of Highlights */}
            <div className="md:col-span-5 md:pl-12 lg:pl-20">
              <div className="flex flex-col">
                <div className="py-6">
                  <p className="text-[1rem] leading-[1.5] font-sans">
                    01. The resort Fortitude is pleased with your interest in our accommodation services, the service will be carried out by highly qualified staff.
                  </p>
                </div>
                
                {/* Thin Divider */}
                <div className="border-t border-black w-full" />

                <div className="py-6">
                  <p className="text-[1rem] leading-[1.5] font-sans">
                    02. We are the best place for your comfort and relaxing. We have more than 20 years of experience in providing quality services for our guests.
                  </p>
                </div>

                {/* Thin Divider */}
                <div className="border-t border-black w-full" />

                <div className="py-6">
                  <p className="text-[1rem] leading-[1.5] font-sans">
                    03. Restaurant & Bar: Our eatery is open 24-hours and serves breakfast, lunch, dinner and beverages to hotel guests, locals and travellers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;