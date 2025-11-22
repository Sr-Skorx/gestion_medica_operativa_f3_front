'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type UserRole = 'coordinador' | 'medico' | 'recepcionista';

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<UserRole | ''>('');

  const handleLogin = () => {
    if (selectedRole) {
      // En una aplicación real, aquí guardarías la sesión del usuario.
      // Por ahora, solo redirigimos al dashboard.
      // El dashboard usará un usuario mock basado en el rol.
      console.log(`Simulando inicio de sesión como: ${selectedRole}`);
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Iniciar Sesión
          </CardTitle>
          <CardDescription>
            Selecciona un rol para acceder al panel de control.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="role-selector">Rol de Usuario</Label>
            <Select onValueChange={(value) => setSelectedRole(value as UserRole)} value={selectedRole}>
              <SelectTrigger id="role-selector">
                <SelectValue placeholder="Selecciona un rol..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="coordinador">Coordinador</SelectItem>
                <SelectItem value="medico">Médico</SelectItem>
                <SelectItem value="recepcionista">Recepcionista</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleLogin} disabled={!selectedRole}>
            Ingresar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
