import { Users, Activity, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '10',
      description: 'Active users in system',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      title: 'Activity',
      value: '24',
      description: 'Recent actions today',
      icon: Activity,
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      title: 'Growth',
      value: '+12%',
      description: 'Compared to last month',
      icon: TrendingUp,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
    {
      title: 'Events',
      value: '8',
      description: 'Scheduled this week',
      icon: Calendar,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome to FlowDesk Technologies dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Organize your work, sync your team, and flow through tasks with ease.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`w-8 h-8 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Welcome Card */}
      <Card className="bg-gradient-surface border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl">Welcome to FlowDesk Dashboard</CardTitle>
          <CardDescription>
            This is a mini-dashboard built as part of the Frontend Internship challenge.
            Navigate to the Users page to manage user data with full CRUD operations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium text-card-foreground">Core Features:</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Dashboard – clean overview of tasks & users</li>
                <li>• Task Management – create, update, delete tasks</li>
                <li>• Team Management – view & manage users</li>
                <li>• Search & Filters – find tasks/users quickly</li>
                <li>• Dark/Light Mode – theme toggle</li>
                <li>• Responsive Layout – mobile & desktop friendly</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-card-foreground">Technologies Used:</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• React.js with TypeScript</li>
                <li>• Tailwind CSS with custom design system</li>
                <li>• TanStack Query for data fetching</li>
                <li>• React Hook Form for form handling</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}