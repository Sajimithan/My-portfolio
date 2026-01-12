"use client";

import { AnimatedSection } from "../shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/constants/site";

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess(true);
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setSuccess(false), 5000);
            } else {
                setError(result.error || "Something went wrong");
            }
        } catch (err) {
            setError("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <AnimatedSection id="contact" className="container">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Have a question or want to work together? Feel free to reach out!
                </p>
            </div>
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
                <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Email</h3>
                            <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Phone className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Phone</h3>
                            <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Location</h3>
                            <p className="text-muted-foreground">{siteConfig.contact.location}</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border bg-card p-6 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none">
                                    Name
                                </label>
                                <Input id="name" name="name" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none">
                                    Email
                                </label>
                                <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium leading-none">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="How can I help you?"
                                className="min-h-[120px]"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                        {success && (
                            <p className="text-center text-sm font-medium text-green-500">
                                Message sent successfully!
                            </p>
                        )}
                        {error && (
                            <p className="text-center text-sm font-medium text-red-500">
                                {error}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </AnimatedSection>
    );
}
