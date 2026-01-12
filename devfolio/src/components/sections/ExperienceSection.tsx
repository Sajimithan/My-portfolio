import { AnimatedSection } from "../shared/AnimatedSection";
import { siteConfig } from "@/constants/site";

export default function ExperienceSection() {
    return (
        <AnimatedSection id="experience" className="container max-w-4xl">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    My professional journey and the organizations I&apos;ve worked with.
                </p>
            </div>
            <div className="mt-12 space-y-8">
                {siteConfig.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-primary/20">
                        {/* Timeline dot */}
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                        <div className="bg-card p-6 rounded-xl border shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                <div>
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <p className="text-lg font-medium text-primary">{exp.company}</p>
                                </div>
                                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    );
}
