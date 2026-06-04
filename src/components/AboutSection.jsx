import { Briefcase, Code, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer | Java + React
            </h3>

            <p className="text-muted-foreground">
              I’m a Full Stack Developer with 3+ years of experience building
              scalable and secure web applications using Java, Spring Boot,
              Microservices, and React.js. I specialize in developing REST APIs,
              event-driven systems with Kafka, and responsive frontend
              applications with modern UI technologies.
            </p>

            <p className="text-muted-foreground">
              I enjoy solving complex problems and building clean, maintainable
              applications that deliver seamless user experiences. From backend
              architecture to frontend interfaces, I focus on writing efficient,
              production-ready code and continuously improving my skills with
              modern development practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a 
                href="https://drive.google.com/uc?export=download&id=1IvRNHVkpgy0keZhYfmBV09kod90PgOGP"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                  Download CV
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Frontend */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>

                  <p className="text-muted-foreground">
                    Building responsive and interactive user interfaces using
                    React.js, JavaScript, Tailwind CSS, and modern frontend
                    technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Backend Development
                  </h4>

                  <p className="text-muted-foreground">
                    Developing scalable microservices and secure REST APIs using
                    Java, Spring Boot, Spring Security, Kafka, and MySQL.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Experience */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Project Experience
                  </h4>

                  <p className="text-muted-foreground">
                    Worked on enterprise-level applications including a Patient
                    Management System with microservices architecture,
                    authentication, API Gateway, Kafka, and Docker deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};