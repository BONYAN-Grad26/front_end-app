'use client';

import { Button } from '@/components/ui/button';
import { Settings, Bell, Eye, Lock, Globe } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
            <Settings className="w-8 h-8" />
            Settings
          </h1>
          <p className="text-foreground/60">Manage your preferences and account settings</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Notifications */}
          <div className="glass rounded-2xl p-6 space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Bell className="w-6 h-6 text-primary" />
              Notifications
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/5 transition-colors">
                <div>
                  <p className="font-semibold text-foreground">Meal Reminders</p>
                  <p className="text-sm text-foreground/60">Get reminded to log your meals</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/5 transition-colors">
                <div>
                  <p className="font-semibold text-foreground">Workout Alerts</p>
                  <p className="text-sm text-foreground/60">Get notified when workouts are ready</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/5 transition-colors">
                <div>
                  <p className="font-semibold text-foreground">Progress Updates</p>
                  <p className="text-sm text-foreground/60">Weekly summary of your progress</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/5 transition-colors">
                <div>
                  <p className="font-semibold text-foreground">AI Insights</p>
                  <p className="text-sm text-foreground/60">Daily AI-powered health recommendations</p>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="glass rounded-2xl p-6 space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Lock className="w-6 h-6 text-primary" />
              Privacy & Security
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/5 transition-colors">
                <div>
                  <p className="font-semibold text-foreground">Private Profile</p>
                  <p className="text-sm text-foreground/60">Only you can see your health data</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/5 transition-colors">
                <div>
                  <p className="font-semibold text-foreground">Data Analytics</p>
                  <p className="text-sm text-foreground/60">Allow Bonyan to improve using your data</p>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/5 transition-colors">
                <div>
                  <p className="font-semibold text-foreground">Research Studies</p>
                  <p className="text-sm text-foreground/60">Participate in health research (optional)</p>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="glass rounded-2xl p-6 space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Eye className="w-6 h-6 text-primary" />
              Appearance
            </h2>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground mb-3">Theme</p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-lg border-2 border-primary bg-primary/10 text-primary font-medium">
                    Light
                  </button>
                  <button className="px-4 py-2 rounded-lg border-2 border-border hover:border-primary/50 font-medium text-foreground">
                    Dark
                  </button>
                  <button className="px-4 py-2 rounded-lg border-2 border-border hover:border-primary/50 font-medium text-foreground">
                    System
                  </button>
                </div>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-3">Accent Color</p>
                <div className="flex gap-3">
                  {[
                    { name: 'Emerald', color: 'bg-emerald-500' },
                    { name: 'Blue', color: 'bg-blue-500' },
                    { name: 'Orange', color: 'bg-orange-500' },
                    { name: 'Pink', color: 'bg-pink-500' },
                  ].map((accent) => (
                    <button
                      key={accent.name}
                      className={`w-10 h-10 rounded-lg ${accent.color} ${
                        accent.name === 'Emerald'
                          ? 'ring-2 ring-offset-2 ring-primary'
                          : 'hover:opacity-80 transition-opacity'
                      }`}
                      title={accent.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Language & Region */}
          <div className="glass rounded-2xl p-6 space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary" />
              Language & Region
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Language</label>
                <select className="w-full p-3 rounded-lg border border-border bg-background text-foreground">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>Arabic</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Timezone</label>
                <select className="w-full p-3 rounded-lg border border-border bg-background text-foreground">
                  <option>UTC-5 (Eastern Time)</option>
                  <option>UTC-6 (Central Time)</option>
                  <option>UTC-7 (Mountain Time)</option>
                  <option>UTC-8 (Pacific Time)</option>
                  <option>UTC+0 (GMT)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Measurement Units</label>
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 rounded-lg border-2 border-primary bg-primary/10 text-primary font-medium">
                    Metric (kg, cm)
                  </button>
                  <button className="flex-1 px-4 py-2 rounded-lg border-2 border-border hover:border-primary/50 font-medium text-foreground">
                    Imperial (lbs, in)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex gap-3">
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-white h-11">Save Changes</Button>
            <Button variant="outline" className="flex-1 h-11">
              Reset to Defaults
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
