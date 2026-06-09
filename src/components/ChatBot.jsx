import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
} from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const LINKEDIN_URL = "https://www.linkedin.com/in/drohitrk22/";
  const GITHUB_URL = "https://github.com/Rohitdrk22";
  const RESUME_URL = "https://drive.google.com/uc?export=download&id=1v-Wfm5GK4kD76lh6TUrpaBe_rk7qyAgY";

  const portfolioKnowledge = {
    about: `
👨‍💻 Rohit Kumar

Java Full Stack Developer with 3+ years of experience building scalable enterprise applications.

Specialized in:

• Java
• Spring Boot
• Microservices
• React.js
• Kafka
• Docker
• PostgreSQL
• JWT Security
• REST APIs

Focused on building production-ready software with clean architecture and scalability.
`,

    experience: `
💼 Professional Experience

Rohit has 3+ years of experience developing enterprise-grade applications.

Core Expertise:

• Spring Boot Development
• Microservices Architecture
• REST API Development
• React.js Frontend Development
• Kafka Event-Driven Systems
• Docker Containerization
• PostgreSQL Database Design
• Authentication & Authorization

Strong focus on performance, scalability, and maintainability.
`,

   education: `
🎓 Education

Master of Computer Applications (MCA)

🏫 Centurion University of Technology and Management

📍 Bhubaneswar, Odisha

📅 2021 - 2023

Key Areas of Study:

• Advanced Java Programming
• Database Management Systems
• Software Engineering
• Data Structures & Algorithms
• Computer Networks
• Operating Systems
• Web Technologies

Achievements:

✅ Built Full Stack Applications
✅ Developed Enterprise-Level Projects
✅ Strengthened Problem Solving Skills
✅ Worked on Database Design & Optimization

This academic foundation helped Rohit transition into professional Full Stack Development using Java, Spring Boot, React.js, Microservices, Kafka, and Docker.
`,

    skills: `
🛠 Technical Skills

Backend
• Java
• Spring Boot
• Spring Security
• Hibernate
• JWT
• REST APIs
• gRPC
• Kafka
• Microservices

Frontend
• React.js
• JavaScript
• HTML5
• CSS3
• Context API

Database
• PostgreSQL

DevOps & Tools
• Docker
• Git
• GitHub
• Swagger
• Postman
`,

    projects: `
🚀 Featured Projects

1️⃣ Patient Management System

Technologies:
Java, Spring Boot, Kafka, React.js,
gRPC, Docker, PostgreSQL

Features:
• Authentication Service
• API Gateway
• Appointment Service
• Billing Service
• Patient Service
• Event-Driven Architecture

-------------------------

2️⃣ Blog Website

Technologies:
Node.js, Express.js,
HTML, CSS, JavaScript

Features:
• Blog Publishing
• Dynamic Content
• Responsive UI
• Backend Integration
`,

    microservices: `
🏗 Microservices Expertise

Rohit has hands-on experience building Spring Boot Microservices using:

• API Gateway
• JWT Authentication
• Kafka Messaging
• gRPC Communication
• Docker Containers
• REST APIs
• Service Discovery Concepts

Benefits Achieved:

✅ Scalability
✅ Fault Isolation
✅ Easier Maintenance
✅ Independent Deployments
`,

    react: `
⚛ React.js Expertise

Experience includes:

• Functional Components
• Hooks
• Context API
• REST Integration
• Responsive Design
• Reusable Components
• State Management

Focus on clean UI and performance optimization.
`,

    kafka: `
📨 Apache Kafka Experience

Kafka is used for:

• Event Publishing
• Event Consumption
• Async Communication
• Decoupled Services
• Reliable Messaging

Implemented in Microservices Architecture to improve scalability and resilience.
`,

    grpc: `
⚡ gRPC Experience

Used gRPC with Protocol Buffers for efficient service-to-service communication.

Benefits:

• Faster than REST
• Lightweight Payloads
• Strong Contracts
• Better Performance

Used between core backend services.
`,

    docker: `
🐳 Docker Experience

Containerized applications using Docker for:

• Environment Consistency
• Easier Deployments
• Scalability
• Production Readiness

Microservices were packaged and deployed as containers.
`,

    hire: `
⭐ Why Hire Rohit?

• 3+ Years Experience
• Java Full Stack Developer
• Spring Boot Expert
• Microservices Architecture
• Kafka Event-Driven Systems
• React.js Development
• Docker Deployment
• PostgreSQL Database Design

Rohit focuses on scalable, secure, and maintainable software solutions.
`,

    contact: `
📨 Contact Information

📧 Email
drkrohit22@gmail.com

📱 Phone
+91 7326048224

📍 Location
Bangalore, India

Use the LinkedIn and GitHub buttons below to connect with Rohit.
`,

    resume: `
📄 Resume

Click the Download Resume button below to access Rohit's latest resume.
`,
  };

  const [messages, setMessages] = useState([
    {
  role: "assistant",
  content: `👋 Welcome!

I'm Rohit's Portfolio Assistant.

I can help you learn about:

🎓 Education
🚀 Experience
💻 Skills
📂 Projects
🏗 Microservices
⚛ React.js
☁ Docker
📨 Contact
📄 Resume
⭐ Why Hire Rohit?

Ask anything or click a suggestion below.`,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const suggestions = [
    "🚀 Experience",
    "🎓 Education",
    "💻 Skills",
    "📂 Projects",
    "⚛ React",
    "🏗 Microservices",
    "☁ Docker",
    "📄 Resume",
    "⭐ Why Hire Rohit?",
    "📨 Contact",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const getResponse = (question) => {
    const q = question.toLowerCase();

    if (
      q.includes("about") ||
      q.includes("who is rohit") ||
      q.includes("tell me about rohit")
    )
      return portfolioKnowledge.about;

    if (q.includes("experience"))
      return portfolioKnowledge.experience;

    if (
      q.includes("education") ||
      q.includes("mca")
    )
      return portfolioKnowledge.education;

    if (q.includes("skill"))
      return portfolioKnowledge.skills;

    if (q.includes("project"))
      return portfolioKnowledge.projects;

    if (q.includes("microservice"))
      return portfolioKnowledge.microservices;

    if (q.includes("react"))
      return portfolioKnowledge.react;

    if (q.includes("kafka"))
      return portfolioKnowledge.kafka;

    if (q.includes("grpc"))
      return portfolioKnowledge.grpc;

    if (q.includes("docker"))
      return portfolioKnowledge.docker;

    if (
      q.includes("hire") ||
      q.includes("why hire")
    )
      return portfolioKnowledge.hire;

    if (
      q.includes("resume") ||
      q.includes("cv")
    )
      return portfolioKnowledge.resume;

    if (q.includes("contact"))
      return portfolioKnowledge.contact;

    return `
I can answer questions about:

🚀 Experience
💻 Skills
📂 Projects
🏗 Microservices
⚛ React.js
☁ Docker
📨 Contact
📄 Resume
⭐ Why Hire Rohit?

Try one of the quick suggestions above.
`;
  };

  const sendMessage = (text = input) => {
    if (!text.trim()) return;

    const userMessage = {
      role: "user",
      content: text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        role: "assistant",
        content: getResponse(text),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed bottom-6 right-6 z-50
          p-4 rounded-full
          bg-gradient-to-r
          from-primary
          to-purple-500
          text-white
          shadow-xl
          animate-pulse
          hover:scale-110
          transition
        "
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div
          className="
          fixed bottom-24 right-6 z-50
          w-[380px]
          max-w-[95vw]
          h-[600px]
          rounded-3xl
          border border-primary/20
          bg-background/90
          backdrop-blur-xl
          shadow-[0_0_30px_rgba(99,102,241,0.35)]
          flex flex-col
          overflow-hidden
        "
        >
          <div className="bg-primary text-white p-4">
            <div className="flex items-center gap-3">
              <Bot size={24} />
              <div>
                <h3 className="font-bold">
                  Rohit AI Assistant
                </h3>
                <p className="text-xs opacity-90">
                  Usually replies instantly
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 border-b">
            <div className="flex flex-wrap gap-2">
              {suggestions.map((item) => (
                <button
                  key={item}
                  onClick={() => sendMessage(item)}
                  className="
                    text-xs
                    px-3 py-1
                    rounded-full
                    border
                    hover:bg-primary
                    hover:text-white
                    transition
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[85%]
                    rounded-2xl
                    p-3
                    whitespace-pre-line
                    ${
                      msg.role === "user"
                        ? "bg-primary text-white"
                        : "bg-muted"
                    }
                  `}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {msg.role === "assistant" ? (
                      <Bot size={14} />
                    ) : (
                      <User size={14} />
                    )}
                    <span className="text-xs opacity-70">
                      {msg.time}
                    </span>
                  </div>

                  <>
                    <div>{msg.content}</div>

                    {msg.role === "assistant" &&
                      msg.content.includes("Contact Information") && (
                        <div className="flex gap-2 mt-3 flex-wrap">
                          <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm"
                          >
                            LinkedIn
                          </a>

                          <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 rounded-lg bg-black text-white text-sm"
                          >
                            GitHub
                          </a>
                        </div>
                      )}

                    {msg.role === "assistant" &&
                      msg.content.includes("📄 Resume") && (
                        <div className="mt-3">
                          <a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 rounded-lg bg-primary text-white"
                          >
                            Download Resume
                          </a>
                        </div>
                      )}
                  </>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="bg-muted rounded-xl p-3 w-fit">
                Typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              placeholder="Ask about Rohit..."
              className="
                flex-1
                px-3 py-2
                rounded-xl
                border
                bg-background
                outline-none
              "
            />

            <button
              onClick={() => sendMessage()}
              className="
                bg-primary
                text-white
                p-3
                rounded-xl
              "
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}