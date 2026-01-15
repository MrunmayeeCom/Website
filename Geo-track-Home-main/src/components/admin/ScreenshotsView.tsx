import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search, Download, Calendar, Eye, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ScreenshotsView() {
  const [selectedEmployee, setSelectedEmployee] = useState("all");
  const [selectedDate, setSelectedDate] = useState("today");

  const screenshots = [
    {
      id: 1,
      employee: "John Smith",
      timestamp: "10:45 AM",
      date: "Today",
      activity: "VS Code - Working on frontend",
      productive: true,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300"
    },
    {
      id: 2,
      employee: "Sarah Johnson",
      timestamp: "10:40 AM",
      date: "Today",
      activity: "Figma - Designing dashboard",
      productive: true,
      thumbnail: "https://images.unsplash.com/photo-1594065296416-aed7ae708d58?w=300"
    },
    {
      id: 3,
      employee: "Mike Chen",
      timestamp: "10:35 AM",
      date: "Today",
      activity: "Slack - Team communication",
      productive: true,
      thumbnail: "https://images.unsplash.com/photo-1639485528505-0dcdae9ec84c?w=300"
    },
    {
      id: 4,
      employee: "Emma Davis",
      timestamp: "10:30 AM",
      date: "Today",
      activity: "YouTube - Video watching",
      productive: false,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300"
    },
    {
      id: 5,
      employee: "James Wilson",
      timestamp: "10:25 AM",
      date: "Today",
      activity: "Chrome - Research",
      productive: true,
      thumbnail: "https://images.unsplash.com/photo-1594065296416-aed7ae708d58?w=300"
    },
    {
      id: 6,
      employee: "Lisa Anderson",
      timestamp: "10:20 AM",
      date: "Today",
      activity: "Excel - Data analysis",
      productive: true,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300"
    },
    {
      id: 7,
      employee: "David Brown",
      timestamp: "10:15 AM",
      date: "Today",
      activity: "Outlook - Email management",
      productive: true,
      thumbnail: "https://images.unsplash.com/photo-1639485528505-0dcdae9ec84c?w=300"
    },
    {
      id: 8,
      employee: "Maria Garcia",
      timestamp: "10:10 AM",
      date: "Today",
      activity: "Photoshop - Image editing",
      productive: true,
      thumbnail: "https://images.unsplash.com/photo-1594065296416-aed7ae708d58?w=300"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl mb-2">Screenshot Monitoring</h2>
          <p className="text-muted-foreground">
            View automated screenshots captured every 5 minutes
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Download All
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <CardTitle>Recent Screenshots</CardTitle>
              <CardDescription>Automatically captured screen activity</CardDescription>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All Employees" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Employees</SelectItem>
                  <SelectItem value="john">John Smith</SelectItem>
                  <SelectItem value="sarah">Sarah Johnson</SelectItem>
                  <SelectItem value="mike">Mike Chen</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedDate} onValueChange={setSelectedDate}>
                <SelectTrigger className="w-32">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {screenshots.map((screenshot) => (
              <Card key={screenshot.id} className="overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative aspect-video bg-muted">
                  <ImageWithFallback
                    src={screenshot.thumbnail}
                    alt={`Screenshot from ${screenshot.employee}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="secondary">
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                  </div>
                  {!screenshot.productive && (
                    <Badge variant="destructive" className="absolute top-2 right-2">
                      Unproductive
                    </Badge>
                  )}
                </div>
                <CardContent className="p-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{screenshot.employee}</span>
                      <span className="text-xs text-muted-foreground">{screenshot.timestamp}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {screenshot.activity}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing 8 of 1,247 screenshots
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="mb-1 text-blue-900 dark:text-blue-100">Screenshot Capture Settings</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Screenshots are automatically captured every 5 minutes during active work hours. 
                All images are encrypted and stored securely in compliance with data protection regulations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
