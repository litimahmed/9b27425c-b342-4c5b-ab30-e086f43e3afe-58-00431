import { useState } from "react";
import { TrendingUp, Users, Eye, Clock, BookOpen, Award, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState("30d");
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const weeklyData = [
    { day: "Mon", views: 450, enrollments: 45, completion: 75 },
    { day: "Tue", views: 520, enrollments: 52, completion: 78 },
    { day: "Wed", views: 480, enrollments: 48, completion: 72 },
    { day: "Thu", views: 580, enrollments: 58, completion: 80 },
    { day: "Fri", views: 620, enrollments: 62, completion: 85 },
    { day: "Sat", views: 390, enrollments: 38, completion: 70 },
    { day: "Sun", views: 340, enrollments: 32, completion: 68 },
  ];

  const courses = [
    { 
      name: "Complete React Development", 
      progress: 82, 
      students: 2847, 
      rating: 4.8,
      color: "bg-primary" 
    },
    { 
      name: "JavaScript Fundamentals", 
      progress: 75, 
      students: 1923, 
      rating: 4.6,
      color: "bg-accent" 
    },
    { 
      name: "TypeScript Advanced", 
      progress: 68, 
      students: 1456, 
      rating: 4.9,
      color: "bg-secondary" 
    },
  ];

  const maxValue = Math.max(...weeklyData.map(d => d.views));

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Visual overview of your teaching performance</p>
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

      {/* Key Metrics - Visual Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Eye className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-foreground">24.5K</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
              <Progress value={75} className="h-1" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Users className="w-5 h-5 text-accent" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-foreground">1.2K</div>
              <div className="text-sm text-muted-foreground">Students</div>
              <Progress value={82} className="h-1" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-success/10 group-hover:bg-success/20 transition-colors">
                <Clock className="w-5 h-5 text-success" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-foreground">42m</div>
              <div className="text-sm text-muted-foreground">Avg Watch Time</div>
              <Progress value={68} className="h-1" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-warning/10 group-hover:bg-warning/20 transition-colors">
                <Award className="w-5 h-5 text-warning" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-foreground">4.8</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
              <Progress value={96} className="h-1" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Weekly Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            Weekly Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Chart */}
            <div className="h-64 flex items-end justify-between gap-2">
              {weeklyData.map((data, index) => (
                <div 
                  key={index} 
                  className="flex-1 flex flex-col items-center gap-3 group"
                  onMouseEnter={() => setHoveredDay(index)}
                  onMouseLeave={() => setHoveredDay(null)}
                >
                  <div className="relative w-full h-56 flex items-end">
                    <div
                      className="w-full bg-primary/20 rounded-t-lg transition-all duration-300 hover:bg-primary/30 cursor-pointer relative overflow-hidden"
                      style={{ height: `${(data.views / maxValue) * 100}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                      
                      {/* Tooltip on hover */}
                      {hoveredDay === index && (
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg p-3 shadow-lg whitespace-nowrap z-10 animate-fade-in">
                          <div className="space-y-1 text-xs">
                            <div className="flex justify-between gap-4">
                              <span className="text-muted-foreground">Views:</span>
                              <span className="font-semibold">{data.views}</span>
                            </div>
                            <div className="flex justify-between gap-4">
                              <span className="text-muted-foreground">Enrollments:</span>
                              <span className="font-semibold">{data.enrollments}</span>
                            </div>
                            <div className="flex justify-between gap-4">
                              <span className="text-muted-foreground">Completion:</span>
                              <span className="font-semibold">{data.completion}%</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{data.day}</span>
                </div>
              ))}
            </div>

            {/* Trend Indicator */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-muted-foreground">
                <span className="font-semibold text-success">+12.5%</span> vs last week
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Performance - Visual Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Course Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-xl bg-muted/20 hover:bg-muted/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-12 rounded-full ${course.color}`} />
                    <div>
                      <h3 className="font-semibold text-foreground">{course.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {course.students.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {course.rating} ★
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{course.progress}%</div>
                    <div className="text-xs text-muted-foreground">Completion</div>
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
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Insights */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-success/5 to-success/10 border-success/20">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-success" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">TypeScript</div>
            <div className="text-sm text-muted-foreground">Highest rated course</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">+22%</div>
            <div className="text-sm text-muted-foreground">Fastest growing</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-warning" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">42 min</div>
            <div className="text-sm text-muted-foreground">Avg engagement time</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
