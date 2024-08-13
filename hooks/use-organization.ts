import { getOrganization } from "@/lib/services";
import { Organization } from "@prisma/client";
import useSWR from "swr";

export interface OrganizationQuery {
  search?: string;
  page?: number;
  size?: number;
}

const useOrganizations = ({ page, search, size }: OrganizationQuery) => {
  return useSWR<Organization[]>({ page, search, size }, getOrganization);
};

export default useOrganizations;
