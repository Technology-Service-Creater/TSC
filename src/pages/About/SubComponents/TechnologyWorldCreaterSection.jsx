const TechnologyWorldCreaterSection = () => {
  return (
    <div className=" text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-['Poppins'] leading-tight mb-6">
              <img src="/Images/TWC.png" className="" alt="" />
            </h2>
            <p className="text-gray-300 text-sm font-normal font-['Montserrat'] leading-relaxed mb-4">
              Empowering Innovation Beyond Limits We are not just a tech company. We are a platform
              for building the future.
            </p>

            <p className="text-gray-300 text-sm font-normal font-['Montserrat'] leading-relaxed">
              TWC is the visionary force behind a family of next-gen tech companies focused on
              transforming traditional sectors through innovation, design, and digital intelligence.
              From agriculture to property, services to education — we build impact-first tech
              solutions that uplift industries and empower communities.
            </p>
            <button
              className="mt-8 flex items-center justify-center px-10 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              onClick={() => window.open('https://technologyworldcreater.com/')}
            >
              Explore More <span className="ml-2">→</span>
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <img src="/Images/team.png" alt="TSC Team" className="w-full h-auto max-w-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyWorldCreaterSection;
