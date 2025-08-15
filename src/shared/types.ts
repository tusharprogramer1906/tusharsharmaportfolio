import z from "zod";

// Contact form schema
export const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required").max(1000),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

// Skills data structure
export interface Skill {
  name: string;
  level: number;
  category: string;
}

// Project data structure
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  featured: boolean;
}
