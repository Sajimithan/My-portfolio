import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";
import { Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "../shared/AnimatedSection";

export default function HeroSection() {
    return (
        <AnimatedSection className="container flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center text-center">
            <div className="relative mb-8 h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                <img
                    src={siteConfig.profileImage}
                    alt={siteConfig.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I&apos;m {siteConfig.name}
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                A {siteConfig.title.split('|')[1]?.trim() || "Software Engineer"} specializing in building modern, responsive, and scalable web applications.
            </p>


            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="#contact" className={cn(buttonVariants({ size: "lg" }))}>
                    Get in Touch
                </Link>
                <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                </Link>
            </div>
            <div className="mt-8 flex space-x-4">
                <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
                    <Linkedin className="h-6 w-6" />
                </Link>
                <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
                    <Twitter className="h-6 w-6" />
                </Link>
            </div>
        </AnimatedSection>
    );
}