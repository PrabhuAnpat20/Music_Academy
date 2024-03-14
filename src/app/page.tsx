import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialsCard from "@/components/TestimonialsCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <main className=" min-h-screen bg-black/[0.96] antialiased">

<HeroSection/>
<FeaturedCourses/>
<WhyChoose/>
<TestimonialsCard/>
<UpcomingWebinars/>
<Instructors/>
  </main>
  </>
  );
}
