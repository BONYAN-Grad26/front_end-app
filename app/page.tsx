import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Brain, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Your AI Health Companion</span>
                </div>

                <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
                  Your AI{' '}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Diet Coach & Doctor
                  </span>
                </h1>

                <p className="text-xl text-foreground/70 text-balance">
                  Get personalized meal plans, AI-powered workouts, and real-time health insights tailored to your unique goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background flex items-center justify-center text-white text-sm font-bold"
                    >
                      {i}K
                    </div>
                  ))}
                </div>
                <div className="text-sm text-foreground/70">
                  <p className="font-semibold text-foreground">10K+ health enthusiasts</p>
                  <p>transformed their bodies with Bonyan</p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden glass">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Brain className="w-24 h-24 text-primary mx-auto opacity-60" />
                  <p className="text-foreground/50">AI Health Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 px-4 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Why Choose Bonyan?
            </h2>
            <p className="text-xl text-foreground/60 text-balance max-w-2xl mx-auto">
              Combining AI intelligence with medical expertise for comprehensive health transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl glass hover:glass-primary transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-gradient-health flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">AI-Powered Coaching</h3>
              <p className="text-foreground/60">
                Personalized meal plans and workout routines created by advanced AI algorithms that learn from your preferences and progress.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl glass hover:glass-primary transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-gradient-nutrition flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Smart Meal Planning</h3>
              <p className="text-foreground/60">
                Never wonder what to eat. Get weekly meal plans with macro tracking, allergen warnings, and nutritional insights.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl glass hover:glass-primary transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-gradient-workout flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Real-Time Health Tracking</h3>
              <p className="text-foreground/60">
                Monitor your progress with interactive dashboards, health metrics, and AI-generated insights about your fitness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 sm:py-32 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <h2 className="text-4xl sm:text-5xl  font-bold text-foreground text-center text-balance mb-16 ">
            Your Journey in 3 Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-5">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="pt-8 text-center space-y-4">
                <h3 className="text-xl font-bold text-foreground">Tell Us About You</h3>
                <p className="text-foreground/60">
                  Share your health metrics, goals, allergies, and lifestyle preferences in our intuitive onboarding wizard.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="pt-8 text-center space-y-4">
                <h3 className="text-xl font-bold text-foreground">Get Your AI Plan</h3>
                <p className="text-foreground/60">
                  Our AI instantly generates personalized meal plans and workout routines designed specifically for your body and goals.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="pt-8 text-center space-y-4">
                <h3 className="text-xl font-bold text-foreground">Track & Transform</h3>
                <p className="text-foreground/60">
                  Follow your personalized plan, track your progress, and receive continuous AI coaching as you reach your health goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-foreground/60 text-balance">
            Join thousands who have already started their AI-powered health journey
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">Bonyan</span>
              </div>
              <p className="text-foreground/60 text-sm">Your AI Diet Coach & Doctor</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; 2024 Bonyan. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
