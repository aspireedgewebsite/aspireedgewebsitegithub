import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Monitor, Wrench, Palette, ShoppingCart, Briefcase, Globe } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const services = [
  { icon: Monitor, title: "Website Development", desc: "Custom, responsive websites built with modern technologies to establish your online presence." },
  { icon: Wrench, title: "Website Maintenance", desc: "Keep your site updated, secure, and running smoothly with our maintenance plans." },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, user-centered designs that enhance engagement and drive conversions." },
  { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Complete online store setup with payment integration, inventory, and order management." },
  { icon: Briefcase, title: "Portfolio Websites", desc: "Showcase your work with a stunning, professional portfolio site." },
  { icon: Globe, title: "Business Websites", desc: "Corporate websites that communicate your brand story and generate leads." },
];

const ITServices = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="hero-gradient section-padding">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              IT Services
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Professional technology solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="Our Services" subtitle="We deliver quality solutions — no hidden costs, just results." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                className="bg-card rounded-xl p-8 card-elevated text-center flex flex-col items-center"
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                  <svc.icon className="text-secondary" size={30} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">{svc.title}</h3>
                <p className="text-muted-foreground text-sm flex-1 mb-5">{svc.desc}</p>
                <Link to="/contact">
                  <Button variant="outline" size="sm">Contact Us</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServices;
