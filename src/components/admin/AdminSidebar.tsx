import { 
  LayoutDashboard, 
  Users, 
  Activity, 
  FileText, 
  Settings,
  Image,
  Clock,
  Shield,
  TrendingUp,
  MapPin,
  Map,
  RefreshCw
} from "lucide-react";
import { cn } from "../ui/utils";

interface AdminSidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  isOpen: boolean;
}

export function AdminSidebar({ activeView, onViewChange, isOpen }: AdminSidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "clients", label: "Clients", icon: Users },
    { id: "location", label: "Location Tracking", icon: MapPin },
    { id: "map", label: "Map View", icon: Map },
    { id: "tally", label: "Tally Sync", icon: RefreshCw },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r bg-background transition-transform md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col gap-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                activeView === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
}