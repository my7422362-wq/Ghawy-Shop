import { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: '1',
    question: 'What sizes do you offer?',
    answer: 'We offer sizes ranging from XS to 3XL. Our sizing is unisex and designed to fit a variety of body types. Check our size guide on each product page for detailed measurements.',
  },
  {
    id: '2',
    question: 'How long does shipping take?',
    answer: 'Domestic orders typically arrive within 3-5 business days. International shipping takes 7-14 business days depending on the destination. Express shipping options are available at checkout.',
  },
  {
    id: '3',
    question: 'Can I return or exchange items?',
    answer: 'Yes! We offer hassle-free returns within 30 days of delivery. Items must be unworn with original tags attached. Exchanges are available for different sizes or colors, subject to availability.',
  },
  {
    id: '4',
    question: 'Are your products sustainable?',
    answer: 'Absolutely. We use eco-friendly materials including organic cotton and recycled polyester. Our production facilities are certified for ethical manufacturing practices.',
  },
  {
    id: '5',
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship worldwide! Shipping costs and delivery times vary by location. All international orders include tracking and are shipped DDU (Delivered Duty Unpaid).',
  },
  {
    id: '6',
    question: 'How do I care for my SR garments?',
    answer: 'For best results, machine wash cold with like colors and hang dry. Avoid bleach and ironing directly on printed designs. Each item comes with specific care instructions on the label.',
  },
];

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-dark-secondary">
      <div className="container-custom mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, reach out to our support team.
          </p>
        </div>

        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="glass-card rounded-xl border-0 px-6 data-[state=open]:border-neon-pink/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-neon-pink transition-colors duration-300 py-5 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-white/60 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:border-neon-pink/50 hover:bg-white/5 transition-all duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
