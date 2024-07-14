import { cn } from "@/lib/utils";
import Image from "next/image";
import { LuKey } from "react-icons/lu";

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
          <LuKey
            className={cn("h-14 w-14 text-primary", !isSignIn && "text-background")}
          />
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
