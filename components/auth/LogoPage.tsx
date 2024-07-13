import { cn } from "@/lib/utils";
import Image from "next/image";

export default function LogoPage({ isSignIn }: { isSignIn: boolean }) {
  return (
    <div
      className={cn(
        "hidden lg:flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8",
        {
          "bg-background": !isSignIn,
          "bg-primary": isSignIn,
        }
      )}>
      <div className="mx-auto max-w-md text-center">
        <div
          className={cn(
            "inline-flex items-center justify-center rounded-full bg-background p-4 text-6xl text-primary-foreground",
            !isSignIn && "bg-primary"
          )}>
          <KeyIcon className="h-14 w-14" stroke={isSignIn ? "#16a34a" : ""} />
        </div>
        <Image
          className="mx-auto"
          src={isSignIn ? "/images/logo2.png" : "/images/logo1.png"}
          width={200}
          height={200}
          alt="logo"
        />
        <p
          className={cn(
            "mt-4 text-lg leading-8 text-muted-foreground",
            isSignIn && "text-primary-foreground"
          )}>
          Securely store and share your passwords and secret files with ease.
        </p>
      </div>
    </div>
  );
}

function KeyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.stroke ? "#16a34a" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>
  );
}
