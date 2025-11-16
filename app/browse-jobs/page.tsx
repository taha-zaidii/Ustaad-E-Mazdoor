"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export default function BrowseJobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("all");

  const jobs = [
    {
      id: "1",
      title: "Modern E-commerce Website Development",
      description:
        "Looking for an experienced web developer to build a complete e-commerce platform with payment integration and admin panel.",
      budget: "PKR 50,000 - 80,000",
      location: "Karachi, Pakistan",
      postedTime: "2 hours ago",
      category: "Web Development",
    },
    {
      id: "2",
      title: "Social Media Graphics Package",
      description:
        "Need creative graphics for Instagram, Facebook, and LinkedIn. Should include posts, stories, and cover images.",
      budget: "PKR 15,000 - 25,000",
      location: "Lahore, Pakistan",
      postedTime: "5 hours ago",
      category: "Graphic Design",
    },
    {
      id: "3",
      title: "Product Demo Video Production",
      description:
        "Create a professional 2-3 minute product demonstration video with animations and voice-over.",
      budget: "PKR 30,000 - 45,000",
      location: "Islamabad, Pakistan",
      postedTime: "1 day ago",
      category: "Video Editing",
    },
    {
      id: "4",
      title: "SEO Optimization for E-commerce Store",
      description:
        "Need an SEO expert to optimize our online store for better search engine rankings and organic traffic.",
      budget: "PKR 25,000 - 40,000",
      location: "Karachi, Pakistan",
      postedTime: "1 day ago",
      category: "SEO & Analytics",
    },
    {
      id: "5",
      title: "Blog Content Writer for Tech Website",
      description:
        "Looking for a skilled content writer to create engaging blog posts about technology, software, and digital trends.",
      budget: "PKR 10,000 - 20,000",
      location: "Remote",
      postedTime: "2 days ago",
      category: "Content Writing",
    },
    {
      id: "6",
      title: "Mobile App UI/UX Design",
      description:
        "Need a talented designer to create a modern, user-friendly interface for our mobile application.",
      budget: "PKR 35,000 - 55,000",
      location: "Lahore, Pakistan",
      postedTime: "3 days ago",
      category: "Graphic Design",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Next Project
          </h1>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Browse through hundreds of opportunities and start working today
          </p>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search jobs..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="web-dev">Web Development</SelectItem>
                  <SelectItem value="design">Graphic Design</SelectItem>
                  <SelectItem value="video">Video Editing</SelectItem>
                  <SelectItem value="writing">Content Writing</SelectItem>
                  <SelectItem value="marketing">Digital Marketing</SelectItem>
                  <SelectItem value="seo">SEO & Analytics</SelectItem>
                </SelectContent>
              </Select>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="karachi">Karachi</SelectItem>
                  <SelectItem value="lahore">Lahore</SelectItem>
                  <SelectItem value="islamabad">Islamabad</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Available Jobs</h2>
          <p className="text-muted-foreground">{jobs.length} jobs found</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
