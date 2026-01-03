import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search, UserPlus, Download, Filter, MapPin, Phone } from "lucide-react";

export function EmployeesView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const employees = [
    {
      id: 1,
      name: "MedPlus Pharmacy",
      email: "contact@medplus.com",
      phone: "+91 98765 43210",
      pincode: "400001",
      area: "Mumbai Central",
      status: "active",
      visits: 12,
      lastVisit: "2h ago",
      latitude: 18.9632,
      longitude: 72.8264
    },
    {
      id: 2,
      name: "Apollo Health Center",
      email: "info@apollo.com",
      phone: "+91 98765 43211",
      pincode: "110001",
      area: "Delhi Connaught",
      status: "active",
      visits: 8,
      lastVisit: "1d ago",
      latitude: 28.6139,
      longitude: 77.2090
    },
    {
      id: 3,
      name: "City Care Clinic",
      email: "care@cityclinic.in",
      phone: "+91 98765 43212",
      pincode: "560001",
      area: "Bangalore MG Road",
      status: "active",
      visits: 15,
      lastVisit: "3h ago",
      latitude: 12.9716,
      longitude: 77.5946
    },
    {
      id: 4,
      name: "HealthFirst Diagnostics",
      email: "contact@healthfirst.com",
      phone: "+91 98765 43213",
      pincode: "700001",
      area: "Kolkata BBD Bagh",
      status: "inactive",
      visits: 3,
      lastVisit: "15d ago",
      latitude: 22.5726,
      longitude: 88.3639
    },
    {
      id: 5,
      name: "Wellness Pharmacy",
      email: "info@wellness.in",
      phone: "+91 98765 43214",
      pincode: "600001",
      area: "Chennai Parrys",
      status: "active",
      visits: 10,
      lastVisit: "5h ago",
      latitude: 13.0827,
      longitude: 80.2707
    },
    {
      id: 6,
      name: "Prime Medical Store",
      email: "prime@medical.com",
      phone: "+91 98765 43215",
      pincode: "400001",
      area: "Mumbai Central",
      status: "active",
      visits: 14,
      lastVisit: "1h ago",
      latitude: 18.9688,
      longitude: 72.8205
    },
    {
      id: 7,
      name: "Sunrise Diagnostics",
      email: "sunrise@diag.in",
      phone: "+91 98765 43216",
      pincode: "110001",
      area: "Delhi Connaught",
      status: "active",
      visits: 9,
      lastVisit: "4h ago",
      latitude: 28.6304,
      longitude: 77.2177
    },
    {
      id: 8,
      name: "Medicare Solutions",
      email: "contact@medicare.com",
      phone: "+91 98765 43217",
      pincode: "560001",
      area: "Bangalore MG Road",
      status: "active",
      visits: 11,
      lastVisit: "2h ago",
      latitude: 12.9762,
      longitude: 77.6033
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", label: string }> = {
      active: { variant: "default", label: "Active" },
      idle: { variant: "secondary", label: "Idle" },
      inactive: { variant: "outline", label: "Inactive" }
    };
    return variants[status] || variants.inactive;
  };

  const getVisitsColor = (visits: number) => {
    if (visits >= 10) return "text-green-600 dark:text-green-400";
    if (visits >= 5) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.phone.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || emp.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl mb-2">Client Management</h2>
          <p className="text-muted-foreground">
            Monitor and manage all client accounts
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Add Client
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <CardTitle>All Clients ({filteredEmployees.length})</CardTitle>
              <CardDescription>View and manage client database</CardDescription>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Visits</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((employee) => {
                const statusBadge = getStatusBadge(employee.status);
                return (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{employee.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {employee.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{employee.email}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <div>
                          <div className="text-sm">{employee.pincode}</div>
                          <div className="text-xs text-muted-foreground">{employee.area}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusBadge.variant}>{statusBadge.label}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className={getVisitsColor(employee.visits)}>
                        {employee.visits}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{employee.lastVisit}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View Details</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}