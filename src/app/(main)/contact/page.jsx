import BestTimeToVisit from '@/components/best-time-to-visit';
import ContactForm from '@/components/contact-form';
import ContactInfo from '@/components/contact-info';
import FrequentlyAskedQuestions from '@/components/frequently-asked-questions';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions about our packages? Want to customize your trip? We're here to help!
            </p>
          </div>
          <ContactInfo />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <div className="space-y-8">
              <FrequentlyAskedQuestions />
              <BestTimeToVisit />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
