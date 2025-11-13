const SectionInnovate = () => {
  const img = [
    '/Images/Container.png',
    '/Images/Container-1.png',
    '/Images/Container-2.png',
    '/Images/Container-3.png',
    '/Images/Container-4.png',
    '/Images/Container-5.png',
    '/Images/Container-6.png',
    '/Images/Container-7.png',
    '/Images/Container-8.png',
    '/Images/Container-9.png',
  ];
  const duplicatedIcons = [...img, ...img];
  return (
    <div className="bg-white">
      <div className="">
        <div className="pt-16 px-6 sm:px-8 lg:px-16 text-center max-w-7xl mx-auto mb-12 lg:mb-16">
          <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl mb-4">
            Innovate
          </div>
          <div className="font-[Poppins] font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-6 leading-tight">
            Transforming Ideas into <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent">
              Innovative Solutions
            </span>
          </div>
          <div className="font-[Montserrat] font-normal text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team brings unparalleled expertise and dedication to every project. We prioritize
            quality and ongoing support to ensure your success.
          </div>
        </div>

        {/* carousel */}
        <div className="w-full overflow-hidden pb-10">
          <div className="flex animate-slide hover:[animation-play-state:paused]">
            {duplicatedIcons.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center transition-all duration-500 
                   hover:scale-110 hover:grayscale-0"
              >
                <img src={logo} alt={logo} className="h-[29em] w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Correct Tailwind-compatible keyframes – NO <style jsx> needed */}
        <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 40s linear infinite;
        }
      `}</style>
      </div>
    </div>
  );
};

export default SectionInnovate;
