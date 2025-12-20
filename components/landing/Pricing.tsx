"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple Pricing</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Start for free, scale as you grow. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Free Tier */}
                    <Card className="flex flex-col border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Starter</CardTitle>
                            <CardDescription>Perfect for testing and small projects.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold mb-6">$0<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> 50 Pages/month</li>
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Basic OCR</li>
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Web Uploads</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Get Started</Button>
                        </CardFooter>
                    </Card>

                    {/* Pro Tier */}
                    <Card className="flex flex-col relative border-indigo-500/50 shadow-xl shadow-indigo-500/10 scale-105 z-10 bg-background">
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                            <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full shadow-lg">POPULAR</span>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600 dark:text-indigo-400">Pro</CardTitle>
                            <CardDescription>For professionals and teams.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold mb-6">$29<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-indigo-500" /> 1,000 Pages/month</li>
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-indigo-500" /> Handwriting Recognition</li>
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-indigo-500" /> API Access</li>
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-indigo-500" /> Export to Excel/JSON</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
                        </CardFooter>
                    </Card>

                    {/* Enterprise Tier */}
                    <Card className="flex flex-col border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Enterprise</CardTitle>
                            <CardDescription>Custom volume and security.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold mb-6">Custom</div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Unlimited Pages</li>
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Custom AI Models</li>
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> On-premise Deployment</li>
                                <li className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> SLA & Support</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Contact Sales</Button>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </section>
    );
}
