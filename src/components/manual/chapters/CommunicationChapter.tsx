import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { MessageSquare, Phone, Mail, Users, Clock, CheckCircle, AlertTriangle, FileText } from "lucide-react";

export function CommunicationChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-info to-info/80 p-8 md:p-12 text-info-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <MessageSquare className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Client Communication
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Professional communication techniques for building trust and managing relationships effectively.
          </p>
        </div>
      </div>

      {/* Communication Channels */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Phone className="w-6 h-6 text-primary" />
          Communication Channels
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title="Phone Calls" icon={Phone} variant="highlight">
            <p className="font-semibold text-foreground mb-2">Best for:</p>
            <ul className="space-y-1">
              <li>• Urgent issues requiring immediate response</li>
              <li>• Complex negotiations</li>
              <li>• Building personal relationships</li>
              <li>• Clarifying misunderstandings</li>
            </ul>
          </InfoCard>
          <InfoCard title="Email" icon={Mail} variant="info">
            <p className="font-semibold text-foreground mb-2">Best for:</p>
            <ul className="space-y-1">
              <li>• Documentation and audit trails</li>
              <li>• Detailed information sharing</li>
              <li>• Non-urgent requests</li>
              <li>• Formal confirmations</li>
            </ul>
          </InfoCard>
          <InfoCard title="TMS/Platform" icon={FileText} variant="success">
            <p className="font-semibold text-foreground mb-2">Best for:</p>
            <ul className="space-y-1">
              <li>• Order updates and tracking</li>
              <li>• Status notifications</li>
              <li>• Document exchange</li>
              <li>• Automated communication</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Professional Email Templates */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Mail className="w-6 h-6 text-primary" />
          Professional Email Templates
        </h2>
        
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              Order Confirmation
            </h3>
            <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm">
              <p><strong>Subject:</strong> Order Confirmation - [Reference] - [Route]</p>
              <br />
              <p>Dear [Client Name],</p>
              <br />
              <p>We confirm receipt of your transport order:</p>
              <br />
              <p>• Loading: [Date/Time] at [Address]</p>
              <p>• Delivery: [Date/Time] at [Address]</p>
              <p>• Vehicle: 13.6m curtainsider</p>
              <p>• Rate: €[Amount] all-in</p>
              <br />
              <p>Driver details will follow 24h before loading.</p>
              <br />
              <p>Best regards,</p>
              <p>[Your Name]</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Delay Notification
            </h3>
            <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm">
              <p><strong>Subject:</strong> DELAY NOTICE - [Reference] - New ETA [Time]</p>
              <br />
              <p>Dear [Client Name],</p>
              <br />
              <p>We regret to inform you of a delay on order [Reference].</p>
              <br />
              <p>• Original ETA: [Original Time]</p>
              <p>• New ETA: [New Time]</p>
              <p>• Reason: [Traffic/Breakdown/Weather]</p>
              <p>• Current location: [Location]</p>
              <br />
              <p>We apologize for any inconvenience and will keep you updated.</p>
              <br />
              <p>Best regards,</p>
              <p>[Your Name]</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-info" />
              Rate Quotation
            </h3>
            <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm">
              <p><strong>Subject:</strong> Rate Quotation - [Route] - [Date]</p>
              <br />
              <p>Dear [Client Name],</p>
              <br />
              <p>Thank you for your inquiry. Please find our quotation below:</p>
              <br />
              <p>• Route: [Origin] → [Destination]</p>
              <p>• Vehicle: 13.6m curtainsider, 24t payload</p>
              <p>• Rate: €[Amount]</p>
              <p>• Includes: All tolls, diesel, driver</p>
              <p>• Valid until: [Date]</p>
              <br />
              <p>Waiting time after 2 hours: €35/hour</p>
              <br />
              <p>Please confirm if you wish to proceed.</p>
              <br />
              <p>Best regards,</p>
              <p>[Your Name]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Script Guidelines */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Phone className="w-6 h-6 text-primary" />
          Phone Call Guidelines
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-success">DO</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Introduce yourself and company clearly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>State the purpose of your call immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Take notes during the conversation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Confirm key details before hanging up</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Follow up with written confirmation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-destructive">DON'T</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                  <span>Make promises you cannot keep</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                  <span>Commit to rates without calculation</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                  <span>Speak negatively about competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                  <span>Interrupt the client</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                  <span>Leave voicemails without callback time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Handling Difficult Conversations */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          Handling Difficult Conversations
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Angry Client" icon={AlertTriangle} variant="warning">
            <ol className="space-y-2 list-decimal list-inside">
              <li><strong>Listen</strong> - Let them express frustration</li>
              <li><strong>Acknowledge</strong> - "I understand this is frustrating"</li>
              <li><strong>Apologize</strong> - Even if not your fault</li>
              <li><strong>Solve</strong> - Offer concrete solutions</li>
              <li><strong>Follow up</strong> - Ensure resolution satisfied them</li>
            </ol>
          </InfoCard>
          <InfoCard title="Price Negotiation" icon={Users} variant="info">
            <ol className="space-y-2 list-decimal list-inside">
              <li><strong>Know your floor</strong> - Minimum acceptable rate</li>
              <li><strong>Add value</strong> - Highlight service quality</li>
              <li><strong>Counter-offer</strong> - Never accept first lowball</li>
              <li><strong>Walk away</strong> - If rate is unprofitable</li>
              <li><strong>Document</strong> - Confirm agreed rate in writing</li>
            </ol>
          </InfoCard>
        </div>
      </section>

      {/* Response Time Standards */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          Response Time Standards
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">Request Type</th>
                <th className="p-3 text-left border border-border">Target Response</th>
                <th className="p-3 text-left border border-border">Maximum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border">Urgent spot quote</td>
                <td className="p-3 border border-border text-success font-semibold">15 minutes</td>
                <td className="p-3 border border-border">30 minutes</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">Standard quote request</td>
                <td className="p-3 border border-border text-success font-semibold">1 hour</td>
                <td className="p-3 border border-border">4 hours</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">Status update request</td>
                <td className="p-3 border border-border text-success font-semibold">30 minutes</td>
                <td className="p-3 border border-border">1 hour</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">Complaint/Issue</td>
                <td className="p-3 border border-border text-warning font-semibold">Immediate</td>
                <td className="p-3 border border-border">15 minutes</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">General inquiry</td>
                <td className="p-3 border border-border text-info font-semibold">Same day</td>
                <td className="p-3 border border-border">24 hours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Client Relationship Building */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          Building Long-term Relationships
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Reliability</h3>
              <p className="text-sm text-muted-foreground">Always deliver on promises. If you commit to a time, meet it or communicate early.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-info/10 flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-8 h-8 text-info" />
              </div>
              <h3 className="font-semibold mb-2">Proactive Updates</h3>
              <p className="text-sm text-muted-foreground">Don't wait for clients to ask. Send updates before they need to chase you.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Personal Touch</h3>
              <p className="text-sm text-muted-foreground">Remember names, preferences, and past interactions. Personalization builds loyalty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.communication && (
        <Quiz title="Client Communication Quiz" questions={quizzes.communication} chapterId="communication" />
      )}
    </div>
  );
}
