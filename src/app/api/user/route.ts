import { User } from "@/types/user";
import { NextResponse } from "next/server";

export async function POST(req: Request, response: Response) {
  const { email, name, username, password } = (await req.json()) as User;

  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      avatar: "https://i.pravatar.cc/300",
      username: username,
      password: password,
      accessLevel: "user",
    }),
  });

  return NextResponse.json({ res });
}

export async function PUT(req: Request, response: Response) {
  const { email, name, username, password, id, accessLevel, avatar } =
    (await req.json()) as User;

  const res = await fetch(`http://localhost:3000/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      avatar,
      username,
      password,
      accessLevel,
    }),
  });

  return NextResponse.json({ res });
}

export async function GET(req: Request, response: Response) {
  const paramns = req.url.split("/");
  const getIdParamns = paramns[paramns.length - 1];
  const id = getIdParamns.split("=")[1];

  const res = await fetch(`http://localhost:3000/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json(await data);
}
