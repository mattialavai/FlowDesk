import { useState, useEffect } from 'react';
import { User, CreateUserData } from '@/services/api';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, Globe, MapPin, Building, User as UserIcon } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface UserModalProps {
  user: User | null;
  isOpen: boolean;
  mode: 'view' | 'edit' | 'create';
  onClose: () => void;
  onSave?: (data: CreateUserData) => void;
}

export function UserModal({ user, isOpen, mode, onClose, onSave }: UserModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateUserData>({
    defaultValues: {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    },
  });

  useEffect(() => {
    if (user && (mode === 'edit' || mode === 'view')) {
      reset({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
      });
    } else if (mode === 'create') {
      reset({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
      });
    }
  }, [user, mode, reset]);

  const onSubmit: SubmitHandler<CreateUserData> = async (data) => {
    if (onSave) {
      await onSave(data);
      onClose();
    }
  };

  const getTitle = () => {
    switch (mode) {
      case 'view':
        return 'User Details';
      case 'edit':
        return 'Edit User';
      case 'create':
        return 'Create New User';
      default:
        return 'User';
    }
  };

  const getDescription = () => {
    switch (mode) {
      case 'view':
        return 'View user information and details.';
      case 'edit':
        return 'Update user information.';
      case 'create':
        return 'Add a new user to the system.';
      default:
        return '';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserIcon className="w-5 h-5" />
            {getTitle()}
          </DialogTitle>
          <DialogDescription>{getDescription()}</DialogDescription>
        </DialogHeader>

        {mode === 'view' && user ? (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center space-x-4 p-4 bg-gradient-surface rounded-lg">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-card-foreground">
                  {user.name}
                </h3>
                <p className="text-muted-foreground">@{user.username}</p>
                <Badge variant="secondary" className="mt-1">
                  User ID: {user.id}
                </Badge>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-card-foreground">Contact Information</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">{user.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
                  <Globe className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Website</p>
                    <p className="text-sm text-muted-foreground">{user.website}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-card-foreground">Address</h4>
              <div className="flex items-start space-x-3 p-3 bg-card rounded-lg border border-border">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    {user.address.street}, {user.address.suite}
                    <br />
                    {user.address.city}, {user.address.zipcode}
                  </p>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-card-foreground">Company</h4>
              <div className="flex items-start space-x-3 p-3 bg-card rounded-lg border border-border">
                <Building className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-sm font-medium">{user.company.name}</p>
                  <p className="text-sm text-muted-foreground italic">
                    "{user.company.catchPhrase}"
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {user.company.bs}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                  placeholder="Enter full name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  {...register('username', {
                    required: 'Username is required',
                    minLength: { value: 3, message: 'Username must be at least 3 characters' }
                  })}
                  placeholder="Enter username"
                  disabled={isSubmitting}
                />
                {errors.username && (
                  <p className="text-sm text-destructive">{errors.username.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
                })}
                placeholder="Enter email address"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  {...register('phone', { required: 'Phone is required' })}
                  placeholder="Enter phone number"
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  {...register('website', {
                    required: 'Website is required',
                    pattern: { value: /^https?:\/\//, message: 'Website must start with http:// or https://' }
                  })}
                  placeholder="https://example.com"
                  disabled={isSubmitting}
                />
                {errors.website && (
                  <p className="text-sm text-destructive">{errors.website.message}</p>
                )}
              </div>
            </div>

            <DialogFooter className="gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : mode === 'create' ? 'Create User' : 'Save Changes'}
              </Button>
            </DialogFooter>
          </form>
        )}

        {mode === 'view' && (
          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}