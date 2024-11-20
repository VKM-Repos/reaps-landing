/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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
import { useEffect, useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  gender: string;
  education_level: string;
}

type FlagData = {
  url: string;
  alpha3: string;
  name: string;
  file_url: string;
  license: string;
};

enum EducationLevel {
  HIGH_SCHOOL = "high_school",
  BACHELORS = "bachelors",
  MASTERS = "masters",
  PHD = "phd",
}
enum dob {
  MALE = "male",
  FEMALE = "female",
}

const RegisterInstitutionForm = () => {
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

  return (
    <div className="w-full p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
        >
          <div className="w-full space-y-4">
            <p className="text-primary font-bold text-base md:text-lg">
              Institution Information
            </p>
            <fieldset className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
              <CustomFormField
                name="institution_name"
                control={form.control}
                label="Name of Institution"
                fieldType={FormFieldType.INPUT}
                labelClass="!text-gray-700"
              />
              <CustomFormField
                name="institution_email"
                control={form.control}
                label="Email of Institution"
                fieldType={FormFieldType.INPUT}
                labelClass="!text-gray-700"
              />
            </fieldset>
            <fieldset className="w-full flex flex-col items-start justify-normal">
              <FormLabel className="text-gray-700 -mb-3">
                Contact Number
              </FormLabel>
              <div className="w-full grid grid-cols-12 gap-2 items-end">
                <div className="mt-2 flex flex-col !col-span-3 text-xs">
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
                      <SelectValue placeholder={dialCode ? dialCode : "+234"}>
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
                            <SelectItem key={country.name} value={country.name}>
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
                <div className="w-full !col-span-9">
                  <CustomFormField
                    name="phone_number"
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                  />
                </div>
              </div>
            </fieldset>
          </div>

          <div className="w-full space-y-4 mt-12">
            <p className="text-primary font-bold text-base md:text-lg">
              Institution Administrator Information
            </p>
            <fieldset className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
              <CustomFormField
                name="first_name"
                control={form.control}
                label="First Name"
                fieldType={FormFieldType.INPUT}
                labelClass="!text-gray-700"
              />
              <CustomFormField
                name="last_name"
                control={form.control}
                label="Last Name"
                fieldType={FormFieldType.INPUT}
                labelClass="!text-gray-700"
              />
            </fieldset>
            <fieldset>
              <CustomFormField
                name="email"
                control={form.control}
                label="Email Address"
                labelClass="!text-gray-700"
                fieldType={FormFieldType.INPUT}
              />
            </fieldset>
            <fieldset className="w-full flex flex-col items-start justify-normal">
              <FormLabel className="text-gray-700 -mb-3">
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
                      <SelectValue placeholder={dialCode ? dialCode : "+234"}>
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
                            <SelectItem key={country.name} value={country.name}>
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
                    labelClass="!text-gray-700"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <CustomFormField
                name="orcid_number"
                control={form.control}
                label="ORCID Number"
                fieldType={FormFieldType.INPUT}
                labelClass="!text-gray-700"
              />
            </fieldset>

            <fieldset className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex flex-col text-xs">
                <FormLabel className="text-gray-700 -mb-1">
                  Level of Education
                </FormLabel>
                <Select
                  onValueChange={(value) =>
                    form.setValue("education_level", value as EducationLevel)
                  }
                >
                  <SelectTrigger className="mt-2 w-full">
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="high_school">High School</SelectItem>
                      <SelectItem value="bachelors">Bachelors</SelectItem>
                      <SelectItem value="masters">Masters</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col text-xs">
                <FormLabel className="text-gray-700 -mb-1">
                  Education Level
                </FormLabel>
                <Select
                  onValueChange={(value) =>
                    form.setValue("gender", value as dob)
                  }
                >
                  <SelectTrigger className="mt-2 w-full">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </fieldset>
          </div>

          <Button
            type="submit"
            variant={form.formState.isValid ? "primary" : "ghost"}
            disabled={!form.formState.isValid}
            className="w-fit mx-auto mt-4"
            size="md"
          >
            Start free trial
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterInstitutionForm;
