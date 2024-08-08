import { Hono } from "hono";
import { handle } from "hono/vercel";
import User from "./routes/user.routes";
import Organization from "./routes/organization.routes";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.route("/", User);
app.route("/", Organization);

export const GET = handle(app);
export const POST = handle(app);
