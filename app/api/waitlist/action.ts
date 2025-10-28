"use server";

import { z } from "zod";
import { prisma } from "@/prisma/client";
import { sendWaitlistConfirmationEmail } from "@/lib/emails/send-email";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function submitWaitlist(formData: FormData) {
  try {
    const email = formData.get("email");

    // Validate email with Zod
    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      return {
        success: false,
        message: "Please enter a valid email address",
      };
    }

    const { email: validatedEmail } = result.data;

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedEmail },
    });

    if (existingUser) {
      return {
        success: false,
        message: "This email is already on the waitlist",
      };
    }

    // Create new user with isWaitlistUser = true
    await prisma.user.create({
      data: {
        email: validatedEmail,
        isWaitlistUser: true,
      },
    });

    // Send confirmation email asynchronously (non-blocking)
    sendWaitlistConfirmationEmail(validatedEmail).catch((error) => {
      console.error("Failed to send confirmation email:", error);
    });

    return {
      success: true,
      message: "Thanks for joining! Check your email.",
    };
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
