import React from 'react';
import BlogItem from './blogItem';
import { syne } from '../components/fonts';
const blogItems = [
  {
    image: '/blog.jpg',
    category: 'UI Design',
    date: '03 May 2019',
    title: 'Right-lo-left behind development in mobile web design',
    link: 'blog-details.html',
  },
  {
    image: '/blog.jpg',
    category: 'UI Design',
    date: '03 May 2019',
    title: 'Right-lo-left behind development in mobile web design',
    link: 'blog-details.html',
  },
  {
    image: '/blog.jpg',
    category: 'UI Design',
    date: '03 May 2019',
    title: 'Right-lo-left behind development in mobile web design',
    link: 'blog-details.html',
  },
  {
    image: '/blog.jpg',
    category: 'UI Design',
    date: '03 May 2019',
    title: 'Right-lo-left behind development in mobile web design',
    link: 'blog-details.html',
  },
  // More blog items...
];
const BlogSection: React.FC = () => {
  return (
    <section className="py-[120px]">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="aos-init aos-animate col-span-12" data-aos="fade-up">
            <div className="mb-10 flex flex-col flex-wrap gap-y-2 text-center font-Syne font-bold leading-none">
              <span className={`${syne.className} `}>Blog</span>
              <h3
                className={`${syne.className} text-4xl tracking-[-1.5px] lg:text-5xl xl:text-[64px]`}
              >
                My blog
                <span
                  className={`${syne.className} before:bg-primary relative z-[1] before:absolute before:left-[20px] before:top-[8px] before:-z-[1] before:block before:h-[36px] before:w-[36px] before:rounded-full lg:before:h-[48px] lg:before:w-[48px] xl:before:h-[69px] xl:before:w-[69px]`}
                >
                  po
                </span>
                st
              </h3>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogItems.map((item, index) => (
            <BlogItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
