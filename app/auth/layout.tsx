import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center p-4 overflow-hidden bg-background">
            {/* Shared Background from Landing Page */}
            <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] -z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background -z-10" />

            {/* Ambient Glows */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000" />

            {/* Navigation */}
            <div className="absolute top-8 left-8">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo Header */}
                <div className="flex justify-center mb-8">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400 grid place-items-center text-white font-bold shadow-lg shadow-indigo-500/20">
                            AI
                        </div>
                        <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                            DigiDocs
                        </span>
                    </Link>
                </div>

                {children}
            </div>
        </div>
    );
}
