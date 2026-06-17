import { OnboardingWizard } from '@/components/onboarding/onboarding-wizard';

export const metadata = {
  title: 'Get Started - Bonyan',
  description: 'Complete your health profile and get your personalized AI plan',
};

export default function OnboardingPage() {
  return <OnboardingWizard />;
}
