import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  FileSearch, 
  AlertTriangle, 
  BookOpen,
  Users,
  Clock,
  Settings,
  CheckCircle2,
  FileText,
  HardHat,
  Truck,
  Building
} from "lucide-react";

// Import skill images
import safetyTrainingImg from "/lovable-uploads/66834fef-cb86-4870-afa2-416c327ea6c6.png";
import forkliftSafetyImg from "/lovable-uploads/042b9d1f-75ba-4318-ac35-f6f09c4d787b.png";
import logisticsComplianceImg from "/lovable-uploads/a09709c0-965e-4615-9378-6af2eec6928c.png";
import conflictResolutionImg from "/lovable-uploads/9b0738b9-7a5e-4dfd-bf6a-3d265f71c867.png";

const Skills = () => {
  const featuredSkills = [
    {
      title: "Safety Training and Awareness",
      description: "Development and delivery of comprehensive safety training programs for multicultural teams in high-risk industrial environments.",
      image: safetyTrainingImg,
      icon: BookOpen,
      badge: "Multilingual"
    },
    {
      title: "Safe Operation of Forklifts",
      description: "Expert oversight of forklift operations, equipment inspections, and lifting equipment compliance in warehouse environments.",
      image: forkliftSafetyImg,
      icon: HardHat,
      badge: "Certified"
    },
    {
      title: "Logistics Safety and Drivers Compliance",
      description: "Implementation of safety protocols for truck drivers and logistics operations in accordance with Aramco standards.",
      image: logisticsComplianceImg,
      icon: Truck,
      badge: "Aramco Certified"
    },
    {
      title: "Conflict Resolution",
      description: "Professional mediation and conflict resolution skills for maintaining workplace harmony and safety compliance.",
      image: conflictResolutionImg,
      icon: Users,
      badge: "Core Skill"
    }
  ];

  const additionalSkills = [
    { icon: Shield, title: "Confined Space Awareness (Aramco)", category: "Safety" },
    { icon: FileText, title: "Work Permit (Aramco)", category: "Compliance" },
    { icon: AlertTriangle, title: "Fire safety Awareness (Aramco)", category: "Emergency" },
    { icon: HardHat, title: "Hydrogen Sulfide Awareness for Drilling Operations (Aramco)", category: "Hazmat" },
    { icon: FileSearch, title: "Job hazard Analysis JHA (Aramco)", category: "Assessment" },
    { icon: Building, title: "Injury Reporting & Investigation (Aramco)", category: "Investigation" },
    { icon: Users, title: "Floor Warden (Aramco)", category: "Emergency" },
    { icon: BookOpen, title: "Safety Handbook I Emergency Response (Aramco)", category: "Emergency" },
    { icon: Settings, title: "Safety Management System (Aramco)", category: "Management" },
    { icon: CheckCircle2, title: "Environmental Management System EMS (Aramco)", category: "Environmental" },
    { icon: Clock, title: "Office Safety Awareness (Aramco)", category: "Workplace" },
    { icon: Truck, title: "Supply Chain Code of Conduct (Aramco)", category: "Ethics" },
    { icon: Shield, title: "Ethics and Compliance for Upstream (Aramco)", category: "Ethics" }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Core Skills</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized expertise in occupational health & safety with internationally recognized qualifications
            </p>
          </div>

          {/* Featured Skills with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {featuredSkills.map((skill, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={skill.image} 
                    alt={skill.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {skill.badge}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <skill.icon className="h-8 w-8" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Aramco Mandatory Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Aramco Mandatory Certification</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {additionalSkills.map((skill, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <skill.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {skill.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Summary */}
          <div className="mt-16 text-center">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Key Certifications</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">IOSH Managing Safely</h4>
                    <p className="opacity-90">Institution of Occupational Safety and Health</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">OSHA 30 Hours</h4>
                    <p className="opacity-90">General Industry safety standards</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">IELTS</h4>
                    <p className="opacity-90">International English Language Testing System - Band 6.5</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;