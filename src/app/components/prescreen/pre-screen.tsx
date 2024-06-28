import { StepsCTAMenu } from "@components/prescreen/steps-cta-menu";
import { AssessmentCTA } from "@components/prescreen/assessment-cta";

export const PreScreen: React.FC = () => {
  return (
    <section>
      <StepsCTAMenu label="living with sleep apnea" />
      <AssessmentCTA />
    </section>
  );
};
