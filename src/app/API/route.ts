import { NextResponse } from "next/server";

export async function GET() {
        return NextResponse.json({
        emp_name: "Mudit Sharma",
    })
}