import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const WorkProjects = () => {
  const projects = [
    {
      title: "KONA Financial Card Personaization System (KONA CPS)",
      description: [
        "Developed a data parser for the Personalization System that embeds customer-specific data into card chips, currently deployed by Islamic Bank Bangladesh Limited",
        "Ensured secure and reliable data transfer to chip-based payment cards with high reliability standards"
      ],
      source: "KONA Software Lab. LTD.",
      tags: ["JAVA", "Spring-boot"],
    },
    {
      title: "KONA Token Service Provider (KONA TSP)",
      description: [
        "Designed and implemented a Token Service Provider adhering to MasterCard specifications using Test-Driven Development (TDD) methodology",
        "Architected modules for token lifecycle management, issuer callback processing, and secure payment token management"
      ],
      source: "KONA Software Lab. LTD.",
      tags: ["JAVA", "Spring-boot", "MariaDB", "MongoDB", "Kafka", "TDD"],
    },
    {
      title: "KONA Financial Card Management System - Issuance (KONA CMS)",
      description: [
        "Engineered backend modules for a secure, high-performance Card Issuance System supporting Debit, Credit, and Prepaid cards using Java Spring Boot",
        "Integrated Kafka for real-time data streaming and event processing across microservices for financial institutions"
      ],
      source: "KONA Software Lab. LTD.",
      tags: ["JAVA", "Spring-boot", "Postgres", "Kafka"],
    },
    {
      title: "AI Helper Bot",
      description: [
        "Developed a custom Q&A chatbot leveraging OpenAI SDKs and LangChain for dynamic question-answering and FAQ handling capabilities",
        "Built user interface using Streamlit with efficient query handling and modular implementation for seamless interaction"
      ],
      source: "FAQ handling AI chatbot",
      tags: ["Python", "LangChain", "OpenAI APIs", "Streamlit"],
    },
    {
      title: "Resume Analyzer",
      description: [
        "Built an AI-based Resume Analyzer that accepts job requirement and resume PDFs to calculate skill match percentage using Cosine Similarity",
        "Utilized Pdfminer for text extraction and NLTK for intelligent skill extraction from candidate resumes"
      ],
      source: "AI-based Resume Analyzer",
      tags: ["Python", "Pdfminer", "NLTK", "Cosine Similarity"],
    },
    {
      title: "Discord Problem Poster Bot",
      description: [
        "Built a LeetCode Problem Poster Bot that reads problem links from Google Sheets and posts them daily to Discord for 100+ active users",
        "Automated daily problem distribution on LazyMentors Discord server to engage the community in competitive programming"
      ],
      source: "Discord Bot for Daily Problem Posting",
      tags: ["NestJS", "TypeScript", "Google Sheet API", "Discord Bot"],
    },
    {
      title: "Enhanced Weather Analyzer",
      description: [
        "Optimized complex SQL queries to collect and process weather data from VisualCrossing API and persist in PostgreSQL with Redis caching",
        "Containerized the application using Docker to manage Redis and PostgreSQL dependencies for scalable deployment"
      ],
      source: "Weather Data Analysis System",
      tags: ["Java", "Spring-boot", "Redis", "Postgres", "Docker"],
    }
  ];

  return (
    <section id="work" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Work & Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 animate-slide-in-right">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift group border-l-4 border-l-transparent hover:border-l-primary transition-all">
              <CardHeader>
                <CardTitle className="text-lg mb-3 flex items-start justify-between gap-2">
                  <span className="font-bold">{project.title}</span>
                  <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {Array.isArray(project.description) ? (
                    project.description.map((point, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-muted-foreground text-sm flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>{project.description}</span>
                    </li>
                  )}
                </ul>
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground font-medium">
                    <span className="text-foreground">Source:</span> {project.source}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProjects;