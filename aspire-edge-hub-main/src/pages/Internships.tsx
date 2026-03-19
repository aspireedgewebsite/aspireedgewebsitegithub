import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Code, Brain, BarChart3, Megaphone, Palette, Cloud, Shield, CheckCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const programs = [
  { icon: Code, title: "Full Stack Development Intern" },
  { icon: BarChart3, title: "Data Science Intern" },
  { icon: Brain, title: "AI & ML Intern" },
  { icon: Megaphone, title: "Digital Marketing Intern" },
  { icon: Palette, title: "UI/UX Design Intern" },
  { icon: Cloud, title: "Cloud & DevOps Intern" },
  { icon: Shield, title: "Cyber Security Intern" },
];

const benefits = [
  "Work on real industry projects",
  "Mentorship from senior professionals",
  "Earn industry-recognized certificates",
  "Flexible remote & hybrid options",
  "Build a portfolio of real work",
  "Placement assistance on completion",
];

const processSteps = [
  { num: "1", title: "Browse Programs", desc: "Explore available internship tracks." },
  { num: "2", title: "Apply Online", desc: "Submit your application form." },
  { num: "3", title: "Get Selected", desc: "Our team reviews and approves." },
  { num: "4", title: "Start Learning", desc: "Begin your internship journey." },
];

const Internships = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="hero-gradient section-padding">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Internship Programs
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Gain hands-on experience with real projects and expert mentorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="Available Programs" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                className="bg-card rounded-xl p-6 card-elevated flex items-center gap-4"
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <p.icon className="text-secondary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-sm">{p.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading title="Why Intern With Us" />
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                className="flex items-center gap-3 bg-card rounded-lg p-4 card-elevated"
                {...fadeUp}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <CheckCircle className="text-secondary shrink-0" size={20} />
                <span className="text-sm font-medium">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="Application Process" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <motion.div key={s.num} className="text-center" {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 font-heading font-bold text-lg">
                  {s.num}
                </div>
                <h4 className="font-heading font-semibold mb-1">{s.title}</h4>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact">
              <Button variant="hero" size="lg">Apply Now <ArrowRight size={18} /></Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internships;
