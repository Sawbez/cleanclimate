"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function OrganizationCard({
  name,
  summary,
  image,
  link,
}: {
  name: string;
  summary?: string;
  image: string;
  link: string;
}) {
  return (
    <CardContainer className="inter-var group">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[70%] sm:w-[15rem] xl:w-[16rem] 2xl:w-[19rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="font-bold text-neutral-600 dark:text-white text-sm sm:text-xl"
        >
          {name}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="600"
            width="600"
            className="w-[65vw] h-auto object-cover rounded-xl group-hover/card:shadow-xl aspect-square"
            alt="Organization thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ="40"
            as="a"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-md sm:text-md font-bold"
            href={link}
          >
            Go to site →
          </CardItem>
        </div>
        {summary !== undefined && (
          <CardItem
            as="p"
            translateZ="60"
            className="opacity-0 group-hover:opacity-100 group-hover:width-auto group-hover:height-auto transition duration-150 text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {summary}
          </CardItem>
        )}
      </CardBody>
    </CardContainer>
  );
}

export default OrganizationCard;
