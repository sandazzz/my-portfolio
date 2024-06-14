import Link from "next/link";

export default async function HeroContext() {
  return (
    <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <h1 className="mt-8 text-4xl text-white max-w-md">
        Hi, my name is
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          Sanda{" "}
        </span>
      </h1>

      <p className="font-medium text-gray-400 my-5 max-w-[600px]">
        I am a Full Stack Developper <br />
        I like learning and trying new things <br />
        Check out my projects and skills !
      </p>
      <div className="flex max-w-full flex-wrap gap-2">
        <Link
          href={"https://www.linkedin.com/in/sandarisoa-rakotovelo-698b90255/"}
        >
          <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
            Linked-in
          </button>
        </Link>
        <Link href="mailto:rsandarisoa@gmail.com">
          <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
            Mail
          </button>
        </Link>

        <Link href={"https://github.com/sandazzz"}>
          <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
            GitHub
          </button>
        </Link>
      </div>
    </div>
  );
}
