import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/Introinfo';
import ContactForm from '../../../../../components/common/ContactForm';

const heroImg = '/Images/A_BTestingOptimization_Hero.jpg';
const introImg = '/Images/A_BTestingOptimization-1.jpg';
const proTipsImg = '/Images/A_BTestingOptimization-2.jpg';

export default function ABTestingOptimization() {
  return (
    <div className="bg-[#F5F6FA]">
      <PageHeroSection
        title="A/B Testing Optimization"
        description="Data-Driven Decision Making for Maximum Impact"
        bgImage={heroImg}
      />

      <IntroSection
        imageSrc={introImg}
        title={
          <>
            <b>Make Data-Driven Decisions</b>
          </>
        }
        description={`<strong>What is A/B Testing?</strong><br />A/B testing (or split testing) is a method to compare two versions of something—like a webpage, ad, or email—by changing one element and seeing which version performs better. This helps you optimize for conversions, engagement, or user satisfaction based on real data.`}
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

      {/* How to Run an Effective A/B Test */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <IntroInfo
          title="How to Run an Effective A/B Test"
          description={
            <>
              ✓ <b>Set Your Goal</b> – What&apos;s your priority? More sign-ups, sales, engagement?
              <br />✓ <b>Form a Hypothesis</b> – What change do you believe will improve results?
              <br />✓ <b>Choose One Variable</b> – Keep it simple! Test one element at a time.
              <br />✓ <b>Create Variations</b> – Develop a new version (Version B) to test against
              the original (Version A).
              <br />✓ <b>Segment Your Audience</b> – Ensure both test groups are similar for
              accurate comparisons.
              <br />✓ <b>Run the Test</b> – Expose both versions to users and track performance.
              <br />✓ <b>Analyze Results</b> – Identify which version performs better.
              <br />✓ <b>Implement the Winner</b> – Apply the winning version and continue
              optimizing!
            </>
          }
        />
      </section>

      {/* Pro Tips for Success */}
      <IntroSection
        imageSrc={proTipsImg}
        title={<b>Pro Tips for Success</b>}
        description={
          <>
            ✓ Test long enough to get meaningful data.
            <br />
            ✓ Avoid testing too many elements at once.
            <br />
            ✓ Use A/B testing tools like Google Optimize, Optimizely, or VWO.
            <br />✓ Keep experimenting—continuous improvements lead to big wins!
          </>
        }
        reverse={true}
      />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
