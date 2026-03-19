import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Users, Award, CheckCircle, MessageSquare } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const team = [
  { name: "Amit Deshmukh", role: "Founder & CEO" },
  { name: "Sneha Kulkarni", role: "Head of Education" },
  { name: "Raj Patel", role: "CTO" },
  { name: "Ananya Iyer", role: "Operations Lead" },
];

const whyUs = [
  "Industry-aligned curriculum",
  "Hands-on project-based learning",
  "Expert mentors from top companies",
  "Placement assistance & career support",
  "Recognized certifications",
  "Flexible learning schedules",
];

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="hero-gradient section-padding">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About AspireEdge</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              We're on a mission to transform tech education and empower the next generation of professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp}>
            <SectionHeading title="Who We Are" />
            <p className="text-muted-foreground leading-relaxed text-center">
              AspireEdge is an innovative EdTech and IT services company based in Pune, India. We bridge the gap between academic learning and industry demands by offering practical, skills-first programs in cutting-edge technologies. Our approach combines expert mentorship, real-world projects, and industry partnerships to create professionals who are truly job-ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="bg-card rounded-xl p-8 card-elevated" {...fadeUp}>
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <Lightbulb className="text-secondary" size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally recognized platform that empowers every learner — regardless of background — to build a successful and fulfilling career in technology.
              </p>
            </motion.div>
            <motion.div className="bg-card rounded-xl p-8 card-elevated" {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Target className="text-accent" size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize quality tech education through hands-on learning, industry mentorship, and real-world project experience, creating professionals who make an impact from day one.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div className="bg-card rounded-xl p-8 md:p-12 card-elevated" {...fadeUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <MessageSquare className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold">Founder's Message</h3>
                <p className="text-muted-foreground text-sm">Amit Deshmukh, CEO</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed italic">
              "At AspireEdge, we believe that the right skills, combined with the right guidance, can transform lives. We built this platform to give every aspiring professional the tools, mentorship, and real-world experience they need to thrive in the tech industry. Our commitment is to your growth — because when you succeed, we all succeed."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionHeading title="Our Team" subtitle="Passionate professionals driving your success." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="bg-card rounded-xl p-6 card-elevated text-center"
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-secondary" size={32} />
                </div>
                <h4 className="font-heading font-semibold">{member.name}</h4>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading title="Why Choose AspireEdge" />
          <div className="grid sm:grid-cols-2 gap-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 bg-card rounded-lg p-4 card-elevated"
                {...fadeUp}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <CheckCircle className="text-secondary shrink-0" size={20} />
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
