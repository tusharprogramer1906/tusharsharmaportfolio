import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const app = new Hono<{ Bindings: Env }>();

// Contact form submission schema
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required").max(1000),
});

// Contact form submission endpoint
app.post('/api/contact', zValidator('json', ContactSchema), async (c) => {
  const { name, email, message } = c.req.valid('json');
  
  try {
    await c.env.DB.prepare(
      "INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)"
    ).bind(name, email, message).run();

    return c.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error('Contact form error:', error);
    return c.json({ success: false, message: "Failed to send message. Please try again." }, 500);
  }
});

export default app;
