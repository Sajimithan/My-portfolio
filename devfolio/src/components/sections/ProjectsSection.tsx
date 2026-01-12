import { AnimatedSection } from "../shared/AnimatedSection";
import { siteConfig } from "@/constants/site";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
    return (
        <AnimatedSection id="projects" className="container">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    A selection of my recent work, showcasing my skills in full-stack development and design.
                </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {siteConfig.projects.map((project, index) => (
                    <Card key={index} className="flex flex-col overflow-hidden glow-card hover:border-primary/50 transition-all duration-300">
                        <div className="aspect-video w-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden group">
                            {/* Image placeholder for now */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground transition-transform duration-300 group-hover:scale-110">
                                <span className="text-sm font-medium">{project.title} Preview</span>
                            </div>
                        </div>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="outline">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="gap-2">
                            {project.link.includes('github.com') && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    Code
                                </Link>
                            )}
                            {/* @ts-ignore - allowing demo property even if not in type yet for flexibility */}
                            {project.demo && (
                                <Link
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cn(buttonVariants({ size: "sm" }), "w-full")}
                                >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Demo
                                </Link>
                            )}

                        </CardFooter>
                    </Card>
                ))}
            </div>
        </AnimatedSection>
    );
}
