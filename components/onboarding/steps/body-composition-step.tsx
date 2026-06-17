import { Input } from '@/components/ui/input';
import { OnboardingData } from '@/lib/interfaces';
import { Zap } from 'lucide-react';

interface BodyCompositionStepProps {
  data: Partial<OnboardingData>;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
}

export function BodyCompositionStep({ data, updateData }: BodyCompositionStepProps) {
  const weight = data.weight ?? 0;
  const fatPercentage = data.fatPercentage ?? 0;
  const leanMass = weight * ((100 - fatPercentage) / 100);
  const fatMass = weight * (fatPercentage / 100);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Body Composition</h2>
        <p className="text-foreground/60">Help us understand your muscle and fat percentages</p>
      </div>

      <div className="space-y-6">
        {/* Muscle Percentage */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-foreground">Muscle Mass %</label>
            <span className="text-2xl font-bold text-primary">{data.musclePercentage}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={data.musclePercentage}
            onChange={(e) => {
              const muscle = parseInt(e.target.value);
              updateData({
                musclePercentage: muscle,
                fatPercentage: Math.max(0, 100 - muscle),
              });
            }}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-foreground/60">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>

        {/* Fat Percentage */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-foreground">Body Fat %</label>
            <span className="text-2xl font-bold text-accent">{data.fatPercentage}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={data.fatPercentage}
            onChange={(e) => {
              const fat = parseInt(e.target.value);
              updateData({
                fatPercentage: fat,
                musclePercentage: Math.max(0, 100 - fat),
              });
            }}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
          />
          <div className="flex justify-between text-xs text-foreground/60">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>
      </div>

      {/* Body Composition Breakdown */}
      {data.weight && (
        <div className="glass-primary rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Your Body Breakdown
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-gradient-health"></div>
                <span className="text-sm text-foreground/70">Lean Mass</span>
              </div>
              <span className="font-semibold text-foreground">{leanMass.toFixed(1)} kg</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-gradient-nutrition"></div>
                <span className="text-sm text-foreground/70">Fat Mass</span>
              </div>
              <span className="font-semibold text-foreground">{fatMass.toFixed(1)} kg</span>
            </div>
          </div>

          <div className="w-full h-3 rounded-full bg-border overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600"
              style={{ width: `${data.musclePercentage}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-300">
          <strong>Tip:</strong> If you don&apos;t know your exact body composition, you can estimate or skip this step. Our AI can help calculate it based on other metrics.
        </p>
      </div>
    </div>
  );
}
