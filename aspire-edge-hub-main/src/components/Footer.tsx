import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">
              Aspire<span className="text-secondary">Edge</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering careers through cutting-edge skills and technology. Building the next generation of tech professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <Link to="/about" className="hover:text-secondary transition-colors">About Us</Link>
              <Link to="/courses" className="hover:text-secondary transition-colors">Courses</Link>
              <Link to="/internships" className="hover:text-secondary transition-colors">Internships</Link>
              <Link to="/services" className="hover:text-secondary transition-colors">IT Services</Link>
              <Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Programs</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span>Data Science</span>
              <span>AI & Machine Learning</span>
              <span>Full Stack Development</span>
              <span>Digital Marketing</span>
              <span>Cloud & DevOps</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                <span>connect@aspireedgegroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                <span>+91 7205729525</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-secondary mt-0.5" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} AspireEdge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
