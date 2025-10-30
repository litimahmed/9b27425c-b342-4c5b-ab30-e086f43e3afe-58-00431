import { useState } from "react";
import { DollarSign, TrendingUp, Wallet, Download, ArrowUpRight, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export function EarningsDashboard() {
  const [timeRange, setTimeRange] = useState("30d");
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  const monthlyData = [
    { month: "Jul", amount: 12400, sales: 124 },
    { month: "Aug", amount: 15200, sales: 152 },
    { month: "Sep", amount: 18600, sales: 186 },
    { month: "Oct", amount: 21300, sales: 213 },
    { month: "Nov", amount: 19800, sales: 198 },
    { month: "Dec", amount: 24350, sales: 244 },
  ];

  const courseRevenue = [
    { name: "Complete React Development", revenue: 28413, progress: 85, color: "bg-primary" },
    { name: "JavaScript Fundamentals", revenue: 15247, progress: 65, color: "bg-accent" },
    { name: "TypeScript Advanced", revenue: 18705, progress: 75, color: "bg-secondary" },
  ];

  const maxAmount = Math.max(...monthlyData.map(d => d.amount));
  const totalRevenue = courseRevenue.reduce((sum, course) => sum + course.revenue, 0);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Earnings</h1>
        <p className="text-muted-foreground">Visual overview of your revenue streams</p>
      </div>

      {/* Time Range */}
      <Tabs value={timeRange} onValueChange={setTimeRange}>
        <TabsList>
          <TabsTrigger value="7d">Week</TabsTrigger>
          <TabsTrigger value="30d">Month</TabsTrigger>
          <TabsTrigger value="90d">Quarter</TabsTrigger>
          <TabsTrigger value="1y">Year</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Main Revenue Card - Large & Visual */}
      <Card className="bg-gradient-to-br from-success/10 via-primary/5 to-accent/5 border-success/20">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-3 rounded-lg bg-success/20">
                  <DollarSign className="w-6 h-6 text-success" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Total Earnings</span>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-foreground">
                  ${totalRevenue.toLocaleString()}
                </div>
                <div className="flex items-center gap-2 text-success">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm font-medium">+15.7% this month</span>
                </div>
              </div>
              <Button size="lg" className="bg-success hover:bg-success/90">
                <CreditCard className="w-5 h-5 mr-2" />
                Request Payout
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card">
                <div className="text-2xl font-bold text-foreground mb-1">$8.4K</div>
                <div className="text-xs text-muted-foreground">This Month</div>
                <Progress value={70} className="h-1 mt-2" />
              </div>
              <div className="p-4 rounded-lg bg-card">
                <div className="text-2xl font-bold text-foreground mb-1">$21.2K</div>
                <div className="text-xs text-muted-foreground">Available</div>
                <Progress value={90} className="h-1 mt-2" />
              </div>
              <div className="p-4 rounded-lg bg-card">
                <div className="text-2xl font-bold text-foreground mb-1">$2.1K</div>
                <div className="text-xs text-muted-foreground">Pending</div>
                <Progress value={30} className="h-1 mt-2" />
              </div>
              <div className="p-4 rounded-lg bg-card">
                <div className="text-2xl font-bold text-foreground mb-1">$32.50</div>
                <div className="text-xs text-muted-foreground">Avg/Student</div>
                <Progress value={65} className="h-1 mt-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Earnings Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Revenue Trend
            </CardTitle>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Chart */}
            <div className="h-80 flex items-end justify-between gap-2">
              {monthlyData.map((data, index) => (
                <div 
                  key={index} 
                  className="flex-1 flex flex-col items-center gap-3"
                  onMouseEnter={() => setHoveredMonth(index)}
                  onMouseLeave={() => setHoveredMonth(null)}
                >
                  <div className="relative w-full h-72 flex items-end">
                    <div
                      className="w-full bg-gradient-to-t from-success/40 to-success/20 rounded-t-lg transition-all duration-300 hover:from-success/50 hover:to-success/30 cursor-pointer relative overflow-hidden group"
                      style={{ height: `${(data.amount / maxAmount) * 100}%` }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Tooltip on hover */}
                      {hoveredMonth === index && (
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg p-3 shadow-lg whitespace-nowrap z-10 animate-fade-in">
                          <div className="space-y-1 text-xs">
                            <div className="flex justify-between gap-4">
                              <span className="text-muted-foreground">Revenue:</span>
                              <span className="font-semibold text-success">${data.amount.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between gap-4">
                              <span className="text-muted-foreground">Sales:</span>
                              <span className="font-semibold">{data.sales}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{data.month}</span>
                </div>
              ))}
            </div>

            {/* Growth indicator */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-muted-foreground">
                <span className="font-semibold text-success">$23.9K</span> growth in 6 months
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue by Course - Visual Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-primary" />
            Revenue by Course
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {courseRevenue.map((course, index) => {
              const percentage = ((course.revenue / totalRevenue) * 100).toFixed(1);
              return (
                <div 
                  key={index}
                  className="group p-6 rounded-xl bg-muted/20 hover:bg-muted/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-12 rounded-full ${course.color}`} />
                      <div>
                        <h3 className="font-semibold text-foreground">{course.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {percentage}% of total revenue
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-success">
                        ${course.revenue.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`absolute inset-y-0 left-0 ${course.color} rounded-full transition-all duration-500 group-hover:opacity-90`}
                      style={{ width: `${course.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Payout CTA */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Wallet className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Ready to withdraw?</h3>
                <p className="text-muted-foreground">$21,200 available for payout</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button size="lg" variant="outline">
                View History
              </Button>
              <Button size="lg" className="bg-success hover:bg-success/90">
                <CreditCard className="w-5 h-5 mr-2" />
                Withdraw Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
