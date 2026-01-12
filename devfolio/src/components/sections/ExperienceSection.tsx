import { AnimatedSection } from "../shared/AnimatedSection";
import { siteConfig } from "@/constants/site";

export default function ExperienceSection() {
    return (
        <AnimatedSection id="experience" className="container">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    My professional journey and the organizations I&apos;ve worked with.
                </p>
            </div>
            <div className="mt-12 relative border-l-2 border-primary/20 ml-4 md:ml-0 md:left-1/2">
                {siteConfig.experience.map((exp, index) => (
                    <div key={index} className={`mb-12 relative ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-[-50%]' : 'md:pl-12 md:ml-[50%]'}`}>
                        {/* Dot */}
                        <div className="absolute top-0 left-[-9px] md:left-auto md:right-[-9px] w-4 h-4 rounded-full bg-primary border-4 border-background"
                            style={index % 2 !== 0 ? { left: '-9px', right: 'auto' } : {}} />

                        <div className="bg-card p-6 rounded-xl border shadow-sm transition-all hover:shadow-md">
                            <span className="text-sm font-semibold text-primary">{exp.period}</span>
                            <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                            <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                            <p className="text-sm text-muted-foreground mt-1 mb-4">{exp.location}</p>
                            <p className="text-muted-foreground">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    );
}
