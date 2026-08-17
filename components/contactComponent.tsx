import { type IconType } from 'react-icons';
// import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

export interface ContactMethod {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  details: string;
}

export interface Contact5Props {
  badge?: string;
  heading: string;
  description?: string;
  contactMethods: ContactMethod[];
  footerText?: string;
}

export function Contact5({
  badge,
  heading,
  description,
  contactMethods,
  footerText,
}: Contact5Props) {
  return (
    <section className="bg-background w-full py-12">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-20 text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-bold uppercase tracking-wider">
            Get in Touch
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Let's Start <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Building Together
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="divide divide-border border-border grid grid-cols-1 divide-y border-t border-b md:grid-cols-3 md:divide-x md:divide-y-0 md:mask-r-from-95% md:mask-l-from-95%">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <div
                key={method.id}
                className={cn(
                  'flex flex-col items-center px-4 py-8 text-center md:px-8 md:py-4',
                  idx % 2 === 0 ? 'bg-background' : 'bg-muted/50',
                )}
              >
                <div className="bg-primary/30 text-primary border-primary/30 mb-5 rounded-xl border p-3 shadow-[inset_0_2px_6px_0_rgba(255,255,255,1),0px_0px_0px_1px_rgba(0,0,0,0),0px_1px_2px_-1px_rgba(0,0,0,0.03),0px_2px_4px_0px_rgba(0,0,0,0.03),inset_0_-4px_6px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_4px_6px_0_rgba(0,0,0,0.4),0px_0px_0px_1px_rgba(0,0,0,0),0px_1px_2px_-1px_rgba(0,0,0,0.03),0px_2px_4px_0px_rgba(0,0,0,0.03),inset_0_-4px_6px_0_rgba(0,0,0,0.1),inset_0_4px_6px_0_rgba(255,255,255,0.3)]">
                  <Icon className="h-6 w-6 md:h-7 md:w-7" />
                </div>
                <h3 className="text-foreground mb-3 text-lg font-semibold md:text-xl">
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed md:text-base">
                  {method.description}
                </p>
                <p className="text-foreground mt-auto text-base font-medium md:text-lg">
                  {method.details}
                </p>
              </div>
            );
          })}
        </div>

        {footerText && (
          <div className="mt-12 text-center md:mt-12">
            <p className="text-muted-foreground mx-auto max-w-xl text-sm md:text-base">
              {footerText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
