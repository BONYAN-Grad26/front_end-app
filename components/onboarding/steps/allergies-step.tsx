'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { OnboardingData } from '@/lib/interfaces';

interface AllergiesStepProps {
  data: Partial<OnboardingData>;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
}

const commonAllergies = [
  'Peanuts',
  'Tree Nuts',
  'Milk',
  'Eggs',
  'Fish',
  'Shellfish',
  'Wheat',
  'Soy',
  'Sesame',
  'Mustard',
];

export function AllergiesStep({ data, updateData }: AllergiesStepProps) {
  const [searchInput, setSearchInput] = useState('');

  const toggleAllergy = (allergy: string) => {
    const updatedAllergies = data.allergies!.includes(allergy)
      ? data.allergies!.filter((a: string) => a !== allergy)
      : [...data.allergies!, allergy];
    updateData({ allergies: updatedAllergies });
  };

  const addCustomAllergy = () => {
    if (searchInput && !data.allergies!.includes(searchInput)) {
      updateData({ allergies: [...data.allergies!, searchInput] });
      setSearchInput('');
    }
  };

  const filteredAllergies = commonAllergies.filter((allergy) =>
    allergy.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Allergies & Restrictions</h2>
        <p className="text-foreground/60">Tell us about any food allergies or dietary restrictions</p>
      </div>

      {/* Search and Add */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search or add an allergy..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                addCustomAllergy();
              }
            }}
            className="h-11 flex-1"
          />
          {searchInput && !commonAllergies.includes(searchInput) && (
            <button
              onClick={addCustomAllergy}
              className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
            >
              Add
            </button>
          )}
        </div>

        {/* Common Allergies */}
        {searchInput && filteredAllergies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {filteredAllergies.map((allergy) => (
              <button
                key={allergy}
                onClick={() => {
                  toggleAllergy(allergy);
                  setSearchInput('');
                }}
                className="px-4 py-2 rounded-lg border-2 border-primary/50 hover:border-primary hover:bg-primary/5 transition-colors text-sm font-medium text-foreground"
              >
                + {allergy}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Selected Allergies */}
      {data.allergies!.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Your Allergies ({data.allergies.length})</h3>
          <div className="flex flex-wrap gap-2">
            {data.allergies!.map((allergy: string) => (
              <div
                key={allergy}
                className="px-4 py-2 rounded-lg bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-900 flex items-center gap-2 group"
              >
                <span className="text-sm font-medium text-red-700 dark:text-red-300">{allergy}</span>
                <button
                  onClick={() => toggleAllergy(allergy)}
                  className="p-1 hover:bg-red-200 dark:hover:bg-red-800 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-red-700 dark:text-red-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Allergies List */}
      {!searchInput && (
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground text-sm">Common Allergies</h3>
          <div className="grid grid-cols-2 gap-2">
            {commonAllergies.map((allergy) => (
              <button
                key={allergy}
                onClick={() => toggleAllergy(allergy)}
                className={`p-3 rounded-lg border-2 transition-all text-left text-sm font-medium ${
                  data.allergies!.includes(allergy)
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                    : 'border-border hover:border-primary/50 text-foreground'
                }`}
              >
                {allergy}
              </button>
            ))}
          </div>
        </div>
      )}

      {data.allergies!.length > 0 && (
        <div className="glass-primary rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-2">Meals Will Be Customized</h3>
          <p className="text-sm text-foreground/70">
            All meal recommendations will avoid your listed allergies to keep you safe and healthy.
          </p>
        </div>
      )}
    </div>
  );
}
