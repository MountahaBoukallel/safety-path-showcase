import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Your path into safety?</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a qualified Occupational Health and Safety professional with internationally recognized credentials, 
                  including the <strong className="text-foreground">NEBOSH Level 6 International Diploma (with credits)</strong>. 
                  I specialize in occupational hazard identification & risk management within oil & gas drilling material 
                  logistics with direct experience working in projects associated with Saudi Aramco.
                </p>
                
                <p>
                  My core strengths include hazard identification, ergonomic risk assessment, safety reporting systems, 
                  and fostering a culture of proactive compliance. I've contributed to HSE Inspections & improvements 
                  across high-risk supply chain and industrial operations at Saudi Aramco Industrial facility.
                </p>
                
                <p>
                  This portfolio highlights my practical field experience, my area of specialization, safety-related 
                  projects, and the practical tools I use to support efficient and safer operations. I am continually 
                  advancing my career academically and practically to stay aligned with global HSE standards and to 
                  support organizations in building stronger safety cultures.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Professional Focus</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Oil & Gas Drilling Material Logistics
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Saudi Aramco Standards & Compliance
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Risk Management & Hazard Identification
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Safety Culture Development
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Current Role</h4>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Saudi Aramco (via Contractor)</strong><br />
                    Secretary to Drilling Support Unit Supervisor / HSE Focal Support<br />
                    <span className="text-sm text-primary">SPARK 6602, Saudi Arabia | June 2022 – Present</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;