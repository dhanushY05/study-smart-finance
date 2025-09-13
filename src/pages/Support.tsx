import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  MessageCircle, 
  Mail,
  Phone,
  Clock,
  HelpCircle,
  Book,
  Video,
  Download,
  ExternalLink,
  CheckCircle,
  Star
} from "lucide-react"

const faqs = [
  {
    question: "How does AI categorization work?",
    answer: "Our AI analyzes transaction descriptions, merchant names, and spending patterns to automatically categorize your expenses. It learns from your corrections and becomes more accurate over time. The system currently has 94% accuracy and supports 15+ expense categories."
  },
  {
    question: "Can I set custom budget alerts?",
    answer: "Yes! You can create custom budget alerts for any category or total spending. Set percentage thresholds (like 80% of budget used) or fixed amounts. Alerts can be delivered via email, push notifications, or in-app notifications."
  },
  {
    question: "How accurate are spending predictions?",
    answer: "Our predictive models analyze your historical spending patterns, seasonal trends, and upcoming bills to forecast future expenses. Accuracy typically ranges from 85-95% for 30-day predictions, with higher accuracy for users with more transaction history."
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-level encryption (256-bit SSL), never store your banking passwords, and are read-only access. Your data is encrypted both in transit and at rest. We're also compliant with financial data protection regulations."
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer: "Yes, you can connect multiple bank accounts, credit cards, and digital wallets. The app will consolidate all transactions into a unified view while keeping individual account balances separate for better tracking."
  },
  {
    question: "What if AI categorizes something wrong?",
    answer: "Simply click on any transaction and change the category. The AI learns from your corrections and will remember similar merchants for future transactions. You can also set rules for specific merchants to always use certain categories."
  },
  {
    question: "How do I set up savings goals?",
    answer: "Go to the Goals section, click 'Create New Goal', set your target amount and deadline. The app will automatically calculate required monthly savings and provide AI-powered suggestions to help you reach your goals faster."
  },
  {
    question: "Can I export my financial data?",
    answer: "Yes, you can export your transaction history, spending reports, and goal progress as CSV or PDF files. This is useful for tax purposes, sharing with financial advisors, or personal record keeping."
  }
]

const resources = [
  {
    title: "Getting Started Guide",
    description: "Complete walkthrough of all features",
    type: "guide",
    icon: Book,
    link: "#"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video explanations",
    type: "video",
    icon: Video,
    link: "#"
  },
  {
    title: "Student Budget Template",
    description: "Free Excel template for budget planning",
    type: "download",
    icon: Download,
    link: "#"
  },
  {
    title: "Financial Literacy Course", 
    description: "Free online course for students",
    type: "external",
    icon: ExternalLink,
    link: "#"
  }
]

const testimonials = [
  {
    name: "Priya S.",
    university: "IIT Delhi",
    text: "This app helped me save ₹8,000 in my first month! The AI predictions are incredibly accurate.",
    rating: 5
  },
  {
    name: "Rahul K.",
    university: "DU",
    text: "Finally, a finance app that understands student life. The goal tracking feature is amazing.",
    rating: 5
  },
  {
    name: "Ananya M.",
    university: "Manipal",
    text: "Budget alerts saved me from overspending during fest season. Highly recommended!",
    rating: 5
  }
]

export default function Support() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get help with your Student Finance Manager. Find answers to common questions, 
          access resources, or contact our support team.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card hover-lift">
          <CardContent className="p-6 text-center">
            <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Chat with our support team for instant help
            </p>
            <Button variant="hero" className="w-full">
              Start Chat
            </Button>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift">
          <CardContent className="p-6 text-center">
            <div className="p-4 bg-success/10 rounded-lg w-fit mx-auto mb-4">
              <Mail className="h-8 w-8 text-success" />
            </div>
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Send us your questions via email
            </p>
            <Button variant="outline" className="w-full">
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift">
          <CardContent className="p-6 text-center">
            <div className="p-4 bg-warning/10 rounded-lg w-fit mx-auto mb-4">
              <Phone className="h-8 w-8 text-warning" />
            </div>
            <h3 className="font-semibold mb-2">Phone Support</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Call us during business hours
            </p>
            <Button variant="outline" className="w-full">
              +91 80000-12345
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Support Hours */}
      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 justify-center">
            <Clock className="h-5 w-5 text-primary" />
            <div className="text-center">
              <p className="font-medium">Support Hours</p>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 8:00 PM IST | Saturday: 10:00 AM - 6:00 PM IST
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="What can we help you with?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Describe your issue or question in detail..."
                rows={6}
              />
            </div>
            <Button type="submit" variant="hero" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Resources */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5" />
              Helpful Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <resource.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Access
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              What Students Say
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4 rounded-lg border border-border/50 bg-card/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{testimonial.name}</span>
                    <span className="text-xs text-muted-foreground">• {testimonial.university}</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}