import dynamic from "next/dynamic";
import { Metadata } from "next/types";
import { Header } from "@components/header";
import { Loading } from "@components/ui/loading";
import { PreScreen } from "@components/prescreen/pre-screen";

const HeroSlider = dynamic(
  () => import("@components/hero/hero-slider").then((cmp) => cmp.HeroSlider),
  {
    loading: () => <Loading className="mx-auto" />,
    ssr: false,
  }
);

const ScreenStepOne = dynamic(
  () =>
    import("@components/screens/step-1/step-1").then(
      (cmp) => cmp.ScreenStepOne
    ),
  {
    ssr: false,
  }
);

const ScreenStepTwo = dynamic(
  () =>
    import("@components/screens/step-2/step-2").then(
      (cmp) => cmp.ScreenStepTwo
    ),
  {
    ssr: false,
  }
);

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
        <ScreenStepOne />
        <ScreenStepTwo />
      </main>
      <footer></footer>
    </div>
  );
}
