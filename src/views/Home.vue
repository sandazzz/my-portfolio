<script setup></script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="hero min-h-screen"
      style="background-image: url(../src/img/Dublin.jpg)"
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="">
          <h1 class="mb-5 text-5xl font-bold">Welcome on my Portfolio</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center min-h-screen">
    <h2 class="mb-5 text-4xl font-bold">My Skills</h2>

    <div class="flex flex-row justify-around w-full">
      <div class="flex flex-col items-center">
        <h3 class="mb-5 text-3xl font-bold text-center">Basic Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>PHP</li>
          <li>MySQL</li>
        </ul>
      </div>
      <div class="flex flex-col items-center">
        <h3 class="mb-5 text-3xl font-bold text-center">Advenced Skills</h3>
        <ul>
          <li>Next.Js</li>
          <li>Vue.Js</li>
          <li>Django</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div class="flex flex-col items-center">
        <h3 class="mb-5 text-3xl font-bold text-center">Others Skills</h3>
        <ul>
          <li>Git</li>
        </ul>
      </div>
    </div>
  </div>
</template>
