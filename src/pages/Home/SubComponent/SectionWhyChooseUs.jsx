import React from 'react';

const SectionWhyChooseUs = () => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-3 sm:px-8 lg:px-16">
      <div className="text-center mb-10 lg:mb-16">
        <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-lg sm:text-2xl lg:text-3xl mb-3">
          Why Choose Us?
        </div>
        <div className="font-[Poppins] font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 leading-tight">
          Comprehensive Development <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent">
            Solutions Tailored for You
          </span>
        </div>
        <div className="font-[Montserrat] font-normal text-sm sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
          Our team brings unparalleled expertise and dedication to every project. We prioritize
          quality and provide ongoing support to ensure your success.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
          <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-lg sm:text-2xl lg:text-3xl mb-3 text-center lg:text-left">
            Excellence
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 text-center lg:text-left">
              <div className="font-[Poppins] font-bold text-xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 leading-tight">
                Expertise
              </div>
              <div className="font-[Montserrat] font-normal text-sm md:px-0 px-10 sm:text-lg text-gray-600">
                Skilled professionals committed to your project&rsquo;s success.
              </div>
            </div>
            <div className="flex-1 mt-4 sm:mt-0 text-center lg:text-left">
              <div className="font-[Poppins] font-bold text-xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 leading-tight">
                Quality
              </div>
              <div className="font-[Montserrat] font-normal text-sm md:px-0 px-10 sm:text-lg text-gray-600">
                Delivering top-notch services that exceed expectations.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 order-1 lg:order-2">
          <img
            src="/Images/img6.png"
            alt="Team working on digital solutions"
            className="rounded-xl object-cover w-full max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <img
            src="/Images/img7.jpg"
            alt="Celebrating project achievements"
            className="rounded-xl object-cover w-full max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="text-center mb-6 sm:mb-8">
            <div className="font-[Poppins] font-bold bg-gradient-to-r from-[#A468DA] to-[#149BF5] bg-clip-text text-transparent text-lg sm:text-2xl lg:text-3xl mb-3">
              Achievements
            </div>
            <div className="font-[Poppins] font-bold text-2xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
              Our Impact in Numbers
            </div>
            <div className="font-[Montserrat] font-normal text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We take pride in delivering exceptional results. Our commitment to excellence is
              reflected in our impressive statistics.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 items-start text-center sm:text-left">
            <div className="flex-1">
              <div className="font-[Poppins] font-bold text-2xl sm:text-4xl text-gray-900 mb-1">
                95%
              </div>
              <div className="font-[Montserrat] font-normal text-sm md:px-0 px-10 sm:text-lg text-gray-600">
                Customer satisfaction rate based on recent surveys.
              </div>
            </div>
            <div className="flex-1 mt-4 sm:mt-0">
              <div className="font-[Poppins] font-bold text-2xl sm:text-4xl text-gray-900 mb-1">
                200
              </div>
              <div className="font-[Montserrat] font-normal text-sm md:px-0 px-10 sm:text-lg text-gray-600">
                Projects successfully completed in the last year.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* carousel */}
    <div className="flex items-center">
      <svg
        width="105"
        height="31"
        viewBox="0 0 105 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="105" height="31" fill="url(#pattern0_454_16571)" />
        <defs>
          <pattern
            id="pattern0_454_16571"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16571" transform="scale(0.00952381 0.0322581)" />
          </pattern>
          <image
            id="image0_454_16571"
            width="105"
            height="31"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAAfCAYAAADk+ePmAAAGLklEQVR4AezagbkkQxAH8CEBRIAIEAEiQASIABEgAkTgRIAIEAEiQAROBK5+e1t7PX3dsz2zs/e+u7f7Tb2eqaqu7qp/VU3ve+/l6bqfN8L8l0G/B/11pF9i/DyILIbbdS4C1wLp1Vj4myCAvBTjp0HvHOnrGN8OIgNg3N6upQhcAyQAAQA4b8biXwX9EfTwSL/G+EnQ+0FGVRW3t6sXgWuA9H0s9nPQueD/HTqA+ixGwMZwu1oR2BsklaFiVE9rvZoHqBFA63n36nkJJNn9YURDRQj6t3GvSpI8k70X/DwEeMd45wRr+NL+vKOGJ9w3xRokAU9g3HuXAANIAHEASMITYADRcXrbEj+VJyG2zL0Xc0qQEpSfwnNBN2pH8di8BBeID0IKWBWkdam0W9AjKHtdJUiqQuC32gboBzEZQChuhy6t7pJ1hxZ5npVKkC71A8hOawhgo/ZUsKod1b9jvWe/PJB8p1kimW5nqoOed5BnLdFzSVrdjyFMnvt47F5svhtSAMcwOR3m3NboPTgdP96R6Pi4arAvR//eJPug05Pj81+bd5/U4qUsR37lPPqeFwlIMlnm/xBWWpStSEDphtrhkv2lPiadkucev0c2+2cIrR/DJAFaNthBCeYUH8nzVoxrLwDwQ4Cs1ZpvH+y3ZMmzdj0fD7jsp149kuW8OoZibW2+nghIjPwWPxwAWpQBDJXZJWCl/j8h/S+o5NlEsLqXI7tglQq1jdKeNUvdLfcfx6QvgtjaWokxvXsJNKAEu6t0FNhD6Z+EFceS9yBBOs55poMAcegckHtuSharEMFxGtXyMqv3WkcFOOVqYT3b/B5e765AkmUC9NHwTvdR1Ookhe4AKF8hJMs+1h9bAUDa9Evmx9z5TzpzzsLTXYHkACDbBGthe7uKJIZWp4LS8HdxI1limF321auCmWLnAQhOud65WnpHbYydIDmV/R9TahLMYO962bQTXc82Wb0Pz1t/o5Gbt55eD4DkqSr3KsxY0iUgsWMdncK62izeJkqQvEj9WaGm+qW+aZFikmy2aVkm2wrR6dYhpt6HZ3NOSitvrKuKvC/qqYAjq/nnnu3pnI6WqnJHDxJNewmSgEG+JvzmxA5zSV+gvExt2jodEwc2eYsOwg0/JIZp1leVJXl/yHREB3lXGZfolSVhIbM2sKy9qToTpMLmRbf/dmbbnGzyHrLpjtp69sAMa2uhvW6hIlSYNpzmJIiEA2DyylF7ZFfwS37v3i+lycTAuIqA5Fy+atIG5Tzl9JzeYHJ4ipc3Za1b8FskcVQSogsgFQ84gOAl0eEPOVvJXxrZ064d/5f0mjIgNQU7MjnKMS/RHc0eTAHAgaImreWgED+sL6Bx270EW5XTTSWgOv3h6RD5zzSqgT3Apu7IaI2sqBH9kw6QOJqnnJOgcZPZYLGGeOKUljIVHw7KRFnUm1eoT2zQnwY+dAHP8ZoEkQkticzhwPMSqfJ6/4DQDq1DZvRs7ZYtOktribP5vXceu0/5DyQTANBatOTRWerBtR0twYIjADlUIEG1pnutQQX2KHXpI/uTCEls0PFMfo7o8aGlx29Ebp2WDh45O+57RN6zgU8+mwukGWOHB4HREmSmF7JKlZG+i+Fn29BC8pRVtys6sk5WliTT2GoRPYEsiR22cx1resbXEu3HvtKepMqkAPIO4bjcxKUgAQQIAOGsAAgEnqwwcprDDii+A+nz2kK2DuWP/AtY0mvhmjk1LVUXWa3PTto0+t8/la0Faon2Yk+ZveYDij9AVxl8SlD5CFByfllTDGK717u2gGRT3jUyESCy22ZtmpMcF3QBwgcUxzlHl/OqRMYLTtL1vHxiOdcSfOsj+0H2h+zVnvlj/3wBLmB1BnMkIDmw+CIWSGWyYb65T1a+4G4tSMABjGx0GuIAp14/7gHfxgXjyHphBj4BCCWofAcWvxEgyTkNKADSVYHiQleSkw/TGpAYlyXahIrwjVsbkD1ahmzLDQ5v4AVTVGFiAByxAhQgEzwxBBYZPrnusxiGNSDZAIAYBhJQPKsmiz6cpsW17rtQi03wxEuFARRIKkxcjYCcxWoNSCYyrtcyzCiwgEd2o/UREDtAIQAa8WaWHgEAAP//SOxoJAAAAAZJREFUAwD+7apOtG1x/QAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
      <svg
        width="115"
        height="31"
        viewBox="0 0 115 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="115" height="31" fill="url(#pattern0_454_16573)" />
        <defs>
          <pattern
            id="pattern0_454_16573"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16573" transform="scale(0.00869565 0.0322581)" />
          </pattern>
          <image
            id="image0_454_16573"
            width="115"
            height="31"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="141"
        height="41"
        viewBox="0 0 141 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="141" height="41" fill="url(#pattern0_454_16575)" />
        <defs>
          <pattern
            id="pattern0_454_16575"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16575" transform="scale(0.0070922 0.0243902)" />
          </pattern>
          <image
            id="image0_454_16575"
            width="141"
            height="41"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="71"
        height="51"
        viewBox="0 0 71 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="71" height="51" fill="url(#pattern0_454_16577)" />
        <defs>
          <pattern
            id="pattern0_454_16577"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16577" transform="scale(0.0140845 0.0196078)" />
          </pattern>
          <image
            id="image0_454_16577"
            width="71"
            height="51"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="137"
        height="35"
        viewBox="0 0 137 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="137" height="35" fill="url(#pattern0_454_16545)" />
        <defs>
          <pattern
            id="pattern0_454_16545"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16545" transform="scale(0.00729927 0.0285714)" />
          </pattern>
          <image
            id="image0_454_16545"
            width="137"
            height="35"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="98"
        height="27"
        viewBox="0 0 98 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="98" height="27" fill="url(#pattern0_454_16547)" />
        <defs>
          <pattern
            id="pattern0_454_16547"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16547" transform="scale(0.0102041 0.037037)" />
          </pattern>
          <image
            id="image0_454_16547"
            width="98"
            height="27"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="162"
        height="31"
        viewBox="0 0 162 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="162" height="31" fill="url(#pattern0_454_16549)" />
        <defs>
          <pattern
            id="pattern0_454_16549"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16549" transform="scale(0.00617284 0.0322581)" />
          </pattern>
          <image
            id="image0_454_16549"
            width="162"
            height="31"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAAfCAYAAABkphawAAAJzklEQVR4Aezaj5UsQxQG8CYBRIAMngyIABEgAkSACDwRIAJEgAg8EXgiQATUb89+625tdU93z8y+4+g9c1XVrfuvvrp1q2ael6d9f682tU8afd7o7UbH50DgLAT2JuIvzeuXjT5r9GMj/dYcnwOBfQjsScT3mqs3GtVPqmPlHf11CLhR/m6i6KfW/i8/exLRtTwC64MB80njAbo1x+dAYB6BuUSUPN81Ndfu162tFfD7Nn7e6NTHde0KZ+O3JlxttOHxORD4F4FRIubd5wqWkB82cQmlurXu9Oc0Te80+qZR/dRrhZ7rOvNvtI6Ebs3xORB4iMAoESVeL+k6VuHCVxElW8aS84sMWivxWnPvQ56de8yLDQ5D/2kERok4lywSqSbYD23lvzf6udFbjSRna24+z27+e/3/iFVcfkZScZE+3lrvbKjeT5sCfWS8xUZTndihwz8b7OnjTRv/6IiBHaRfsV9rTkwKi1g8kULGfJyywyd9tEbeLUoW8b1k3zyb6MkoEb9d0Fb5Mh1wGKpJKAhXeeTSkqn64e9pLcITwtsTuPr8In08c/pkRz48Ncj90SZV+49bSx8Zm2PDuE0tfmBBlg6fdNjTxzOnv2ikTb7eiDwSAztInw3vdsnRxE5++KMjkcVin0LGfJhnf84YX/SRQzUnFz67ZBF8wx+1klYM6OkoEYH6UdNU8Vy3ql4bTirf3kSi9z4jFyALlOiAmUsyboBIhqw+Xsga8W1MeKOWHlDRnC9Jgubm2WVHLOwYzxG5pZiyeeSWbFgbf0sx0WdHTOI3fmE0SkTB+CJi0Raj76pdOjl0QuQlssSVxCqsLzdsRGZvKwmdIADGhiTnw6FB+qpv5smqJBmrFD3wYv2qCYibDYewDe8+1s5vv7H4kjqCYmHn08ZA+jUW8r3vJjr8iIkNVOOxnlEsjGQOTsYoMVkb6u2RsQYJqf9CaC4RazCSsX8D1vlRXzI62YAB/iWSkC0JlWQAMFBfawHwIU6k/2bjSajWTBIh1dgcmen2T1wOiVhthrjNO4RsSOpb0cnmSuKp/JHL0M9aYmHHGwzps5NYyOJZi/6IrCsxsYH4Ycda6NBnR7+S2M2F5yDQI2ttqNqz/sjChlzGj9rWRLQAQDsZgjW+ZDASiF32LXqr7QqyDXE42JuzQ56MTSVPzvq0yCaYqz874YfoiLNPIkkbGW+69G16+n0rluqH3V4mY4eryoYvHhUtY++x9LVs1n9UELfEktjme2IPPg5Q5uBjnzJ+tDaJ6LTnXWFBFmmMf24wscEeu+xLRiCtte1Q9CAD8pS+ZIscv+zQwVMl5zaJTKhPIpuVORUw/VOtBEMqFJsjefGoWqM5PAnquaMvYYKtccWHjTkfZBF9mGiNkf6WfaFzEUoi1isvhgWFn/Ge1qIkIEoSxE4FLry51tWUOW8nQGe8tq3+XLmSca2u6hJZFRE2xrWawMoBM2+uJ4dCBV/y+2uvNBj7pht24oBt9VvjjWxaOg4TO6N4a3JH5+qtRLQACxk5w0ejuTW86I4W99caA7cyYrztTnXzpw1/59hQiVSruIstiRW+DVZhfJHwPzBozUc2utdoK74SfpTs4hCTn6tUS/HWWHwh8lSph77OX7UvEQNkdWQhaDRX5U71l5Jmaa63+0phALoMV3VzICK8x0bVySbCyOZpYzutjfcUsfmpPn0ckT23TTzs5OrWx3criQGJCT9kf1VPTwwJ6MBl7lFbiQjgPgBXl4es98wI5LVBsmuhvbzrVbXo+XNjgM7NvWg+/OAkIeE2wksCplra8GvGrOLxl+vXz0V9AsLfFx9xq44SMjGpro+Ot0QUgIe7wACpTXA1QHJ7iC2b5Ftl7PfAnLJbTzmgTsn3831y2Khe5tT41OY4dJLN5iKYWm/1za93mfaUvy3zdZ/EoALDvcZMxtvaXsBfHy9+8FRN7/nwzms3aCcRBSQwi9BuMLFK1Ca5IvbaV3Xi6N10NrY1mbdWJYmz5QBIPk8P65WUDjeekCUHvv6lCL5ztuytWylxjGTFIwklI6zpzNm7Cj+JODKutAvOCdl6iunS27J5oxjCq+ABC2VubVsPmLebhFirq7qslR3J8e2nm8xdCpfYkzgVI3zXr6rs/Sd+Mvgjsl/h00s/h8e4/mZqPKKKqcM7kgmvyk5ziehdIXgbDrScmHvKsdi1AqBLz4b7WQOx1YmuHgIZRWHtwRBLYq5vUvwKfuyOWpW8/vRTZdiGjfXp17ml/hbZJTt1TtWrYxipypU36ttreGSu4iR5kTkyS3to3p6TRXOYmUP1Zns2SkTOgE94D9mY6Om7BpHqynbmtra1olg0e9o5O3yRQTYeoHWzrNFmLdkgY6PmfKj6bFjfUmLzX+24/uZs7uU7qCj6qvCpmMRujdGBT62CMKsVkvwIL+uDc+xo4V9t44XwzWc8/L9vqkAEAedbtMDCY8yj2GbUk5D5UWvDRvw1PDH0ycg/AMQibvb18RDQxKYPLJWanfhzUMwBmH7kY6MmT3Rqa+MypiMeLVv8ImMYsR3ZWnXCu0Rb36LsWa+Y+IONuKzZGF+fHPJlkrx+JfFn360BXvSszdh8v77ow69iy78Dgh8Z4+ejihinEdRyWvkMIYGY05JD9VQaV6qnrfLX9gFYN5+exYkFQK5IfTxzSNy+vWqNfWusMYodsPRtDlB7G+JG9CsBscbDFl222EHG+NEjP7KV+XNadq1PGzt854kkLolh7GBGRhJKqIxry5aYw2OPDWuDV78+tuhEvmLLf72yyd3YHiXi6F1Rq4hAatCM1UXZ5BvjieS2JTeyfTs9aoY8p9Y3QPaGAoXpWrExEjhsCYknxjU2JJvbYE5WPCr13Hz1S458eNdoxQGfNesLPnU/RzHBr6+2vRxcrY8t+Dr8vUwd832H6ygRLYTBKHEgiIxrtcGTmE6IAIwRsOlwhoBy55TAmSRGYFuwE8iHn2eQf6rCMyfWeoiqWzGSSZx0zWvZS8zmYeDfgfER/2RDNsr6yPJPhjyyIfAUL7nopGWbPJqLNbJaNskiungjsj4+fXOGB3kkPmNrh4/CMdLveQ4kHWtkB05IH1Z8ZX3wUQnJW7+YySJjfL7v4h8logAYZBi42jUAKfd0QwLnDAHlzmkELtAC0QHgw4FA3kJ45k65AFjipPtSU9CyJ+a6bjbx0ci29bHFPxlPFmRD4Gm+mX/w4YM84uOBQMcgQxbR7aYfDN1CVUd8xqM1PFDuGD1eFavR+viwfjiQRcb490zPJSIhTi20d2BhPY/8iId/0IHASQSWEnFOWcIprRK1yij3dXz0DwRWI7AnERlXKSWj94L3gb5rydxBBwKbEfgHAAD//5MgFDQAAAAGSURBVAMAAhpJnaLfnvYAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
      <svg
        width="169"
        height="31"
        viewBox="0 0 169 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="169" height="31" fill="url(#pattern0_454_16551)" />
        <defs>
          <pattern
            id="pattern0_454_16551"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16551" transform="scale(0.00591716 0.0322581)" />
          </pattern>
          <image
            id="image0_454_16551"
            width="169"
            height="31"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="133"
        height="30"
        viewBox="0 0 133 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="133" height="30" fill="url(#pattern0_454_16553)" />
        <defs>
          <pattern
            id="pattern0_454_16553"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16553" transform="scale(0.0075188 0.0333333)" />
          </pattern>
          <image
            id="image0_454_16553"
            width="133"
            height="30"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="170"
        height="30"
        viewBox="0 0 170 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="170" height="30" fill="url(#pattern0_454_16555)" />
        <defs>
          <pattern
            id="pattern0_454_16555"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16555" transform="scale(0.00588235 0.0333333)" />
          </pattern>
          <image
            id="image0_454_16555"
            width="170"
            height="30"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAeCAYAAAC8LYXhAAAO3UlEQVR4AeybXaxdRRXHZ5+2FAK0mJQQCu29TUggRALShMRS5fZVScSY8gLSGkMgKkFj+Gywp5SPSqmtqRjRWCEqavqgVV4MGG5DeWzESAgPhJ7SUmj48LZ8f/Ru/79xr+N03dnn7HM/3k6z114za61ZM2vmv9fM3ue2FYb/hjMw8xko5MLTPMmg+StXrlygstEpKkMLL774Yji0sJItqGznj42NzZeM9lAxBKpmY3jNeAZKeSj1TywYYClH2r9/P9zkYA4qjh8/DghjWQbwlmyj3fj4eORr166VKgyByiwMafozIHBGQMlDwT+4owhAyYxj31q6dGnr8OHDlCOdf/75kV9wwQWRyx4edu/eDS9pLNnwGs7AtGagwmZsC6BiQTfKUAvgCYTgLNalo9w6cuRI65xzzjHZPAPtyy+/jAwiS8PVJMSMeo1Kv+lDbenHRINcozLO+T1L8uletP2+Gv9ZdEBEMNB/VH5GhI5+Vex5+XH1aoNPb9/TeaXEp29H/bJKPx1G/OvVED+5+HdIN4h/7PE1CDGGcODAgbMEru2iXSkdPXr016+99tpPNA5A1vrss88K6Sl7+q5sH221Wo/K9heiX1b0K/FLBfCWzrDWJoBuAiP4XrRRjQECk4Odqn0vgI2tJxa+b2NnwOQwBvrfLh0PF0BQMV7o6Q8dNkx8qo9Gyc2Pqc6WseIztT+Y+OlVZDxpOysz9l7t6nSMxWLDVzpmi/9WNf6niLVK9RJlL8aCr0GIvsKKFSsm5LFTFMX6itaJr5ucnFx34sSJW15//fWHpS86nY6dQ1tLliwBb9Svl+0W0XVlWV4Hr+h6tQnKwP8ms7744otUI9EwFkKzO8EDAkDTrwWTlrO5KifsIaNPJp+sHieph62pmPimi2VtPKdfH+djMmIcYn2vdTUWdfNSYx6ImVh4YCiHBv94SAA14G5gPi2TQoDaIaA9nrYWUMOCBQuCMuUtL7zwwpelKypqvfXWW4B0RPU7RVMu+XpVwjuqDKzi/1/MBgUqjSEWi8mgnCMWmUyd09EOyum8DD8sEtzr+tVpA8Dh/Wy9HkDQL9x0HRU2iZpc9FkXIz7rdN43tsTQ1N63B9xzClZlzx+o04OiIKDBAGksL1q06E9PPPEEwARnrcWLFwPa3yl7Lo+GU29fPfvss49PFYcCB16+V4JvOTrpqZGOi8wKz1G/yWk68YCFRU/7YMsBMF+Q8HMVUWbMgEmi7sVC4wPeFTYo7JCN73eNZN6/RNmrX3xsudmGTpgbB/H/VHaMZ4U4i18Xv9QBsPYbD3YQ88o89iL6xxYqRkZGjusc+g1AOm/evKBMGkFKXZl18ZVXXsn5kzG2jh07Ria9BJ0RTigXRbFF5UNvvvkmtkYSxSv71s+WwRaXElspExNbVTcWsm4CvlbZGHveChVvsv2x7dJH1SQyHhgWh4yOTyYNosx4WTBsorFu6FhUuKqNLvr12zZZoylI6cTH9xeECXn/iapbZM69HXESI4lgXJY2JuTEz9wwVqniRdyAD30U9LnhEz+9CJ/RjQBWttvtUmB9fmJi4ofKriaPnNunn366WkcAAPolgfF2ZCkBbNX/oCPDVnEAKjb1ak0V1UrGpYHEuldue0fmAcYT2m2kAhmuDuRSB/QsVEj+sdjIuhOV6KyIDhvGCUBZOLKS6ftxxsRDkNqxaIP4IHbmIPUBWBibyYiPvqye4zwwqRxQkizgqdyXGStgZdyAmnjSvr39jOrtdju2v/baa38moP41VpKbtv9w5pln3rFmzZrHTz311ETzv6IAekilh0SliKvQ9p8CNsoHASpO4lmEQkVMeFXsMp72bkUFjhI80eMqp1ev7Q8dC57aM/lpvVeZBWUcgywQ/fnjDKAYpF/GxIMCNyJ2aI8JKu6zZSWODBAznlipbsTUNB7ASnJg/FXz2WfKkDgFVC29oRdPPvnkTcqyXYygF3ixCVu2bFl8yin8WhqrAR0l2X9d/LAIP2Kh0PYfOTejHFBNl+McjHPyVObf6nmy0Q+6ULQxwsecTro64ttsCg5AMQg45CJeHoB2FCGGaFDdeBhzDzpqdHAjHva5jp++iL8X2XgNVCfhZ+vWrRN6Y7+Z7fzDDz8MgJRzK5lUH/fDI488Qh/xqwAF2T18+umnHz7jjDPwZxQzKHp9S4VFOqmjKKm/sZ3xpKcWPkuiJ9CcjV8ogsY+tbWyfyD+ZYo54myzxJe6Z7seFBz48PFzZMEvWRXwU4Z6xX8pBgmZj0Q0J0V2FN5R6sgeIMAEsOBhbGwMXnY6neKKK654Vh/87xT4gl6y4osV2fO0004Lq1evDjfeeGPQdo/87+Lb3n///fDee+9lg+FbqilyQLUJBEQQg2Mhn7FGFe+Ie6Culyy90kzAInl7n32sLWdLK8NZZPhcEXGmvnmodqSChmWOG6kp42aekBG/31X8Sxd2OaJtTo6McbI2/YgdA/vZoAjSdruNL8rGAWy4/PLLf66XqH1kUm3tgDJu9YB148aNYdWqVYf0ReBHalQoo4p1L9pHf0uXLu0KKeSACjDToAmQEQFg2hiRcaxs/CorVJwFr4qR2TYYK7rRl/cr8ZSric2URgMIPBAY1+gA7c3Ux+/j9fNBBs7FlpNZH56TfXnQ+hF9+bYzqguoEVTj4/EvnQBZ1x/ZlEzK1p+Clfobb7wRBORjGJNR4XrhwhcU/Rw5coRfqKhD8SdU7AYlQPqYa5Rb3HFnwxaWgoIFYYKdWeC3+1SGXVqf7TLx+HHxgA7SD3F4cBNv6oMM6/vxuxD23RcSKqK5jl9dxIt+syTQIY9jB3jROoRy7dq1EVhVPbJXXnnlTp0/V3/88cexjr3q4ZNPPgnbt28P0i+TYpeIq+SY8O67707xo/PupAyiPJdRpau9GChvk2RYbwRQUxmLQp3FM2LCOwgTym1//kzqM1XSfFaKjBWwps7IQNtTQZ+yB5zFabHDiZ/jUOrKf3NGZ20pQzkb5BAAyhFrhd4IGyvXcWJgnFNIYEMWHzyBNrYXSIvdu3eHlStXxvro6GjYt2/fJfPnz79bFBYuXBjPqbxUkTmffvrpsG3btviSJeCu0leAbwNSzqjKqNGHbjGDitsV6zmgMklsWY+HEIzzTZI3YM6OPpPikAXw583LpMgdypFL1b2o074rUMFn4mskGxXN5cVZjzjTPjhzkilTWV3ZP0yMNxe/Bx3+ffwREElH2DBPiahbrAOXXyfG0m00GwWBNGa7/fv3R75r166R884774/4Zov/6KOP2OKDQB70O3/YsGGDgTS+UCnDbhZIvyj7ssqo+IEk6l6xngMqICH4lFgw5P4pNW8AycqDchaJvtJ2LFTaFza8kaY2vcqcscmGgKWXndexU5BdUzlHgH5+iL+fTerTl338zDUJI7UjfuYhldWVGQtjSvX+RS7VzbisrFouX758g37PHwGkgFPlQMZU5gx33XXXIX0NCGRj6nRY8Z2yW0Q9R9Wf+k37jOp9+knx+n51n2UAqc9uZJV+oGEhWVBsebgArAdBr7HQLx+g4WZnPq2e47MdP33kjiLEAwjR1xF6bwfoefjr2kxXHrPd2NhY2LNnzz3avr/JuVTbesyiH3zwQcyob7/99kNPPfXU9+gEAJNpKSujAtxlx44d26k6voy6Z1P9kCBVmBWgMjEeaJwxOYvVkc9aYxoNgBDrXmzFTHBXoAKAYBEMjPQNsS1ulJ7tbb24XeiQe9+mz3H69L9GMT4ydM4e34PGz7ykvvDPWFMZWzeZNZURJzESP3NBnXYQdeaMv7ainrbzoE91aRkfzF8vIt60Tblz506+e98DSE0BICkLlM8pK27RT6n7BGD+SBrxSaQs+xUJbhLZVVhBHPAWua1fuoEuJtk3IGDkdcR5N81atGdy4EbosQM4JoOzCNgCWBYNYnHYtv0kmg84bZsSIPEZnQxNPN4Hsfp+kWFbR+j9mIjJ+ya7+/ixwZbdhbiJH6LOi6kfC3EQD+36Ee15CHoRDwfgib5eeumlEYHwH7w4QQJdlHMTWF/du3fvzSpPCqT6vj95t8rPiaZcaveghJ8XdX2rzBVBOxtA9S9RZIvc5NKpEYvks6rPStjiJwdWdP1oJm3xDTD9GAEDDwp6I0BnZXjT+P2Z0c8jvpgn4veZFV0T4mWYOJrYNrLhbT41FEg36kP+iD7gs43HLd/0AurtN9xwA+swOTExAQCh70gfv6GK++v3EnBeLUdHR7GFJAqNt/5onLmxaGSNVNX06WUS03b4wV8qo0yg/BUQmYF6E8KWNh5oTdqmNmQ0wGIyshXZxuqM1z9gTeP3dvhiDsy3ceIHrHwWpGzyXpwxc3wh8/ayG1jHh3waCYRBH+VvVZrkv54EbfERqMqM8ZOUzp336QvA3/QbP2CDOHeeUFs+k10nHpRlYxt8QZKN6AXrx+Jlp9MRC4VutC3JqCwmoDEiI0jf6GLhrJ3xpk8/h3trY5zFynXMxJMZ+DzGgjFGAjZbysg4i/HH1NjSxvSeW3/G62yZLUBidnD6MkDNJH4/7/jGnx+r1QG2xY8t7wGmY/yMCzkPF3Y7TNmD59YAH72IvoIAWYrOEm0SeDcJmPe+88479wqwm5V1N1900UX3qd/Jo0ePAtAuLVmyhPKz0pFZHxTQ2fIjCbgP6AXroI4Q/A+AUl8SsJVpiBmVwfLkGTEhUdngxmRbO+MsboOmgYCtjfF+IMc34wMogLoIIUCUkXFOxW/o88/6M04cdU3QmZ1xG2dOxxjrfKVyxmn+jLMWqU2uTPzYXyYlsUM8nMwBcnzgW+q+Fw80bQYhYo6Ozz333LZ+k9+0bNmyTRdeeCF072233bbp6quv3iwDQAaxjcOhUt9T4WTW3wqkD8jO6H7V71f9Pr2UHeQvp/R9VtVARo1ApTKk4QxMawaUUSOQ1Lhst9ulfgQIAlhJXcQ12el0rA5AASr1SY4FAjp1I+S0KXUEsDL1IVDjLAxvM50BQBWBKkexXHEAmNYljhkyyjkWCJCxLEVqV+r76Ul1zqiyGV7DGZjRDHD8KKoXIhwZyKwMGI1MF3mSbaljw9mUckrhvwAAAP//Yx/chQAAAAZJREFUAwB9yPd+XMv/lgAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
      <svg
        width="139"
        height="26"
        viewBox="0 0 139 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="139" height="26" fill="url(#pattern0_454_16557)" />
        <defs>
          <pattern
            id="pattern0_454_16557"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16557" transform="scale(0.00719424 0.0384615)" />
          </pattern>
          <image
            id="image0_454_16557"
            width="139"
            height="26"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="156"
        height="30"
        viewBox="0 0 156 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="156" height="30" fill="url(#pattern0_454_16559)" />
        <defs>
          <pattern
            id="pattern0_454_16559"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16559" transform="scale(0.00641026 0.0333333)" />
          </pattern>
          <image
            id="image0_454_16559"
            width="156"
            height="30"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="136"
        height="30"
        viewBox="0 0 136 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="136" height="30" fill="url(#pattern0_454_16561)" />
        <defs>
          <pattern
            id="pattern0_454_16561"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16561" transform="scale(0.00735294 0.0333333)" />
          </pattern>
          <image
            id="image0_454_16561"
            width="136"
            height="30"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="153"
        height="30"
        viewBox="0 0 153 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="153" height="30" fill="url(#pattern0_454_16563)" />
        <defs>
          <pattern
            id="pattern0_454_16563"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16563" transform="scale(0.00653595 0.0333333)" />
          </pattern>
          <image
            id="image0_454_16563"
            width="153"
            height="30"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="197"
        height="30"
        viewBox="0 0 197 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="197" height="30" fill="url(#pattern0_454_16565)" />
        <defs>
          <pattern
            id="pattern0_454_16565"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16565" transform="scale(0.00507614 0.0333333)" />
          </pattern>
          <image
            id="image0_454_16565"
            width="197"
            height="30"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="130"
        height="30"
        viewBox="0 0 130 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="130" height="30" fill="url(#pattern0_454_16567)" />
        <defs>
          <pattern
            id="pattern0_454_16567"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16567" transform="scale(0.00769231 0.0333333)" />
          </pattern>
          <image
            id="image0_454_16567"
            width="130"
            height="30"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <svg
        width="96"
        height="31"
        viewBox="0 0 96 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="96" height="31" fill="url(#pattern0_454_16569)" />
        <defs>
          <pattern
            id="pattern0_454_16569"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_454_16569" transform="scale(0.0104167 0.0322581)" />
          </pattern>
          <image
            id="image0_454_16569"
            width="96"
            height="31"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAfCAYAAAAY7MgsAAAEBElEQVR4AezYjZUMQRAH8CEBRIAInAgQwREBInAiQASIABEgAkSACBABIqB+97bveutmbmdnZ/b23s2+ru2v+ur699R0z+Wm/++gP+vM2TcCfQC4GsreB70MmsvIEVgFwF7Y+xp0P2guE0TgNACknE9h80bQXCaKQBsAUs6bsCflaEdzLlNFIANgt0s5j6YyOOtdjkANwMOYEnwgRHMu24hAAUDQX4XBOeVEELZZCgBetnPwN4u8TZxppUYAOGISXMk8IcPP0P2vos/RXrc4tf0OoR9Bz4K2XRxc2K5ppQ8AuLuSa/cZbKByatN+Hi53rysmd6UA4NaazlggWlNsUva2YGcf7VCptpDb/aRO9VEOgD58NY+FWUTbomu+bbY/hLE/QaVo5zR2Lyb5XMgtP4bOtgwBgMcFhLPItexnEvDbMfhuQQ+i9l6JarfLUADKquRajzJAytgUNf2rTmkC7gKJ8u4f6hObDil0Ik/PUF3WgJbkNwWAMg5KSWM/0hbvCSsnm1ILBLs1CUx9+tDmFx7pSf+6TkWCYRwV3jJtzprYtMG8P5Ax/PwqvKtqvPSQK1QODM0YAHCAw27RjOlvSoJFnycMEEUfOwJhAWWs1OZqKnJXgsF4VCeKcVR4MdhIbANVPxN+fuGp5TKfPh68NR95R2ZgjgYAY4gxAaoNGl+XOIm65CygK0BdMn3G2bTj+/gPKH6cphdP17y5g7GegNqIFAGEemxI+0sIPQ3yYvWSjeZSyWljabLqvIj246CsQ984Ku8MGwgIwX5UXkfLCQqf90x0j8qTaJ0G1reYJ8+HLBtTzf4UAFAsOKt2B74u4qwd7vsUQJ1qMm8OVJ4vfcF9G52/QXUBgHHEnrk7/ioybh1Fhw1RTTeCf5of/CYPWKc0NpvqtzcVAGx4H3BQe136lQQEIA01Q3U3HT8pIQcz29X3RNbUoe5wGICHjfgT/LofQ83VKQEQIItiqGmana/4m53MG0EQPZE1STNZrqtPfmluSgAYkkbU55Xyjh19HVMDMLrDEyo8sTvDVk5JMTRumQE4jmcbAO4jxxxNI015oda0EUgXGYAcOOkm53ynOUFvFj99h4uasp4Fa7/qIgHgM0COikuX3Syw5hxJ1YUEv9xmHYnzDRxoTkaFf+36IgHwvSU6Am837y/mBFlQF93Dyg7H03bpchw9ZBr6NzUAOYcO9XMMOcFty/O1bvNuvRmEmqe03W49PaU/qAbAzUGS509IUN1GPybXBb3O/fjExKeH/NTg9YkESBsHnx8AcFZnsA+RkfP68OLJV3fybZR9cNHJfPTVVPO0+eQzdNYhuNLOpZgouq5Fuy2Y3gcukpmXr+yF2FLx2aHoLPUSQ3RO8PwHAAD//77gWCQAAAAGSURBVAMAdaWxXzM6d9cAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </div>
  </div>
);

export default SectionWhyChooseUs;
