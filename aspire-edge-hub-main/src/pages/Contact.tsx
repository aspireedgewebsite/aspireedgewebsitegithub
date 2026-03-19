import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="hero-gradient section-padding">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Have a question or want to get started? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div {...fadeUp}>
              <SectionHeading title="Send a Message" centered={false} />
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="h-12"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="h-12"
                />
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-12"
                />
                <Textarea
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                />
                <Button type="submit" variant="hero" size="lg">
                  Send Message <Send size={18} />
                </Button>
              </form>
            </motion.div>

            {/* Info + Map */}
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <SectionHeading title="Get In Touch" centered={false} />
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-secondary" size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">connect@aspireedgegroup.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-secondary" size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-muted-foreground text-sm">+91 7205729525</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary" size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Address</p>
                    <p className="text-muted-foreground text-sm">Bhubaneswar odisha india</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  title="AspireEdge Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14719.4!2d85.8316024!3d20.2960594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38fe178f7af8d5%3A0x2568a2e5a86d8d19!2sBhubaneswar%2C%20Odisha%2C%20India!5e0!3m2!1sen!2sin!4v1726540800000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
