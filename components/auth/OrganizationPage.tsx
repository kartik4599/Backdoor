import React, { useState } from "react";
import { Button } from "../ui/button";
import CreateOrganization from "./CreateOrganization";
import JoinOrganization from "./JoinOrganization";

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
        <Button variant={"secondary"} onClick={setsyndicate.bind(null, "join")}>
          Join Syndicate
        </Button>
        <Button
          variant={"outline"}
          className="bg-primary text-background"
          onClick={setsyndicate.bind(null, "create")}
        >
          Create Syndicate
        </Button>
      </div>
    </>
  );
};

export default OrganizationPage;
