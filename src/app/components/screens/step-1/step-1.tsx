"use client";

import { SLIDESHOW } from "@components/screens/step-1/config";
import { SlideshowText } from "@components/screens/step-1/slideshow-text";
import { SliderImages } from "@components/ui/slider/slider-images";
import { ANIMATION } from "@components/hero/config";
import { Row } from "@components/ui/columns/row";
import { Column } from "@components/ui/columns/column";
import { ArrowRightIcon } from "@components/ui/icons/arrow-right";
import { VideoCta } from "./video-cta";
import { SleepTestCTA } from "./sleep-test-cta";

export function ScreenStepOne() {
  return (
    <>
      <section>
        <div id="step-1" className="flex w-full bg-white px-40 py-6 pb-20">
          <h2 className="flex-1 text-4xl font-extralight text-ion-blue">
            sleep better. live better.
          </h2>
          <div className="flex-1">
            <h3 className="text-xl font-light text-ion-blue mb-3">
              Live life the way it was meant to be...
              <br /> starting with a good night&apos;s sleep!
            </h3>
            <p className="text-slate-600">
              43 million people suffer from Sleep Disordered Breathing, the most
              common is Obstructive Sleep Apnea (OSA) and 80% remain
              undiagnosed. People with untreated sleep apnea stop breathing
              during sleep, which means the brain and body may not get enough
              oxygen to function normally. This erodes your quality-of-life and
              can cause related health problems like diabetes, stroke, cancer
              and heart failure.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[480px]">
          <SliderImages
            variants={ANIMATION.VARIANTS}
            duration={SLIDESHOW.DURATION}
            images={SLIDESHOW.images}
            texts={SLIDESHOW.texts}
            TextComp={SlideshowText}
            showControls={true}
          />
        </div>
      </section>
      <section>
        <Row className="bg-white px-40 py-16 gap-14">
          <Column>
            <h3 className="text-xl text-ion-blue">
              In-home sleep apnea test experience
            </h3>
            <VideoCta
              imgSrc="/images/img-03.jpg"
              imgAlt="In-home sleep apnea test experience"
              href="#testimonials-04"
            />
            <p className="text-slate-600">
              The In-Home Sleep Apnea Test is FDA approved, physician approved,
              and covered by most major insurance companies who acknowledge the
              severity of undiagnosed and untreated Sleep Apnea. Testing for
              Sleep Apnea in the comfort of your home is quick, easy and
              affordable.
            </p>

            <a
              href="#testimonials-04"
              className="text-ion-orange hover:text-ion-blue"
            >
              See what customers are saying
              <ArrowRightIcon className="inline-block" />
            </a>
          </Column>
          <Column>
            <h3 className="text-xl text-ion-blue">
              Is in-home sleep test right for you?
            </h3>
            <VideoCta
              imgSrc="/images/img-04.jpg"
              imgAlt="Is in-home sleep test right for you?"
            />
            <p className="text-slate-600">
              If you suspect that you suffer from Sleep Apnea then this simple,
              scientifically proven test will help you quickly assess your level
              of risk. Untreated Sleep Apnea can erode your quality-of-life and
              cause related health problems like diabetes, stroke, and heart
              failure. You can&lsquo;t afford not to know the truth about your
              health!
            </p>
            <a href="#popup-16" className="text-ion-orange hover:text-ion-blue">
              Take free risk assessment
              <ArrowRightIcon className="inline-block" />
            </a>
          </Column>
          <Column>
            <h3 className="font-light text-xl text-ion-blue">
              Learn about sleep apnea basics
            </h3>
            <VideoCta
              imgSrc="/images/img-05.jpg"
              imgAlt="Learn about sleep apnea basics"
              href="#popup-16"
            />
            <p className="text-slate-600">
              Learn more about obstructive sleep apnea from Dr. Aliya
              Ferouz-Colborn, MD. She&lsquo;ll explain how Sleep Apnea affects
              your quality-of-life, help you identify the symptoms, as well as
              how to diagnose and treat this condition that affects over 43
              million people. Learn More. Sleep More. Live More.
            </p>
            <a href="#popup-16" className="text-ion-orange hover:text-ion-blue">
              Hear from the doctor
              <ArrowRightIcon className="inline-block" />
            </a>
          </Column>
        </Row>
      </section>
      <section>
        <SleepTestCTA />
      </section>
    </>
  );
}
