// app/page.js
import HeroSection from "../components/hero";
import AboutUsSection from "../components/about";

export default function Home() {
  return (
    // 👇 Force LTR direction ONLY on the Home page
    <div dir="rtl">
      <HeroSection />
      <AboutUsSection />
    </div>
  );
}