import { Calendar, TrendingUp,Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Highlights = () => {
  const highlights = [
    {
      type: "work",
      title: "Data Engineer",
      organization: "Nexmedis",
      period: "Aug 2025 - Present",
      achievements: [
        "Built 12+ Airflow DAGs for hospital data synchronization (MySQL → PostgreSQL)",
        "Performed database migration mapping using Apache Airflow",
        "Standardized database structures according to FHIR standards"
      ],
    },
    {
      type: "work",
      title: "Data Engineer Intern",
      organization: "Direktorat Sistem Informasi dan Digitalisasi Universitas Airlangga ",
      period: "Jan 2024 - Feb 2024",
      achievements: [
          "Demonstrated the ability to understand database structures and implement them using Navicat",
          "Developed queries for approximately 30 data warehouses using PostgreSQL"
        ],
    },
    {
      type: "achievement",
      title: "3rd Winner of Data Science Competition GAMMAFEST",
      organization: "IPB University",
      period: "May 2024",
      achievements: [
        "GAMMAFEST Data Science Competition is a competition that processes C1 Pemilu images to read the text using image classification.",
      ],
    },
    {
      type: "achievement",
      title: "3rd Winner of Data Science Competition MCF",
      organization: "ITB",
      period: "May 2024",
      achievements: [
        "MCF Data Science Competition is a competition that processes cholesterol data to identify health factors with classification.",
      ],
    },
    {
      type: "achievement",
      title: "3rd Winner of Data Science Competition ICONIC",
      organization: "Siliwangi University",
      period: "Oct 2024",
      achievements: [
        "ICONIC is a competition organized by Universitas Siliwangi aimed at predicting credit card application eligibility using demographic and financial data.",
      ],
    },

  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent break-words">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key Achievements and Experiences Throughout My Career
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0
                    ${item.type === "work" ? "bg-primary/10" : "bg-yellow-500/10"}`}
                >
                  {item.type === "work" ? (
                    <Briefcase className="w-6 h-6 text-primary" />
                  ) : (
                    <Award className="w-6 h-6 text-yellow-500" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.organization}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    {item.period}
                  </div>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground/80 flex items-start gap-2"
                      >
                        <span className="text-accent mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <a
                href={`${import.meta.env.BASE_URL}assets/Rizki Widanto-resume_3.pdf`}
                download
              >
                View Full CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
