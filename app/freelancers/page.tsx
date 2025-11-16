"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FreelancerCard from "@/components/FreelancerCard";
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

export default function FreelancersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("all");

  const freelancers = [
    {
      id: "1",
      name: "Ahmed Hassan",
      title: "Full Stack Developer",
      location: "Karachi, Pakistan",
      rating: 4.9,
      reviews: 87,
      skills: ["React", "Node.js", "MongoDB", "PostgreSQL"],
      hourlyRate: "PKR 2,500",
    },
    {
      id: "2",
      name: "Fatima Khan",
      title: "Graphic Designer",
      location: "Lahore, Pakistan",
      rating: 4.8,
      reviews: 124,
      skills: ["Adobe Photoshop", "Illustrator", "Figma", "Branding"],
      hourlyRate: "PKR 1,800",
    },
    {
      id: "3",
      name: "Ali Raza",
      title: "Video Editor",
      location: "Islamabad, Pakistan",
      rating: 4.7,
      reviews: 56,
      skills: ["Adobe Premiere", "After Effects", "DaVinci Resolve"],
      hourlyRate: "PKR 2,000",
    },
    {
      id: "4",
      name: "Ayesha Malik",
      title: "Content Writer",
      location: "Karachi, Pakistan",
      rating: 4.9,
      reviews: 98,
      skills: ["SEO Writing", "Copywriting", "Blog Posts", "Technical Writing"],
      hourlyRate: "PKR 1,500",
    },
    {
      id: "5",
      name: "Hamza Iqbal",
      title: "Digital Marketing Specialist",
      location: "Lahore, Pakistan",
      rating: 4.8,
      reviews: 76,
      skills: ["Facebook Ads", "Google Ads", "SEO", "Email Marketing"],
      hourlyRate: "PKR 2,200",
    },
    {
      id: "6",
      name: "Sara Ahmed",
      title: "UI/UX Designer",
      location: "Remote",
      rating: 4.9,
      reviews: 102,
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      hourlyRate: "PKR 2,800",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Talented Freelancers
          </h1>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Connect with skilled professionals ready to bring your projects to
            life
          </p>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name or skill..."
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
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="design">Graphic Design</SelectItem>
                  <SelectItem value="video">Video Editing</SelectItem>
                  <SelectItem value="writing">Content Writing</SelectItem>
                  <SelectItem value="marketing">Digital Marketing</SelectItem>
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
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">
            {freelancers.length} Freelancers Found
          </h2>
          <Select defaultValue="rating">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
              <SelectItem value="rate-low">Lowest Rate</SelectItem>
              <SelectItem value="rate-high">Highest Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map((freelancer) => (
            <FreelancerCard key={freelancer.id} {...freelancer} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            Load More Freelancers
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
