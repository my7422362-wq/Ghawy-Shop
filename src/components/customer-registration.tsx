import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const registrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  message: z.string().optional(),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

export function CustomerRegistration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = (data: RegistrationForm) => {
    console.log('Registration data:', data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="container-custom mx-auto">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Thank You!</h1>
          <p className="text-white/60 mb-8">
            Your registration has been submitted successfully. We'll get back to you soon!
          </p>
          <Button asChild>
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom mx-auto">
      <div className="max-w-2xl mx-auto">
        <Card className="glass-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold gradient-text">Customer Registration</CardTitle>
            <CardDescription className="text-white/60">
              Join our community and get exclusive access to new arrivals and special offers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    {...register('name')}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  {...register('phone')}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  {...register('address')}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Enter your address"
                  rows={3}
                />
                {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address.message}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Any additional message"
                  rows={3}
                />
              </div>
              <Button type="submit" className="w-full bg-neon-pink hover:bg-neon-pink/80">
                Register Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
