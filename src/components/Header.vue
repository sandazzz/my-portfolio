<script setup></script>

<template>
  <header
    class="flex justify-center w-full min-h-16 p-2 bg-base-100 fixed z-10 text-violet-800"
  >
    <div class="flex justify-between w-4/6">
      <div class="">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li>
              <a href="https://github.com/sandazzz/" target="_blank"
                >My GitHub</a
              >
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sandarisoa-rakotovelo-698b90255/"
                target="_blank"
                >My Linked-in</a
              >
            </li>
            <li><a href="mailto:rsandarisoa@gmail.com">E-mail</a></li>
          </ul>
        </div>
      </div>
      <div class="">
        <a class="btn text-xl">Download my CV</a>
      </div>
    </div>
  </header>
</template>
