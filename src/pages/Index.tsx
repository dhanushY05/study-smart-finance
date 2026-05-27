import { HeroSection } from "@/components/HeroSection";
import { DashboardCards } from "@/components/DashboardCards";
import { AnalyticsCharts } from "@/components/AnalyticsCharts";
import { ExpenseTracker } from "@/components/ExpenseTracker";

const Index = () => {
  return (
    <div>
      <HeroSection />

      <div className="container mx-auto p-6 max-w-7xl space-y-12">
        <section id="dashboard" className="scroll-mt-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Dashboard Overview</h2>
            <p className="text-muted-foreground">
              Monitor your financial health at a glance
            </p>
          </div>
          <DashboardCards />
        </section>

        <section id="analytics" className="scroll-mt-20">
          <AnalyticsCharts />
        </section>

        <section id="expenses" className="scroll-mt-20">
          <ExpenseTracker />
        </section>
      </div>
    </div>
  );
};

export default Index;
