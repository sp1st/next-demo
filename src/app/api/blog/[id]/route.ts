import prisma from "@/app/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest, { params }: { params:{id: string} }) => {
    const {id} = params //分割代入

    const post = await prisma.post.findUnique({where: {id: Number(id)}})

    if (!post) {
        return NextResponse.json({}, { status: 404 })
    }

    return NextResponse.json(post, { status: 200 })
}

export { GET }