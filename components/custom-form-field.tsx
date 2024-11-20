/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";

import { FieldError } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
}

type CustomProps = {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
  fieldType: FormFieldType;
  className?: string;
  subClassName?: string;
  options?: { label: string; value: string }[];
  answers?: string;
  disabled?: boolean;
  error?: FieldError;
  onChange?: (value: string) => void;
  labelClass?: string;
};

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <Input placeholder={props.placeholder} {...field} />
        </FormControl>
      );

    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            className={`min-h-[10rem] ${props.className} ${
              props.error ? "border-error" : "border-gray-300"
            }`}
            disabled={props.disabled}
            {...field}
          />
        </FormControl>
      );
  }
};

const CustomFormField = (props: CustomProps) => {
  const { name, error, control, label, required, labelClass } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="">
          <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center">
            <div className="flex gap-0 items-start -mb-3">
              <FormLabel
                className={` ${labelClass} ${
                  error ? "text-error" : " text-primary"
                } font-normal`}
              >
                {label}
              </FormLabel>
              {required && (
                <span className="text-error -pt-2" title="required">
                  &ensp;*
                </span>
              )}
            </div>
          </div>
          <RenderInput field={field} props={props} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
