import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaGraduationCap } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const Hero = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Heisenberg71", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/Heisenberg71/", icon: FaLinkedin },
    // { name: "ResearchGate", url: "https://www.researchgate.net/profile/Kallol-Naha", icon: FaGraduationCap },
    // { name: "Google Scholar", url: "https://scholar.google.com/citations?user=nzL0EKoAAAAJ&hl=en", icon: SiGooglescholar },
  ];
  return (
    <section id="about" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl hover-lift">
            <img
              src="images/samin-yasir-photo-min.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Samin Yasir
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Backend Engineer & NLP Researcher
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="tel:+8801793592020" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+88-01793592020</span>
            </a>
            <a href="mailto:saminyasir.cs@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>saminyasir.cs@gmail.com</span>
            </a>
            {/* <a href="https://kallolnaha.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span>kallolnaha.me</span>
            </a> */}
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dhaka, Bangladesh</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={link.name}
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover-lift"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Bio */}
          <div className="max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Passionate <span className="font-semibold text-foreground">Backend Engineer</span> currently working as a full-time Backend engineer at <span className="font-semibold text-foreground">Kona Software Lab</span>. I am instrumental in building the <span className="font-semibold text-foreground">Token Service Provider (TSP) module</span> from scratch, adhering to <span className="font-semibold text-foreground">EMV (Euro-pay, Mastercard, Visa) specifications</span>. I have architected and developed critical backend systems including the <span className="font-semibold text-foreground">Token Life Cycle Management System, Issuer Callback Processing, Token Vault Creation System, Issuer On-boarding System, and TSP Reporting</span> modules. Additionally, I have authored comprehensive <span className="font-semibold text-foreground">unit test cases (UTC)</span> for the Kona Plate platform, ensuring code quality and reliability.
            </p>
            <p>
              Previously, I worked at <span className="font-semibold text-foreground">Samsung R&D Institute, Bangladesh</span>, where I contributed to the <span className="font-semibold text-foreground">Samsung Galaxy Smart Watch notification module</span>. My responsibilities encompassed writing unit tests, performing manual device testing, and collaborating on innovative features. I successfully passed the <span className="font-semibold text-foreground">Professional Test</span>, a globally recognized intensive coding assessment for Samsung Engineers, and mentored teammates to excel in this challenging evaluation.
            </p>
            <p>
              I graduated from <span className="font-semibold text-foreground">Sylhet Engineering College</span>, affiliated with <span className="font-semibold text-foreground">Shahjalal University of Science and Technology</span>, with a strong foundation in <span className="font-semibold text-foreground">problem-solving and competitive programming</span>. Throughout my academic journey, I gained extensive experience in algorithm design, data structures, and technical mentoring. I actively contributed to the community by tutoring junior developers on data structures and algorithms, facilitating workshops, and organizing programming contests to foster growth and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;