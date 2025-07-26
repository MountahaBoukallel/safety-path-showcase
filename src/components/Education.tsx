import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "NEBOSH Level 6 International Diploma",
      field: "Occupational Health and Safety Management Professionals",
      institution: "Green World Group – Saudi Arabia",
      accreditation: "accredited by NCFE UK",
      grade: "Credit",
      year: "Feb 2025",
      level: "UK RQF Level 6 (equivalent to a bachelor's degree level qualification)",
      status: "completed",
      featured: true
    },
    {
      degree: "NEBOSH International General Certificate",
      field: "Occupational Health & Safety (IGC)",
      institution: "British Safety Council / Save Fast Dubai",
      grade: "Pass",
      year: "June 2024",
      status: "completed",
      featured: true
    },
    {
      degree: "FA (Fine Arts)",
      field: "Intermediate College Diploma",
      institution: "Pakistan, Islamabad",
      year: "Dec 2019",
      status: "completed"
    },
    {
      degree: "Matriculation/High School Diploma",
      field: "Science",
      institution: "Pakistan Islamabad",
      year: "2006",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Education</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and professional development in occupational health & safety
            </p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className={`transition-all duration-300 hover:shadow-lg ${
                  edu.featured ? 'border-l-4 border-l-primary bg-primary/5' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full ${
                          edu.featured ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          {edu.featured ? <Award className="h-6 w-6" /> : <GraduationCap className="h-6 w-6" />}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                            {edu.featured && (
                              <Badge className="bg-primary text-primary-foreground">
                                Featured
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-lg text-muted-foreground mb-2">{edu.field}</p>
                          
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.institution}</span>
                              {edu.accreditation && (
                                <span className="text-primary">({edu.accreditation})</span>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.year}</span>
                            </div>
                          </div>
                          
                          {edu.level && (
                            <p className="text-sm text-primary mt-2 font-medium">{edu.level}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      {edu.grade && (
                        <Badge 
                          variant={edu.grade === "Credit" ? "default" : "secondary"}
                          className="mb-2"
                        >
                          Grade: {edu.grade}
                        </Badge>
                      )}
                      <div className="text-sm text-muted-foreground">
                        Status: <span className="text-success-green font-medium capitalize">{edu.status}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Professional Development Summary */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-muted-foreground">Qualifications Completed</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">Level 6</div>
                <div className="text-muted-foreground">Highest NEBOSH Achievement</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success-green mb-2">2025</div>
                <div className="text-muted-foreground">Latest Certification</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;