import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, User, Briefcase } from "lucide-react";

const References = () => {
  const references = [
    {
      name: "Otaibi Mohammed M",
      role: "Supervisor Toolhouse Sply SVCS Drilling Rig Support & Logistics Department",
      organization: "Saudi Aramco",
      location: "Saudi Arabia",
      type: "Direct Supervisor"
    },
    {
      name: "Varun Vignesh",
      role: "Senior Consultant and Lead Trainer",
      organization: "Green world international Training Center",
      location: "Dubai",
      type: "Professional Reference"
    }
  ];

  return (
    <section id="references" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Professional References</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional contacts who can provide insights into my work performance and capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {references.map((reference, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{reference.name}</h3>
                      <Badge variant="secondary" className="mb-3">
                        {reference.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Briefcase className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{reference.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <p className="text-muted-foreground">{reference.organization}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <p className="text-muted-foreground">{reference.location}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      References available upon request for formal verification of work experience and professional capabilities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Additional professional references and detailed work verification documents are available upon request. 
                  Please feel free to contact me for any specific reference requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;