import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-ion-mint-lite p-3 lg:px-12 xl:px-40 xl:py-16 lg:pb-20">
        <Image
          src="/images/insurance_logos_sm.png"
          alt="Insurance companies that support testing"
          className="md:hidden"
          width={960}
          height={180}
        />
        <Image
          src="/images/insurance_logos.jpg"
          alt="Insurance companies that support testing"
          className="hidden md:inline"
          width={960}
          height={180}
        />

        <p className="py-6 md:py-10 lg:my-4 xl:my-16 md:px-4 text-sm leading-6">
          * We accept and work directly with most Private Insurance companies.
          Based on your benefits, your insurance company may cover up to 100% of
          the cost for an in-home sleep apnea test. Co-payments, deductibles and
          some restrictions may apply.
          <br />
          Note: With thousands of patients nationwide, you can rest easy with
          iONMySleep! Based on your sleep test results, we can also help treat
          and monitor your sleep apnea so you can get a restful night&lsquo;s
          sleep again. Our sleep specialist will work directly with you and your
          doctor to make sure you get the right CPAP equipment and supplies for
          maximum therapeutic benefit. If you qualify, there is no out-of-pocket
          cost, we will send the easy-to-use CPAP equipment and supplies right
          to your door for FREE. Plus, we will handle all the paperwork and
          details by working directly with you, your doctor, and your insurance
          company.
        </p>

        <p className="text-right pr-4">
          &copy; Copyright {new Date().getFullYear()}{" "}
          <a href="http://www.ionmyhealth.com" target="_blank">
            ionmyhealth.com
          </a>
        </p>
      </div>
    </footer>
  );
}
