import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import OrganizationPage from "./OrganizationPage";
import { FaSpinner } from "react-icons/fa6";
import { createAccount } from "@/lib/services";
import { useForm, Resolver } from "react-hook-form";

type SignUpForm = {
  name: string;
  email: string;
  password: string;
};

const resolver: Resolver<SignUpForm> = async (values) => {
  return {
    values: values,
    errors: {
      name: { type: "required", message: "Name is required" },
      email: { type: "required", message: "Email is required" },
      password: { type: "required", message: "Password is required" },
    },
  };
};

const SignUp = ({ setisSignIn }: { setisSignIn: () => void }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({ resolver });
  
  
  console.log(errors);

  const [userCreated, setuserCreated] = useState(false);
  const [loading, setloading] = useState(false);

  const createUser = async () => {
    console.log("createUser");
    handleSubmit((data) => console.log(data));
    // try {
    //   setloading(true);
    //   const { data } = await createAccount({
    //     email: "kartikm2@gmail.com",
    //     password: "123456",
    //     name: "kartik",
    //   });
    //   if (!data.organizationId) setuserCreated(true);
    // } catch (e) {
    //   console.log(e);
    // } finally {
    //   setloading(false);
    // }
  };

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
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                createUser();
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground"
                  {...register("name")}
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
                  {...register("email")}
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
                  {...register("password")}
                  className="bg-primary-foreground/10 text-primary-foreground "
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin text-xl mx-2" />
                    Creating Account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>
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
