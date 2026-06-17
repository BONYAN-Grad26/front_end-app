import { ActivityLevel, OnboardingData } from "@/lib/interfaces";

interface LifestyleStepProps {
  data: Partial<OnboardingData>;
  updateData: (data:Partial<OnboardingData>) => void;
  onNext: () => void;
}

const activityLevels = [
  {
    id: ActivityLevel.SEDENTARY,
    label: 'Sedentary',
    description: 'Little or no exercise',
    emoji: '🪑',
  },
  {
    id: ActivityLevel.LIGHTLY_ACTIVE,
    label: 'Lightly Active',
    description: 'Exercise 1-3 days/week',
    emoji: '🚶',
  },
  {
    id: ActivityLevel.MODERATELY_ACTIVE,
    label: 'Moderately Active',
    description: 'Exercise 3-5 days/week',
    emoji: '🏃',
  },
  {
    id: ActivityLevel.VERY_ACTIVE,
    label: 'Very Active',
    description: 'Exercise 6-7 days/week',
    emoji: '💪',
  },

];

export function LifestyleStep({ data, updateData }: LifestyleStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Your Lifestyle</h2>
        <p className="text-foreground/60">How active is your daily routine?</p>
      </div>

      <div className="grid gap-4">
        {activityLevels.map((level) => (
          <button
            key={level.id}
            onClick={() => updateData({ activityLevel: level.id })}
            className={`p-4 rounded-xl border-2 transition-all text-left group ${
              data.activityLevel === level.id
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {level.label}
                </p>
                <p className="text-sm text-foreground/60">{level.description}</p>
              </div>
              <span className="text-3xl">{level.emoji}</span>
            </div>
          </button>
        ))}
      </div>

      {data.activityLevel && (
        <div className="glass-primary rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-2">What This Means</h3>
          <p className="text-sm text-foreground/70">
            {activityLevels.find((l) => l.id === data.activityLevel)?.description}
          </p>
          <p className="text-sm text-foreground/60 mt-3">
            Based on your activity level, we&apos;ll calculate your daily calorie needs and adjust your meal plan accordingly.
          </p>
        </div>
      )}
    </div>
  );
}
