"use client";
import Image from "next/image";
import React from "react";
import REAPS_DASHBOARD_RESPONSIVE from "@/public/images/responsive-dashboard.png";

const benefits_data = [
  {
    id: 1,
    name: "10 Days Average Protocol Cycle",
    description:
      "On average, protocols pass through the entire ethics approval lifecycle, from submission to decision, within 10 working days—supporting thorough and comprehensive review",
  },
  {
    id: 2,
    name: "890+ Successfully Processed Applications",
    description:
      "REAPS has facilitated the seamless submission and approval of over 890 research protocols, ensuring an efficient and reliable ethics review process.",
  },
  {
    id: 3,
    name: "5 Institutions Actively Utilizing REAPS",
    description:
      "5 institutions have adopted REAPS as their primary tool for managing ethics approvals, driving collaboration and innovation in research compliance.",
  },
];

export function Benefits() {
  return (
    <section className="bg-accent w-screen">
      <div className="relative flex min-h-full w-full max-w-[1400px] mx-auto items-center justify-center overflow-hidden py-[8rem]">
        <div className="mx-auto grid w-[90%] grid-cols-1 items-center justify-items-stretch gap-6 md:grid-cols-2">
          <div className="w-full md:col-span-1">
            <Image src={REAPS_DASHBOARD_RESPONSIVE} alt="reaps dashboard" />
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-2 p-4 md:col-span-1">
            <span className=" text-primary max-w-3xl text-[40px] font-bold leading-normal">
              Key benefits of REAPS for institutions
            </span>
            <p className="text-gray-600 ">
              REAPS improves the research ethics approval process, offering a
              range of powerful features that streamline submissions, ensure
              transparency, and protect institutional privacy.
            </p>

            <div className="mt-6 flex flex-col items-start justify-start gap-5">
              {benefits_data?.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex items-start justify-start gap-4"
                >
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10"
                        stroke="#505050"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5"
                        stroke="#505050"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="-mt-2 flex flex-col">
                    <p className="text-gray-600 font-semibold">
                      {benefit.name}
                    </p>
                    <p className="text-gray-600 ">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
