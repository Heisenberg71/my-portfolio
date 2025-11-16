import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Database, Code2, Brain, Zap, Cloud, Sparkles, GitBranch, Boxes, FileText, BarChart3, Layers } from "lucide-react";
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiMariadb, SiMongodb, SiRedis, SiSpringboot, SiApachekafka, SiGradle, SiJunit5, SiJenkins, SiC, SiCplusplus, SiOpenai } from "react-icons/si";

const Resume = () => {
  const workExperience = [
    {
      period: "September, 2023 - Present",
      title: "Software Engineer",
      organization: "Kona Software Lab Ltd.",
      description: [
        "Engineered backend modules for a secure, high-performance, and scalable Card Issuance System for Debit, Credit, and Prepaid cards used by financial institutions using Java Spring Boot framework",
        "Designed and implemented a Token Service Provider (TSP) adhering to MasterCard Specifications, ensuring secure payment token management through Test-Driven Development (TDD)",
        "Contributed to making one of the least bug-reported systems by writing 35% of the test code for the whole system with intensive code reviews",
        "Reduced deployment time by 30% through minimizing test suite execution time by smartly managing Spring Boot beans",
        "Diminished authentication vulnerabilities by 40% through integrating Keycloak for Single Sign-On (SSO), streamlining authentication processes across multiple systems",
        "Established database synchronization among components in microservices through Kafka Connectors",
        "Implemented dynamic PDF and Excel report generation using JasperReports and Stored Procedures to handle large datasets efficiently, improving reporting capabilities and business insights delivery",
      ],
    },
    {
      period: "April, 2023 - September, 2023",
      title: "Software Engineer",
      organization: "Samsung R&D Institute Bangladesh (SRBD)",
      description: [
        "Worked on Samsung Galaxy Watch 6 Notifications using Android (Java)",
        "Achieved top 4% Ranking globally in Samsung's prestigious Global Professional Test within just 6 months of joining, by efficiently solving a complex real-world engineering problem under stringent time constraints",
        "Boosted a Five-Person team's Professional Test Passing Rate by 60% through targeted mentoring and preparation for the competitive exam",
      ],
    },
  ];

  const education = [
    {
      period: "2018 - 2023",
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Shahjalal University of Science and Technology, Sylhet, Bangladesh",
      description:
        "Earned a Bachelor of Science degree, developing a strong foundation in Algorithms, Data Structures, and Engineering principles. Graduated with distinction while actively participating in competitive programming contests and contributing to various technical clubs.",
      cgpa: "3.75 / 4.00",
    },
  ];

  const skills = [

    // Programming Languages
    { name: "C", icon: SiC },
    { name: "C++", icon: SiCplusplus },
    { name: "Java (OOP)", icon: FaJava },
    { name: "Python", icon: FaPython },

    // Databases
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MariaDB", icon: SiMariadb },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Redis", icon: SiRedis },

    // NLP & AI
    { name: "NLP", icon: Brain },
    { name: "Deep Learning", icon: Brain },
    { name: "LangChain", icon: Sparkles },
    { name: "OpenAI APIs", icon: SiOpenai },
    
    // Tools & Technologies
    { name: "SpringBoot", icon: SiSpringboot },
    { name: "Gradle", icon: SiGradle },
    { name: "Kafka", icon: SiApachekafka },
    { name: "JUnit", icon: SiJunit5 },
    { name: "Git", icon: FaGitAlt },
    { name: "Microservice", icon: Boxes },
    { name: "Test Driven Development (TDD)", icon: Code2 },
    { name: "Jenkins", icon: SiJenkins },
    { name: "Docker", icon: FaDocker },
    { name: "Pabble Templates", icon: FileText },
    { name: "Jasper Reports", icon: BarChart3 },
    { name: "Design Patterns", icon: Layers },
  ];

  return (
    <section id="resume" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">My Resume</h2>
          <div className="title-underline"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-20 animate-slide-in-left">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="w-7 h-7 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Work Experience</h3>
          </div>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <Card key={index} className="hover-lift border-l-4 border-l-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{work.title}</CardTitle>
                      <CardDescription className="text-base font-medium">{work.organization}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex-shrink-0 font-medium">
                      {work.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {Array.isArray(work.description) ? (
                      work.description.map((point, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex gap-3">
                          <span className="text-primary font-bold flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-muted-foreground text-sm flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>{work.description}</span>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20 animate-slide-in-right">
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="w-7 h-7 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover-lift border-l-4 border-l-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium">{edu.institution}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex-shrink-0 font-medium">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed text-sm">{edu.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-semibold text-primary border-primary">
                      CGPA: {edu.cgpa}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-10">
            <Code2 className="w-7 h-7 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Skills</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card key={index} className="hover-lift border-l-4 border-l-primary/30 transition-all duration-300">
                  <CardContent className="pt-4 pb-4 flex flex-col items-center justify-center gap-2 text-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
