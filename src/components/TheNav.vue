<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/projects">Projects</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/experience">Experience</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/style-guide">Style Guide</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>

// nav {
//   width: 100%;
//   font-size: 12px;
//   text-align: center;
//   margin-top: 2rem;
    // @include lg {
    //   text-align: left;
    //   margin-left: -1rem;
    //   font-size: 1rem;
    //   padding: 1rem 0;
    //   margin-top: 1rem;
    // }
// }

// nav a.router-link-exact-active {
//   color: var(--color-text);
// }

// nav a.router-link-exact-active:hover {
//   background-color: transparent;
// }

// nav a {
//   display: inline-block;
//   padding: 0 1rem;
//   border-left: 1px solid var(--color-border);
// }

// nav a:first-of-type {
//   border: 0;
// }
</style>
