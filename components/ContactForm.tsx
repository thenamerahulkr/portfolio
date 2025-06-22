"use client"; // This is a client component

import { useState } from "react";
import { Input } from "@/components/ui/input"; // Assuming you have this UI component
import { Textarea } from "@/components/ui/textarea"; // Assuming you have this UI component
import { Button } from "@/components/ui/button"; // Assuming you have this UI component
import { Send } from "lucide-react"; // Assuming you have lucide-react installed for icons

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _honeypot: "", // Hidden honeypot field for spam prevention
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null); // To track success/error state
  const [message, setMessage] = useState<string>(""); // To hold the message text to display to the user

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null); // Reset status on new submission
    setMessage(""); // Clear previous message

    // Basic honeypot check for spam prevention
    if (formData._honeypot) {
      setMessage("Spam detected! Your message was not sent.");
      setStatus("error");
      setLoading(false);
      return; // Stop execution if honeypot is filled
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); // Parse the JSON response from your API route

      if (response.ok) {
        setStatus("success");
        setMessage("Your message has been sent successfully!");
        // Clear the form fields upon successful submission
        setFormData({ name: "", email: "", subject: "", message: "", _honeypot: "" });
      } else {
        setStatus("error");
        // Display specific error message from API if available, otherwise a generic one
        setMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      // Catch network errors or other unexpected issues
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again later.");
      console.error("Contact form submission error:", error); // Log the full error for debugging
    } finally {
      setLoading(false); // Always stop loading, regardless of success or failure
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-base font-medium text-foreground mb-2">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          disabled={loading}
          // New hover/focus effects here:
          className="transition-all duration-200 ease-in-out
                     border-b-2 border-transparent focus:border-primary
                     hover:border-primary/70 hover:bg-muted/30 focus:bg-muted/50 focus:ring-0"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-base font-medium text-foreground mb-2">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          disabled={loading}
          // New hover/focus effects here:
          className="transition-all duration-200 ease-in-out
                     border-b-2 border-transparent focus:border-primary
                     hover:border-primary/70 hover:bg-muted/30 focus:bg-muted/50 focus:ring-0"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-base font-medium text-foreground mb-2">
          Subject
        </label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject of your message"
          disabled={loading}
          // New hover/focus effects here:
          className="transition-all duration-200 ease-in-out
                     border-b-2 border-transparent focus:border-primary
                     hover:border-primary/70 hover:bg-muted/30 focus:bg-muted/50 focus:ring-0"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-base font-medium text-foreground mb-2">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message here..."
          disabled={loading}
          // New hover/focus effects here:
          className="transition-all duration-200 ease-in-out
                     border-b-2 border-transparent focus:border-primary
                     hover:border-primary/70 hover:bg-muted/30 focus:bg-muted/50 focus:ring-0"
        />
      </div>

      {/* Honeypot field for basic spam protection (hidden from users) */}
      <input
        type="text"
        name="_honeypot"
        value={formData._honeypot}
        onChange={handleChange}
        style={{ display: "none" }} // Visually hide it
        aria-hidden="true" // Hide from screen readers
        tabIndex={-1} // Prevent tabbing to it
        autoComplete="off" // Prevent browser autofill
      />

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
        <Send className="h-5 w-5 ml-2" />
      </Button>

      {/* Display status message based on the 'status' state */}
      {status && (
        <p
          className={`mt-4 text-center ${
            status === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}