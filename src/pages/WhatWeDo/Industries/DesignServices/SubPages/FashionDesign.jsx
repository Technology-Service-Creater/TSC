import React from 'react';
import PageHeroSection from '../../../../../components/common/PageHeroSection';
import IntroSection from '../../../../../components/common/IntroSection';
import IntroInfo from '../../../../../components/common/IntroInfo';
import ServiceCard from '../../../../../components/common/ServiceCard';
import ContactForm from '../../../../../components/common/ContactForm';

const whyImportant = [
  'Self-Expression – Reflects personality, culture, and identity.',
  'Trendsetting – Influences global fashion movements and consumer preferences.',
  'Sustainability – Advances eco-friendly materials and ethical production.',
  'Economic Impact – Drives the global fashion and retail industry.',
];

const keyAspects = [
  {
    title: 'Trend Analysis',
    points: [
      'Research: Stay updated with current fashion trends, consumer preferences, and industry developments.',
      'Inspiration: Draw inspiration from various sources, including art, culture, nature, and history.',
    ],
  },
  {
    title: 'Sketching and Illustration',
    points: [
      'Concept Sketches: Create initial sketches to visualize design ideas.',
      'Detailed Illustrations: Develop detailed illustrations that include precise measurements, fabric choices, and colour schemes.',
    ],
  },
  {
    title: 'Fabric Selection',
    points: [
      'Material Knowledge: Understand the properties and characteristics of different fabrics.',
      'Suitability: Choose fabrics that complement the design and are suitable for the intended use of the garment.',
    ],
  },
  {
    title: 'Pattern Making',
    points: [
      'Drafting Patterns: Create patterns based on the design sketches and measurements.',
      'Draping: Use draping techniques to shape fabric directly on a dress form to create the pattern.',
    ],
  },
  {
    title: 'Prototyping and Sample Making',
    points: [
      'Sample Creation: Produce sample garments to test the design and fit.',
      'Adjustments: Make necessary adjustments and refinements to the design based on the sample.',
    ],
  },
  {
    title: 'Production',
    points: [
      'Manufacturing: Work with manufacturers to produce the final garments in large quantities.',
      'Quality Control: Ensure that each piece meets industry standards before it reaches the market.',
    ],
  },
];

const process = [
  {
    title: 'Inspiration and Concept Development',
    points: [
      "Brainstorm ideas and develop a concept that aligns with the project's goals and target audience.",
      'Create a mood board to visualize the look and feel of the motion graphics.',
    ],
  },
  {
    title: 'Design and Sketching',
    points: [
      'Write a script that outlines the narrative and key messages.',
      'Ensure the script is concise and aligns with the visual elements.',
    ],
  },
  {
    title: 'Fabric and Material Selection',
    points: [
      'Create a storyboard that maps out each scene and keyframe of the animation.',
      'Include notes on transitions, animations, and visual elements.',
    ],
  },
  {
    title: 'Pattern Making and Draping',
    points: [
      'Design the visual elements, including characters, backgrounds, and text.',
      'Animate the elements using the chosen software, paying attention to timing, pacing, and smooth transitions.',
    ],
  },
  {
    title: 'Sample Creation and Fitting',
    points: [
      'Add sound effects, background music, and voiceovers to enhance the animation.',
      'Edit and refine the animation to ensure it flows smoothly and effectively communicates the message.',
    ],
  },
  {
    title: 'Final Production',
    points: [
      'Review the final animation and gather feedback from stakeholders.',
      'Make any necessary revisions to improve the animation.',
    ],
  },
];

const toHtmlList = arr =>
  `<ul class='list-decimal pl-6 space-y-1'>${arr.map(item => `<li>${item}</li>`).join('')}</ul>`;

const FashionDesign = () => (
  <div className="bg-[#F5F8FF]">
    <PageHeroSection
      title="Fashion Design"
      description="Where Creativity Meets Functionality"
      bgImage="/Images/FashionDesign_Hero.jpg"
    />

    <IntroSection
      title="What is Fashion Design?"
      description={
        'Fashion design is the art of creating clothing, accessories, and footwear that blend aesthetics, functionality, and cultural influences. It involves innovation in textiles, colors, and silhouettes to shape personal style and industry trends.'
      }
      imageSrc="/Images/FashionDesign-1.jpg"
      imageAlt="Fashion Design"
      reverse={false}
    />

    <IntroInfo title="Why is Fashion Design Important?" description={toHtmlList(whyImportant)} />

    {/* Key Aspects Section */}
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Key Aspects of Fashion Design
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {keyAspects.map(el => (
          <ServiceCard key={el.title} title={el.title} description={toHtmlList(el.points)} />
        ))}
      </div>
    </section>

    {/* Process Section */}
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins']">
        Fashion Design Process
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

export default FashionDesign;
