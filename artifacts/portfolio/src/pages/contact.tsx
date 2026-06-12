import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  businessName: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  service: z.string({ required_error: "Please select a service." }),
  details: z.string().min(10, "Please provide a bit more detail about your project."),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      service: "",
      details: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setIsError(false);
    try {
      const response = await fetch("https://formspree.io/f/mlgkpykb", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: data.name,
          businessName: data.businessName || "",
          email: data.email,
          service: data.service,
          details: data.details,
        }),
      });
      if (!response.ok) {
        throw new Error("Submission failed");
      }
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Let's build something extraordinary.
            </h1>
            <p className="text-muted-foreground text-lg">
              Fill out the form and I'll get back to you within 24 hours to discuss your project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card className="border-border bg-card/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8 md:p-10">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-4">Request Received</h3>
                    <p className="text-muted-foreground mb-8">Thank you for reaching out. I'll review your details and be in touch shortly.</p>
                    <Button onClick={() => { setIsSuccess(false); form.reset(); }} variant="outline">Send another message</Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="bg-secondary/50 border-border" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="businessName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business Name (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Corp" className="bg-secondary/50 border-border" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" className="bg-secondary/50 border-border" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Needed</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-secondary/50 border-border">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Website Development">Website Development</SelectItem>
                                <SelectItem value="Website + Hosting">Website + Hosting</SelectItem>
                                <SelectItem value="Logo Design">Logo Design</SelectItem>
                                <SelectItem value="Branding Package">Complete Branding Package</SelectItem>
                                <SelectItem value="AI Chatbot">AI Chatbot Automation</SelectItem>
                                <SelectItem value="AI Product Content">AI Product Content</SelectItem>
                                <SelectItem value="Social Media Management">Social Media Management</SelectItem>
                                <SelectItem value="Programming & Software Development">Programming & Software Development</SelectItem>
                                <SelectItem value="Full Business Package">Full Business Package (All-in-one)</SelectItem>
                                <SelectItem value="Other">Other / Unsure</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="details"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Details</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell me a bit about your business and what you're looking to achieve..."
                                className="min-h-[150px] bg-secondary/50 border-border resize-y"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {isError && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start gap-3 p-4 rounded-lg border border-red-500/30 bg-red-500/10 text-sm text-red-400"
                        >
                          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                          <p>Something went wrong. Please check your connection and try again, or reach out directly.</p>
                        </motion.div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(198,168,125,0.2)] transition-all tracking-widest text-xs uppercase font-sans"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : <><span>Send Request</span><Send className="w-5 h-5 ml-2" /></>}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
