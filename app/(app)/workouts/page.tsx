'use client';

import { Button } from '@/components/ui/button';
import { Dumbbell, Plus, Clock, TrendingUp, Play } from 'lucide-react';

export default function WorkoutsPage() {
  const workouts = [
    {
      id: 1,
      name: 'Upper Body Strength',
      type: 'Strength',
      duration: 45,
      exercises: 6,
      difficulty: 'Intermediate',
      scheduled: 'Today at 6:00 PM',
      focusAreas: ['Chest', 'Back', 'Shoulders'],
    },
    {
      id: 2,
      name: 'HIIT Cardio Blast',
      type: 'Cardio',
      duration: 30,
      exercises: 8,
      difficulty: 'Advanced',
      scheduled: 'Tomorrow at 7:00 AM',
      focusAreas: ['Full Body', 'Endurance'],
    },
    {
      id: 3,
      name: 'Lower Body & Core',
      type: 'Strength',
      duration: 50,
      exercises: 7,
      difficulty: 'Intermediate',
      scheduled: 'Thursday at 5:30 PM',
      focusAreas: ['Legs', 'Glutes', 'Core'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Workout Plans</h1>
              <p className="text-foreground/60">Your AI-powered personalized training program</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Plus className="w-5 h-5 mr-2" />
              Custom Workout
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weekly Split */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">This Week&apos;s Split</h2>

              <div className="grid grid-cols-7 gap-2">
                {[
                  { day: 'Mon', workout: 'Upper' },
                  { day: 'Tue', workout: 'Lower' },
                  { day: 'Wed', workout: 'Rest' },
                  { day: 'Thu', workout: 'Full', active: true },
                  { day: 'Fri', workout: 'Cardio' },
                  { day: 'Sat', workout: 'Core' },
                  { day: 'Sun', workout: 'Rest' },
                ].map((item, i) => (
                  <div
                    key={item.day}
                    className={`p-3 rounded-xl text-center space-y-2 ${
                      item.active
                        ? 'glass-primary border-primary'
                        : item.workout === 'Rest'
                          ? 'glass border-border opacity-60'
                          : 'glass border-border'
                    }`}
                  >
                    <p className="text-xs font-semibold text-foreground/70">{item.day}</p>
                    <p className="text-sm font-bold text-foreground">{item.workout}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Workouts */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Your Workouts</h2>

              <div className="space-y-4">
                {workouts.map((workout) => (
                  <div
                    key={workout.id}
                    className="glass rounded-2xl p-6 hover:glass-primary transition-all cursor-pointer group"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Dumbbell className="w-5 h-5 text-primary" />
                          <p className="text-sm font-semibold text-foreground/60">{workout.type}</p>
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {workout.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-foreground/60 mt-1">
                          <Clock className="w-4 h-4" />
                          {workout.scheduled}
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        <Play className="w-4 h-4 mr-2" />
                        Start
                      </Button>
                    </div>

                    {/* Workout Details */}
                    <div className="grid grid-cols-4 gap-4 pt-4 border-t border-border/50">
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">Duration</p>
                        <p className="font-bold text-foreground">{workout.duration} min</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60 mb-1">Exercises</p>
                        <p className="font-bold text-foreground">{workout.exercises}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-foreground/60 mb-1">Focus Areas</p>
                        <div className="flex flex-wrap gap-1">
                          {workout.focusAreas.map((area) => (
                            <span
                              key={area}
                              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="font-bold text-foreground text-lg">This Week&apos;s Stats</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-foreground/70">Completed</span>
                    <span className="font-bold text-foreground">2/5</span>
                  </div>
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-2/5 bg-gradient-workout"></div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-foreground/70 mb-2">Total Duration</p>
                  <p className="text-3xl font-bold text-foreground">6.5 hrs</p>
                </div>

                <div>
                  <p className="text-sm text-foreground/70 mb-2">Est. Calories Burned</p>
                  <p className="text-3xl font-bold text-primary">2,140</p>
                </div>
              </div>
            </div>

            {/* Next Workout */}
            <div className="glass-primary rounded-2xl p-6 space-y-4 border-l-4 border-primary">
              <h3 className="font-bold text-foreground">Next Scheduled Workout</h3>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Upper Body Strength</p>
                <p className="text-sm text-foreground/70">Today at 6:00 PM • 45 minutes</p>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                <Play className="w-4 h-4 mr-2" />
                Start Now
              </Button>
            </div>

            {/* Difficulty Legend */}
            <div className="glass rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-foreground text-sm">Difficulty Levels</h3>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70">🟢 <span className="font-medium">Beginner</span> - Easy to start</p>
                <p className="text-foreground/70">🟡 <span className="font-medium">Intermediate</span> - Moderate challenge</p>
                <p className="text-foreground/70">🔴 <span className="font-medium">Advanced</span> - High intensity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
