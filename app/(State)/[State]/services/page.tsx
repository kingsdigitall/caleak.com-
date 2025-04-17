import Banner from "@/app/components/Home/Banner";
import React from "react";
import Service from "@/app/components/Home/Service";
import contentData from "@/components/Content/servicePage.json";
import { Metadata } from "next";
import ContactInfo from "@/components/Content/ContactInfo.json";
import NavbarState from "@/app/components/State/NavbarState";
import { headers } from "next/headers";
import Navbar from "@/app/components/Navbar";
import content from "@/components/Content/subDomainUrlContent.json";

export function generateMetadata({ params }: { params: { services: string } }) {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") as
    | keyof typeof content
    | null;
  let subdomainKey = subdomain as any;
  if (subdomainKey?.includes("-")) {
    subdomainKey = subdomainKey.split("-").pop();
  }

  if (!subdomain || !(subdomain in content)) {
    // Handle the case where subdomain is null or not in content
    return <div>Error: Invalid subdomain</div>;
  }
  const Data: any = content[subdomain];
  return {
    title: {
      absolute: contentData.h1Banner,
    },
    description: `Need expert leak detection in ${Data?.name}? Contact us today for quick, non-invasive leak detection services using advanced technology. Call now for a free consultation!`,
    alternates: {
      canonical: `https://${Data.slug}.${ContactInfo.host}/services`,
    },
  };
}
const page = () => {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") as
    | keyof typeof content
    | null;
  let subdomainKey = subdomain as any;
  if (subdomainKey?.includes("-")) {
    subdomainKey = subdomainKey.split("-").pop();
  }

  if (!subdomain || !(subdomain in content)) {
    // Handle the case where subdomain is null or not in content
    return <div>Error: Invalid subdomain</div>;
  }
  const Data: any = content[subdomain];
  return (
    <div className="">
      <NavbarState />
      <div>
        <Banner
          h1={contentData.h1Banner.split("California").join(Data?.name)}
          image={contentData.bannerImage}
          header={contentData.bannerQuote.split("California").join(Data?.name)}
          p1={contentData.metaDescription.split("California").join(Data?.name)}
        />

        {/* Content 1 */}
        <div className="">
          <div className=" mt-6 text-center text-4xl text-minor">
            {contentData?.serviceTitle.split("California").join(Data?.name)}
          </div>
          {/* <Affordable /> */}
          <Service value={subdomain}/>
          {/* <TypeOfDumpster /> */}
        </div>
        {/* Content 1 */}
      </div>
    </div>
  );
};

export default page;
