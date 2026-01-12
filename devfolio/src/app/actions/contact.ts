"use server";

import prisma from "@/lib/prisma";

export async function submitContact(formData: { name: string; email: string; message: string }) {
    try {
        const submission = await prisma.contactSubmission.create({
            data: {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
        });
        return { success: true, data: submission };
    } catch (error) {
        console.error("Failed to submit contact form:", error);
        return { success: false, error: "Something went wrong. Please try again later." };
    }
}
