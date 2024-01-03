<script setup></script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="hero min-h-screen"
      style="background-image: url(/img/Dublin.jpg)"
    >
      <div class="hero-overlay bg-[#C2E5FF] bg-opacity-60"></div>
      <div class="hero-content flex-col text-center text-violet-900">
        <h1 class="mb-3 text-5xl font-bold text-left">
          Welcome on my Portfolio
        </h1>

        <div
          class="flex flex-col items-end bg-white bg-opacity-10 rounded-3xl backdrop-blur-md p-4 shadow-2xl"
        >
          <h2 class="mb-5 text-3xl font-bold text-left">
            My name is Sanda Rakotovelo
          </h2>
          <p class="mb-5 text-xl font-bold text-right">
            I'm a student in computer science, I like web-development
          </p>
          <div class="flex flex-row gap-2">
            <button class="btn btn-active btn-accent text-gray-50 shadow-md">
              <a href="mailto:rsandarisoa@gmail.com" target="_blank">Mail</a>
            </button>
            <button class="btn btn-active btn-accent text-gray-50 shadow-md">
              <a href="https://github.com/sandazzz/" target="_blank">Github</a>
            </button>
            <button class="btn btn-active btn-accent text-gray-50 shadow-md">
              <a href="https://www.linkedin.com/in/sandarisoa-rakotovelo-698b90255/" target="_blank">Linked-in</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center">
    <div
      class="hero min-h-screen rotate-180"
      style="background-image: url(img/Honk-kong.jpg)"
    >
      <div class="hero-overlay bg-[#C2E5FF] bg-opacity-60"></div>
      <div class="hero-content flex-col w-full text-violet-900 rotate-180">
        <h2 class="mb-5 text-4xl font-bold">My Skills</h2>

        <div class="flex flex-row justify-around w-full">
          <div
            class="flex flex-col items-center w-[320px] bg-white bg-opacity-10 rounded-3xl backdrop-blur-md p-4 shadow-2xl"
          >
            <h3 class="mb-5 text-2xl font-bold text-center">Back-End</h3>
            <ul>
              <li>PHP</li>
              <li>Node</li>
              <li>Django</li>
              <li>SQL</li>
            </ul>
          </div>
          <div
            class="flex flex-col items-center w-[320px] bg-white bg-opacity-10 rounded-3xl backdrop-blur-md p-4 shadow-2xl"
          >
            <h3 class="mb-5 text-2xl font-bold text-center">Front-End</h3>
            <ul>
              <li>Next.Js</li>
              <li>Vue.Js</li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div
            class="flex flex-col items-center w-[320px] bg-white bg-opacity-5 rounded-3xl backdrop-blur-md p-4 shadow-2xl"
          >
            <h3 class="mb-5 text-2xl font-bold text-center">Others Skills</h3>
            <ul>
              <li>Git</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <h2 class="mb-5 text-4xl font-bold">Projects</h2>
        <div class="flex flex-row justify-around w-full">
          <div
            class="flex flex-col items-center w-[320px] bg-white bg-opacity-10 rounded-3xl backdrop-blur-md p-4 shadow-2xl"
          >
            <h3 class="mb-5 text-2xl font-bold text-center">Strix</h3>

          </div>
          <div
            class="flex flex-col items-center w-[320px] bg-white bg-opacity-10 rounded-3xl backdrop-blur-md p-4 shadow-2xl"
          >
            <h3 class="mb-5 text-2xl font-bold text-center">Bourse</h3>

          </div>
          <div
            class="flex flex-col items-center w-[320px] bg-white bg-opacity-5 rounded-3xl backdrop-blur-md p-4 shadow-2xl"
          >
            <h3 class="mb-5 text-2xl font-bold text-center">Pj-3</h3>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
