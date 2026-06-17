import { Input } from '@/components/ui/input';
import { DietGoal, DietType, OnboardingData } from '@/lib/interfaces';

interface GoalsStepProps {
  data: Partial<OnboardingData>;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
}

const dietGoals = [
  { id: DietGoal.LOSE_WEIGHT, label: 'Weight Loss', icon: '⬇️' },
  { id: DietGoal.GAIN_MUSCLE, label: 'Muscle Gain', icon: '💪' },
  { id: DietGoal.MAINTAIN_WEIGHT, label: 'Maintenance', icon: '⚖️' },
  { id :DietGoal.IMPROVE_HEALTH , label:"improve health" , icon:'🏹'}
];

const dietTypes = [
  { id: DietType.BALANCED, label: 'Balanced Diet', description: 'Moderate macros' },
  { id: DietType.VEGAN, label: 'Vegan', description: 'Plant-based' },
  { id: DietType.PALEO, label: 'Paleo', description: 'Whole foods' },
  { id: DietType.HIGH_PROTEIN, label: 'High Protein', description: 'For muscle building' },
  {id :DietType.MEDITERRANEAN , label :"MEDITERRANEAN" , description:"For muscle building"}
];

export function GoalsStep({ data, updateData }: GoalsStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Your Goals</h2>
        <p className="text-foreground/60">What are you trying to achieve?</p>
      </div>

      {/* Diet Goal */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Primary Goal</h3>
        <div className="grid grid-cols-3 gap-4">
          {dietGoals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => updateData({ dietGoal: goal.id })}
              className={`p-4 rounded-xl border-2 transition-all text-center group ${
                data.dietGoal === goal.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="text-3xl mb-2">{goal.icon}</div>
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {goal.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Target Weight */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Target Weight (kg)</label>
        <Input
          type="number"
          placeholder="Enter your target weight"
          value={data.targetWeight || ''}
          onChange={(e) => updateData({ targetWeight: parseInt(e.target.value) || 0 })}
          className="h-11"
          min={20}
          max={500}
        />
      </div>

      {/* Daily Calorie Target */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Daily Calorie Target</label>
        <Input
          type="number"
          placeholder="Enter daily calorie goal (e.g., 2000)"
          value={data.dailyCalories || ''}
          onChange={(e) => updateData({ dailyCalories: parseInt(e.target.value) || 0 })}
          className="h-11"
          min={1000}
        />
        <p className="text-sm text-foreground/60">Leave empty for AI to calculate based on your metrics</p>
      </div>

      {/* Diet Type */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Preferred Diet Type</h3>
        <div className="grid gap-3">
          {dietTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => updateData({ dietType: type.id })}
              className={`p-4 rounded-xl border-2 transition-all text-left group ${
                data.dietType === type.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {type.label}
              </p>
              <p className="text-sm text-foreground/60">{type.description}</p>
            </button>
          ))}
        </div>
      </div>

      {data.dietGoal && data.dietType && (
        <div className="glass-primary rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-2">Your Plan Overview</h3>
          <p className="text-sm text-foreground/70">
            We&apos;ll create a personalized {data.dietType} meal plan to help you achieve your{' '}
            {dietGoals.find((g) => g.id === data.dietGoal)?.label.toLowerCase()} goal.
          </p>
        </div>
      )}
    </div>
  );
}
