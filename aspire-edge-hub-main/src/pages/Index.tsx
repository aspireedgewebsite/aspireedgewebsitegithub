import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import {
  Brain, Code, BarChart3, Megaphone, Palette, Cloud, Shield,
  GraduationCap, Briefcase, Award, Users, Target, Lightbulb, Heart,
  Monitor, Wrench, ShoppingCart, Globe, Quote, ArrowRight, CheckCircle
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const programs = [
  { icon: BarChart3, title: "Data Science", desc: "Master data analysis, visualization, and statistical modeling." },
  { icon: Brain, title: "AI & Machine Learning", desc: "Build intelligent systems with deep learning and NLP." },
  { icon: Code, title: "Full Stack Development", desc: "End-to-end web development with modern frameworks." },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, social media, and performance marketing mastery." },
  { icon: Palette, title: "UI/UX Design", desc: "Create stunning user experiences with design thinking." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, Azure, Docker, Kubernetes and CI/CD pipelines." },
  { icon: Shield, title: "Cyber Security", desc: "Protect systems with ethical hacking and security analysis." },
];

const services = [
  { icon: Monitor, title: "Website Development" },
  { icon: Wrench, title: "Website Maintenance" },
  { icon: Palette, title: "UI/UX Design" },
  { icon: Globe, title: "Software Solutions" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Data Science Student", text: "AspireEdge transformed my career. The hands-on projects and mentorship were invaluable." },
  { name: "Rahul Verma", role: "Full Stack Developer", text: "The internship program gave me real-world experience that no textbook could provide." },
  { name: "TechNova Solutions", role: "Partner Company", text: "AspireEdge interns consistently demonstrate strong technical skills and professionalism." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-secondary font-medium mb-4 tracking-wide uppercase text-sm">Welcome to AspireEdge</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Empowering Careers Through Skills & Technology
            </h1>
            <p className="text-primary-foreground/80 text-xl mb-8 leading-relaxed">
              Learn. Build. Grow with AspireEdge — your gateway to industry-ready skills and real-world experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses">
                <Button variant="hero" size="lg">
                  Explore Courses <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/internships">
                <Button variant="hero-outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Join Internship
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="About AspireEdge" subtitle="Bridging the gap between education and industry with practical, skills-first learning." />
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To democratize quality tech education and create industry-ready professionals through hands-on learning and mentorship." },
              { icon: Lightbulb, title: "Our Vision", desc: "To become a leading platform that empowers every learner to build a successful career in technology." },
              { icon: Heart, title: "Why AspireEdge", desc: "Industry-aligned curriculum, expert mentors, real projects, and placement support that sets us apart." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-card rounded-xl p-8 card-elevated text-center"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-secondary" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionHeading title="Our EdTech Programs" subtitle="Industry-aligned courses designed to make you job-ready." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.title}
                className="bg-card rounded-xl p-6 card-elevated group cursor-pointer"
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <prog.icon className="text-secondary" size={24} />
                </div>
                <h3 className="font-heading font-semibold mb-2">{prog.title}</h3>
                <p className="text-muted-foreground text-sm">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses">
              <Button variant="default" size="lg">
                View All Courses <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="Internships & Training" subtitle="Get real-world experience with our industry-oriented programs." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, title: "Industry Projects", desc: "Work on live projects with real clients." },
              { icon: GraduationCap, title: "Certification", desc: "Earn recognized certificates upon completion." },
              { icon: Award, title: "Placement Assistance", desc: "Get placed with our hiring partners." },
              { icon: Users, title: "Expert Mentorship", desc: "Learn from experienced industry professionals." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-card rounded-xl p-6 card-elevated text-center"
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-accent" size={28} />
                </div>
                <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionHeading title="IT Services" subtitle="Professional technology solutions for your business needs." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                className="bg-card rounded-xl p-6 card-elevated text-center"
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svc.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold mb-3">{svc.title}</h3>
                <Link to="/contact">
                  <Button variant="outline" size="sm">Contact Us</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="What People Say" subtitle="Hear from our students and partners." />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-card rounded-xl p-8 card-elevated relative"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Quote className="text-secondary/20 absolute top-4 right-4" size={40} />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient section-padding">
        <div className="container mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Start Your Learning Journey Today
            </h2>
            <p className="text-primary-foreground/70 mb-8 text-lg max-w-xl mx-auto">
              Join thousands of learners who are building their dream careers with AspireEdge.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/courses">
                <Button variant="hero" size="lg">Register Now</Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
