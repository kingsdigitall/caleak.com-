import Image from "next/image";
import Link from "next/link";
import React from "react";
import { headers } from "next/headers";
import { BiMailSend, BiSolidPhone, BiSolidTime } from "react-icons/bi";
import { BsBookmarkStarFill, BsFillPatchCheckFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa6";
import Banner from "@/app/components/Home/Banner";
import contentData from "@/components/Content/about.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
import content from "@/components/Content/subDomainUrlContent.json";
import NavbarState from "@/app/components/State/NavbarState";
import contactInfo from "@/components/Content/ContactInfo.json";
interface AboutProps {
  subdomain: string;
}

export function generateMetadata({ params }: { params: { services: string } }) {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") as
    | keyof typeof content
    | null;
  let subdomainKey = subdomain as any;
  if (subdomainKey?.includes("-")) {
    subdomainKey = subdomainKey.split("-").pop();
  }

  // const serviceData: any = NewContent.find(
  //   (content) => content.StateID === subdomainKey?.toUpperCase(),
  // );

  if (!subdomain || !(subdomain in content)) {
    // Handle the case where subdomain is null or not in content
    return <div>Error: Invalid subdomain</div>;
  }
  const Data: any = content[subdomain];
  return {
    title: {
      absolute: contentData.h1Banner,
    },
    description: `Need expert leak detection in ${Data?.name}? We specialize in pinpointing leaks with advanced acoustic sensors and pressure testing. Call now for a fast inspection!`,
    alternates: {
      canonical: `https://${Data.slug}.${ContactInfo.host}/about/`,
    },
  };
}

const Page = async () => {
  // Fetch subdomain or any other server-side data here
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") as
    | keyof typeof content
    | null;
  let subdomainKey = subdomain as any;
  if (subdomainKey?.includes("-")) {
    subdomainKey = subdomainKey.split("-").pop();
  }

  // const serviceData: any = NewContent.find(
  //   (content) => content.StateID === subdomainKey?.toUpperCase(),
  // );

  if (!subdomain || !(subdomain in content)) {
    // Handle the case where subdomain is null or not in content
    return <div>Error: Invalid subdomain</div>;
  }
  const Data: any = content[subdomain];
  return (
    <div className="">
      <NavbarState />
      <div className="max-[1200px] flex flex-col items-center justify-center bg-white text-black">
        <div className="w-screen min-w-[375px] cursor-default text-lg md:w-full">
          {/* poster */}
          <Banner
            h1={contentData.h1Banner}
            image={contentData.bannerImage}
            header={contentData.bannerQuote}
            p1={`Need expert leak detection in ${Data?.name}? We specialize in pinpointing leaks with advanced acoustic sensors and pressure testing. Call now for a fast inspection!`}
          />
          {/* poster */}
          {/* -----------------------------------------About Start------------------------ */}
          <div className="mx-4 mt-6 print:hidden md:mx-10">
            {/* who */}
            <div className="my-20 grid w-full grid-cols-1 items-center justify-center gap-6 px-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="text-">About </div>
                <div className="text-3xl font-bold">
                  Who We Are?
                  <br />
                </div>
                <div className="mt-6"></div>
                <div className="text-justify">
                  At California Leak Detection Specialists, we take pride in
                  being the trusted name for precise, non-invasive leak
                  detection across {Data?.name}. As a family-owned business with
                  years of industry experience, we specialize in using advanced
                  technology to locate and repair leaks before they cause costly
                  damage.
                  <br />
                  <br />
                  Our expert team is trained in acoustic sensors, infrared
                  imaging, and pressure testing, allowing us to pinpoint leaks
                  in water lines, gas pipes, and sewer systems with unmatched
                  accuracy. Whether it&apos;s a hidden slab leak, an underground
                  water leak, or a plumbing system inspection, we ensure every
                  job is handled with professionalism, efficiency, and
                  transparency.
                  <br />
                  <br />
                  We understand that a leak can be stressful, which is why we
                  offer fast response times, detailed diagnostics, and upfront
                  pricing with no hidden costs. Our commitment to customer
                  satisfaction and high-quality leak detection solutions has
                  made us a go-to choice for homeowners and businesses across{" "}
                  {Data?.name}.
                </div>
              </div>
              <div className="w-full pt-10">
                <Image
                  src={`/${contentData.h2Image}`}
                  className="rounded-lg border object-cover shadow-lg"
                  alt={contentData.h2Image.split(".")[0]}
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            {/* who */}
          </div>
          {/* -----------------------------------------About End------------------------ */}
          {/* Mission */}
          <div className="relative mx-4 mt-6 flex h-full flex-col gap-8 md:mx-10 md:flex-row  md:px-32">
            <div className="grid  w-full grid-cols-1 gap-8 rounded-lg p-4 md:grid-cols-3 ">
              <div className="rounded-lg border-[3px]  border-main duration-300 ease-in-out  hover:bg-main hover:text-white ">
                <h2 className="p-2 text-center text-2xl font-bold">
                  Our Mission
                </h2>
                <div className=" p-4 text-center">
                  Our mission is to provide accurate, non-invasive leak
                  detection using the latest technology while minimizing
                  disruption to your property in {Data?.name}. We are dedicated
                  to protecting homes and businesses from hidden water damage,
                  saving our customers time and money with efficient, proactive
                  solutions.
                </div>
              </div>

              <div className="rounded-lg border-[3px]  border-main bg-main  text-white duration-300 ease-in-out  hover:bg-transparent hover:text-black ">
                <h2 className="p-2 text-center text-2xl font-bold">
                  Our Vision
                </h2>
                <div className=" p-4 text-center">
                  We strive to be {Data?.name}’s most trusted leak detection
                  service, setting industry standards through innovation,
                  expertise, and exceptional customer service. Our goal is to
                  ensure that every household and business has access to fast,
                  accurate, and affordable leak detection.
                </div>
              </div>

              <div className="rounded-lg border-[3px] border-main duration-300 ease-in-out  hover:bg-main hover:text-white ">
                <h2 className="p-2 text-center text-2xl font-bold">
                  Our Expertise
                </h2>
                <div className=" p-4 text-center">
                  With years of hands-on experience in {Data?.name}, our team
                  specializes in pinpoint leak detection using acoustic sensors,
                  infrared imaging, and pressure testing. We detect and diagnose
                  water leaks, gas leaks, slab leaks, and sewer issues with
                  precision.
                </div>
              </div>
            </div>
            {/* Mission */}
            {/* -----------------------------------------Conversation ------------------------ */}
            {/* <div className="my-20">
              <div className="text-center text-4xl font-extrabold text-main">
                Let&apos;s Start a Conversation
              </div>
              <div className="mt-4 border-double text-center">
                <button
                  id="cta-id"
                  className="mt-3 rounded-lg bg-main px-4 py-3 font-bold tracking-wide text-white shadow-lg hover:bg-minor"
                >
                  <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
                    {ContactInfo.No}
                  </a>
                </button>
              </div>
            </div> */}
            {/* -----------------------------------------Conversation End------------------------ */}
            {/* all */}
            {/* <div className="mx-4 my-20 md:mx-20">
            <div className="text-3xl font-bold">
              <div className="flex justify-center gap-2">
                <FaCrown className="text-3xl text-main" />
                Areas We Serve
              </div>
            </div>
            <div
              className="mt-2 text-center text-xl"
              dangerouslySetInnerHTML={{
                __html: contentData.areaweserveSection.description,
              }}
            ></div>
            <div className="flex justify-center">
              <Link
                href={`${ContactInfo?.baseUrl}locations`}
                className="text-center text-xl font-bold text-main duration-150 ease-in hover:tracking-wide"
              >
                {contentData.areaweserveSection.linkText}
              </Link>
            </div>
          </div> */}
            {/* all */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
