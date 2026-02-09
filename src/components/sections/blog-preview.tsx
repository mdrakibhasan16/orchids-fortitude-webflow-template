import React from 'react';

/**
 * BlogPreview component
 * Clones the blog preview section showing three high-contrast text titles 
 * that act as article links appearing just above the footer area.
 */
const BlogPreview: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to plan a Vacation of your Dreams This Summer?",
      link: "/blog/how-to-plan-a-vacation-of-your-dreams-this-summer",
    },
    {
      id: 2,
      title: "Guide how to find the Best Hotel rooms Deals",
      link: "/blog/guide-how-to-find-the-best-hotel-rooms-deals",
    },
    {
      id: 3,
      title: "Types of Hotels, Resorts, and Vacation Packages",
      link: "/blog/types-of-hotels-resorts-and-vacation-packages",
    },
  ];

  return (
    <section className="bg-[#F5F1E6] pt-[120px] pb-[120px]">
      <div className="container mx-auto px-8 max-w-[1440px]">
        {/* The section is a 3-column grid for large screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col">
              <a 
                href={post.link} 
                className="group block transition-opacity duration-300 hover:opacity-70"
              >
                <h3 className="font-display text-[22px] leading-[1.2] lg:text-[24px] uppercase font-normal tracking-tight text-black">
                  {post.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;