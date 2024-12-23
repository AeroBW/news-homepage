import { section2Content } from "@/public/content";
import Link from "next/link";

function Section2() {
  return (
    <section className="bg-very-dark-blue p-6 text-white sm:row-span-2 lg:flex lg:flex-col lg:justify-around lg:p-8">
      <h2 className="mb-6 text-2xl font-bold text-soft-orange sm:text-3xl lg:text-4xl">
        New
      </h2>
      {section2Content.map((item, i) => (
        <>
          <Link href="/" key={i} className="group">
            <h3 className="mb-2 font-extrabold transition duration-150 ease-in-out group-hover:text-soft-orange lg:text-xl">
              {item.title}
            </h3>
            <p className="text-grayish-blue">{item.description}</p>
          </Link>
          {i !== section2Content.length - 1 && (
            <hr className="my-6 border-t border-t-dark-grayish-blue" />
          )}
        </>
      ))}
    </section>
  );
}

export default Section2;
