'use client';

import { MetricCard } from '@/components/dashboard/metric-card';
import { Button } from '@/components/ui/button';
import {
  Flame,
  Droplets,
  Apple,
  Dumbbell,
  TrendingUp,
  Heart,
  ArrowRight,
  Clock,
  Target,
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  // Demo data
  const userName = 'Alex';
  const userMetrics = {
    calories: { current: 1850, goal: 2200 },
    protein: { current: 95, goal: 150 },
    water: { current: 6, goal: 8 },
    steps: { current: 8234, goal: 10000 },
  };

  const morningGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {morningGreeting()}, {userName}!
              </h1>
              <p className="text-foreground/60">Here&apos;s your health summary for today</p>
            </div>
            <Link href="/profile">
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                View Profile
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4">
            <MetricCard
              label="Calories"
              value={userMetrics.calories.current}
              unit="kcal"
              icon={Flame}
              variant="nutrition"
              progress={(userMetrics.calories.current / userMetrics.calories.goal) * 100}
              trend={{ value: 5, direction: 'down' }}
            />
            <MetricCard
              label="Protein"
              value={userMetrics.protein.current}
              unit="g"
              icon={Apple}
              variant="health"
              progress={(userMetrics.protein.current / userMetrics.protein.goal) * 100}
              trend={{ value: 3, direction: 'up' }}
            />
            <MetricCard
              label="Water"
              value={userMetrics.water.current}
              unit="cups"
              icon={Droplets}
              variant="workout"
              progress={(userMetrics.water.current / userMetrics.water.goal) * 100}
              trend={{ value: 1, direction: 'up' }}
            />
            <MetricCard
              label="Steps"
              value={userMetrics.steps.current.toLocaleString()}
              unit="steps"
              icon={TrendingUp}
              variant="default"
              progress={(userMetrics.steps.current / userMetrics.steps.goal) * 100}
              trend={{ value: 12, direction: 'up' }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's AI Recommendations */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Today&apos;s AI Recommendations</h2>

              <div className="glass rounded-2xl p-6 border-l-4 border-primary space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground">Increase Water Intake</p>
                    <p className="text-sm text-foreground/60">You&apos;re 2 cups behind your daily goal. Stay hydrated!</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border-l-4 border-secondary space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground">You&apos;re Doing Great!</p>
                    <p className="text-sm text-foreground/60">You&apos;ve completed 2 of your 3 scheduled workouts this week.</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border-l-4 border-accent space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground">Perfect Nutrition</p>
                    <p className="text-sm text-foreground/60">Your macros are perfectly balanced for muscle gain. Keep it up!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Progress */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">This Week&apos;s Progress</h2>

              <div className="glass rounded-2xl p-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Workouts Completed</span>
                    <span className="text-2xl font-bold text-primary">2/3</span>
                  </div>
                  <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-workout rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Meals Logged</span>
                    <span className="text-2xl font-bold text-primary">18/21</span>
                  </div>
                  <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-5/6 bg-gradient-nutrition rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Goal Adherence</span>
                    <span className="text-2xl font-bold text-primary">94%</span>
                  </div>
                  <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-health rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Quick Actions</h3>

              <Link href="/meals">
                <Button variant="outline" className="w-full justify-start h-12">
                  <Apple className="w-5 h-5 mr-3" />
                  Log Meal
                </Button>
              </Link>

              <Link href="/workouts">
                <Button variant="outline" className="w-full justify-start h-12">
                  <Dumbbell className="w-5 h-5 mr-3" />
                  Start Workout
                </Button>
              </Link>

              <Link href="/profile">
                <Button variant="outline" className="w-full justify-start h-12">
                  <Target className="w-5 h-5 mr-3" />
                  Update Goals
                </Button>
              </Link>
            </div>

            {/* Upcoming */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Next Up</h3>

              <div className="glass rounded-2xl p-6 space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Upper Body Workout</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Clock className="w-4 h-4" />
                    <span>Today at 6:00 PM</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  View Workout
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="glass rounded-2xl p-6 space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Dinner Meal Plan</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Clock className="w-4 h-4" />
                    <span>In 2 hours</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  View Meals
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Health Score */}
            <div className="glass rounded-2xl p-6 space-y-4 bg-gradient-to-br from-primary/10 to-accent/10">
              <h3 className="font-semibold text-foreground">Overall Health Score</h3>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-border"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#healthGradient)"
                      strokeWidth="8"
                      strokeDasharray="141.3 282.7"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(16, 185, 137)" />
                        <stop offset="100%" stopColor="rgb(249, 115, 22)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">84</p>
                      <p className="text-xs text-foreground/60">out of 100</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-foreground/70 text-center">You&apos;re in great shape! Keep going!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
