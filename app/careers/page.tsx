"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Briefcase } from "lucide-react"
import ShaderBackground from "@/components/shader-background"
import Header from "@/components/header"
import Footer from "@/components/footer"

const jobListings = [
  {
    id: 1,
    title: "Sales Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "We're looking for a dynamic Sales Representative to join our growing team. You'll be responsible for building relationships with e-commerce sellers, understanding their business needs, and helping them scale through our ecosystem of services.",
    responsibilities: [
      "Identify and prospect new e-commerce sellers and brands",
      "Conduct discovery calls to understand client pain points and business goals",
      "Present our suite of services (XcessFlow, ssello, DropMate, etc.) to potential clients",
      "Manage a pipeline of 50+ active prospects",
      "Collaborate with technical teams to provide customized solutions",
      "Meet and exceed quarterly sales targets",
      "Maintain detailed records in our CRM system"
    ],
    requirements: [
      "2-4 years of B2B sales experience, preferably in e-commerce or SaaS",
      "Proven track record of meeting or exceeding sales quotas",
      "Strong communication and presentation skills",
      "Experience with CRM systems (Salesforce, HubSpot, etc.)",
      "Understanding of e-commerce platforms (Shopify, Amazon, Walmart)",
      "Self-motivated with excellent time management skills",
      "Bachelor's degree in Business, Marketing, or related field preferred"
    ],
    benefits: [
      "Competitive base salary + commission structure",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible remote work environment",
      "Professional development budget",
      "Unlimited PTO"
    ],
    skills: ["Sales", "CRM", "E-commerce", "B2B", "Communication"]
  },
  {
    id: 2,
    title: "AI Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    description: "Join our AI team to develop cutting-edge machine learning solutions that power our e-commerce ecosystem. You'll work on inventory optimization, pricing algorithms, demand forecasting, and automated decision-making systems.",
    responsibilities: [
      "Design and implement ML models for inventory management and pricing optimization",
      "Develop predictive analytics for demand forecasting and trend analysis",
      "Build automated systems for real-time decision making",
      "Collaborate with data scientists and backend engineers to deploy models",
      "Optimize model performance and accuracy through continuous iteration",
      "Research and implement state-of-the-art AI/ML techniques",
      "Create data pipelines for model training and inference"
    ],
    requirements: [
      "3-5 years of experience in machine learning and AI development",
      "Strong proficiency in Python, TensorFlow, PyTorch, or similar frameworks",
      "Experience with data preprocessing, feature engineering, and model evaluation",
      "Knowledge of cloud platforms (AWS, GCP, Azure) and ML deployment",
      "Understanding of e-commerce data and business metrics",
      "Experience with SQL and NoSQL databases",
      "Master's degree in Computer Science, AI, or related field preferred"
    ],
    benefits: [
      "Competitive salary with equity options",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Remote-first culture with flexible hours",
      "Annual learning and development budget",
      "Top-tier equipment and software licenses"
    ],
    skills: ["Python", "TensorFlow", "Machine Learning", "AWS", "SQL"]
  },
  {
    id: 3,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3-6 years",
    description: "Build and scale the backend infrastructure that powers our entire e-commerce ecosystem. You'll work on high-traffic systems handling millions of transactions, real-time data processing, and API development.",
    responsibilities: [
      "Design and develop scalable backend services and APIs",
      "Build and maintain microservices architecture",
      "Implement real-time data processing and event-driven systems",
      "Optimize database performance and query efficiency",
      "Ensure system reliability and uptime through monitoring and alerting",
      "Collaborate with frontend and DevOps teams for seamless integration",
      "Participate in code reviews and maintain high code quality standards"
    ],
    requirements: [
      "3-6 years of backend development experience",
      "Proficiency in Node.js, Python, or Go",
      "Experience with PostgreSQL, MongoDB, or similar databases",
      "Knowledge of cloud platforms (AWS, GCP, Azure)",
      "Understanding of microservices architecture and containerization",
      "Experience with API design and RESTful services",
      "Bachelor's degree in Computer Science or related field"
    ],
    benefits: [
      "Competitive salary with equity options",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Remote-first culture with flexible hours",
      "Annual learning and development budget",
      "Top-tier equipment and software licenses"
    ],
    skills: ["Node.js", "PostgreSQL", "AWS", "Microservices", "API Development"]
  },
  {
    id: 4,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Create beautiful, responsive user interfaces for our e-commerce platform. You'll work with modern frameworks to build intuitive dashboards, analytics tools, and user-facing applications.",
    responsibilities: [
      "Develop responsive web applications using React/Next.js",
      "Build interactive dashboards and data visualization components",
      "Implement modern UI/UX designs with attention to detail",
      "Optimize application performance and user experience",
      "Collaborate with designers and backend engineers",
      "Write clean, maintainable, and testable code",
      "Stay up-to-date with frontend technologies and best practices"
    ],
    requirements: [
      "2-4 years of frontend development experience",
      "Strong proficiency in React, TypeScript, and modern JavaScript",
      "Experience with CSS frameworks (Tailwind, styled-components)",
      "Knowledge of state management (Redux, Zustand, etc.)",
      "Understanding of responsive design and cross-browser compatibility",
      "Experience with testing frameworks (Jest, React Testing Library)",
      "Bachelor's degree in Computer Science or related field preferred"
    ],
    benefits: [
      "Competitive salary with equity options",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Remote-first culture with flexible hours",
      "Annual learning and development budget",
      "Top-tier equipment and software licenses"
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript"]
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    experience: "4-6 years",
    description: "Lead product strategy and development for our e-commerce ecosystem. You'll work closely with engineering, design, and business teams to define product roadmaps and deliver features that drive business growth.",
    responsibilities: [
      "Define product strategy and roadmap for our service ecosystem",
      "Gather and analyze user feedback and market research",
      "Write detailed product requirements and user stories",
      "Collaborate with engineering and design teams on feature development",
      "Track key product metrics and analyze user behavior",
      "Manage product launches and go-to-market strategies",
      "Work with sales and marketing teams on product positioning"
    ],
    requirements: [
      "4-6 years of product management experience, preferably in B2B SaaS",
      "Experience with e-commerce or marketplace platforms",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management abilities",
      "Experience with product analytics tools (Mixpanel, Amplitude, etc.)",
      "Understanding of agile development methodologies",
      "MBA or Bachelor's degree in Business, Engineering, or related field"
    ],
    benefits: [
      "Competitive salary with equity options",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Remote-first culture with flexible hours",
      "Annual learning and development budget",
      "Top-tier equipment and software licenses"
    ],
    skills: ["Product Management", "Analytics", "Agile", "B2B SaaS", "Strategy"]
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    description: "Build and maintain our cloud infrastructure and deployment pipelines. You'll ensure our systems are scalable, secure, and reliable while enabling rapid development and deployment cycles.",
    responsibilities: [
      "Design and maintain cloud infrastructure on AWS/GCP",
      "Build and optimize CI/CD pipelines for multiple services",
      "Implement monitoring, logging, and alerting systems",
      "Ensure system security and compliance requirements",
      "Automate infrastructure provisioning and configuration",
      "Collaborate with development teams on deployment strategies",
      "Troubleshoot production issues and performance optimization"
    ],
    requirements: [
      "3-5 years of DevOps or infrastructure engineering experience",
      "Strong experience with cloud platforms (AWS, GCP, Azure)",
      "Proficiency with containerization (Docker, Kubernetes)",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Knowledge of CI/CD tools (GitHub Actions, Jenkins, etc.)",
      "Understanding of monitoring tools (Prometheus, Grafana, etc.)",
      "Bachelor's degree in Computer Science or related field preferred"
    ],
    benefits: [
      "Competitive salary with equity options",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Remote-first culture with flexible hours",
      "Annual learning and development budget",
      "Top-tier equipment and software licenses"
    ],
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
  }
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(jobListings[0])

  return (
    <ShaderBackground>
      <Header />
      <div className="relative z-10 px-8 py-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              Join Our <span className="font-medium italic instrument">Team</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Build the future of e-commerce with us. We're looking for passionate individuals to help us scale our ecosystem of services and empower sellers worldwide.
            </p>
          </div>
        </div>

        {/* Company Culture */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Remote-First</h3>
            <p className="text-sm text-white/60">Work from anywhere with flexible hours and a supportive team culture.</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Briefcase className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Growth Opportunities</h3>
            <p className="text-sm text-white/60">Continuous learning with annual development budgets and career advancement paths.</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Global Impact</h3>
            <p className="text-sm text-white/60">Make a difference in the e-commerce industry and help businesses worldwide succeed.</p>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job List */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-light text-white mb-6">Open Positions</h2>
            <div className="space-y-4">
              {jobListings.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    selectedJob.id === job.id
                      ? 'bg-white/10 border border-white/20'
                      : 'bg-white/5 border border-white/10 hover:bg-white/8'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">{job.title}</h3>
                    <span className="text-xs text-white/60">{job.department}</span>
                  </div>
                  <div className="flex items-center text-sm text-white/60 mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    {job.location}
                    <Clock className="w-3 h-3 ml-3 mr-1" />
                    {job.type}
                  </div>
                  <p className="text-xs text-white/50">{job.experience}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Job Details */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="mb-6">
                <h2 className="text-3xl font-light text-white mb-2">{selectedJob.title}</h2>
                <div className="flex items-center text-white/60 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {selectedJob.location}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {selectedJob.type}
                  <span className="ml-4 text-sm">{selectedJob.experience}</span>
                </div>
                <p className="text-white/70 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start text-white/70">
                      <span className="text-white/40 mr-3 mt-1">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start text-white/70">
                      <span className="text-white/40 mr-3 mt-1">•</span>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-white/70">
                      <span className="text-white/40 mr-3 mt-1">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <a
                  href={`mailto:careers@hashshopinc.com?subject=Application for ${selectedJob.title}`}
                  className="inline-flex items-center px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-white font-medium"
                >
                  Apply for this Position
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-light text-white mb-4">Don't see a perfect fit?</h3>
          <p className="text-white/70 mb-6">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <a
            href="mailto:careers@hashshopinc.com"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-white font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <Footer />
    </ShaderBackground>
  )
}
