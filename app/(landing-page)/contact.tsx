/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, FormLabel } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { countries, CountryListItemType } from "country-list-json";
import countryFlags from "@/lib/data/countries.json";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

type FlagData = {
  url: string;
  alpha3: string;
  name: string;
  file_url: string;
  license: string;
};

export function Contact() {
  const form = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted:", data);
  };

  const [dialCode, setDialCode] = useState("+234");
  const [selectedFlag, setSelectedFlag] = useState();
  const [flags, setFlags] = useState<FlagData[]>([]);
  const [countriesData, setCountries] = useState<CountryListItemType[]>([]);

  useEffect(() => {
    setCountries(countries);
    setFlags(countryFlags);
  }, []);

  const combinedData = countriesData
    .filter((country) => flags.some((f) => f.name === country.name))
    .map((country) => {
      const flag = flags.find((f) => f.name === country.name);
      return {
        ...country,
        flag: flag?.file_url || "",
      };
    });
  return (
    <section id="contact" className="bg-transparent w-screen">
      <div className="relative flex min-h-full w-full max-w-[1200px] mx-auto items-center justify-center overflow-hidden py-[8rem]">
        <div className="mx-auto grid w-[90%] grid-cols-1 items-start justify-items-stretch gap-6 md:grid-cols-2">
          <div className="w-full md:col-span-1">
            <h4 className=" text-primary max-w-3xl lg:text-6xl text-3xl font-extrabold leading-normal">
              Get in touch with an expert. Talk with sales.
            </h4>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-2 p-4 md:col-span-1">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-4"
              >
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <CustomFormField
                    name="firstName"
                    control={form.control}
                    label="First Name"
                    fieldType={FormFieldType.INPUT}
                  />
                  <CustomFormField
                    name="lastName"
                    control={form.control}
                    label="Last Name"
                    fieldType={FormFieldType.INPUT}
                  />
                </fieldset>
                <fieldset>
                  <CustomFormField
                    name="email"
                    control={form.control}
                    label="Email Address"
                    fieldType={FormFieldType.INPUT}
                  />
                </fieldset>
                <fieldset className="w-full flex flex-col items-start justify-normal">
                  <FormLabel className="text-primary -mb-3">
                    Phone Number
                  </FormLabel>
                  <div className="w-full grid grid-cols-12 gap-2 items-end">
                    <div className="mt-2 flex flex-col col-span-3 text-xs">
                      <Select
                        onValueChange={(value: string) => {
                          const selectedCountry: any = combinedData.find(
                            (country) => country.name === value
                          );
                          if (selectedCountry) {
                            setDialCode(selectedCountry.dial_code);
                            setSelectedFlag(selectedCountry.flag);
                          }
                        }}
                      >
                        <SelectTrigger className="mt-2 w-full !gap-2 px-3">
                          <SelectValue
                            placeholder={dialCode ? dialCode : "+234"}
                          >
                            {selectedFlag ? (
                              <picture className="flex w-full items-center gap-1">
                                <img
                                  src={selectedFlag}
                                  height="20px"
                                  width="20px"
                                  alt="Selected country flag"
                                />
                                <span>{dialCode}</span>
                              </picture>
                            ) : (
                              "Select a country"
                            )}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Country Codes</SelectLabel>
                            {combinedData &&
                              combinedData.map((country) => (
                                <SelectItem
                                  key={country.name}
                                  value={country.name}
                                >
                                  <div className="flex items-center justify-center gap-4">
                                    <picture>
                                      <img
                                        src={country.flag}
                                        height="24px"
                                        width="24px"
                                        alt="Selected country flag"
                                      />
                                    </picture>
                                    <span>{country.name}</span>
                                    <span>{country.dial_code}</span>
                                  </div>
                                </SelectItem>
                              ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-full col-span-9">
                      <CustomFormField
                        name="phone_number"
                        control={form.control}
                        fieldType={FormFieldType.INPUT}
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <CustomFormField
                    name="message"
                    control={form.control}
                    label="Message"
                    fieldType={FormFieldType.TEXTAREA}
                  />
                </fieldset>

                <Button
                  type="submit"
                  size="md"
                  variant={form.formState.isValid ? "primary" : "ghost"}
                  disabled={!form.formState.isValid}
                  className="w-fit"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
