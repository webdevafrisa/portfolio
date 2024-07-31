import AnimatedLogoCloud from "@/components/AnimatedLogoCloud";
import FAQ from "@/components/FAQ";
import MinimalSocialsFooter from "@/components/Footer";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Testimonals from "@/components/Testimonials";


export default function Home() {
  return (
<main className=" flex flex-col items-center gap-y-24 mx-auto  min-h-screen">
 <Navbar/>

 <HeroSection/>

 <AnimatedLogoCloud/>

 <FAQ/>

 <Testimonals/>

 <MinimalSocialsFooter/>
</main>
  );
}
