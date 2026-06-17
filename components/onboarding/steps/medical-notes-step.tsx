import { OnboardingData } from "@/lib/interfaces";

interface MedicalNotesStepProps {
  data: Partial<OnboardingData>;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
}

export function MedicalNotesStep({ data, updateData }: MedicalNotesStepProps) {
  const suggestions = [
    'Diabetes management',
    'Hypertension control',
    'Thyroid condition',
    'Joint issues',
    'Digestive problems',
    'Heart condition',
    'Previous injuries',
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Medical Information</h2>
        <p className="text-foreground/60">Any health conditions or medical notes we should know about?</p>
      </div>

      {/* Textarea */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Medical Notes (Optional)</label>
        <textarea
          value={data.medicalNotes}
          onChange={(e) => updateData({ medicalNotes: e.target.value })}
          placeholder="E.g., I have a knee injury from basketball, I'm managing my blood sugar, etc."
          className="w-full p-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-40"
        />
      </div>

      {/* Quick Suggestions */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Common health conditions</p>
        <div className="grid gap-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => {
                const existing = data.medicalNotes
                  ? data.medicalNotes + ', ' + suggestion
                  : suggestion;
                updateData({ medicalNotes: existing });
              }}
              className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-left text-sm font-medium text-foreground"
            >
              + {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4 space-y-2">
        <h4 className="font-semibold text-blue-900 dark:text-blue-200">Your Privacy Matters</h4>
        <p className="text-sm text-blue-800 dark:text-blue-300">
          All medical information is encrypted and securely stored. It will never be shared with third parties without your consent.
        </p>
      </div>

      {data.medicalNotes && (
        <div className="glass-primary rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-2">How We Use This</h3>
          <p className="text-sm text-foreground/70">
            Your medical information helps our AI create nutrition and workout plans that are safe and effective for your specific health situation.
          </p>
        </div>
      )}
    </div>
  );
}
