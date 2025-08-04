import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  function StatBlock({
    value,
    label,
  }: {
    value: string | number;
    label: string;
  }) {
    return (
      <div
        className="
        w-full h-auto
        md:h-16 2xl:h-20
        flex flex-col justify-between items-center
        md:items-end
      "
      >
        <span
          className="
          flex
          font-semibold text-md
          md:text-2xl 2xl:text-4xl
        "
        >
          {value}
        </span>
        <span
          className="
          flex
          text-sm
          md:text-lg 2xl:text-2xl"
        >
          {label}
        </span>
      </div>
    );
  }

  return (
    <section
      className={`
        w-full h-auto z-0 relative
        md:h-screen 
        flex flex-col justify-start
        md:flex-row md:justify-center
        md:px-24 2xl:px-32
      `}
    >
      {/* Left */}
      <div
        className={`
          w-full order-2
          md:w-[40%] md:h-full md:order-1
          flex flex-col gap-2
          md:gap-4 2xl:gap-8
          px-8 py-2 
          md:px-0 md:pb-0 md:pr-24 md:pt-[20vh] 2xl:pr-32
        `}
      >
        {/* Hey, I'm Edmund */}
        <div
          className="
          w-full 
          md:h-16 2xl:h-20
          md:flex md:items-center"
        >
          <span
            className="
            text-md whitespace-nowrap
            md:text-2xl
            2xl:text-4xl
            "
          >
            Hey, I&apos;m Edmund
          </span>
        </div>

        {/* A fintech expert */}
        <div
          className="
          w-full
          md:h-36 2xl:h-48
          flex flex-row gap-1
          md:items-center md:gap-4 
          "
        >
          <span
            className="
            text-lg whitespace-wrap font-[cursive]
            md:text-4xl 2xl:text-6xl
            "
          >
            FINANCIAL TECHNOLOGY EXPERT
          </span>
        </div>

        {/* I design systems that scale, stories that stick, and solutions that matter. */}
        <div
          className="
          w-full
          md:h-16 2xl:h-20
          md:flex md:items-center"
        >
          <span
            className="
            text-sm whitespace-wrap
            md:text-lg
            2xl:text-2xl
            "
          >
            I design systems that scale, stories that stick, and solutions that
            matter.
          </span>
        </div>

        {/* Buttons */}
        <div
          className="
          hidden w-full
          md:flex
          flex flex-row 
          md:gap-4 2xl:gap-8
          md:text-lg 2xl:text-2xl
          "
        >
          <Link className="flex-1 " href="#contact">
            <button
              className="
              w-full bg-[#FEE575] 
              py-2 rounded-md border-3 border-[#FEE575] 
              2xl:border-4
              font-bold
              cursor-pointer hover:scale-110
            "
            >
              Talk to Me
            </button>
          </Link>
          <Link
            className="flex-1"
            href="https://drive.google.com/file/d/1tzwYiJEIUbLJCLfyCb_7dWriXOiZ-vkc/view?usp=sharing"
          >
            <button
              className="
              w-full
              py-2 rounded-md border-3 border-[#FEE575] 
              2xl:border-4
              text-[#FEE575] font-bold
              cursor-pointer hover:scale-110
              "
            >
              View Resume
            </button>
          </Link>
        </div>
      </div>

      {/* Middle */}
      <div
        className={`
          w-full h-auto bg-[#FEE575] overflow-hidden order-1 
          md:w-[40%] md:h-[85%] md:order-2
          2xl:h-[80%]
          flex items-end
          pt-[10vh] rounded-b-full 
          md:pt-0
        `}
      >
        <div
          className="
          relative w-full aspect-square
          "
        >
          <Image src="/heroImage.jpg" className="object-contain" fill alt="" />
        </div>
      </div>

      {/* Right */}
      <div
        className="
        w-full h-[15%] order-3
        md:w-[20%] md:h-full
        grid grid-rows-2 grid-cols-2 gap-2
        md:flex md:flex-col md:items-end md:gap-4 2xl:gap-8
        px-8 py-2 
        md:px-0 md:pt-[20vh] md:pb-0
        "
      >
        <StatBlock value="3" label="Internships" />
        <StatBlock value="18+" label="Hackathons" />
        <StatBlock value="10+" label="Projects" />
        <StatBlock value="6" label="Leadership roles" />
      </div>
    </section>
  );
}
