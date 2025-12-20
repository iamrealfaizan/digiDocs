"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, FileText, ScanLine, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Background Gradients & Grid */}
            <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] -z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background -z-10" />

            {/* Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000 -z-10" />

            <div className="container px-6 mx-auto text-center z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm border border-border text-sm font-medium text-secondary-foreground mb-8 animate-fade-in-up">
                    <Sparkles className="h-4 w-4 text-indigo-500 fill-indigo-500/20" />
                    <span>Now with handwriting recognition</span>
                </div>

                {/* Hero Title */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto">
                    Turn Paper Documents into{" "}
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">
                        Structured Data
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-scan-beam mix-blend-overlay pointer-events-none" />
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                    Upload, extract, and review — all automated. Experience real-time document
                    digitization powered by advanced AI. 99% accuracy in seconds.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Link href="/auth/sign-up">
                        <Button size="lg" className="h-12 px-8 text-lg bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-500/20 group">
                            <Play className="mr-2 h-5 w-5 fill-current" />
                            Try Live Demo
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="#how">
                        <Button variant="outline" size="lg" className="h-12 px-8 text-lg hover:bg-secondary">
                            How it Works
                        </Button>
                    </Link>
                </div>

                {/* Floating Mockup (Pure CSS animation) */}
                <div className="relative mx-auto max-w-5xl w-full aspect-[16/9] bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border border-border/50 shadow-2xl overflow-hidden animate-float">
                    {/* Mockup Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-slate-500">
                            <ScanLine className="h-16 w-16 mx-auto mb-4 opacity-50" />
                            <p>Interactive Demo Preview</p>
                        </div>
                    </div>

                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
