import { Metadata } from "next/types";
import { Header } from "@components/header";
import { HeroSlider } from "@components/hero/hero-slider";
import { PreScreen } from "@components/prescreen/pre-screen";

const META_CONTENT = {
  title: "GetSleepTest.com - Sleep Apnea - Home Sleep Study",
  description:
    "Live life the way it was meant to be, starting with a good night's sleep! 43 million people suffer from Sleep Disordered Breathing, the most common is Obstructive Sleep Apnea (OSA) and 80% remain undiagnosed. People with untreated sleep apnea stop breathing during sleep, which means the brain and body may not get enough oxygen to function normally. This erodes your quality-of-life and can cause related health problems like diabetes, stroke, cancer and heart failure.",
};

export const metadata: Metadata = {
  title: META_CONTENT.title,
  description: META_CONTENT.description,
  openGraph: {
    title: META_CONTENT.title,
    description: META_CONTENT.description,
    url: "http://getsleeptest.com/",
    siteName: "GetSleepTest.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto drop-shadow-xl">
      <Header />
      <main>
        <HeroSlider />
        <PreScreen />
      </main>
      <footer></footer>
    </div>
  );
}
