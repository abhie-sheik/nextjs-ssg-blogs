import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return new NextResponse(
      JSON.stringify({
        message: "Invalid Token",
      }),
      {
        status: 401,
        statusText: "Unauthorized",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const path = request.nextUrl.searchParams.get("path");

  if (!path) {
    return new NextResponse(
      JSON.stringify({
        message: "Invalid Path",
      }),
      {
        status: 404,
        statusText: "Not Found",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  revalidatePath(path);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
