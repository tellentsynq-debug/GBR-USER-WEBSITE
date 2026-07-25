import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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
          <h1 className="text-3xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                By accessing and using GIG FORCE Management Group's services, you accept and agree to be 
                bound by the terms and provision of this agreement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.
              </p>
              <p>This license shall not allow you to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for commercial purposes or public display</li>
                <li>Attempt to reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>As a user of our platform, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the service only for lawful purposes</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not engage in any activity that could harm our systems or other users</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Service Availability</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We strive to maintain service availability but do not guarantee uninterrupted access. 
                We reserve the right to modify, suspend, or discontinue services at any time.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                GIG FORCE Management Group shall not be liable for any damages arising from the use 
                or inability to use our services, including but not limited to direct, indirect, 
                incidental, punitive, and consequential damages.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Governing Law</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                These terms and conditions are governed by and construed in accordance with the laws 
                of Ontario, Canada, and you irrevocably submit to the exclusive jurisdiction of the 
                courts in that state or location.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Contact Information</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-card p-4 rounded-lg">
                <p>Email: legal@gigforcemanagement.ca</p>
                <p>Phone (Ontario): +1-905-364-4747</p>
                <p>Phone (Alberta): +1-587-430-3038</p>
                <p>Address (Ontario): 2506-10 Park Lawn Rd, Etobicoke, ON M8V 0H9, Canada</p>
                <p>Address (Alberta): PO BOX # 409, 1122 3 St SE Ste 1906, Calgary, AB T2G 0E7, Canada</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;