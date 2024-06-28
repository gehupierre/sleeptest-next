"use client";

import Image from "next/image";
import { StepsCTAMenu } from "@components/prescreen/steps-cta-menu";
import { Row } from "@components/ui/columns/row";
import { Column } from "@components/ui/columns/column";
import { ContactForm } from "@components/screens/step-2/contact-form";

export function ScreenStepTwo() {
  return (
    <>
      <section>
        <StepsCTAMenu
          label="get diagnosed"
          className="bg-ion-mint-lite border-t"
        />
        <div
          id="step-2"
          className="flex w-full bg-ion-mint-lite px-40 py-16 pb-20"
        >
          <Row>
            <Column className="pr-7">
              <Image
                alt="Do you snore? Are you always tired?"
                src="/images/headline1.png"
                width={382}
                height={136}
              />
              <h2 className="text-ion-blue text-4xl font-light my-3">
                Test for sleep apnea in the comfort of your home at{" "}
                <span className="text-ion-green">little or no cost*</span>
              </h2>
              <Image
                src="/images/get-test-happy.png"
                alt="Get tested for sleep apnea in 5 minutes"
                className="my-10 mt-10"
                width={385}
                height={147}
              />
              <h3 className="text-ion-blue text-xl font-light mb-3 pr-16">
                1 in 5 people suffer from undiagnosed Sleep Apnea. You
                can&lsquo;t afford NOT to know the truth about your sleep
                health!
              </h3>
              <p className="text-slate-600 pr-16">
                Do you and/or your partner suffer from disruptive snoring? Do
                you always feel tired during the daytime causing you to doze off
                or fall asleep? If yes, then you may be at risk for Sleep Apnea.
                Get tested for Sleep Apnea in the comfort of your home.
              </p>
              <Image
                alt="Referred by Physicians and Insurers"
                src="/images/headline2.png"
                width={348}
                height={44}
                className="my-4"
              />
            </Column>
            <Column className="flex-1">
              <div
                className="min-h-[500px] min-w-[468px] relative"
                style={{
                  backgroundImage: `url("/images/form_bg.png")`,
                  backgroundRepeat: "repeat-y",
                }}
              >
                <div
                  className="h-[205px] min-w-[468px] py-4 mb-5 mt-[-20px]"
                  style={{
                    backgroundImage: `url("/images/green_header.png")`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h1 className="font-black text-6xl text-white text-center my-3">
                    Qualify Now!
                  </h1>
                  <h3 className="text-2xl text-white text-center">
                    Go to sleep wondering.
                    <br />
                    Wake up knowing.
                  </h3>
                </div>

                <Image
                  src="/images/pricing.png"
                  alt="Pricing"
                  width={400}
                  height={192}
                  className="mx-auto my-3"
                />
                <ContactForm />
                <div
                  className="w-full h-5 absolute bottom-[-20px]"
                  style={{
                    backgroundImage: `url("/images/form_bg_bottom.png")`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </Column>
          </Row>
        </div>
      </section>
    </>
  );
}
