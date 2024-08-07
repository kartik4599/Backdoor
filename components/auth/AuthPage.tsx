"use client";
import { useEffect, useState } from "react";
import LogoPage from "./LogoPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const [isSignIn, setisSignIn] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const mode = searchParams.get("mode")?.toLowerCase();
    if (!mode) return;
    if (mode === "signup") setisSignIn(false);
  }, []);

  return (
    <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <LogoPage isSignIn={isSignIn} />
      {isSignIn ? (
        <SignIn setisSignUp={setisSignIn.bind(null, false)} />
      ) : (
        <SignUp setisSignIn={setisSignIn.bind(null, true)} />
      )}
    </div>
  );
}
