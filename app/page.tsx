import AnimatedLogoCloud from "@/components/AnimatedLogoCloud";
import FAQ from "@/components/FAQ";
import MinimalSocialsFooter from "@/components/Footer";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Testimonals from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
<main className="container flex flex-col items-center gap-y-12 mx-auto  min-h-screen">
 <Navbar/>

 <HeroSection/>

 <AnimatedLogoCloud/>

 <FAQ/>

 <Testimonals/>

 <MinimalSocialsFooter/>
</main>
  );
}
