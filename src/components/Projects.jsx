import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const projects = [
  {
    id: 1,
    title: "Dental Clinic Management System",
    description:
      "A comprehensive desktop application for dental clinics that streamlines patient management, appointment scheduling, treatment tracking, and billing. Features an intuitive dashboard, detailed reports, and a modern responsive interface.",
    tags: ["ELECTRON", "TYPESCRIPT", "SQLITE", "TAILWIND"],
    image: "dental",
    imagesrc: "",
    imageAlt: "Dental clinic management system with dashboard and reports",
    liveLink: "https://smiledesk-demo.vercel.app/",
    githubLink: "",
    featured: true,
  },
  {
    id: 2,
    title: "pharmadesk",
    description:
      "A comprehensive desktop pharmacy management and POS application that simplifies sales, inventory control, debts, expenses, reports, licensing, and backups. Features barcode scanning, secure access, real-time stock tracking, profit analytics, and a modern Arabic interface.",
    tags: ["ELECTRON", "TYPESCRIPT", "SQLITE", "TAILWIND"],
    image: "pharmadesk",
    imagesrc: "",
    imageAlt:
      "Pharmacy POS and inventory management system with dashboard and reports",
    liveLink: "",
    githubLink: "",
    featured: true,
  },
  {
    id: 3,
    title: "mcms-main",
    description:
      "A comprehensive medical center management system that streamlines patient management, appointment scheduling, medical records, billing, payments, staff administration, and financial operations. Features role-based access control, detailed reports, multi-clinic support, and a modern responsive Arabic interface.",
    tags: ["LARAVEL", "REACT", "MYSQL", "TAILWIND"],
    image: "mcms",
    imagesrc: "",
    imageAlt:
      "Medical center management system with patient records, appointments, billing, dashboard, and operational reports",
    liveLink: "",
    githubLink: "",
    featured: true,
  },

  {
    id: 4,
    title: "E-Commerce Website",
    description:
      "A modern e-commerce platform featuring product listings, responsive design, shopping cart functionality, and category-based filtering. Built with React, Laravel, and Tailwind for performance and scalability.",
    tags: ["REACT", "LARAVEL", "TAILWIND"],
    image: "ecommerce",
    imagesrc: "",
    imageAlt: "E-commerce website with product listings and shopping cart",
    liveLink: "",
    githubLink: "",
    featured: true,
  },

  {
    id: 5,
    title: "HR System",
    description:
      "A Human Resources management platform that helps administrators and managers oversee employee records, attendance, payroll, and performance tracking. The system provides an intuitive dashboard for quick access to all HR functions.",
    tags: ["REACT", "LARAVEL", "TAILWIND"],
    image: "hr",
    imagesrc: "",
    imageAlt: "HR system dashboard for employee management and payroll",
    liveLink: "",
    githubLink: "",
    featured: true,
  },

  {
    id: 6,
    title: "Employee Management System",
    description:
      "An employee management system that streamlines HR operations including employee records, attendance, payroll, and performance tracking. It provides an intuitive dashboard and role-based access for administrators and managers.",
    tags: ["LARAVEL", "TAILWIND"],
    image: "employee_management",
    imagesrc: "",
    imageAlt: "Employee management platform with HR dashboard and reports",
    liveLink: "",
    githubLink: "",
    featured: true,
  },

  {
    id: 7,
    title: "Simple App",
    description:
      "A simple financial management application designed to help track and organize all expenses and incomes related to personal projects.",
    tags: ["PYTHON", "BOOTSTRAP", "JAVASCRIPT"],
    image: "simple",
    imageAlt: "Personal finance management application interface",
    liveLink: "",
    githubLink: "",
    featured: true,
  },
  {
    id: 9,
    title: "Hospital Web",
    description:
      "A hospital website that facilitates digital access to hospital services, enabling patients to book appointments, view doctors, explore departments, and contact management. Staff and doctors can also manage medical and administrative data.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    image: "Hospital",
    imageAlt: "Hospital website for appointments, doctors, and departments",
    liveLink: "",
    githubLink: "",
    featured: true,
  },

  {
    id: 10,
    title: "Food App",
    description:
      "A food ordering platform that allows users to browse menus from various restaurants and easily order meals online through a user-friendly interface.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    image: "Food1",
    imageAlt: "Online food ordering application interface",
    liveLink: "",
    githubLink: "",
    featured: true,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.filter((project) => project.featured);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work and projects that showcase my skills and
            expertise in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm card-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              custom={index + 1}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  className=" object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={project.imageAlt}
                  src={`/images/${project.image}.png`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card text-card-foreground p-2 rounded-full hover:bg-muted transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Project <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={4}
          >
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
