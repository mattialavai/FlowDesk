import { Settings as SettingsIcon, Palette, User, Bell, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/contexts/ThemeContext';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  const settingsSections = [
    {
      icon: Palette,
      title: 'Appearance',
      description: 'Customize the look and feel of your dashboard',
      settings: [
        {
          id: 'theme',
          label: 'Dark Mode',
          description: 'Switch between light and dark themes',
          type: 'switch' as const,
          checked: theme === 'dark',
          onChange: toggleTheme,
        },
      ],
    },
    {
      icon: User,
      title: 'Profile',
      description: 'Manage your account and personal information',
      settings: [
        {
          id: 'profile_public',
          label: 'Public Profile',
          description: 'Make your profile visible to other users',
          type: 'switch' as const,
          checked: true,
          onChange: () => {},
        },
        {
          id: 'show_email',
          label: 'Show Email',
          description: 'Display your email address on your profile',
          type: 'switch' as const,
          checked: false,
          onChange: () => {},
        },
      ],
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Control when and how you receive notifications',
      settings: [
        {
          id: 'email_notifications',
          label: 'Email Notifications',
          description: 'Receive notifications via email',
          type: 'switch' as const,
          checked: true,
          onChange: () => {},
        },
        {
          id: 'push_notifications',
          label: 'Push Notifications',
          description: 'Receive push notifications in your browser',
          type: 'switch' as const,
          checked: false,
          onChange: () => {},
        },
      ],
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Keep your account safe and secure',
      settings: [
        {
          id: 'two_factor',
          label: 'Two-Factor Authentication',
          description: 'Add an extra layer of security to your account',
          type: 'switch' as const,
          checked: false,
          onChange: () => {},
        },
        {
          id: 'login_notifications',
          label: 'Login Notifications',
          description: 'Get notified when someone logs into your account',
          type: 'switch' as const,
          checked: true,
          onChange: () => {},
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Settings Cards */}
      <div className="space-y-6">
        {settingsSections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.settings.map((setting, index) => (
                <div key={setting.id}>
                  {index > 0 && <Separator className="mb-4" />}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor={setting.id} className="text-sm font-medium">
                        {setting.label}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {setting.description}
                      </p>
                    </div>
                    <Switch
                      id={setting.id}
                      checked={setting.checked}
                      onCheckedChange={setting.onChange}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
          <CardDescription>
            Irreversible and destructive actions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg bg-destructive/5">
            <div>
              <h4 className="text-sm font-medium text-foreground">Reset Settings</h4>
              <p className="text-sm text-muted-foreground">
                Reset all settings to their default values
              </p>
            </div>
            <Button variant="outline" size="sm">
              Reset
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg bg-destructive/5">
            <div>
              <h4 className="text-sm font-medium text-foreground">Delete Account</h4>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all associated data
              </p>
            </div>
            <Button variant="destructive" size="sm">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}