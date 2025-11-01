import { Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Highlights = () => {
  const highlights = [
    {
      title: "Data Engineer Intern",
      organization: "Nexmedis",
      period: "Jan 2025 - Present",
      achievements: [
        "Membangun 12+ DAG Airflow untuk sinkronisasi data RS (MySQL → Postgres)",
        "Menurunkan waktu latency data dari 2 jam → 15 menit",
        "Standardisasi mapping ke skema klinis internal",
      ],
    },
    {
      title: "Data Analyst",
      organization: "PT Analytics Indonesia",
      period: "Jul 2024 - Des 2024",
      achievements: [
        "Analisis performa bisnis dengan SQL & Python menghasilkan insight 30% peningkatan revenue",
        "Membuat dashboard Tableau untuk 5+ departemen",
        "Automasi reporting mingguan dengan Python scripts",
      ],
    },
    {
      title: "Best Final Project",
      organization: "Universitas Data Science",
      period: "2024",
      achievements: [
        "Proyek ML prediction churn customer dengan akurasi 94%",
        "Presentasi hasil di konferensi nasional",
        "Publikasi paper di jurnal terakreditasi",
      ],
    },
  ];

  return (
    <section id="highlights" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent break-words">
            Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prestasi dan pengalaman terbaik dalam perjalanan karir saya
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
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
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
              <a href="/assets/cv.pdf" download>
                Lihat CV Lengkap
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
