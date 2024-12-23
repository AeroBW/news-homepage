import { section1Content } from "@/public/content";
import Image from "next/image";
import { Button } from "./ui/button";

function Section1() {
  return (
    <section className="sm:col-span-2 sm:row-span-2 sm:grid sm:grid-cols-subgrid sm:grid-rows-subgrid">
      <Image
        src={section1Content.image.mobile}
        alt="hero image"
        className="max-h-[270px] object-cover sm:hidden"
      />
      <Image
        src={section1Content.image.desktop}
        alt="hero image"
        className="hidden sm:col-span-2 sm:block sm:h-full sm:object-cover"
        priority={true}
      />
      <div className="mt-6 space-y-6 sm:col-span-2 sm:mt-0 sm:grid sm:grid-cols-subgrid sm:space-y-0">
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          {section1Content.title}
        </h1>
        <div className="">
          <p className="mb-6 text-dark-grayish-blue">
            {section1Content.description}
          </p>
          <Button
            size={"lg"}
            className="rounded-none bg-soft-red font-bold tracking-[0.2em] text-very-dark-blue transition duration-150 ease-in-out hover:bg-very-dark-blue hover:text-off-white"
          >
            READ MORE
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Section1;
