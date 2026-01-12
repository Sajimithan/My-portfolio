import { AnimatedSection } from "../shared/AnimatedSection";
import { siteConfig } from "@/constants/site";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
    return (
        <AnimatedSection id="about" className="container max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        I am an Information Technology and Management undergraduate with strong foundations in software engineering and OOP.
                        I have built several full-stack projects using React, Spring Boot, Node.js, and Laravel.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground">
                        I have hands-on experience with REST APIs and various databases including MongoDB, MySQL, and PostgreSQL.
                        I am comfortable with Git workflows, debugging, and teamwork, and I focus on building clean, reliable solutions while continuously learning and improving.
                    </p>

                </div>
                <div>
                    <h3 className="text-xl font-bold">Technical Skills</h3>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {siteConfig.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-medium">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                    <div className="mt-12">
                        <h3 className="text-xl font-bold">Education</h3>
                        <div className="mt-6 space-y-4">
                            {siteConfig.education.map((edu, index) => (
                                <div key={index} className="space-y-1">
                                    <h4 className="font-bold">{edu.institution}</h4>
                                    <p className="text-sm font-medium text-primary">{edu.degree}</p>
                                    <p className="text-xs text-muted-foreground">{edu.period} {edu.location && `| ${edu.location}`}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </AnimatedSection>
    );
}
