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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSuccess(false), 5000);
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
                                <Input id="name" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none">
                                    Email
                                </label>
                                <Input id="email" type="email" placeholder="john@example.com" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium leading-none">
                                Message
                            </label>
                            <Textarea
                                id="message"
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
                    </form>
                </div>
            </div>
        </AnimatedSection>
    );
}
