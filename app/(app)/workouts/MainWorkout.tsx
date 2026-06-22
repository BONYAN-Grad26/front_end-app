'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dumbbell, Plus, Clock, Play, Armchair, CheckCircle2 } from 'lucide-react';
import { PlanData, WeeklySchedule } from '@/lib/interfaces';


interface WorkoutsPageProps {
  planData:PlanData;
}

export default function WorkoutsPage({ planData }: WorkoutsPageProps) {



  const plan = planData;
  const schedule = plan.weekly_schedule;
  const daysArray = Object.keys(schedule) as Array<keyof WeeklySchedule>;

  const [selectedDay, setSelectedDay] = useState<keyof WeeklySchedule>('Monday');
  const activeSession = schedule[selectedDay];

  const totalWorkoutDays = daysArray.filter(d => schedule[d].exercises.length > 0).length;
  const totalExercisesThisWeek = daysArray.reduce((acc, d) => acc + schedule[d].exercises.length, 0);
  const estimatedHours = ((totalWorkoutDays * 40) / 60).toFixed(1); 
  const estimatedCalories = totalWorkoutDays * 380;

  return (
    <div className="min-h-screen bg-stone-50/60 text-slate-800 antialiased selection:bg-emerald-100">
      
      {/* Header - Light & Airy Green */}
      <div className="bg-white border-b border-emerald-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                {plan.split_type} Split Plan
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mt-3 mb-2">
                {plan.plan_name}
              </h1>
              <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
                {plan.split_reasoning}
              </p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-xs px-5 py-5 rounded-xl transition-colors">
              <Plus className="w-5 h-5 mr-2" />
              Custom Workout
            </Button>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Exercise Block */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Weekly Tabs Selector */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Weekly Schedule</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {daysArray.map((day) => {
                  const isRest = schedule[day].session.toUpperCase() === 'REST';
                  const isSelected = selectedDay === day;
                  
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`p-3 rounded-xl text-center space-y-1 transition-all border ${
                        isSelected
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs scale-[1.02]'
                          : isRest
                            ? 'bg-slate-100/80 border-slate-200/60 text-slate-400 hover:bg-slate-100'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300'
                      }`}
                    >
                      <p className={`text-xs font-semibold ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                        {day.substring(0, 3)}
                      </p>
                      <p className="text-xs font-bold truncate">
                        {isRest ? 'Rest' : 'Workout'}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Workout Header & Items */}
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-slate-200 pb-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {activeSession.session}
                  </h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Focus: <span className="font-semibold text-emerald-700">{activeSession.focus}</span>
                  </p>
                </div>
                {activeSession.exercises.length > 0 && (
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs rounded-lg">
                    <Play className="w-4 h-4 mr-2 fill-current" /> Start Circuit
                  </Button>
                )}
              </div>

              {/* Cards Generation */}
              {activeSession.exercises.length === 0 ? (
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center bg-white shadow-xs">
                  <Armchair className="w-12 h-12 text-slate-300 mb-3" />
                  <h3 className="text-base font-bold text-slate-800">Active Recovery Day</h3>
                  <p className="text-xs text-slate-400 max-w-xs mt-1">
                    No intense training scheduled for today. Allow your body to rest, repair, and focus on stretching or light walks.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {activeSession.exercises.map((exercise, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white border border-slate-200 rounded-xl p-5 hover:border-emerald-400 transition-all shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                              {idx + 1}
                            </span>
                            <h3 className="text-base font-bold text-slate-900">{exercise.name}</h3>
                          </div>
                          <p className="text-xs text-slate-500 pl-7 leading-relaxed">
                            {exercise.notes}
                          </p>
                        </div>
                        
                        {/* Target Badges in Light Emerald/Slate */}
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto pl-7 sm:pl-0">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                            {exercise.sets} Sets
                          </span>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                            {exercise.reps} Reps
                          </span>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {exercise.rest_seconds}s
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Light Green Details */}
          <div className="space-y-6">
            
            {/* Target Stats Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 shadow-xs">
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                Weekly Target Analytics
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1.5 text-xs font-bold text-slate-600">
                    <span>Active Commitment</span>
                    <span>{totalWorkoutDays} / 7 Days</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 transition-all duration-500" 
                      style={{ width: `${(totalWorkoutDays / 7) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <p className="text-[11px] font-medium text-slate-400 mb-0.5">Exercises</p>
                    <p className="text-lg font-bold text-slate-800">{totalExercisesThisWeek}</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <p className="text-[11px] font-medium text-slate-400 mb-0.5">Duration</p>
                    <p className="text-lg font-bold text-slate-800">{estimatedHours} hrs</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-medium text-slate-400 mb-0.5">Est. Weekly Calories</p>
                  <p className="text-3xl font-black text-emerald-600 tracking-tight">
                    ~{estimatedCalories.toLocaleString()} <span className="text-xs font-bold text-slate-400">kcal</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Prompt Card */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                <h4 className="font-bold text-xs uppercase tracking-wider">Circuit Strategy</h4>
              </div>
              <p className="text-xs text-emerald-800/90 leading-relaxed">
                Perform these exercises consecutively as a continuous block. Once all structured exercises are completed sequentially, rest up to 2 minutes, and restart the cycle for your next set.
              </p>
            </div>

            {/* Blueprint Legend */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs">
              <h3 className="font-bold text-[11px] text-slate-400 uppercase tracking-wider">Difficulty Blueprint</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <p className="text-slate-500"><span className="font-semibold text-slate-700">Beginner</span> — Focus on safety & form</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <p className="text-slate-500"><span className="font-semibold text-slate-700">Intermediate</span> — Overload pacing</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}