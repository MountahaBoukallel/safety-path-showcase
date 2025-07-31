import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Download,
  MessageCircle,
  Calendar,
  Globe
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+966 54 0566931",
      href: "tel:+966540566931"
    },
    {
      icon: Mail,
      label: "Email",
      value: "fayselabbasiisb@gmail.com",
      href: "mailto:fayselabbasiisb@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/faisalabbasiisb",
      href: "https://linkedin.com/in/faisalabbasiisb"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Khobar, Kingdom of Saudi Arabia",
      href: null
    }
  ];

  const languages = [
    { language: "English", level: "Professional" },
    { language: "Arabic", level: "Conversational" },
    { language: "Urdu", level: "Native" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Contact Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to enhance your organization's safety culture? Let's discuss how I can contribute to your HSE objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">Get In Touch</h3>
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <div key={index} className="flex items-center gap-4 group">
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          <contact.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          {contact.href ? (
                            <a 
                              href={contact.href}
                              className="text-foreground hover:text-primary transition-colors duration-300"
                              target={contact.href.startsWith('http') ? '_blank' : undefined}
                              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Languages
                  </h3>
                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-foreground">{lang.language}</span>
                        <Badge variant="outline" className="text-xs">
                          {lang.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
                  
                  <form 
                    className="space-y-6"
                    action="mailto:fayselabbasiisb@gmail.com"
                    method="post"
                    encType="text/plain"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input name="name" placeholder="Your full name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input name="email" type="email" placeholder="your.email@company.com" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company/Organization
                        </label>
                        <Input name="company" placeholder="Your company name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input name="phone" placeholder="+966 XX XXX XXXX" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input name="subject" placeholder="Regarding HSE consultation..." required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea 
                        name="message"
                        placeholder="Please describe your HSE requirements, project details, or consultation needs..."
                        rows={6}
                        required 
                      />
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Risk Assessment", "Safety Audits", "Compliance Management", 
                          "Emergency Response", "Safety Training", "Incident Investigation",
                          "Aramco Standards", "NEBOSH Training"
                        ].map((expertise, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {expertise}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Availability Notice */}
          <div className="mt-12 text-center">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Current Availability</h3>
                <p className="opacity-90">
                  Currently employed with Saudi Aramco projects. Available for consultation and freelance HSE advisory services.
                  Response time: Within 24 hours for professional inquiries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;