import { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import useOrganizations from "@/hooks/use-organization";
import { FaSpinner } from "react-icons/fa6";
import { Button } from "../ui/button";
import { joinOrganization } from "@/lib/services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const JoinOrganization = () => {
  const [search, setSearch] = useState("");
  const timeRef = useRef<NodeJS.Timeout>();
  const { data, isLoading } = useOrganizations({ size: 5, search });
  const router = useRouter();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeRef.current);
    timeRef.current = setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  };

  const joinHandler = async (orgId: number) => {
    try {
      await joinOrganization(orgId);
      toast.success("Joined Organization Successfully");
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="rounded-lg my-4 border bg-background p-6 shadow-sm ">
      <h2 className="text-xl font-bold">Join an Existing Organization</h2>
      <form className="mt-6 space-y-4">
        <div>
          <Label htmlFor="org-search" className="px-1">
            Search for Organizations
          </Label>
          <Input
            id="org-search"
            type="text"
            placeholder="Search for an organization"
            onChange={searchHandler}
          />
        </div>
        <div className="space-y-2 h-[300px] overflow-y-auto">
          {isLoading && (
            <div className="w-full flex justify-center">
              <FaSpinner className="animate-spin text-xl mx-2 text-primary" />
            </div>
          )}
          {data?.map(({ id, name, description }) => (
            <div
              key={id}
              className="flex items-center justify-between rounded-md bg-muted p-3"
            >
              <div>
                <h3 className="text-lg font-medium">{name}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  joinHandler(id);
                }}
              >
                Join
              </Button>
            </div>
          ))}
          {data?.length === 0 && <div>No organizations found</div>}
        </div>
      </form>
    </div>
  );
};

export default JoinOrganization;
