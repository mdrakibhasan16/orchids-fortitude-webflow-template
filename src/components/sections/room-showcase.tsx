import React from 'react';
import Image from 'next/image';

const rooms = [
  {
    title: 'Duplex Room',
    description: 'Designed and manufactured by a team of experts, the hotel room is a new way of sleeping, environmentally friendly',
    price: '$170',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/images/626282ee835db833481c1046_room-small-01-6.jpg',
    hoverImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/icons/626282f1454abae1992df290_room-small-hover-01-1.jpg',
    href: '/room/duplex-room'
  },
  {
    title: 'Triple Room',
    description: "The room features LED lights that stretch the entire length and breadth of the bed, allowing you to enjoy a night's sleep.",
    price: '$240',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/images/626282a282f9f741b3e51c28_room-small-02-7.jpg',
    hoverImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/icons/626282a6049c35866c473c35_room-small-hover-02-2.jpg',
    href: '/room/triple-room'
  },
  {
    title: 'Queen Room',
    description: 'Romantic room located in the heart of downtown Toronto, the Hotel Eglinton is set in a historic building.',
    price: '$300',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/images/62628278fa2a7c51d0a0a6c2_room-small-03-8.jpg',
    hoverImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/icons/6262827b293d3f71f15f6d5d_room-small-hover-03-3.jpg',
    href: '/room/queen-room'
  },
  {
    title: 'Cabana Room',
    description: 'We have everything you need to feel at home, from a comfortable king-sized bed to deep soaking bathtubs and a coffee machine.',
    price: '$250',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/images/626282546fd9a411c272da78_room-small-04-9.jpg',
    hoverImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/icons/62628257ad9327fdc31ba311_room-small-hover-04-4.jpg',
    href: '/room/cabana-room'
  }
];

export default function RoomShowcase() {
  return (
    <section className="bg-[#F5F1E6] py-[120px]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[57px]">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-[80px]">
          <div>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-display lowercase leading-[1.0] text-black">
              luxury rooms for your family
            </h2>
          </div>
          <div className="flex items-end lg:justify-end lg:mb-4 lg:max-w-[340px] ml-auto">
            <p className="text-[#4A4A4A] font-sans text-[16px] leading-[1.6]">
              We offer luxurious rooms, with premium room service and everything you could wish for.
            </p>
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[56px] mb-20">
          {rooms.map((room, index) => (
            <a 
              key={index} 
              href={room.href} 
              className="group block"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6">
                {/* Main Image */}
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                />
                {/* Hover Image */}
                <Image
                  src={room.hoverImage}
                  alt={`${room.title} Hover`}
                  fill
                  className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                />
              </div>
              
              <h3 className="text-[2rem] font-display mb-3 text-black">
                {room.title}
              </h3>
              
              <div className="mb-3 max-w-[480px]">
                <p className="text-[#4A4A4A] font-sans text-base leading-[1.6]">
                  {room.description}
                </p>
              </div>
              
              <h4 className="text-[24px] font-display text-black">
                {room.price}
              </h4>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <a 
            href="/rooms" 
            className="group flex items-center justify-center gap-3 px-8 py-5 border border-black rounded-full hover:bg-black hover:text-[#F5F1E6] transition-all duration-300"
          >
            <span className="text-[12px] font-sans font-medium uppercase tracking-[0.1em]">
              Check All Rooms
            </span>
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d0ca149-ad4b-48ea-bc50-ee48cb957796-fortitude-template-webflow-io/assets/svgs/62627af9cec0a00d22da84bd_btn-black-arrow-3.svg" 
              alt="Arrow" 
              className="w-4 h-4 transition-all duration-300 group-hover:invert group-hover:brightness-200"
            />
          </a>
        </div>
      </div>
    </section>
  );
}