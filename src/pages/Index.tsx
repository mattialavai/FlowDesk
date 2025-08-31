import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, LayoutDashboard, Settings } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  // Redirect to dashboard after a short delay to show the landing page
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const features = [
    {
      icon: LayoutDashboard,
      title: 'Dashboard',
      description: 'Overview of your application with key metrics and statistics',
      path: '/dashboard'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Complete CRUD operations for managing users with JSONPlaceholder API',
      path: '/users'
    },
    {
      icon: Settings,
      title: 'Settings',
      description: 'Configure your application preferences and account settings',
      path: '/settings'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface flex items-center justify-center p-6">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-bold text-2xl">IS</span>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            FlowDesk Technologies
          </h1>
          <h2 className="text-xl lg:text-2xl text-primary font-semibold">
            Frontend Internship Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A professional mini-dashboard built with React.js, TypeScript, Tailwind CSS, 
            and modern web development best practices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer border-border hover:border-primary/20"
              onClick={() => navigate(feature.path)}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => navigate('/dashboard')}
            className="text-lg px-8 py-6 shadow-glow"
          >
            Enter Dashboard
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            You'll be automatically redirected in a few seconds...
          </p>
        </div>

        {/* Tech Stack */}
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center">Built With</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query',
                'React Hook Form', 'Shadcn/ui', 'JSONPlaceholder API'
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
