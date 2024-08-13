import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { CreateOrganizationForm, createOrganizationForm } from "@/lib/utils";
import { createOrganization } from "@/lib/services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CreateOrganization = () => {
  const { register, handleSubmit, formState } = useForm<CreateOrganizationForm>(
    {
      resolver: createOrganizationForm,
    }
  );
  const router = useRouter();
  const errors = formState.errors as unknown as { [key: string]: string };

  const createHandler = async (data: CreateOrganizationForm) => {
    try {
      const response = await createOrganization(data);
      toast.success("Created Organization");
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="rounded-lg my-4 border bg-background p-6 shadow-sm">
      <h2 className="text-xl font-bold">Create a New Organization</h2>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit(createHandler)}>
        <div>
          <Label htmlFor="org-name" className={errors.name && "text-red-500"}>
            Organization Name
          </Label>
          <Input
            id="org-name"
            type="text"
            placeholder="Enter organization name"
            {...register("name")}
          />
          <span className="text-red-500 text-sm">{errors?.name}</span>
        </div>
        <div>
          <Label htmlFor="org-description">Organization Description</Label>
          <Textarea
            id="org-description"
            placeholder="Enter organization description"
            className="min-h-[100px]"
            {...register("description")}
          />
        </div>
        <Button className="w-full" type="submit">
          Create Organization
        </Button>
      </form>
    </div>
  );
};

export default CreateOrganization;
