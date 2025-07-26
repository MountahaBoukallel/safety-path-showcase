import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingDown } from "lucide-react";
import incidentChartImg from "@/assets/incident-reduction-chart.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Logistics Safety & Driver Compliance – Aramco Facility",
      location: "Saudi Aramco – Drilling Material Logistics Support (Eastern Province)",
      scope: "Oil and Gas Supply Chain (Drilling Materials)",
      image: incidentChartImg,
      achievements: [
        "Supported the compilation and implementation of safety instructions for truck drivers entering the SPARK Drilling Industrial Facility, in accordance with Saudi Aramco's safety policies and guidelines.",
        "Contributed to multilingual communication of site-specific rules covering PPE, vehicle safety, restricted zones, loading/unloading, and emergency procedures.",
        "Assisted with the enforcement of rules around engine shut-off, reverse alarms, speed control (25 km/h), and hazard awareness at the tool house zone.",
        "Participated in site walkthroughs and inspections to verify driver compliance with Aramco regulations.",
        "Helped facilitate safety toolbox talks and briefings related to driver behavior, equipment maneuvering, and materials handling in high-risk zones."
      ],
      badge: "Incident Reduction",
      metrics: "8 to 2 incidents per 1000 operations"
    },
    {
      title: "Safe Operation of Forklifts & Lifting Compliance – Aramco Facility",
      location: "Saudi Aramco – Drilling Material Logistics Support (Eastern Province)",
      scope: "Forklift Safety | Lifting Equipment | Warehouse Operations",
      achievements: [
        "Supported the safe operation of forklifts within drilling material yards and warehouse environments.",
        "Conducted routine forklift inspections to ensure compliance with operational safety standards.",
        "Maintained and updated the Lifting Equipment Register, tracking equipment status and inspection dates.",
        "Identified potential hazards and risks associated with forklift movements, narrow path navigation, stacking procedures, and pedestrian interaction zones.",
        "Reported unsafe behaviors and recommended corrective actions during field observations.",
        "Promoted awareness of proper load handling, visibility checks, and safe turning practices through toolbox talks and supervisor coordination."
      ],
      badge: "Zero Incidents",
      metrics: "100% Compliance Rate"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">My Health & Safety Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world safety projects demonstrating measurable impact and operational excellence
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Image */}
                  {index === 0 && (
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img 
                        src={project.image} 
                        alt="Incident Rate Reduction Chart"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/10"></div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-primary">
                          <TrendingDown className="mr-1 h-3 w-3" />
                          {project.badge}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium bg-black/50 px-2 py-1 rounded">
                          {project.metrics}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Project Content */}
                  <CardContent className={`p-8 ${index === 0 ? '' : 'md:col-span-2'}`}>
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                        {index !== 0 && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {project.badge}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span className="text-sm font-medium">Scope: {project.scope}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Key Achievements & Responsibilities</h4>
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {index !== 0 && (
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                        <p className="text-sm font-medium text-primary">{project.metrics}</p>
                      </div>
                    )}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Strategic Project Summary */}
          <div className="mt-16">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-center">Strategic Safety and Operational Excellence</h3>
                <p className="text-center opacity-90 mb-6">
                  As Secretary to the Drilling Support Unit Supervisor, I played a pivotal role in the seamless execution 
                  of high-stakes projects involving critical drilling equipment operations at Saudi Aramco's SPARK 6602 facility.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">28,461 Items</h4>
                    <p className="opacity-90">Successfully relocated drilling equipment with zero incidents</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Zero Incidents</h4>
                    <p className="opacity-90">Maintained perfect safety record throughout operations</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Aramco Standards</h4>
                    <p className="opacity-90">Full compliance with stringent safety protocols</p>
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

export default Projects;