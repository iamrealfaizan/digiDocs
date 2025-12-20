"use client";

import { UploadCloud, FileSearch, Table } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            icon: UploadCloud,
            title: "1. Upload Documents",
            desc: "Drag & drop PDF, JPG, or PNG files. We support receipts, invoices, forms, and handwritten notes.",
        },
        {
            icon: FileSearch,
            title: "2. AI Extraction",
            desc: "Our engine identifies text, tables, and checkboxes, turning unstructured pixels into structured data.",
        },
        {
            icon: Table,
            title: "3. Export Data",
            desc: "Review the results and export to Excel, JSON, CSV, or sync directly to your database.",
        },
    ];

    return (
        <section id="how" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Three simple steps to digitize your entire workflow.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent z-0" />

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="h-24 w-24 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                                <step.icon className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed px-4">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
