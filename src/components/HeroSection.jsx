import { useState } from "react";
import { ArrowDown } from "lucide-react";
import frontImage from "@/assets/profile.jpg";
import backImage from "@/assets/profile-back.jpg";

export const HeroSection = () => {

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Flip Profile Image */}
         <div className="flex justify-center mb-8">
            <div
              className="relative w-48 h-48 md:w-56 md:h-56 cursor-pointer"
              style={{ perspective: "1200px" }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div
                className={`flip-card-inner ${
                  isFlipped ? "flip-card-flipped" : ""
                }`}
              >
                {/* Front */}
                <div className="flip-card-front">
                  <img
                    src={frontImage}
                    alt="Dopana Rohit Kumar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Back */}
                <div className="flip-card-back">
                  <img
                    src={backImage}
                    alt="Back Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              Hi, I'm
            </span>

            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Dopana Rohit Kumar
            </span>

            <span className="text-gradient ml-2 text-2xl md:text-4xl opacity-0 animate-fade-in-delay-2">
              {" "}Java Full Stack Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a Full Stack Developer specializing in Java, Spring Boot,
            Microservices, and React.js, with 3+ years of experience building
            scalable and secure web applications. From designing backend APIs
            and Kafka-based event-driven systems to crafting responsive frontend
            interfaces, I focus on creating modern, efficient, and user-centric
            digital experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};