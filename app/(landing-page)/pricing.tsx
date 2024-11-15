"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const pricingData = [
  {
    id: 1,
    name: "	Pay-Per-Application",
    description: "For institutions with variable application volumes",
    price: "₦3000 to ₦1500",
    disclaimer: "Price reduces with increase in application submission",
    features: [
      { f_id: 1, description: "Full access to all features" },
      { f_id: 2, description: "Full customer support" },
      { f_id: 3, description: "Set fee per application" },
      { f_id: 4, description: "Variable, based on applications processed" },
      {
        f_id: 5,
        description:
          "One-time setup tailored to institution-specific needs due to multi-tenant configuration",
      },
    ],
  },
  {
    id: 2,
    name: "		Annual Subscription",
    description:
      "For institutions with high or consistent application volumes.",
    price: "₦749,999",
    disclaimer: "Price reduces with increase in application submission",
    perMonth: "Or pay ₦64,999 per month",
    features: [
      { f_id: 1, description: "Full access to all features" },
      { f_id: 2, description: "Full customer support" },
      {
        f_id: 3,
        description: "Unlimited applications, no per-application fees",
      },
      { f_id: 4, description: "	Fixed annual fee" },
      {
        f_id: 5,
        description:
          "One-time setup tailored to institution-specific needs due to multi-tenant configuration",
      },
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="w-screen bg-[#092336]">
      <div className="relative flex min-h-full w-full max-w-[1400px] mx-auto items-center justify-center overflow-hidden  py-[8rem]">
        <div className="font flex w-full flex-col items-center justify-center space-y-4 text-white">
          <span className=" max-w-3xl text-[40px] font-bold leading-normal">
            Our Pricing Plans
          </span>
          <p className="text-xl">Flexible pricing for your institution needs</p>

          <div className="mx-auto flex lg:flex-row flex-col p-2 w-full gap-5 overflow-hidden pt-[4rem] md:max-w-[70%]">
            {pricingData.map((item) => (
              <div
                key={item.id}
                className="space-y-4 rounded-xl bg-[#0D304A] p-4 py-8 shadow-md md:p-12"
              >
                <h5 className="">{item.name}</h5>
                <p className="text-sm text-white/70">{item.description}</p>

                <div className="space-y-2 py-[1.5rem]">
                  <p>Starting from</p>
                  <h2>{item.price}</h2>
                  <p>{item?.perMonth ? item.perMonth : item.disclaimer}</p>
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white bg-transparent text-white"
                >
                  Contact Us
                </Button>

                <div className="flex w-full items-center py-6 text-center">
                  <span className="mx-4 flex-grow border-t border-white/60"></span>
                  <span className="text-sm">Features</span>
                  <span className="mx-4 flex-grow border-t border-white/60"></span>
                </div>

                <div className="flex flex-col gap-4">
                  {item.features.map((feature) => (
                    <span
                      key={feature.f_id}
                      className="flex items-start justify-start gap-2"
                    >
                      <span>
                        <svg
                          className="aspect-square w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                            fill="#FFF9E5"
                          />
                          <path
                            d="M8 12.5L10.5 15L16 9"
                            stroke="#141B34"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <p>{feature.description}</p>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
