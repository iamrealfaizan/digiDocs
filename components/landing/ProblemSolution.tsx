"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Zap, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

export function ProblemSolution() {
    return (
        <section id="problem" className="py-24 bg-secondary/30 relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Stop Wasting Time on <span className="text-destructive">Manual Entry</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Manual data processing is the bottleneck of modern business. See exactly what you're leaving on the table.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Problem */}
                    <Card className="border-destructive/30 bg-destructive/5 dark:bg-destructive/10 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Clock className="w-32 h-32 text-destructive" />
                        </div>
                        <CardContent className="p-8 relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                                    <XCircle className="h-6 w-6 text-destructive" />
                                </div>
                                <h3 className="text-2xl font-semibold text-destructive">Manual Workflow</h3>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground">Slow Turnaround</strong>
                                        <span className="text-muted-foreground">Takes days to process batches of documents.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground">High Error Rate</strong>
                                        <span className="text-muted-foreground">Fatigue leads to 12-15% data entry errors.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground">Expensive</strong>
                                        <span className="text-muted-foreground">High labor costs for repetitive, low-value work.</span>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* The Solution */}
                    <Card className="border-teal-500/30 bg-teal-500/5 dark:bg-teal-500/10 overflow-hidden relative shadow-lg shadow-teal-500/5">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Zap className="w-32 h-32 text-teal-500" />
                        </div>
                        <CardContent className="p-8 relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-12 w-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                                    <CheckCircle2 className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                                </div>
                                <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400">AI Digitizer</h3>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground">Instant Processing</strong>
                                        <span className="text-muted-foreground">Convert hundreds of pages in minutes.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground">99% Accuracy</strong>
                                        <span className="text-muted-foreground">Advanced OCR + LLM validation ensures data integrity.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-foreground">Scalable</strong>
                                        <span className="text-muted-foreground">Handle 1 or 1,000,000 documents with zero extra effort.</span>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
