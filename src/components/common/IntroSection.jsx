import React from 'react';

function IntroSection({
  // Support both naming conventions
  IntroSectionImage,
  IntroSectionTitle,
  IntroSectionDescription,

  // New prop names
  imageSrc,
  title,
  description,
  imageAlt,
  reverse = false,
}) {
  // Use new props if available, fall back to old naming convention
  const image = imageSrc || IntroSectionImage;
  const sectionTitle = title || IntroSectionTitle;
  const sectionDescription = description || IntroSectionDescription;

  return (
    <section className="w-full relative my-8 md:my-12 lg:my-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'linear-gradient(96.32deg, rgba(164, 104, 218, 0.1) 0%, rgba(20, 155, 245, 0.2) 100%)',
          }}
        />

        {/* Content container */}
        <div
          className={`relative z-10 flex flex-col ${
            reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } min-h-[300px] lg:min-h-400px]`}
        >
          {/* Text content */}
          <div className="flex-1 flex flex-col justify-center p-6 md:p-8 lg:p-12 space-y-4 md:space-y-6">
            {sectionTitle && (
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] text-[#181A1B] leading-tight">
                {sectionTitle}
              </h2>
            )}
            {sectionDescription &&
              (typeof sectionDescription === 'string' ? (
                <p
                  className="text-lg sm:text-lg md:text-xl lg:text-2xl font-['Montserrat'] text-[#181A1B] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sectionDescription }}
                />
              ) : (
                <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-['Montserrat'] text-[#181A1B] leading-relaxed">
                  {sectionDescription}
                </p>
              ))}
          </div>

          {/* Image container */}
          <div className="flex-1 relative flex items-stretch">
            {image && (
              <img
                src={image}
                alt={imageAlt || 'Section image'}
                className="w-full h-[30em] object-cover object-center rounded-2xl"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
