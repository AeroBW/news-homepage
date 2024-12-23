import { section3Content } from "@/public/content";
import Image from "next/image";
import Link from "next/link";

function Section3() {
  return (
    <section className="grid gap-8 sm:col-span-3 sm:grid-cols-subgrid">
      {section3Content.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-[1fr_2fr] gap-4 max-sm:grid-rows-[140px] sm:max-lg:grid-cols-1 sm:max-lg:grid-rows-[150px_auto]"
        >
          <Image
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
          <div className="flex flex-col justify-around">
            <h2 className="text-2xl font-bold text-soft-red md:text-3xl">
              {item.id}
            </h2>
            <Link
              href="/"
              className="w-max transition duration-150 ease-in-out hover:text-soft-red"
            >
              <h3 className="font-extrabold md:text-xl">{item.title}</h3>
            </Link>
            <p className="text-dark-grayish-blue">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Section3;
