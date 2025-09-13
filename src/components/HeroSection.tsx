import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, TrendingUp, Target, Shield } from "lucide-react"
import heroImage from "@/assets/hero-dashboard.jpg"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Financial Intelligence
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Smart Finance
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Management
              </span>
              <br />
              for Students
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Take control of your finances with AI-powered expense tracking, 
              predictive analytics, and smart budgeting tools designed specifically for students.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Predictive Analytics</div>
                  <div className="text-sm text-muted-foreground">Smart forecasting</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Target className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-medium">Goal Tracking</div>
                  <div className="text-sm text-muted-foreground">Achieve targets</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Shield className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="font-medium">Secure & Private</div>
                  <div className="text-sm text-muted-foreground">Bank-level security</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by 50,000+ students worldwide</p>
              <div className="flex items-center gap-6 opacity-60">
                <div className="text-sm font-medium">★★★★★ 4.9/5</div>
                <div className="text-sm">•</div>
                <div className="text-sm">Featured on Product Hunt</div>
                <div className="text-sm">•</div>
                <div className="text-sm">SOC 2 Compliant</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative lg:pl-8">
            <div className="relative animate-fade-in-up delay-300">
              {/* Main dashboard image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
                <img 
                  src={heroImage} 
                  alt="Student Finance Manager Dashboard"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-card rounded-xl p-4 shadow-lg animate-scale-in delay-700 border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Updates</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg animate-scale-in delay-1000 border border-border/50">
                <div className="text-sm text-muted-foreground">Monthly Savings</div>
                <div className="text-2xl font-bold text-success">+₹12,450</div>
                <div className="text-xs text-success">↗ 23% increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}