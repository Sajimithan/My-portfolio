import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Save to database
        const submission = await prisma.contactSubmission.create({
            data: {
                name,
                email,
                message,
            },
        });

        console.log("Contact form submission saved:", submission.id);

        return NextResponse.json(
            { success: true, message: "Thank you for your message! I'll get back to you soon." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
