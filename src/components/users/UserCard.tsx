import { User } from '@/services/api';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Globe, MapPin, Edit, Trash2, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserCardProps {
  user: User;
  onView: (user: User) => void;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export function UserCard({ user, onView, onEdit, onDelete }: UserCardProps) {
  return (
    <Card className="group hover:shadow-md transition-all duration-200 border-border hover:border-primary/20">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-lg">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground text-lg leading-tight">
                  {user.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  @{user.username}
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="text-xs">
              ID: {user.id}
            </Badge>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{user.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{user.website}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">
                {user.address.city}, {user.address.zipcode}
              </span>
            </div>
          </div>

          {/* Company */}
          <div className="pt-2 border-t border-border">
            <p className="text-sm font-medium text-card-foreground">
              {user.company.name}
            </p>
            <p className="text-xs text-muted-foreground italic">
              "{user.company.catchPhrase}"
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-2 pt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onView(user)}
              className="h-8"
            >
              <Eye className="w-4 h-4 mr-1" />
              View
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(user)}
              className="h-8"
            >
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(user)}
              className="h-8 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}