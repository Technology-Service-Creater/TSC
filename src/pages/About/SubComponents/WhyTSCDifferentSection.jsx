const WhyTSCDifferentSection = () => {
  return (
    <div className="bg-[#1A1A1A] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 flex items-center text-sm font-medium font-['Montserrat'] tracking-tight mb-2">
            <span className="text-2xl mr-2">
              <img src="/Images/Vector.png" alt="" />
            </span>{' '}
            EMPOWERING SERVICES, BEYOND LIMITS!
          </p>
          <h1 className="text-4xl text-left font-bold font-['Poppins'] leading-tight">
            Why Technology Service Creater (TSC)?
            <br />
            Building Responsibly
          </h1>
        </div>

        <div className="bg-black rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-['Poppins'] leading-tight mb-6">
              Transforming Services with
              <br />
              Innovation, Intelligence & Impact.
            </h2>
            <p className="text-gray-300 text-sm font-normal font-['Montserrat'] leading-relaxed mb-4">
              In today&apos;s fast-moving world, the service industry needs more than manpower — it
              needs smart systems, agile technology, and scalable solutions.
            </p>
            <p className="text-gray-300 text-sm font-normal font-['Montserrat'] leading-relaxed mb-6">
              That&apos;s where TSC comes in.
            </p>
            <p className="text-gray-300 text-sm font-normal font-['Montserrat'] leading-relaxed">
              We are building a next-gen service ecosystem powered by technology — offering
              intelligent solutions across sectors like education, business, retail, logistics,
              property, agriculture, and more.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src="/Images/team.png" alt="TSC Team" className="w-full max-w-md" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="lg:w-1/3">
            <img src="/Images/tree.png" alt="" className="w-14 h-14 mb-3" />
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-['Poppins']">What Makes TSC Different?</h3>
            </div>
            <p className="text-gray-300 text-base font-normal font-['Montserrat'] leading-relaxed">
              To become India&apos;s most innovative service-tech company — empowering businesses,
              communities, and governments with smart, inclusive, and sustainable solutions.
            </p>
            <button className="mt-8 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              Explore More <span className="ml-2">→</span>
            </button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 mt-16 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <span className="text-2xl mr-2 mt-1">
                <img src="/Images/Vector.png" alt="" />
              </span>
              <p className="text-gray-300 text-base font-normal font-['Montserrat'] leading-relaxed">
                <span className="">We Don&apos;t Just Provide Services</span> — We Solve Root
                Problems Using Design Thinking, User Feedback, And Scalable Models.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-2 mt-1">
                <img src="/Images/Vector.png" alt="" />
              </span>
              <p className="text-gray-300 text-base font-normal font-['Montserrat'] leading-relaxed">
                <span className="">Each Solution Is Uniquely Crafted</span> — Whether It&apos;s A
                Mobile App, CRM Dashboard, Or AI Bot, It&apos;s Tailored To Your Service Flow.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-2 mt-1">
                <img src="/Images/Vector.png" alt="" />
              </span>
              <p className="text-gray-300 text-base font-normal font-['Montserrat'] leading-relaxed">
                <span className="">
                  We Connect Services With Government Schemes, Data Analytics, And Cloud Platforms
                </span>{' '}
                — Creating A Full-Circle Solution.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-2 mt-1">
                <img src="/Images/Vector.png" alt="" />
              </span>
              <p className="text-gray-300 text-base font-normal font-['Montserrat'] leading-relaxed">
                <span className="">
                  We Use Lean Tech To Bring High Performance At Low Cost, Perfect For MSMEs, Rural
                  Services, And Scalable Startups.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTSCDifferentSection;
