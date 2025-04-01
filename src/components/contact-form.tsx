"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import BlurFade from "./magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export function ContactForm() {
    const [state, handleSubmit] = useForm("mjkyeqwb"); // Replace with your Formspree form ID
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit(e);
        if (state.succeeded) {
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <Card className="w-full max-w-2xl mx-auto">
                <CardContent className="pt-6">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                                Name
                            </label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                            />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your message..."
                                className="min-h-[150px]"
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <Button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full"
                        >
                            {state.submitting ? "Sending..." : "Send Message"}
                        </Button>

                        {state.succeeded && (
                            <p className="text-sm text-green-600 text-center">
                                Thank you for your message! I'll get back to you soon.
                            </p>
                        )}
                    </form>
                </CardContent>
            </Card>
        </BlurFade>
    );
} 