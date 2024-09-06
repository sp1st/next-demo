import prisma from "@/app/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

const GET = async () => {
    const allPosts = await prisma.post.findMany() // 非同期処理
    return NextResponse.json(allPosts)
}

export { GET }