import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Fake Care Dont Care App",
    description:
      "Web application to replace the paper-based hair donation form (4k–6k donations per month): online submission, automatic generation of a unique order number with confirmation email, secure dashboard (search by order number, detailed donor view, donation reception confirmation, personalized email sending), monthly/yearly donation statistics.",
    technologies: [
      "Nextjs",
      "Shadcn UI",
      "Prisma",
      "Better-Auth",
      "Next-Safe-Action",
      "PostgreSQL",
      "Nodemailer",
    ],
    liveLink: "https://fake-hair-dont-care-app.vercel.app/",
    image: "/fake-care-dont-care-dashboard.png",
  },
  {
    title: "Githread",
    description:
      "A responsive web application that allows users to create and share threads (posts) using their GitHub account.",
    technologies: [
      "Next.js",
      "Shadcn UI",
      "Prisma",
      "Next-Auth",
      "PostgreSQL",
      "Vercel",
    ],
    githubLink: "https://github.com/sandazzz/githread-youtube",
    liveLink: "https://githread-youtube-steel.vercel.app/",
  },
  {
    title: "Onlyfriend",
    description:
      "A private social app to chat exclusively with close friends. It features real-time messaging using Socket.io, mobile-fist UI built with Vue.js and Tailwind, and a high-performance backend powered by Fastify and Prisma.",
    technologies: [
      "Typescript",
      "Vue.js",
      "TailwindCSS",
      "Fastify",
      "Prisma",
      "Socket.io",
      "PostgreSQL",
    ],
    githubLink: "https://github.com/sandazzz/onlyfriend",
    liveLink: "https://onlyfriend.vercel.app",
  },
];

export default async function ProjectShowcase() {
  return (
    <section className="py-12 md:mb-64" id="projects">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="rounded-md my-4"
                  />
                ) : null}
              </CardContent>
              <CardFooter className="flex justify-between flex-wrap gap-2">
                {project.githubLink ? (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                ) : (
                  <Badge variant="destructive">
                    This is a professional project so the code is not public
                  </Badge>
                )}

                {project.liveLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
