export default function Header() {
  return (
    <header
      className={`
        w-full h-[10vh] fixed top-0 left-0 z-100
        flex justify-center items-center
        md:justify-start
        md:px-16
        2xl:px-32
        `}
    >
      <div
        className="
        text-lg font-semibold
        md:text-2xl 2xl:text-4xl
        py-1/2 px-2 border-2 rounded-md 
        2xl:py-1 md:border-4 2xl:border-6"
      >
        ELZ MING
      </div>
    </header>
  );
}
