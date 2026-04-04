import { createCorsResponse, createLogoutResponse } from "@/lib/auth/core/session";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  return createLogoutResponse(req.headers.get("origin"));
}

export async function OPTIONS(req: NextRequest) {
  return createCorsResponse({}, 200, req.headers.get("origin"));
}
