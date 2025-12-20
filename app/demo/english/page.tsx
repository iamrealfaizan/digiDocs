"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Upload, Download, RefreshCw, ChevronLeft, Check, AlertCircle, Sparkles } from "lucide-react";
import { SchoolAdmission, defaultAdmission } from "./types";

/* =========================================
   Utils
   ========================================= */

const cleanLLMJson = (txt: string) =>
    txt
        .trim()
        .replace(/^"""\n?/, "")
        .replace(/"""$/, "")
        .replace(/^```json\s*/i, "")
        .replace(/```$/, "")
        .trim();

/* =========================================
   Helper Components
   ========================================= */

function SectionCard({
    title,
    children,
}: React.PropsWithChildren<{ title: string }>) {
    return (
        <Card className="border-indigo-100/20 bg-background/60 backdrop-blur-xl shadow-lg border">
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-teal-400 rounded-t-lg opacity-80" />
            <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="h-6 w-1 bg-indigo-500 rounded-full inline-block" />
                    {title}
                </h3>
                <div className="space-y-4">{children}</div>
            </CardContent>
        </Card>
    );
}

// Custom Textarea component since it's missing in ui/
const CustomTextarea = React.forwardRef<
    HTMLTextAreaElement,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
    return (
        <textarea
            className={`flex min-h-[80px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            ref={ref}
            {...props}
        />
    )
})
CustomTextarea.displayName = "Textarea"

/* =========================================
   Main Page
   ========================================= */

export default function AdmissionOcrPage() {
    const [pdf, setPdf] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [data, setData] = useState<SchoolAdmission>(defaultAdmission);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    const onFile = (e: ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0] ?? null;
        if (f) {
            setPdf(f);
            setPreviewUrl(URL.createObjectURL(f));
            setErr(null);
        }
    };

    const extract = async () => {
        if (!pdf) {
            setErr("Please choose a PDF first.");
            return;
        }
        setLoading(true);
        setErr(null);
        try {
            const fd = new FormData();
            fd.append("file", pdf);
            const res = await fetch("/api/ocr", { method: "POST", body: fd });
            const json = await res.json();

            if (!res.ok || json.error) {
                throw new Error(json.error || "Extraction failed");
            }

            const parsed =
                typeof json.structured === "string"
                    ? JSON.parse(cleanLLMJson(json.structured))
                    : json.structured;

            // Immediately update state with parsed result
            if (parsed) {
                setData(parsed as SchoolAdmission);
            } else {
                throw new Error("Could not parse structured data from response");
            }

        } catch (e: any) {
            setErr(e?.message || "Extraction failed. Please try again.");
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setData(defaultAdmission);
        setPdf(null);
        setPreviewUrl("");
        setErr(null);
    }

    // Revoke object URL
    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    return (
        <div className="min-h-screen relative bg-background overflow-hidden selection:bg-indigo-500/30">

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px] dark:opacity-10"></div>
                <div className="absolute right-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-teal-500 opacity-20 blur-[100px] dark:opacity-10"></div>
            </div>


            <div className="relative z-10 container mx-auto px-4 py-8 max-w-[1600px]">

                {/* Header */}
                <header className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <Button variant="ghost" size="icon" className="hover:bg-indigo-500/10">
                                <ChevronLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-indigo-500" />
                                Smart Admission Digitizer
                            </h1>
                            <p className="text-muted-foreground text-sm">Upload a school form PDF and let AI extract the data instantly.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <Button variant="outline" size="sm" className="hidden sm:flex gap-2"
                            onClick={() => {
                                alert("Demo: Download Blank Form Placeholder");
                            }}
                        >
                            <Download className="h-4 w-4" /> Blank Form
                        </Button>
                        <Button variant="outline" size="sm" className="hidden sm:flex gap-2"
                            onClick={() => {
                                alert("Demo: Download Filled Sample Placeholder");
                            }}
                        >
                            <FileText className="h-4 w-4" /> Sample Data
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground" onClick={reset}>
                            <RefreshCw className="h-4 w-4" /> Reset
                        </Button>
                        <Button
                            onClick={extract}
                            disabled={loading || !pdf}
                            className="bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 shadow-lg shadow-indigo-500/20 text-white min-w-[120px]"
                        >
                            {loading ? "Scanning..." : "Extract Data"}
                        </Button>
                    </div>
                </header>


                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-180px)] min-h-[600px]">

                    {/* LEFT: Upload & Preview */}
                    <div className="flex flex-col gap-4 h-full">
                        {/* Upload Area (only visible if no PDF) */}
                        {!previewUrl && (
                            <Card className="border-2 border-dashed border-indigo-200/50 dark:border-indigo-800/50 bg-indigo-50/10 dark:bg-indigo-900/10 flex-1 flex flex-col items-center justify-center p-8 transition-colors hover:bg-indigo-50/30 dark:hover:bg-indigo-900/20">
                                <div className="bg-background rounded-full p-4 mb-4 shadow-sm ring-1 ring-border">
                                    <Upload className="h-8 w-8 text-indigo-500" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Upload School Form</h3>
                                <p className="text-muted-foreground text-center max-w-sm mb-6">
                                    Drag and drop your PDF here, or click to browse files.
                                </p>
                                <div className="relative">
                                    <Input
                                        type="file"
                                        accept="application/pdf"
                                        onChange={onFile}
                                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                    />
                                    <Button variant="secondary">Browse Files</Button>
                                </div>
                            </Card>
                        )}

                        {/* PDF Viewer */}
                        {previewUrl && (
                            <Card className="flex-1 overflow-hidden border-indigo-100/20 bg-background/60 backdrop-blur-xl shadow-lg border flex flex-col">
                                <div className="p-3 border-b flex justify-between items-center bg-muted/30">
                                    <span className="text-sm font-medium flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-indigo-500" />
                                        {pdf?.name}
                                    </span>
                                    <Button variant="ghost" size="sm" className="h-6 text-xs text-red-500" onClick={() => { setPdf(null); setPreviewUrl(""); }}>
                                        Remove
                                    </Button>
                                </div>
                                <div className="flex-1 bg-slate-100 dark:bg-slate-900 overflow-hidden">
                                    <embed
                                        src={`${previewUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                                        type="application/pdf"
                                        className="w-full h-full"
                                    />
                                </div>
                            </Card>
                        )}

                        {err && (
                            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400 flex items-start gap-2 animate-in fade-in slide-in-from-bottom-2">
                                <AlertCircle className="h-5 w-5 shrink-0" />
                                {err}
                            </div>
                        )}
                    </div>

                    {/* RIGHT: Form Data */}
                    <div className="h-full overflow-hidden flex flex-col">
                        <div className="flex-1 overflow-y-auto pr-2 pb-20 space-y-6 scrollbar-thin scrollbar-thumb-indigo-200 dark:scrollbar-thumb-indigo-800 scrollbar-track-transparent">
                            {/* Intro Card */}
                            <Card className="bg-gradient-to-br from-indigo-500/10 to-teal-500/10 border-indigo-200/20 border shadow-sm">
                                <CardContent className="p-4 flex gap-4 items-start">
                                    <div className="bg-indigo-500/20 p-2 rounded-lg">
                                        <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-indigo-900 dark:text-indigo-100">AI Data Extraction</h4>
                                        <p className="text-sm text-indigo-700/80 dark:text-indigo-300/80 mt-1">
                                            Fields on this side map 1:1 with the uploaded document. Review and edit extracted data below.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Student Info */}
                            <SectionCard title="Student Information">
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label>Student Name</Label>
                                        <Input
                                            value={data.studentInformation.fullName}
                                            onChange={(e) => setData({ ...data, studentInformation: { ...data.studentInformation, fullName: e.target.value } })}
                                            placeholder="Full Name"
                                            className="bg-background/50"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label>Date of Birth</Label>
                                            <Input
                                                value={data.studentInformation.dateOfBirth}
                                                onChange={(e) => setData({ ...data, studentInformation: { ...data.studentInformation, dateOfBirth: e.target.value } })}
                                                placeholder="MM/DD/YYYY"
                                                className="bg-background/50"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Gender</Label>
                                            <Input
                                                value={data.studentInformation.gender}
                                                onChange={(e) => setData({ ...data, studentInformation: { ...data.studentInformation, gender: e.target.value } })}
                                                placeholder="Gender"
                                                className="bg-background/50"
                                            />
                                        </div>
                                    </div>
                                    <Separator className="my-2" />
                                    <div className="grid gap-2">
                                        <Label>Residential Address</Label>
                                        <Input
                                            value={data.studentInformation.residentialAddress.fullAddress}
                                            onChange={(e) => setData({ ...data, studentInformation: { ...data.studentInformation, residentialAddress: { ...data.studentInformation.residentialAddress, fullAddress: e.target.value } } })}
                                            placeholder="Street Address"
                                            className="bg-background/50"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <Input
                                            value={data.studentInformation.residentialAddress.city}
                                            onChange={(e) => setData({ ...data, studentInformation: { ...data.studentInformation, residentialAddress: { ...data.studentInformation.residentialAddress, city: e.target.value } } })}
                                            placeholder="City" className="bg-background/50"
                                        />
                                        <Input
                                            value={data.studentInformation.residentialAddress.state}
                                            onChange={(e) => setData({ ...data, studentInformation: { ...data.studentInformation, residentialAddress: { ...data.studentInformation.residentialAddress, state: e.target.value } } })}
                                            placeholder="State" className="bg-background/50"
                                        />
                                        <Input
                                            value={data.studentInformation.residentialAddress.zip}
                                            onChange={(e) => setData({ ...data, studentInformation: { ...data.studentInformation, residentialAddress: { ...data.studentInformation.residentialAddress, zip: e.target.value } } })}
                                            placeholder="Zip" className="bg-background/50"
                                        />
                                    </div>
                                </div>
                            </SectionCard>

                            {/* Parent Info */}
                            <SectionCard title="Parent / Guardian">
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label>Full Name</Label>
                                        <Input
                                            value={data.parentGuardianInformation.fullName}
                                            onChange={(e) => setData({ ...data, parentGuardianInformation: { ...data.parentGuardianInformation, fullName: e.target.value } })}
                                            className="bg-background/50"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label>Relationship</Label>
                                            <Input
                                                value={data.parentGuardianInformation.relationshipToStudent}
                                                onChange={(e) => setData({ ...data, parentGuardianInformation: { ...data.parentGuardianInformation, relationshipToStudent: e.target.value } })}
                                                className="bg-background/50"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Contact</Label>
                                            <Input
                                                value={data.parentGuardianInformation.contactNumber}
                                                onChange={(e) => setData({ ...data, parentGuardianInformation: { ...data.parentGuardianInformation, contactNumber: e.target.value } })}
                                                className="bg-background/50"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label>Email</Label>
                                        <Input
                                            value={data.parentGuardianInformation.emailAddress}
                                            onChange={(e) => setData({ ...data, parentGuardianInformation: { ...data.parentGuardianInformation, emailAddress: e.target.value } })}
                                            className="bg-background/50"
                                        />
                                    </div>
                                </div>
                            </SectionCard>

                            {/* Previous School */}
                            <SectionCard title="Previous School">
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label>School Name</Label>
                                        <Input
                                            value={data.previousSchoolDetails.schoolName}
                                            onChange={(e) => setData({ ...data, previousSchoolDetails: { ...data.previousSchoolDetails, schoolName: e.target.value } })}
                                            className="bg-background/50"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label>From</Label>
                                            <Input
                                                value={data.previousSchoolDetails.datesAttended.from}
                                                onChange={(e) => setData({ ...data, previousSchoolDetails: { ...data.previousSchoolDetails, datesAttended: { ...data.previousSchoolDetails.datesAttended, from: e.target.value } } })}
                                                placeholder="Start Date"
                                                className="bg-background/50"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>To</Label>
                                            <Input
                                                value={data.previousSchoolDetails.datesAttended.to}
                                                onChange={(e) => setData({ ...data, previousSchoolDetails: { ...data.previousSchoolDetails, datesAttended: { ...data.previousSchoolDetails.datesAttended, to: e.target.value } } })}
                                                placeholder="End Date"
                                                className="bg-background/50"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SectionCard>

                            {/* Health & Additional */}
                            <SectionCard title="Health & Additional">
                                <div className="grid gap-4">
                                    {/* Custom Checkbox Row */}
                                    <div className="flex items-start space-x-3 p-3 rounded-md bg-background/50 border border-input">
                                        <input
                                            type="checkbox"
                                            id="allergies"
                                            checked={data.healthInformation.hasAllergiesOrConditions}
                                            onChange={(e) => setData({ ...data, healthInformation: { ...data.healthInformation, hasAllergiesOrConditions: e.target.checked } })}
                                            className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <div className="grid gap-1.5 leading-none">
                                            <label
                                                htmlFor="allergies"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Has Allergies or Conditions
                                            </label>
                                            <p className="text-xs text-muted-foreground">
                                                Does the student have any known medical conditions?
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label>Medical Details</Label>
                                        <CustomTextarea
                                            value={data.healthInformation.conditionsDetails}
                                            onChange={(e) => setData({ ...data, healthInformation: { ...data.healthInformation, conditionsDetails: e.target.value } })}
                                            placeholder="If yes, please specify..."
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label>Special Educational Needs</Label>
                                        <CustomTextarea
                                            value={data.additionalInformation.specialEducationalNeeds}
                                            onChange={(e) => setData({ ...data, additionalInformation: { ...data.additionalInformation, specialEducationalNeeds: e.target.value } })}
                                            placeholder="Any special requirements..."
                                        />
                                    </div>
                                </div>
                            </SectionCard>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
