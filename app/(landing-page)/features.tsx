"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const features_data = [
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

export function Features() {
  return (
    <section id="features" className="bg-white w-full max-w-[1400px]">
      <div className="relative flex min-h-full w-full items-center justify-center overflow-hidden py-[8rem]">
        <svg
          className="absolute lg:right-[15rem] lg:top-[6rem] right-[1rem] top-0 lg:scale-125 size-36 lg:size-40"
          viewBox="0 0 209 185"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M209 2.99635C209.02 1.89197 208.142 0.97997 207.037 0.959333C205.933 0.938697 205.021 1.81724 205 2.92162L209 2.99635ZM180.451 106.892L179.006 105.509L180.451 106.892ZM117.277 77.1788L119.207 76.6511L117.277 77.1788ZM85.257 142.372L86.6138 143.841L85.257 142.372ZM0.62364 168.67C-0.136226 169.472 -0.102335 170.738 0.699337 171.498L13.7633 183.881C14.565 184.64 15.8309 184.606 16.5907 183.805C17.3506 183.003 17.3167 181.737 16.5151 180.977L4.90261 169.971L15.9095 158.358C16.6693 157.556 16.6355 156.291 15.8338 155.531C15.0321 154.771 13.7662 154.805 13.0064 155.606L0.62364 168.67ZM205 2.92162C204.76 15.7711 203.152 36.3819 199.113 56.3646C197.094 66.3541 194.476 76.1433 191.138 84.7081C187.792 93.2945 183.77 100.526 179.006 105.509L181.897 108.274C187.171 102.757 191.427 94.9842 194.865 86.1605C198.312 77.3152 200.986 67.2889 203.034 57.157C207.129 36.8969 208.756 16.0412 209 2.99635L205 2.92162ZM179.006 105.509C166.816 118.259 149.679 125.723 132.7 125.103C115.801 124.485 98.8817 115.856 86.9709 96.0522L83.5431 98.1138C96.1235 119.031 114.253 128.431 132.554 129.1C150.775 129.766 168.989 121.774 181.897 108.274L179.006 105.509ZM86.9709 96.0522C80.9893 86.1065 79.6934 78.5396 80.8032 73.2481C81.8943 68.0458 85.3773 64.7074 89.8353 63.2063C98.9485 60.1377 111.831 64.8475 115.348 77.7066L119.207 76.6511C115.028 61.3779 99.6546 55.6792 88.5589 59.4154C82.9124 61.3167 78.3026 65.6841 76.8884 72.4271C75.4929 79.0809 77.2793 87.6989 83.5431 98.1138L86.9709 96.0522ZM115.348 77.7066C118.118 87.8311 117.231 97.1044 112.246 107.061C107.21 117.117 97.9686 127.912 83.9002 140.903L86.6138 143.841C100.784 130.757 110.457 119.567 115.822 108.852C121.239 98.0358 122.243 87.7503 119.207 76.6511L115.348 77.7066ZM83.9002 140.903C72.5293 151.402 56.5252 158.093 41.0148 162.211C25.5334 166.321 10.7515 167.813 2.02167 168.047L2.12872 172.046C11.1265 171.805 26.2209 170.277 42.0412 166.077C57.8325 161.885 74.5555 154.976 86.6138 143.841L83.9002 140.903Z"
            fill="#020266"
            fillOpacity="0.56"
          />
        </svg>

        <div className="mx-auto flex w-[85%] flex-col  items-start justify-start gap-16">
          <span className=" text-primary max-w-3xl lg:text-6xl text-3xl font-bold leading-normal">
            Research Ethics Approval System
          </span>

          <div className="w-full flex flex-wrap items-center justify-center gap-5">
            {features_data?.map((feature) => (
              <div
                key={feature.id}
                className="bg-accent flex min-h-[20rem] w-full max-w-[22rem] flex-col items-start justify-start gap-5 rounded-xl border border-[#8A6A00] p-4 md:w-1/2 lg:w-1/3"
              >
                <span className="text-primary min-h-[8rem] text-[32px] font-semibold">
                  {feature.name}
                </span>
                <p className="text-gray-600 ">{feature.description}</p>
              </div>
            ))}
          </div>

          <Button
            variant="primary"
            size="md"
            className="mx-auto flex w-fit items-center justify-center gap-2"
          >
            <span>View Application Process</span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#F0F0FF" />
              <path
                d="M21.5 11L10.5 22"
                stroke="#020266"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M15.5 10.1315C15.5 10.1315 21.1335 9.65664 21.9885 10.5116C22.8434 11.3665 22.3684 17 22.3684 17"
                stroke="#020266"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
