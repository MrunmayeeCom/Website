import { useState } from "react";
import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";
import { AdminDashboard } from "./AdminDashboard";
import { EmployeesView } from "./EmployeesView";
import { ScreenshotsView } from "./ScreenshotsView";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Construction } from "lucide-react";

interface AdminPanelProps {
  onLogout: () => void;
}

export function AdminPanel({ onLogout }: AdminPanelProps) {
  const [activeView, setActiveView] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <AdminDashboard />;
      case "clients":
        return <EmployeesView />;
      case "location":
      case "map":
      case "tally":
      case "reports":
      case "analytics":
      case "settings":
        return (
          <div className="flex items-center justify-center min-h-[400px]">
            <Card className="max-w-md">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-muted rounded-full">
                    <Construction className="h-8 w-8 text-muted-foreground" />
                  </div>
                </div>
                <CardTitle className="text-center">Coming Soon</CardTitle>
                <CardDescription className="text-center">
                  This feature is currently under development and will be available soon.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        );
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader onLogout={onLogout} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <AdminSidebar 
        activeView={activeView} 
        onViewChange={setActiveView}
        isOpen={sidebarOpen}
      />
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="md:pl-64 pt-16">
        <div className="container mx-auto p-6">
          {renderView()}
        </div>
      </main>
    </div>
  );
}