import ReapsLogoWhite from "@/components/icons/reaps-logo-white";
import RegisterInstitutionForm from "./register-institution-form";
import Image from "next/image";
import Ring from "@/public/images/ring_repeat.png";
import Link from "next/link";

export default function RegisterInstitutionPage() {
  return (
    <main className="mx-auto flex w-full min-h-screen flex-col items-center justify-center pt-[10rem] space-y-8 relative p-2">
      <Link
        href="/"
        className="bg-none relative z-30 text-white flex items-center border-b border-b-white pb-1 text-lg md:text-xl gap-2"
      >
        <Back />
        <span>Go Back </span>
      </Link>
      <div className="scale-150">
        <ReapsLogoWhite />
      </div>
      <section className="w-full max-w-2xl mx-auto bg-white rounded-xl flex flex-col items-center justify-center py-8 space-y-2 relative z-30">
        <h4 className="text-primary">👋 21-Day Free Trial</h4>
        <div className="flex gap-4 items-center justify-start">
          <p className="flex gap-0 items-start justify-normal">
            <Check />
            <span>No credit card required</span>
          </p>
          <p className="flex gap-0 items-start justify-normal">
            <Check />
            <span>Full system access</span>
          </p>
        </div>
        <RegisterInstitutionForm />
      </section>

      <Image alt="ring-circular" src={Ring} fill className=" z-10" />
    </main>
  );
}

const Check = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 14.9805C5 14.9805 6.5 14.9805 8.5 18.4805C8.5 18.4805 14.0588 9.3138 19 7.48047"
      stroke="#141B34"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Back = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.99997 17C8.99997 17 4.00002 13.3176 4 12C3.99999 10.6824 9 7 9 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
