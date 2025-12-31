import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import data from "@/app/components/Blogs.json";

const page = async () => {
  const text = `text-[#f76610]`;
  const btn = `bg-[#f76610] hover:bg-[#191e34]`;
  const title = "Safety Tips to Avoid Fire Hazards";
  return (
    <div className="bg-white">
      {/* poster */}
      <div className=" relative  h-[40vh] duration-150 ease-in-out  md:h-[60vh] ">
        <Image
          className="absolute h-[40vh] w-[100%]  object-cover md:h-[60vh]"
          src="/Banner-image.png"
          alt="image"
          width={10000}
          height={10000}
        />
        <div className="top-30 relative flex h-full w-full items-center  justify-center gap-2 bg-[#0000006c]   text-3xl text-white md:text-[40px] ">
          <h1 className="mx-4 mt-20">Blog</h1>
        </div>
      </div>
      {/* poster */}
      {/* Dynamic Blog  */}
      {/* <div className="relative grid gap-6 p-10 text-white sm:grid-cols-2 md:px-32  lg:grid-cols-3 ">
        {data.map((post: any) => {
          return (
            <div key={post?.title} className="group  mt-5 ">
              <div className="relative w-full overflow-hidden bg-[#a2a09c] group-hover:bg-[#191e34] h-40">
                <div className="relative flex h-full flex-col justify-between  text-white ">
                  <span className="flex h-full flex-col items-start justify-between p-4   duration-300 ease-in-out   ">
                    <div className="">
                      <h3 className={`w-52 text-xl  font-extrabold`}>
                        {post?.title}
                      </h3>
                      <p>{post?.overview}</p>
                    </div>
                    <div className="flex  w-full items-center justify-between   text-base">
                      <div className="">
                        <p className="text-base font-medium leading-6 ">
                          {
                            post.date
                          }
                        </p>
                      </div>{" "}
                      <Link href={`/blog/${post.title.toLowerCase().split(" ").join("-")}`} prefetch>
                        {" "}
                        <button className="hidden flex-row group-hover:flex   ">
                          <BiSolidRightArrow className="mr-1 mt-1" /> Read More
                        </button>
                      </Link>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      {/* blog */}
      <div className="relative grid gap-6 p-10 text-white sm:grid-cols-2 md:px-32  lg:grid-cols-3 ">
       
      </div>
      {/* blog */}
    </div>
  );
};

export default page;
