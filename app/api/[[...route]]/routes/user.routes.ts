import client from "@/lib/DBClient";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import {
  createJwtToken,
  createPasswordHash,
  verifyPassword,
} from "../utils/commonFunction";
import { jwt } from "hono/jwt";

const User = new Hono().basePath("/auth");

User.post("/signup", async ({ json, req }) => {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password)
      throw new Error("All fields are required");

    const exsitingUser = await client.user.findUnique({ where: { email } });
    if (exsitingUser) throw new Error("User already exists");

    const hashedPassword = await createPasswordHash(password);

    const { password: _, ...data } = await client.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return json({ message: "SignUp Successful", data });
  } catch (e: any) {
    throw new HTTPException(400, { message: e.message });
  }
});

User.post("/signin", async ({ json, req }) => {
  try {
    const { email, password } = await req.json();

    if (!email || !password) throw new Error("All fields are required");

    const user = await client.user.findUnique({ where: { email } });
    if (!user) throw new Error("Invalid credentials");

    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid credentials");

    // const { password: _, ...data } = user;
    const token = await createJwtToken(user.id);

    return json({ message: "SignIn Successful", token });
  } catch (e: any) {
    throw new HTTPException(400, { message: e.message });
  }
});

User.get("/me", jwt({ secret: "secret" }), async ({ get, json }) => {
  try {
    const { data: userId } = get("jwtPayload") as { data: number };

    const user = await client.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true },
    });

    if (!user) throw new Error("Client not found");

    return json({ data: user });
  } catch (e: any) {
    throw new HTTPException(400, { message: e.message });
  }
});

export default User;
