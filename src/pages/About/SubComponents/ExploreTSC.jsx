import ExploreButton from './ExploreButton';

const ExploreTSC = ({ headings }) => {
  return (
    <div className="relative flex flex-col mb-12 w-full max-w-3xl mx-auto px-2 sm:px-4">
      <div className="absolute -left-[20em] w-[220em]">
        <img src="/Images/explore.png" alt="" />
      </div>
      <div className="z-50 flex max-w-[314px] h-[60px] sm:max-w-md md:max-w-lg text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] leading-tight tracking-wide mx-auto mb-8 sm:mb-12 text-center">
        Explore TSC
      </div>
      <div className="w-full bg-white px-4 sm:px-8 py-6 sm:py-8 rounded-2xl flex flex-wrap justify-center gap-6 sm:gap-8 md:mx-auto sm:mx-auto shadow-lg">
        {headings.map(hd => (
          <ExploreButton key={hd.heading} element={hd} />
        ))}
      </div>
    </div>
  );
};

export default ExploreTSC;
