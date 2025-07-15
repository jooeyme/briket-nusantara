import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What product do you export?",
    answer: "We export premium coconut shell briquettes, mainly used for shisha/hookah.",
    value: "item-1",
  },
  {
    question: "Can I visit the factory before placing an order?",
    answer:
      "Absolutely, We welcome factory visits for serious buyers who wish to inspect the production process and quality firsthand. Our partner factories are located in Indonesia, Please contact us in advance to arrange the schedule.",
    value: "item-2",
  },
  {
    question:
      "Do you offer product samples?",
    answer:
      "Yes, samples are available upon request. Product samples are free, but shipping costs must be covered by the buyer",
    value: "item-3",
  },
  {
    question: "Can you customize packaging or private labeling?",
    answer: "Yes. We support OEM and private label services. Packaging can be customized based on buyer requirements.",
    value: "item-4",
  },
  {
    question:
      "What is your minimum order quantity (MOQ)?",
    answer:
      "The MOQ is generally one 20ft container, However, we're open to negotiation for first-time buyers.",
    value: "item-5",
  },
  {
    question:
      "What are your payment terms?",
    answer:
      "We accept payments with a 50% deposit and 50% balance against shipping documents. Terms can be discussed further during negotiation.",
    value: "item-6",
  },
  {
    question:
      "Do you own the production facility?",
    answer:
      "We collaborate with a network of certified factories that have a strong export track record. This allows us to offer flexible production capacity, consistent quality, and competitive pricing tailored to each client's needs.",
    value: "item-7",
  },
  {
    question:
      "How do you ensure the quality of your briquettes?",
    answer:
      "We apply multi-step quality control, use third-party lab testing when required, and maintain transparent communication throughout production and shipping.",
    value: "item-8",
  },
  {
    question:
      "What makes your briquettes better than others?",
    answer:
    
      `Our briquettes are:
      1. Made from 100% natural coconut shell
      2. Long-burning (90-120 Minutes)
      3. Odorless and smokeless
      4. Low ash content (<2.5%).
      They're lab-tested, cleanly packed, and suitable for both shisha and BBQ use.
      `,
    value: "item-9",
  },
  {
    question:
      "Can you help with shipping and documentation?",
    answer:
      "Yes, we assist with export documents, logistics coordination, and customs compliance to ensure a smooth transaction process.",
    value: "item-10",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
