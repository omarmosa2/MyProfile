import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Database, Code, Award } from "lucide-react";

const About = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={1}
          >
            <div className="relative overflow-hidden rounded-lg border border-primary/10 shadow-xl">
              <img
                className="w-full h-[40vh] md:h-[50vh] object-cover"
                alt="Professional workspace"
                src="https://images.unsplash.com/photo-1698945298361-365595d400eb"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                    <Calendar size={16} className="text-primary" />
                    <span>4+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={2}
            >
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <p className="text-muted-foreground mb-4">
                I'm a graduate of the College of Information Engineering with a strong passion for
                full-stack web development and modern UI/UX design. I specialize in creating
                end-to-end digital solutions, from database design and backend APIs to responsive
                frontend interfaces.
              </p>
              <p className="text-muted-foreground">
                My expertise spans across both frontend and backend technologies including React,
                JavaScript, PHP Laravel, MySQL, and modern CSS frameworks. I'm always eager to learn
                emerging technologies and transform innovative ideas into functional digital solutions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Experience Section */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          custom={3}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Experience</h3>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary/20 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Full Stack Developer
              </h4>
              <p className="text-sm text-muted-foreground mb-1">
                Freelance
              </p>
              <p className="text-xs text-muted-foreground">
                2023 - Present
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary/20 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                IT Officer
              </h4>
              <p className="text-sm text-muted-foreground mb-1">
                ONDER Organization
              </p>
              <p className="text-xs text-muted-foreground">
                2021 - 2025 (In Progress)
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary/20 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Database size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Data Officer
              </h4>
              <p className="text-sm text-muted-foreground mb-1">
                SHAFAQ Organization
              </p>
              <p className="text-xs text-muted-foreground">
                2020 - 2021
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
