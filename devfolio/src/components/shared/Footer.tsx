import { siteConfig } from "@/constants/site";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by{" "}
                    <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        {siteConfig.name}
                    </Link>
                    . The source code is available on{" "}
                    <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </Link>
                    .
                </p>
                <div className="flex items-center space-x-4">
                    <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4 text-muted-foreground transition-colors hover:text-foreground" />
                    </Link>
                    <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                        <Linkedin className="h-4 w-4 text-muted-foreground transition-colors hover:text-foreground" />
                    </Link>
                    <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                        <Twitter className="h-4 w-4 text-muted-foreground transition-colors hover:text-foreground" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
