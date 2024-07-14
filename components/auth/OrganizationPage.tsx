import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const CreateOrganization = () => {
  return (
    <div className="rounded-lg my-4 border bg-background p-6 shadow-sm">
      <h2 className="text-xl font-bold">Create a New Organization</h2>
      <form className="mt-6 space-y-4">
        <div>
          <Label htmlFor="org-name">Organization Name</Label>
          <Input
            id="org-name"
            type="text"
            placeholder="Enter organization name"
          />
        </div>
        <div>
          <Label htmlFor="org-description">Organization Description</Label>
          <Textarea
            id="org-description"
            placeholder="Enter organization description"
            className="min-h-[100px]"
          />
        </div>
        <Button type="submit" className="w-full">
          Create Organization
        </Button>
      </form>
    </div>
  );
};

const JoinOrganization = () => {
  return (
    <div className="rounded-lg my-4 border bg-background p-6 shadow-sm">
      <h2 className="text-xl font-bold">Join an Existing Organization</h2>
      <form className="mt-6 space-y-4">
        <div>
          <Label htmlFor="org-search">Search for Organizations</Label>
          <Input
            id="org-search"
            type="text"
            placeholder="Search for an organization"
          />
        </div>
        <div className="space-y-2 max-h-[350px] overflow-y-auto">
          <div className="flex items-center justify-between rounded-md bg-muted p-3">
            <div>
              <h3 className="text-lg font-medium">Acme Inc</h3>
              <p className="text-sm text-muted-foreground">
                Software Development
              </p>
            </div>
            <Button>Join</Button>
          </div>
          <div className="flex items-center justify-between rounded-md bg-muted p-3">
            <div>
              <h3 className="text-lg font-medium">Globex Corporation</h3>
              <p className="text-sm text-muted-foreground">
                Technology Solutions
              </p>
            </div>
            <Button>Join</Button>
          </div>
          <div className="flex items-center justify-between rounded-md bg-muted p-3">
            <div>
              <h3 className="text-lg font-medium">Stark Industries</h3>
              <p className="text-sm text-muted-foreground">
                Engineering and Innovation
              </p>
            </div>
            <Button>Join</Button>
          </div>
          <div className="flex items-center justify-between rounded-md bg-muted p-3">
            <div>
              <h3 className="text-lg font-medium">Stark Industries</h3>
              <p className="text-sm text-muted-foreground">
                Engineering and Innovation
              </p>
            </div>
            <Button>Join</Button>
          </div>
          <div className="flex items-center justify-between rounded-md bg-muted p-3">
            <div>
              <h3 className="text-lg font-medium">Stark Industries</h3>
              <p className="text-sm text-muted-foreground">
                Engineering and Innovation
              </p>
            </div>
            <Button>Join</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const OrganizationPage = () => {
  const [syndicate, setsyndicate] = useState<"join" | "create">();

  if (syndicate === "join") return <JoinOrganization />;
  if (syndicate === "create") return <CreateOrganization />;

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-primary-foreground">
          Syndicate
        </h1>
        <p className="text-primary-foreground/80">
          Create an organization to start sharing files and passwords.
        </p>
      </div>
      <div className="flex w-full justify-evenly">
        <Button
          variant={"secondary"}
          type="submit"
          onClick={setsyndicate.bind(null, "join")}>
          Join Syndicate
        </Button>
        <Button
          variant={"outline"}
          type="submit"
          className="bg-primary text-background"
          onClick={setsyndicate.bind(null, "create")}>
          Create Syndicate
        </Button>
      </div>
    </>
  );
};

export default OrganizationPage;
