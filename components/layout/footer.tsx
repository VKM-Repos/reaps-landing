"use client";

import React from "react";
import Link from "next/link";
import ReapsLogoWhite from "../icons/reaps-logo-white";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="z-50 min-h-[40dvh] w-full bg-white py-6">
      <section className=" mx-auto flex h-full w-[95%] lg:w-[90%] flex-col items-start justify-center space-y-12 rounded-[1.5rem] bg-[#12204F] p-8">
        <div className="w-fit ">
          <Link href={`/`}>
            <ReapsLogoWhite />
          </Link>
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-12 gap-y-12 justify-items-stretch gap-4 text-base text-white/90">
          <div className="col-span-8 space-y-4">
            <span className="flex gap-2">
              <span>
                <svg
                  className="aspect-square w-6"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.295898"
                    width="32"
                    height="32"
                    rx="16"
                    fill="white"
                  />
                  <path
                    d="M17.6177 25.1629C17.1841 25.5689 16.6044 25.7959 16.0011 25.7959C15.3978 25.7959 14.8182 25.5689 14.3845 25.1629C10.413 21.4219 5.09076 17.2428 7.68627 11.1756C9.08963 7.89506 12.4583 5.7959 16.0011 5.7959C19.5439 5.7959 22.9126 7.89506 24.316 11.1756C26.9082 17.2352 21.599 21.4348 17.6177 25.1629Z"
                    stroke="#020266"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M19.5 14.7959C19.5 16.7289 17.933 18.2959 16 18.2959C14.067 18.2959 12.5 16.7289 12.5 14.7959C12.5 12.8629 14.067 11.2959 16 11.2959C17.933 11.2959 19.5 12.8629 19.5 14.7959Z"
                    stroke="#020266"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <p className="text-base">
                Plot C114 (Platinum Plaza), First Avenue, Gwarinpa, Abuja, FCT,
                Nigeria
              </p>
            </span>
            <div className="flex flex-col lg:flex-row items-start justify-normal gap-4">
              <span className="flex gap-2">
                <span>
                  <svg
                    className="aspect-square w-6"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.295898"
                      width="32"
                      height="32"
                      rx="16"
                      fill="white"
                    />
                    <path
                      d="M6.5 9.7959L13.413 13.7129C15.9616 15.1569 17.0384 15.1569 19.587 13.7129L26.5 9.7959"
                      stroke="#020266"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.51577 17.2715C6.58114 20.3371 6.61383 21.8698 7.74496 23.0053C8.87608 24.1407 10.4503 24.1802 13.5988 24.2593C15.5393 24.3081 17.4607 24.3081 19.4012 24.2593C22.5497 24.1802 24.1239 24.1407 25.2551 23.0053C26.3862 21.8698 26.4189 20.3371 26.4842 17.2715C26.5053 16.2858 26.5053 15.306 26.4842 14.3203C26.4189 11.2548 26.3862 9.72199 25.2551 8.58656C24.1239 7.45113 22.5497 7.41158 19.4012 7.33247C17.4607 7.28371 15.5393 7.28371 13.5988 7.33246C10.4503 7.41156 8.87608 7.45111 7.74495 8.58655C6.61382 9.72198 6.58114 11.2547 6.51576 14.3203C6.49474 15.306 6.49475 16.2858 6.51577 17.2715Z"
                      stroke="#020266"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-base">reaps@viableknowledgemasters.com</p>
              </span>
              <span className="flex gap-2">
                <span>
                  <svg
                    className="aspect-square w-6"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.295898"
                      width="32"
                      height="32"
                      rx="16"
                      fill="white"
                    />
                    <path
                      d="M14.1583 9.50813L13.7556 8.60215C13.4923 8.00978 13.3607 7.71358 13.1638 7.48691C12.9171 7.20284 12.5955 6.99384 12.2357 6.88375C11.9486 6.7959 11.6245 6.7959 10.9762 6.7959C10.0279 6.7959 9.55376 6.7959 9.15573 6.97819C8.68687 7.19292 8.26344 7.65918 8.09473 8.1465C7.95151 8.56019 7.99254 8.98533 8.07458 9.8356C8.94791 18.8861 13.9098 23.848 22.9603 24.7213C23.8106 24.8034 24.2358 24.8444 24.6494 24.7012C25.1368 24.5325 25.603 24.109 25.8178 23.6402C26 23.2421 26 22.768 26 21.8197C26 21.1714 26 20.8473 25.9122 20.5602C25.8021 20.2004 25.5931 19.8788 25.309 19.6321C25.0824 19.4352 24.7862 19.3036 24.1938 19.0403L23.2878 18.6376C22.6463 18.3525 22.3255 18.21 21.9996 18.179C21.6876 18.1493 21.3731 18.1931 21.0811 18.3068C20.776 18.4256 20.5064 18.6503 19.967 19.0997C19.4302 19.5471 19.1618 19.7708 18.8338 19.8906C18.543 19.9968 18.1586 20.0362 17.8524 19.991C17.5069 19.9401 17.2424 19.7988 16.7133 19.516C15.0673 18.6364 14.1595 17.7287 13.2799 16.0826C12.9971 15.5536 12.8558 15.289 12.8049 14.9436C12.7597 14.6373 12.7991 14.2529 12.9053 13.9622C13.0251 13.6342 13.2488 13.3658 13.6962 12.8289C14.1456 12.2896 14.3703 12.0199 14.4891 11.7148C14.6028 11.4228 14.6466 11.1083 14.6169 10.7964C14.5859 10.4704 14.4434 10.1497 14.1583 9.50813Z"
                      stroke="#020266"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <p className="text-base">+234 9064 137 838</p>
              </span>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-4">
              <Link href={`/`}>Privacy Policy</Link>
              <Link href={`/`}>Terms of use</Link>
              <Link href={`/`}>Contact</Link>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-4">
              <Link href={`/`}>Instagram</Link>
              <Link href={`/`}>Twitter</Link>
              <Link href={`/`}>LinkedIn</Link>
            </div>
          </div>
        </div>

        <div className="my-12 h-[1px] w-full bg-white/30 " />
        <div className="flex  flex-col lg:flex-row w-full items-start gap-y-5 justify-between">
          <p className="text-base text-white/90">
            Copyright © 2024 VHDO. All Rights Reserved.
          </p>
          <div className="flex place-content-end">
            <Button
              variant="outline"
              size="lg"
              className="text-primary mx-auto flex w-fit items-center justify-center gap-2 bg-white"
            >
              <span>Get Started</span>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.295898"
                  width="32"
                  height="32"
                  rx="16"
                  fill="#020266"
                />
                <path
                  d="M21.5 11.2959L10.5 22.2959"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M15.5 10.4274C15.5 10.4274 21.1335 9.95254 21.9885 10.8075C22.8434 11.6624 22.3684 17.2959 22.3684 17.2959"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
