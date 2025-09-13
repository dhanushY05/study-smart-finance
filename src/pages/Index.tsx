import { HeroSection } from "@/components/HeroSection";
import { DashboardCards } from "@/components/DashboardCards";
import { AnalyticsCharts } from "@/components/AnalyticsCharts";
import { ExpenseTracker } from "@/components/ExpenseTracker";

const Index = () => {
  return (
    <div className="space-y-12">
      <HeroSection />
      
      {/* Dashboard Section */}
      <section id="dashboard" className="scroll-mt-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Dashboard Overview</h2>
          <p className="text-muted-foreground">
            Monitor your financial health at a glance
          </p>
        </div>
        <DashboardCards />
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="scroll-mt-20">
        <AnalyticsCharts />
      </section>

      {/* Expense Tracking Section */}
      <section id="expenses" className="scroll-mt-20">
        <ExpenseTracker />
      </section>
    </div>
  );
};

export default Index;
