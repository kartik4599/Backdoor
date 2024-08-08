import client from "@/lib/DBClient";
import { User } from "@prisma/client";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { jwt } from "hono/jwt";

const Organization = new Hono().basePath("/organization");

Organization.get("/", async ({ req, json }) => {
  try {
    const search = req.query("search") || "";
    const page = req.query("page") || "0";
    const size = req.query("size") || "10";

    const organizations = await client.organization.findMany({
      where: {
        OR: [
          { name: { contains: search } },
          { description: { contains: search } },
        ],
      },
      take: Number(size),
      skip: Number(page),
    });
    console.log(organizations);

    return json({ message: "Successfully recived data", data: organizations });
  } catch (e: any) {
    throw new HTTPException(400, { message: e.message });
  }
});

Organization.post(
  "/",
  jwt({ secret: "secret" }),
  async ({ get, json, req }) => {
    try {
      const { name, description } = await req.json();
      const { data: user } = get("jwtPayload") as { data: User };
      if (!name) throw new Error("Name fields are required");

      const newOrganization = await client.organization.create({
        data: { name, description, users: { connect: { id: user.id } } },
      });

      return json({
        message: "Successfully created organization",
        data: newOrganization,
      });
    } catch (e: any) {
      throw new HTTPException(400, { message: e.message });
    }
  }
);

Organization.get("/:id", jwt({ secret: "secret" }), async ({ req, json }) => {
  try {
    const id = Number(req.param("id"));

    if (isNaN(id)) throw new Error("Invalid id");

    const organizations = await client.organization.findUnique({
      where: { id },
      include: { users: { select: { name: true, id: true } } },
    });

    if (!organizations) throw new Error("Organization not found");

    return json({ message: "Successfully recived data", data: organizations });
  } catch (e: any) {
    throw new HTTPException(400, { message: e.message });
  }
});

export default Organization;
