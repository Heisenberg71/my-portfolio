import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const WorkProjects = () => {
  const projects = [
    {
      title: "AI Helper Bot",
      description:
        "Developed a custom Q&A chatbot leveraging OpenAI SDKs and LangChain, enabling dynamic and accurate question-answering capabilities. Integrated OpenAI's NLP with LangChain for efficient query handling and modular implementation and build using interface using Streamlit.",
      source: "FAQ handling AI chatbot",
      tags: ["Python", "LangChain", "OpenAI APIs", "Streamlit"],
    },
    {
      title: "Resume Analyzer",
      description:
        "Takes job requirement PDF and resume PDF as input and shows the match percentage of skills as output. Python package Pdfminer is used to extract the texts and NLTK is used to extract the skills from the candidate's resume. The matched percentage is generated using Cosine Similarity",
      source: "AI-based Resume Analyzer",
      tags: ["Python", "Pdfminer", "NLTK", "Cosine Similarity"],
    },
    {
      title: "Discord Problem Poster Bot",
      description:
        "Developed a LeetCode Problem Poster Bot that reads problem links from a Google Sheet and posts them daily in a designated channel of the LazyMentors Discord server. Over 100 Users actively solve programming problems provided by the bot.",
      source: "Discord Bot for Daily Problem Posting",
      tags: ["NestJS", "TypeScript", "Google Sheet API", "Discord Bot"],
    },
    {
      title: "Enhanced Weather Analyzer",
      description:
        "Optimized complex SQL queries to collect and process weather data from VisualCrossing API, persisting information in PostgreSQL and generating detailed reports. Enhanced query performance by implementing caching mechanisms using Redis, reducing weather query response time significantly. Utilized Docker to containerize and manage project dependencies, including Redis and PostgreSQL, ensuring a scalable and consistent development environment.",
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
                <CardDescription className="text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProjects;
