import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative w-full md:h-96 h-80">
        <Image
          src={img}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-8">
        <h3 className="text-2xl mb-3 w-40">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 py-2 px-4 rounded-lg mt-3">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
