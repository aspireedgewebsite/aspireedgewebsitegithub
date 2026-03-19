import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Brain, Code, BarChart3, Megaphone, Palette, Cloud, Shield, ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const courses = [
  { icon: BarChart3, title: "Data Science", duration: "6 Months", level: "Intermediate", desc: "Python, statistics, ML basics, data visualization, and real-world analytics." },
  { icon: Brain, title: "AI & Machine Learning", duration: "8 Months", level: "Advanced", desc: "Deep learning, NLP, computer vision, TensorFlow and PyTorch." },
  { icon: Code, title: "Full Stack Development", duration: "6 Months", level: "Beginner", desc: "React, Node.js, databases, REST APIs, and deployment." },
  { icon: Megaphone, title: "Digital Marketing", duration: "4 Months", level: "Beginner", desc: "SEO, SEM, social media, content marketing, and analytics." },
  { icon: Palette, title: "UI/UX Design", duration: "5 Months", level: "Beginner", desc: "Figma, design thinking, prototyping, and user research." },
  { icon: Cloud, title: "Cloud & DevOps", duration: "6 Months", level: "Intermediate", desc: "AWS, Docker, Kubernetes, CI/CD, and infrastructure as code." },
  { icon: Shield, title: "Cyber Security", duration: "6 Months", level: "Intermediate", desc: "Ethical hacking, penetration testing, and security analysis." },
];

const steps = [
  { num: "01", title: "Register", desc: "Create your account on AspireEdge" },
  { num: "02", title: "Get Approved", desc: "Admin reviews and approves your application" },
  { num: "03", title: "Access Course", desc: "Get instant access to course materials" },
  { num: "04", title: "Learn & Complete", desc: "Complete modules with hands-on projects" },
  { num: "05", title: "Get Certified", desc: "Earn your industry-recognized certificate" },
];

const levelColor: Record<string, string> = {
  Beginner: "bg-secondary/10 text-secondary",
  Intermediate: "bg-accent/10 text-accent",
  Advanced: "bg-primary/10 text-primary",
};

const Courses = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="hero-gradient section-padding">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              AspireEdge EdTech — Learn Skills That Matter
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Industry-aligned courses to fast-track your career in tech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="Our Courses" subtitle="Choose from technical courses, professional skills, and internship programs." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <motion.div
                key={c.title}
                className="bg-card rounded-xl p-6 card-elevated flex flex-col"
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <c.icon className="text-secondary" size={24} />
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${levelColor[c.level]}`}>
                    {c.level}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-xs mb-3">Duration: {c.duration}</p>
                <p className="text-muted-foreground text-sm flex-1">{c.desc}</p>
                <Link to="/contact" className="mt-4">
                  <Button variant="secondary" size="sm" className="w-full">
                    Enroll Now <ArrowRight size={16} />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionHeading title="How It Works" subtitle="Your journey from registration to certification." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="text-center"
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mx-auto mb-3 font-heading font-bold text-lg">
                  {step.num}
                </div>
                <h4 className="font-heading font-semibold mb-1">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
