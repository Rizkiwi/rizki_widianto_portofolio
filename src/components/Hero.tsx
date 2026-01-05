import { Button } from "@/components/ui/button";
import { Database, TrendingUp, Code } from "lucide-react";
import profileImage from "@/assets/Foto_Rizki.jpg";

const Hero = () => {
  const stats = [
    { icon: Code, label: "Projects", value: "15+" },
    { icon: Database, label: "Datasets", value: "50+" },
    { icon: TrendingUp, label: "Skills", value: "Python, SQL, Airflow" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse" />
            <img
              src={profileImage}
              alt="Rizki Widianto"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-lg"
              loading="eager"
            />
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Rizki Widianto
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Data Engineer | Data Analyst | Data Scientist
          </p>

          {/* Description */}
          <p className="max-w-2xl text-base md:text-lg font-semibold text-foreground">
            Certified Data Analyst Associate by BNSP.
          </p>
          <p className="max-w-2xl text-base md:text-lg text-foreground/80 mb-4 leading-relaxed">
            I am a Data Science graduate with a focus on data analysis, ETL, and Machine Learning.
          </p>

          {/* Stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-3xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border"
              >
                <stat.icon className="w-8 h-8 text-accent mb-3 mx-auto" />
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#experience")}
            >
              Lihat Experience
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/assets/Associate Data Analyst_Sertifikasi_Rizki Widianto.pdf" download>
                Lihat Sertifikasi
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
