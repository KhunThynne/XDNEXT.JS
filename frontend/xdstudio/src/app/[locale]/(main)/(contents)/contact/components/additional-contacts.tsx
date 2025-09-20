import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function AdditionalContacts() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@company.com",
      href: "mailto:hello@company.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Business St, City, State 12345",
      href: "https://maps.google.com/?q=123+Business+St",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri: 9AM-6PM",
      href: null,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-card-foreground text-2xl font-black">
          Other Ways to Reach Us
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;

          return (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Icon className="text-primary h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-card-foreground font-medium">
                  {method.label}
                </p>
                {method.href ? (
                  <Button
                    variant="link"
                    className="text-muted-foreground hover:text-primary h-auto p-0"
                    asChild
                  >
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.value}
                    </a>
                  </Button>
                ) : (
                  <p className="text-muted-foreground">{method.value}</p>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
