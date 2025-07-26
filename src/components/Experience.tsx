import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Trophy, Users, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Secretary to Drilling Support Unit Supervisor / HSE Focal Support",
      company: "Saudi Aramco (via Contractor)",
      location: "SPARK 6602, Saudi Arabia",
      period: "June 2022 – Present",
      current: true,
      achievements: [
        "Coordinated safe relocation of 28,461 drilling assets with zero incidents",
        "Managed Corporate Environmental Audit and QSI with zero findings",
        "Enhanced coordination between safety, logistics, and supervisory teams",
        "Implemented Aramco's HSE standards across all operational phases"
      ],
      responsibilities: [
        "Provide administrative and operational support to Drilling Support Unit Supervisor",
        "Coordinate with logistics, HSE, and operations teams for safe equipment movement",
        "Implement Aramco's HSE standards and prepare Job Safety Analyses (JSA)",
        "Organize weekly safety meetings and HSE campaigns",
        "Utilize Aramco's Safelife system for safety observations and audits"
      ],
      featured: true
    },
    {
      position: "Safety Advisor (Freelance)",
      company: "Khaksaar Developers (PVT) LTD",
      location: "Islamabad, Pakistan",
      period: "December 2019 – April 2022",
      achievements: [
        "Achieved zero major incidents across multiple construction projects",
        "Successfully led multiple on-site HSE audits",
        "Significantly improved site safety performance"
      ],
      responsibilities: [
        "Developed site-specific HSE policies aligned with Pakistan OSH Act 2018",
        "Conducted risk assessments and Job Hazard Analyses (JHA)",
        "Delivered safety training to workers and subcontractors",
        "Supervised critical construction activities ensuring safety compliance",
        "Investigated incidents and produced detailed reports with root cause analysis"
      ],
      projects: [
        "Boundary Wall Construction – Pakistan Medical & Dental Society",
        "PWD Housing Society Construction Project"
      ]
    },
    {
      position: "Admin Operations",
      company: "Pakistan Overseas Employment Promoters Association (POEPA)",
      location: "Islamabad, Pakistan",
      period: "January 2011 – March 2022",
      achievements: [
        "Managed 4,000+ licensed overseas employment promoters",
        "Successfully organized multiple AGM and election cycles",
        "Enhanced member satisfaction through timely complaint resolution",
        "Partnered with ILO for capacity-building programs"
      ],
      responsibilities: [
        "Led administrative and operational functions for regulatory body",
        "Managed membership lifecycle for 4,000+ promoters",
        "Provided executive support to Secretary General and Central Chairman",
        "Planned high-profile events including AGM and Executive Board Elections",
        "Collaborated with ILO for awareness and training sessions"
      ]
    }
  ];

  const keyProjects = [
    {
      title: "Aramco Drilling Assets Relocation",
      description: "Strategic safety and operational excellence in relocating 28,461 critical drilling equipment items",
      impact: "Zero incidents, Zero findings in Corporate Environmental Audit",
      tools: ["Aramco Safety Standards", "Safelife System", "JSA", "Safety Documentation"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Work Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven track record in health, safety, and environmental management across diverse industries
            </p>
          </div>

          {/* Key Project Highlight */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Featured Project</h3>
            {keyProjects.map((project, index) => (
              <Card key={index} className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary text-primary-foreground">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-3">{project.title}</h4>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Impact:</h5>
                          <p className="text-success-green font-medium">{project.impact}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Tools & Standards:</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, i) => (
                              <Badge key={i} variant="outline" className="text-xs">{tool}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`transition-all duration-300 hover:shadow-lg ${
                  exp.featured ? 'border-l-4 border-l-primary' : ''
                } ${exp.current ? 'bg-primary/5' : ''}`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-full ${
                          exp.current ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          <Building className="h-6 w-6" />
                        </div>
                        {exp.current && (
                          <Badge className="bg-success-green text-white">Current</Badge>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-2">{exp.position}</h3>
                      <p className="text-lg text-primary font-medium mb-2">{exp.company}</p>
                      
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3">
                      {exp.achievements && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-accent" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <Zap className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" />
                          Core Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {exp.projects && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Projects</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.projects.map((project, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">{project}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;