export default async function HeroContext() {
  return (
    <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <h1 className="text-5xl md:text-6xl font-bold text-white max-w-md">
        Hi, my name is
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          Sanda{" "}
        </span>
      </h1>

      <p className="text-lg text-gray-400 my-5 max-w-[600px]">
        I&apos;m a Full Stack Developper. <br />
        Check out my projects and skills.
      </p>
      <div className="flex max-w-full flex-wrap gap-2">
        <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
          Linked-in
        </button>
        <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
          Mail
        </button>
        <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
          GitHub
        </button>
      </div>
    </div>
  );
}
