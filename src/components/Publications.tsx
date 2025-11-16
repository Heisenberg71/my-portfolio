import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Bangla Hate Speech Classification using Pretrained Language Models and Data Augmentation",
      authors: "Samin Yasir",
      venue: "Proceedings of the Second Workshop on Bangla Language Processing",
      publisher: "AACL",
      url: "https://dl.acm.org/doi/10.1145/3770753",
    }
  ];

  return (
    <section id="publications" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Publication</h2>
          <div className="title-underline"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 animate-slide-in-left">
          {publications.map((pub, index) => (
            <Card key={index} className="hover-lift group border-l-4 border-l-transparent hover:border-l-primary transition-all">
              <CardHeader>
                <CardTitle className="text-lg leading-tight mb-3">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors flex items-start gap-2"
                  >
                    <span className="flex-1 line-clamp-3">{pub.title}</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{pub.authors}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2 font-medium">{pub.venue}</p>
                <Badge variant="outline" className="text-xs">
                  {pub.publisher}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
