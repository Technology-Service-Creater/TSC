import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';
import IntroInfo from '../../../../../components/common/IntroInfo';

const heroImg = '/Images/IndirectTaxes_Hero.jpg';
const introImg = '/Images/IndirectTaxes-1.jpg';

const vatCards = [
  {
    title: 'How It Works',
    listItems: [
      'Input Tax: VAT paid on purchases.',
      'Output Tax: VAT collected from customers.',
      'VAT Payable/Refundable: Difference between output and input tax determines the amount payable or refundable.',
    ],
  },
  {
    title: 'Advantages',
    listItems: [
      'Transparent tax structure with a clear audit trail.',
      'Broad application across goods and services.',
      'Significant revenue source for governments.',
    ],
  },
  {
    title: 'Challenges',
    listItems: [
      'Complex compliance and record-keeping requirements.',
      'Potential cascading effect if not implemented correctly.',
    ],
  },
];

const gstCards = [
  {
    title: 'How It Works',
    listItems: [
      'Central & State GST: CGST & SGST apply to intra-state transactions, while IGST applies to inter-state transactions.',
      'Input Tax Credit: Offsets GST paid on purchases to reduce tax burden.',
    ],
  },
  {
    title: 'Benefits',
    listItems: [
      'Eliminates cascading tax effect with seamless input tax credit.',
      'Simplifies the tax structure by replacing multiple indirect taxes.',
      'Enhances transparency and accountability in the tax system.',
    ],
  },
  {
    title: 'Challenges',
    listItems: [
      'Complex transition and compliance requirements, especially for small businesses.',
      'Requires businesses to adopt new technology for compliance.',
    ],
  },
];

const impactList = [
  'Cash Flow Management: Businesses must strategically manage VAT and GST payments to optimize cash flow.',
  'Pricing Strategies: Companies should factor in tax implications when setting prices to remain competitive.',
  'Administrative Costs: Compliance leads to increased operational costs due to investment in tax management systems.',
  'Cross-Border Transactions: Understanding VAT and GST regulations across different jurisdictions is crucial for global businesses.',
];

function IndirectTaxes() {
  return (
    <div className="bg-white">
      <PageHeroSection
        title="Indirect Taxes"
        description="Contract management is the structured process of handling agreements from inception to execution and eventual termination. Effective contract management ensures compliance, minimizes risks, and maximizes operational and financial performance."
        bgImage={heroImg}
      />

      {/* Intro Section */}
      <IntroSection
        title="Understanding Indirect Taxes"
        description="Indirect taxes are taxes levied on goods and services rather than on income or profits. These taxes are collected by intermediaries, such as manufacturers or retailers, and passed on to consumers as part of the product's price. Common examples include Goods and Services Tax (GST), excise duty, customs duty, and sales tax."
        imageSrc={introImg}
        imageAlt="Indirect Taxes"
      />

      {/* VAT Section */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 font-bold text-center font-['Poppins']">
          Value Added Tax (VAT)
        </h2>
        <p className="text-center mb-8 font-['Montserrat']">
          VAT is a tax on the value added at each stage of production and distribution.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {vatCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} listItems={card.listItems} />
          ))}
        </div>
      </section>

      {/* GST Section */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 font-bold text-center font-['Poppins']">
          Goods and Services Tax (GST)
        </h2>
        <p className="text-center mb-8 font-['Montserrat']">
          GST is a multi-stage, destination-based tax that replaces multiple indirect taxes.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {gstCards.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} listItems={card.listItems} />
          ))}
        </div>
      </section>

      {/* Impact on Businesses */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 font-bold mt-10 text-center font-['Poppins']">
        Goods and Services Tax (GST)
      </h2>
      <IntroInfo
        title={
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 font-['Poppins'] font-bold">
            Impact on Businesses
          </span>
        }
        description={
          <ul className="list-disc pl-5 space-y-2 text-base font-['Montserrat']">
            {impactList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        }
      />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}

export default IndirectTaxes;
