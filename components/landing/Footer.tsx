"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 grid place-items-center text-white font-bold">
                                AI
                            </div>
                            <span className="text-xl font-bold text-white">DigiDocs</span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Automating the world&apos;s document workflows with advanced Artificial Intelligence.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#problem" className="hover:text-indigo-400 transition-colors">Features</Link></li>
                            <li><Link href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</Link></li>
                            <li><Link href="/demo/english" className="hover:text-indigo-400 transition-colors">Live Demo</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} DigiDocs. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-indigo-400 transition-colors"><Github className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin className="h-5 w-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
