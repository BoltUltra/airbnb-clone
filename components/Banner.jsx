import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[300px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="https://links.papareact.com/0fm" fill objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm md:text-base">Not sure where to go?</p>
        <button className="bg-white px-8 my-3 font-semibold py-2 rounded-full text-purple-500 shadow-md hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
