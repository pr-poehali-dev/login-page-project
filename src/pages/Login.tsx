import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="w-full max-w-md relative z-10 animate-scale-in">
        <div className="glass rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-xl border border-white/30">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
              <Icon name="Lock" size={32} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
              Вход
            </h1>
            <p className="text-white/80 text-sm">
              Добро пожаловать! Войдите в свой аккаунт
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Label htmlFor="email" className="text-white font-medium">
                Email
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Icon name="Mail" size={20} className="text-white/60" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:border-white/40 transition-all duration-300 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Label htmlFor="password" className="text-white font-medium">
                Пароль
              </Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Icon name="KeyRound" size={20} className="text-white/60" />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:border-white/40 transition-all duration-300 h-12"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-white/40 data-[state=checked]:bg-white data-[state=checked]:text-primary"
              />
              <label
                htmlFor="remember"
                className="text-sm text-white/90 font-medium cursor-pointer select-none"
              >
                Запомнить меня
              </label>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-white text-primary hover:bg-white/90 font-heading font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Войти
            </Button>
          </form>

          <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors duration-200 underline-offset-4 hover:underline">
              Забыли пароль?
            </a>
          </div>
        </div>

        <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-white/70 text-sm">
            Нет аккаунта?{' '}
            <a href="#" className="text-white font-semibold hover:underline underline-offset-4 transition-all duration-200">
              Зарегистрироваться
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
