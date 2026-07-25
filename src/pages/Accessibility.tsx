import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-background circuit-bg animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-foreground mb-4">Accessibility Statement</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-4">Our Commitment</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                GIG FORCE Management Group is committed to ensuring digital accessibility for all users, 
                including individuals with disabilities. We are continually improving the user experience 
                for everyone and applying the relevant accessibility standards.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Conformance Status</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Web Content Accessibility Guidelines (WCAG) define requirements for designers and 
                developers to improve accessibility for people with disabilities. It defines three levels 
                of conformance: Level A, Level AA, and Level AAA.
              </p>
              <p>
                Our website is partially conformant with WCAG 2.1 level AA. "Partially conformant" means 
                that some parts of the content do not fully conform to the accessibility standard.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Accessibility Features</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Our website includes the following accessibility features:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keyboard navigation support</li>
                <li>Screen reader compatibility</li>
                <li>High contrast color schemes</li>
                <li>Descriptive alt text for images</li>
                <li>Clear heading structure</li>
                <li>Focus indicators for interactive elements</li>
                <li>Resizable text up to 200% without loss of functionality</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Known Issues</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We are aware of some accessibility issues and are working to address them:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Some third-party embedded content may not be fully accessible</li>
                <li>Certain interactive elements may require improvements for screen reader users</li>
                <li>Some color contrast ratios may not meet AAA standards</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Feedback and Contact</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We welcome your feedback on the accessibility of our website. Please let us know if you 
                encounter accessibility barriers:
              </p>
              <div className="bg-card p-4 rounded-lg">
                <p>Email: accessibility@gigforcemanagement.ca</p>
                <p>Phone (Ontario): +1-905-364-4747</p>
                <p>Phone (Alberta): +1-587-430-3038</p>
                <p>Address (Ontario): 2506-10 Park Lawn Rd, Etobicoke, ON M8V 0H9, Canada</p>
                <p>Address (Alberta): PO BOX # 409, 1122 3 St SE Ste 1906, Calgary, AB T2G 0E7, Canada</p>
              </div>
              <p>
                We try to respond to accessibility feedback within 5 business days.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Technical Specifications</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Accessibility of our website relies on the following technologies to work with the 
                particular combination of web browser and any assistive technologies or plugins installed 
                on your computer:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>HTML</li>
                <li>WAI-ARIA</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <p>
                These technologies are relied upon for conformance with the accessibility standards used.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;