'use client';

import { Button } from '@/components/ui/button';
import { Apple, Plus, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';

export default function MealsPage() {
  const meals = [
    {
      id: 1,
      name: 'Grilled Chicken Salad',
      mealType: 'Lunch',
      time: '12:30 PM',
      calories: 420,
      protein: 45,
      carbs: 25,
      fat: 12,
    },
    {
      id: 2,
      name: 'Protein Smoothie Bowl',
      mealType: 'Breakfast',
      time: '8:00 AM',
      calories: 380,
      protein: 30,
      carbs: 50,
      fat: 8,
    },
    {
      id: 3,
      name: 'Salmon with Sweet Potato',
      mealType: 'Dinner',
      time: 'Scheduled for 6:30 PM',
      calories: 520,
      protein: 48,
      carbs: 35,
      fat: 18,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Meal Planning</h1>
              <p className="text-foreground/60">Your personalized AI-generated meal plan</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Plus className="w-5 h-5 mr-2" />
              Log Meal
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weekly Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">This Week&apos;s Plan</h2>

              <div className="grid grid-cols-7 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                  <div
                    key={day}
                    className={`p-4 rounded-xl text-center space-y-2 ${
                      i === 2
                        ? 'glass-primary border-primary'
                        : 'glass border-border'
                    }`}
                  >
                    <p className="text-sm font-semibold text-foreground">{day}</p>
                    <p className="text-xs text-foreground/60">2100 kcal</p>
                    <div className="w-full h-1 bg-border rounded-full">
                      <div className="h-full w-3/4 bg-gradient-nutrition rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Meals */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Today&apos;s Meals</h2>

              <div className="space-y-4">
                {meals.map((meal) => (
                  <div
                    key={meal.id}
                    className="glass rounded-2xl p-6 hover:glass-primary transition-all cursor-pointer group"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Apple className="w-5 h-5 text-primary" />
                          <p className="text-sm font-semibold text-foreground/60">{meal.mealType}</p>
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {meal.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-foreground/60 mt-1">
                          <Clock className="w-4 h-4" />
                          {meal.time}
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-3xl font-bold text-foreground">{meal.calories}</p>
                        <p className="text-xs text-foreground/60">kcal</p>
                      </div>
                    </div>

                    {/* Macros */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">Protein</p>
                        <p className="font-bold text-foreground">{meal.protein}g</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">Carbs</p>
                        <p className="font-bold text-foreground">{meal.carbs}g</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">Fat</p>
                        <p className="font-bold text-foreground">{meal.fat}g</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Summary */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-foreground text-lg">Today&apos;s Summary</h3>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-foreground/70">Calories</span>
                    <span className="font-bold text-foreground">1320 / 2200</span>
                  </div>
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-gradient-nutrition"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-foreground/70">Protein</span>
                    <span className="font-bold text-foreground">123 / 150g</span>
                  </div>
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-health"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-foreground/70">Carbs</span>
                    <span className="font-bold text-foreground">110 / 275g</span>
                  </div>
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-2/5 bg-gradient-workout"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="glass-primary rounded-2xl p-6 space-y-4 border-l-4 border-primary">
              <h3 className="font-bold text-foreground">AI Recommendation</h3>
              <p className="text-sm text-foreground/70">
                Your dinner is scheduled for 6:30 PM. The AI suggests the Salmon with Sweet Potato to hit your protein goals.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                <Apple className="w-4 h-4 mr-2" />
                View Recommendation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
