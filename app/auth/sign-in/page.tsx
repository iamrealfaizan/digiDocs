import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import { Github, Mail } from "lucide-react";

export default function SignInPage() {
    return (
        <Card className="border-border/50 bg-background/60 backdrop-blur-xl shadow-2xl">
            <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                <CardDescription>
                    Enter your email to sign in to your account
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="#" className="text-xs text-indigo-500 hover:text-indigo-400">
                            Forgot password?
                        </Link>
                    </div>
                    <Input id="password" type="password" className="bg-background/50" />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Sign In
                </Button>

                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="bg-background/50">
                        <Github className="mr-2 h-4 w-4" /> Github
                    </Button>
                    <Button variant="outline" className="bg-background/50">
                        <Mail className="mr-2 h-4 w-4" /> Google
                    </Button>
                </div>
            </CardContent>
            <CardFooter className="justify-center">
                <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/auth/sign-up" className="text-indigo-500 hover:text-indigo-400 font-medium transition-colors">
                        Sign up
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
