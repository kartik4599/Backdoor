import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import OrganizationPage from "./OrganizationPage";

const SignUp = ({ setisSignIn }: { setisSignIn: () => void }) => {
  const [userCreated, setuserCreated] = useState(false);

  return (
    <div className="flex items-center justify-center bg-primary p-8 lg:p-12">
      <div className="mx-auto w-full max-w-md space-y-6">
        {userCreated ? (
          <OrganizationPage />
        ) : (
          <>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold text-primary-foreground">
                Sign Up
              </h1>
              <p className="text-primary-foreground/80">
                Create an account to start sharing files and passwords.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-primary-foreground">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-primary-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                required
                className="bg-primary-foreground/10 text-primary-foreground "
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground"
              onClick={setuserCreated.bind(null, true)}>
              Sign Up
            </Button>
            {/* </form> */}
            <p className="text-center text-sm text-primary-foreground/80">
              Already have an account?{" "}
              <span className="underline cursor-pointer" onClick={setisSignIn}>
                Sign In
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
