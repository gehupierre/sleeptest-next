import { CTAMenu } from "@components/prescreen/cta-menu";
import { AssessmentCTA } from "@components/prescreen//assessment-cta";

export const PreScreen: React.FC = () => {
  return (
    <section>
      <CTAMenu />
      <AssessmentCTA />
    </section>
  );
};
