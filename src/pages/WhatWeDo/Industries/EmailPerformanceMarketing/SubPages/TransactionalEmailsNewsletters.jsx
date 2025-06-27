import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import ContactForm from '../../../../../components/common/ContactForm';
import IntroInfo from '../../../../../components/common/Introinfo';

const heroImg = '/Images/TransactionalEmailsNewsletters_Hero.jpg';
const introImg = '/Images/TransactionalEmailsNewsletters-1.jpg';

export default function TransactionalEmailsNewsletters() {
  return (
    <div className="bg-[#F5F6FA]">
      <PageHeroSection
        title="Transactional Emails & Newsletters"
        description="Engaging Users with Every Message"
        bgImage={heroImg}
      />

      <IntroSection
        imageSrc={introImg}
        title={<>What Are Transactional Emails & Newsletters?</>}
        description={
          'Transactional Emails are automated, action-triggered messages sent to users based on their interactions (e.g., order confirmations, password resets, or appointment reminders). Newsletters are scheduled emails designed to engage subscribers with brand updates, promotions, and valuable content.'
        }
        reverse={false}
      />

      {/* Key Elements to Test */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <IntroInfo
          title="Key Elements to Test"
          description={
            <>
              ✓ Website/App: Headlines, images, copy, layout, call-to-action (CTA), forms,
              navigation.
              <br />
              ✓ Marketing Materials: Email subject lines, content, visuals, landing pages, ads.
              <br />✓ Products: Features, pricing, packaging.
            </>
          }
        />
      </section>

      {/* Types of Transactional Emails */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <IntroInfo
          title="Types of Transactional Emails"
          description={
            <>
              ✓ Order Confirmations – Reassure users with purchase details.
              <br />
              ✓ Password Reset – Provide secure and fast access recovery.
              <br />
              ✓ Appointment Reminders – Reduce no-shows and enhance customer service.
              <br />
              ✓ Subscriptions & Signup Confirmations – Onboard users smoothly.
              <br />✓ Payment & Invoice Notifications – Keep transactions transparent.
            </>
          }
        />
      </section>

      {/* Types of Newsletters */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <IntroInfo
          title="Types of Newsletters"
          description={
            <>
              ✓ Brand Updates – Share company news and achievements.
              <br />
              ✓ Educational Content – Offer insights, blogs, and industry trends.
              <br />
              ✓ Promotional Campaigns – Highlight discounts, product launches, and offers.
              <br />
              ✓ Community & Engagement – Showcase customer stories and testimonials.
              <br />✓ Personalized Recommendations – Enhance user experience with tailored content.
            </>
          }
        />
      </section>

      {/* Best Practices for Effective Emails */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <IntroSection
          imageSrc="/Images/TransactionalEmailsNewsletters-2.png"
          title="Best Practices for Effective Emails"
          description={
            <span className="text-sm">
              ✓ <strong>Keep it Clear & Concise</strong> – Get to the point quickly.
              <br />✓ <strong>Use Personalization</strong> – Address recipients by name and tailor
              content.
              <br />✓ <strong>Maintain Brand Consistency</strong> – Use the same tone, colors, and
              visuals.
              <br />✓ <strong>Ensure Mobile Optimization</strong> – Make emails responsive and easy
              to read.
              <br />✓ <strong>Include a Strong Call-to-Action (CTA)</strong> – Guide users to the
              next step.
              <br />✓ <strong>Monitor & Optimize</strong> – Track open rates, clicks, and engagement
              for improvements.
            </span>
          }
          reverse={true}
        />
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
