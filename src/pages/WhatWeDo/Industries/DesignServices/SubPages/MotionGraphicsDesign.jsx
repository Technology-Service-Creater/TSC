import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const whyImportant = [
  'Grabs Attention – Moving visuals are more engaging than static images.',
  'Enhances Storytelling – Simplifies complex messages through animation.',
  'Boosts Brand Identity – Adds personality and consistency to digital experiences.',
  'Increases Engagement – Keeps audiences interested across websites, social media, and ads.',
];

const keyElements = [
  {
    title: 'Animation',
    points: [
      'Types of Animation: This includes 2D animation, 3D animation, and kinetic typography (animated text).',
      'Smooth Transitions: Ensure animations are fluid and seamless to create a polished look.',
      'Timing and Pacing: Proper timing and pacing are crucial to make animations feel natural and engaging.',
    ],
  },
  {
    title: 'Storytelling',
    points: [
      'Narrative: Motion graphics should tell a clear and compelling story.',
      'Script and Storyboard: Planning the narrative and visual flow through a script and storyboard is essential before starting the animation process.',
    ],
  },
  {
    title: 'Design Principles',
    points: [
      'Consistency: Maintain consistent design elements such as color schemes, typography, and visual style throughout the animation.',
      "Hierarchy: Use visual hierarchy to guide the viewer's attention to the most important elements.",
      'Contrast: Use contrast to create visual interest and highlight key elements.',
    ],
  },
  {
    title: 'Sound Design',
    points: [
      "Sound Effects: Incorporate sound effects that complement the animation and enhance the viewer's experience.",
      'Background Music: Use background music to set the tone and mood of the motion graphics.',
      'Voiceover: Consider adding a voiceover to explain or narrate the content.',
    ],
  },
  {
    title: 'Software and Tools',
    points: [
      'Adobe After Effects: Industry-standard software for creating and editing motion graphics.',
      'Cinema 4D: Popular for creating 3D motion graphics and animations.',
      'Blender: An open-source 3D creation suite that includes animation capabilities.',
      'Moho: Specialized software for 2D animation and motion graphics.',
    ],
  },
];

const process = [
  {
    title: 'Concept Development',
    points: [
      "Brainstorm ideas and develop a concept that aligns with the project's goals and target audience.",
      'Create a mood board to visualize the look and feel of the motion graphics.',
    ],
  },
  {
    title: 'Scriptwriting',
    points: [
      'Write a script that outlines the narrative and key messages.',
      'Ensure the script is concise and aligns with the visual elements.',
    ],
  },
  {
    title: 'Storyboarding',
    points: [
      'Create a storyboard that maps out each scene and keyframe of the animation.',
      'Include notes on transitions, animations, and visual elements.',
    ],
  },
  {
    title: 'Design and Animation',
    points: [
      'Design the visual elements, including characters, backgrounds, and text.',
      'Animate the elements using the chosen software, paying attention to timing, pacing, and smooth transitions.',
    ],
  },
  {
    title: 'Sound Design and Editing',
    points: [
      'Add sound effects, background music, and voiceovers to enhance the animation.',
      'Edit and refine the animation to ensure it flows smoothly and effectively communicates the message.',
    ],
  },
  {
    title: 'Review and Feedback',
    points: [
      'Review the final animation and gather feedback from stakeholders.',
      'Make any necessary revisions to improve the animation.',
    ],
  },
];

const toHtmlList = arr =>
  `<ul class='list-decimal pl-6 space-y-1'>${arr.map(item => `<li>${item}</li>`).join('')}</ul>`;

const MotionGraphicsDesign = () => (
  <div className="bg-[#F5F8FF]">
    <PageHeroSection
      title="Motion Graphics Design"
      description="Bringing Visuals to Life"
      bgImage="/Images/MotionGraphicsDesign_Hero.jpg"
    />

    <IntroSection
      title="What is Motion Graphics Design?"
      description={
        'Motion graphics design is the art of combining animation, typography, and visual effects to create engaging and dynamic content for digital platforms. It enhances storytelling by adding movement to design elements, making information more compelling and memorable.'
      }
      imageSrc="/Images/MotionGraphicsDesign-1.jpg"
      imageAlt="Motion Graphics Design"
      reverse={false}
    />

    <IntroInfo title="Why is Motion Graphics Important?" description={toHtmlList(whyImportant)} />

    {/* Key Elements Section */}
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Key Elements of Motion Graphics Design
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {keyElements.map(el => (
          <ServiceCard key={el.title} title={el.title} description={toHtmlList(el.points)} />
        ))}
      </div>
    </section>

    {/* Process Section */}
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Process of Creating Motion Graphics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {process.map(el => (
          <ServiceCard key={el.title} title={el.title} description={toHtmlList(el.points)} />
        ))}
      </div>
    </section>

    <div className="mt-8">
      <ContactForm />
    </div>
  </div>
);

export default MotionGraphicsDesign;
