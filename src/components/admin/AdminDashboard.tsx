import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { 
  Users, 
  Activity, 
  Clock, 
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Monitor,
  MousePointer,
  MapPin,
  Navigation
} from "lucide-react";
import { Progress } from "../ui/progress";

export function AdminDashboard() {
  const stats = [
    {
      title: "Total Clients",
      value: "2,845",
      change: "+18%",
      trend: "up",
      icon: Users,
      color: "blue"
    },
    {
      title: "Field Reps Active",
      value: "42",
      change: "87.5%",
      trend: "up",
      icon: Activity,
      color: "green"
    },
    {
      title: "Today's Visits",
      value: "156",
      change: "+12.3%",
      trend: "up",
      icon: TrendingUp,
      color: "purple"
    },
    {
      title: "GPS Logs Today",
      value: "1,892",
      change: "+5.7%",
      trend: "up",
      icon: MapPin,
      color: "orange"
    }
  ];

  const recentActivity = [
    { employee: "Rajesh Kumar", action: "Visited Client (MedPlus)", time: "5m ago", status: "active" },
    { employee: "Priya Sharma", action: "Moving (Area: 400001)", time: "12m ago", status: "active" },
    { employee: "Amit Patel", action: "At Client Location", time: "18m ago", status: "active" },
    { employee: "Sunita Mehta", action: "Synced 25 clients from Tally", time: "45m ago", status: "idle" },
    { employee: "Vikram Singh", action: "Completed 8 visits", time: "1h ago", status: "active" }
  ];

  const topPincodes = [
    { name: "400001 - Mumbai Central", usage: 89, clients: "142 clients", productive: true },
    { name: "110001 - Delhi Connaught", usage: 76, clients: "98 clients", productive: true },
    { name: "560001 - Bangalore MG Road", usage: 68, clients: "87 clients", productive: true },
    { name: "700001 - Kolkata BBD Bagh", usage: 45, clients: "56 clients", productive: true },
    { name: "600001 - Chennai Parrys", usage: 38, clients: "42 clients", productive: true }
  ];

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
      green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
      purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
      orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400"
    };
    return colors[color];
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Real-time insights into your field sales activity and client management
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg ${getColorClass(stat.color)}`}>
                  <Icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  {stat.trend === "up" ? (
                    <ArrowUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <ArrowDown className="h-3 w-3 text-red-600" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>
                    {stat.change}
                  </span>
                  <span>from last week</span>
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest field sales team activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${
                      activity.status === "active" ? "bg-green-500" :
                      activity.status === "idle" ? "bg-yellow-500" :
                      "bg-gray-400"
                    }`} />
                    <div>
                      <p className="text-sm">{activity.employee}</p>
                      <p className="text-xs text-muted-foreground">{activity.action}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Pincodes</CardTitle>
            <CardDescription>Client distribution by area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPincodes.map((area, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{area.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{area.clients}</span>
                  </div>
                  <Progress value={area.usage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Visit Efficiency</CardTitle>
            <CardDescription>Team average today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted-foreground/20"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.825)}`}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">82.5%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Status</CardTitle>
            <CardDescription>Current field team activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>On Visit</span>
                  <span>62%</span>
                </div>
                <Progress value={62} className="h-2 bg-green-100 [&>div]:bg-green-600" />
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>In Transit</span>
                  <span>28%</span>
                </div>
                <Progress value={28} className="h-2 bg-yellow-100 [&>div]:bg-yellow-600" />
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Offline</span>
                  <span>10%</span>
                </div>
                <Progress value={10} className="h-2 bg-gray-100 [&>div]:bg-gray-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Location Metrics</CardTitle>
            <CardDescription>GPS tracking stats</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">GPS Logs</span>
              </div>
              <span className="text-sm">1,892</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Avg Accuracy</span>
              </div>
              <span className="text-sm">99.7%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Client Visits</span>
              </div>
              <span className="text-sm">156</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}