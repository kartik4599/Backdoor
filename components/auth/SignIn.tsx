import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignIn = ({ setisSignUp }: { setisSignUp: () => void }) => {
  return (
    <div className="flex items-center justify-center bg-muted p-8 lg:p-12">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-muted-foreground">
            Enter your email and password to access your account.
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <p
          className="text-center text-sm text-muted-foreground"
          onClick={setisSignUp}>
          Don't have an account?
          <span className="underline cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
