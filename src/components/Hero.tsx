import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-industrial-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Faisal Pervez
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-accent">
              (iDIP NEBOSH)
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 space-y-2">
            <p className="font-semibold">Occupational Health & Safety Professional</p>
            <p className="text-lg opacity-90">
              NEBOSH Level 6 International Diploma with Credits | Health & Safety Management | 
              Risk, Compliance, Training Human Factors & Hazard identification
            </p>
          </div>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Promoting safer workplaces through global safety standards, continuous improvement & evidence-based practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View My Professional Experience
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50"
            >
              <Download className="mr-2 h-5 w-5" />
              Request for Resume
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold text-accent">28,461</h3>
              <p className="text-sm opacity-90">Critical Equipment Items Relocated</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold text-success-green">Zero</h3>
              <p className="text-sm opacity-90">Incident Record</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold text-safety-yellow">Level 6</h3>
              <p className="text-sm opacity-90">NEBOSH Diploma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;