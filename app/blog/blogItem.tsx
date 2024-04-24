import React from 'react';
import Image from 'next/image';
interface BlogItemProps {
  image: string;
  category: string;
  date: string;
  title: string;
  link: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  image,
  category,
  date,
  title,
  link,
}) => {
  return (
    <div
      className="aos-init aos-animate sm:mt-10"
      data-aos="fade-up"
      data-aos-delay="700"
    >
      <div className="mb-6 overflow-hidden rounded-[20px]">
        <Image
          className="w-full"
          src={image}
          alt="blog image"
          width={140}
          height={140}
        />
      </div>
      <div className="flex flex-col flex-wrap gap-3">
        <ul className="font-Inter flex flex-wrap text-sm font-normal leading-tight">
          <li className="before:bg-black-800 relative z-[1] pl-[30px] before:absolute before:left-[15px] before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
            <a className="text-black-text-800" href="#">
              {category}
            </a>
          </li>
          <li className="before:bg-orange relative z-[1] pl-[30px] before:absolute before:left-[15px] before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
            <a className="text-orange" href="#">
              {date}
            </a>
          </li>
        </ul>
        <div className="text-black-800 hover:text-orange group flex items-end justify-between">
          <h4 className="font-Syne text-[18px] font-bold leading-8 transition-all md:text-[20px] 2xl:text-[22px]">
            <a href={link}>{title}</a>
          </h4>
          <a href={link} className="group-hover:animate-arrow-move-up">
            {/* SVG goes here */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
