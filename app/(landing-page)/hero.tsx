"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import REAPS_DASHBOARD_PREVIEW from "@/public/images/reaps-dashboard-preview.png";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-[#F5F5F9] w-screen">
      <div className="relative flex w-full max-w-[1400px] mx-auto flex-col overflow-hidden ">
        {/* yellow doodle */}
        <svg
          className="absolute lg:right-[10rem] lg:top-[10rem] right-[3rem] top-[12rem]"
          width="49"
          height="38"
          viewBox="0 0 49 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.58087 4.22086C2.14866 4.68332 0.388672 6.80949 0.388672 9.28528C0.388672 12.0477 2.56619 14.3192 5.32619 14.4358L22.1645 15.1473C23.4932 15.2034 24.8236 15.0937 26.1251 14.8207L43.8501 11.1022C46.332 10.5815 48.1093 8.39264 48.1093 5.85671C48.1093 2.89666 45.7097 0.49707 42.7496 0.49707H25.6729C24.67 0.49707 23.6694 0.591357 22.6842 0.778685L4.58087 4.22086ZM2.78684 18.1197C1.42426 18.2605 0.388672 19.4086 0.388672 20.7785C0.388672 22.2308 1.54832 23.4174 3.00026 23.4507L24.2487 23.9387L45.7947 21.4818C47.2087 21.3206 48.2767 20.1239 48.2767 18.7007C48.2767 17.1548 47.0235 15.9016 45.4776 15.9016H24.2487L2.78684 18.1197ZM2.43985 30.2406C1.30103 30.2199 0.388672 29.2908 0.388672 28.1518C0.388672 27.0641 1.22333 26.1583 2.30746 26.0696L24.2487 24.2744H46.0854C47.2956 24.2744 48.2767 25.2555 48.2767 26.4657C48.2767 27.5995 47.4117 28.5461 46.2824 28.6481L24.2526 30.6368H46.9147C47.6669 30.6368 48.2767 31.2466 48.2767 31.9988C48.2767 32.7209 47.7131 33.3175 46.9922 33.3586L33.5742 34.1237L47.0484 34.82C47.7371 34.8556 48.2773 35.4244 48.2773 36.1141C48.2773 36.8239 47.7062 37.4016 46.9964 37.4098L24.4173 37.6691L1.32498 36.3525C0.799829 36.3225 0.38932 35.8879 0.38932 35.3619V34.3817C0.38932 34.3815 0.389176 34.3814 0.388996 34.3814C0.388816 34.3814 0.388672 34.3812 0.388672 34.3811V33.1005C0.388672 32.4108 0.928946 31.8419 1.6178 31.8063L24.2436 30.6371L2.43985 30.2406Z"
            fill="#FFD13A"
          />
        </svg>

        {/* blue doodle */}
        <svg
          className="absolute  lg:left-[10rem] lg:top-[25rem] left-[1rem] top-[25rem]"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.3337 22.0003C40.3337 11.8751 32.1255 3.66699 22.0003 3.66699C11.8751 3.66699 3.66699 11.8751 3.66699 22.0003C3.66699 32.1255 11.8751 40.3337 22.0003 40.3337C32.1255 40.3337 40.3337 32.1255 40.3337 22.0003Z"
            stroke="#020266"
            strokeWidth="1.5"
          />
          <path
            d="M14.667 23.3753C14.667 23.3753 17.6003 25.0482 19.067 27.5003C19.067 27.5003 23.467 17.8753 29.3337 14.667"
            stroke="#020266"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="absolute lg:left-[18rem] lg:top-[40rem] left-[1rem] top-[37rem] z-[40]"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="22" fill="#FFD13A" />
          <path
            d="M18.667 26.167H25.3337"
            stroke="#020266"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.667 22.833H22.0003"
            stroke="#020266"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.833 14.0837V14.5003C22.833 16.8574 22.833 18.0359 23.5653 18.7681C24.2975 19.5003 25.476 19.5003 27.833 19.5003H28.2497M28.6663 20.8811V23.667C28.6663 26.8097 28.6663 28.3811 27.69 29.3573C26.7138 30.3337 25.1423 30.3337 21.9997 30.3337C18.857 30.3337 17.2856 30.3337 16.3093 29.3573C15.333 28.3811 15.333 26.8097 15.333 23.667V19.8802C15.333 17.176 15.333 15.8239 16.0714 14.9081C16.2206 14.7231 16.3891 14.5546 16.5741 14.4054C17.4899 13.667 18.842 13.667 21.5462 13.667C22.1342 13.667 22.4281 13.667 22.6973 13.762C22.7533 13.7818 22.8082 13.8045 22.8618 13.8301C23.1193 13.9533 23.3272 14.1612 23.7429 14.5769L27.69 18.524C28.1718 19.0057 28.4126 19.2466 28.5395 19.5529C28.6663 19.8592 28.6663 20.1998 28.6663 20.8811Z"
            stroke="#020266"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <ContainerScroll
          titleComponent={
            <div className="mx-auto flex w-full max-w-[54rem] flex-col items-center justify-center space-y-10 pb-[7rem]">
              <h1 className="text-primary font-extrabold text-pretty ">
                Your ethics approval <br />
                made easy.
              </h1>
              <p className="text-gray-600 text-xl">
                REAPS is an application that has been designed to facilitate the
                easy submission, processing, tracking and granting of ethics
                approval to individuals applying for research ethics approval
                from Institutional or Ethical Review Boards.
              </p>
              <span className="flex w-fit items-center justify-center gap-5">
                <Link
                  className={cn(
                    buttonVariants({ variant: "primary", size: "md" })
                  )}
                  href={`/`}
                >
                  Get started
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "outline", size: "md" })
                  )}
                  href={`/`}
                >
                  Try Demo
                </Link>
              </span>
            </div>
          }
        >
          <Image
            src={REAPS_DASHBOARD_PREVIEW}
            alt="hero"
            fill
            className=" z-10 mx-auto mt-6 flex h-full w-full scale-110 object-cover"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
