<template>
  <div class="intro-section-wrapper">

    <div class="logo-box">
      <img src="@/assets/img/logos/rpm-logos/vectors/rpm-logo-fill-sunset.svg" width="130px" alt="My Logo">
    </div>

    <div class="header-box">
      <h4>Portfolio - 2024</h4>
    </div>

    <div class="home-copy-wrapper">
      <p>Greetings! And welcome.<span class="emoji" role="img" aria-label="Vulcan salute emoji">🖖</span></p>
    </div>

    <!-- <div class="home-copy-wrapper">
      <p>Would you like to read my <code class="quotes">&ldquo;</code>elevator pitch<code class="quotes">&rdquo;</code>?</p>

      <div class="ctrl flex--row--cent--wrap">
        <button class="btn--primary" @click="handelFunPrint">Fun print</button>
        <button class="btn--secondary" @click="handleBoringReveal">Boring reveal</button>
      </div>

      <div :style="revealStyle" class="reveal-wrapper" ref="reveal">
        <p>I've worked on a number of production applications with some amazing, diverse and remote teams in <code>Agile</code>-like, <code>CI/CD</code> environments. Some of those projects live on web apps for <code>XBOX</code>, <code>Hydro Flask</code> and <code>Leatherman</code>, among others.</p>

        <p>Most of my experience is building things with <code>JavaScript</code> FE libraries, <code>React</code> and <code>Vue</code>, and styling them with <code>CSS</code>/<code>Ssas</code>. But I have worked with Backend and database technologies as well.</p>
        <p>My contributions have included:</p>
        <ul>
          <li>New features</li>
          <li>Bug fixes</li>
          <li>Style refactors</li>
          <li>Accessibility updates</li>
          <li>Dependency and version updates</li>
          <li>Unit tests</li>
          <li>Internationalization</li>
          <li>Documentation</li>
        </ul>

        <p>But perhaps the most valuable asset I bring is an optimistic and encouraging attitude. What fuels this positive temperament? I'm a bit of a people-pleaser. I dislike conflict and when others feel bad. And a friendly smile and good cheer tend to get <code>better results</code> than the alternative.</p>

        <p>So, whether your team is building something new, maintaining or updating something old, or just tackling tech debt, <code>reach out</code>. I'm happy to help.</p>
        <p>Best wishes!<span class="emoji" role="img" aria-label="Vulcan salute emoji">🖖</span></p>
      </div>
    </div> -->
  </div>
</template>

<script setup>
// import { ref, computed } from 'vue';
// import useWindowResize from '@/composables/useWindowResize.js';
// import { BREAKPOINTS } from '@/util/constants.js';

// Screen width
// const { globalState } = useWindowResize();
// const { md } = BREAKPOINTS;
// const isMobile = () => globalState.width < md;
// const isTablet = () => globalState.width >= md && globalState.width < lg;
// const revealHeight = isMobile() ? '1400px' : '950px'; 

// const isRevealed = ref(false);
// const reveal = ref(null);

// const revealStyle = computed(() => {
//   return {
//     visibility: isRevealed.value ? 'visible' : 'hidden',
//     maxHeight: isRevealed.value ? revealHeight : '0px'
//   };
// });

// var showText = function (target, msg, i, interval) {   
//   if (i < msg.length) {
//     $(target).append(msg[i++]);
//     setTimeout(showText, interval, target, msg, i, interval)
//   }
// }

// const handelFunPrint = (e) => {
//   console.log('e: ', e);
// };
// const handleBoringReveal = (e) => {
//   console.log('e: ', e);
// };
</script>

<style lang="scss" scoped>
.intro-section-wrapper {
  .logo-box {
    width: fit-content;
    padding: 1rem;
    margin: auto;
    background: #fff;
    border-radius: 50%;
  }
  .header-box {
    color: $color-text-dk;
    width: calc(100% - 1.5rem);
    padding: 0.1rem 2rem;
    margin: 3rem auto 0;
    background: #fff;
    border-radius: 0.5rem;
    @include md {
      width: 575px;
      margin: 2.5rem auto 0;
      border-radius: 4rem;
    }
    @include lg {
      width: 700px;
      margin: 2.75rem auto 0;
    }
  }
  .home-copy-wrapper {
    color: #fff;
    width: calc(100% - 1.5rem);
    padding: 0.5rem 1.5rem;
    margin: 0 auto;
    background: #000;
    border-radius: 0.75rem;
    @include md {
      width: 615px;
      padding: 1rem 3rem;
      margin: 0 auto 1rem;
      border-radius: 4rem;
    }
    @include lg {
      width: 775px;
      padding: 2rem 3rem;
      background: linear-gradient(to right, #000 75%, transparent);
    }
    .ctrl {
      button {
        color: $color-text-lt;
        margin: 0.5rem auto;
        max-width: 300px;
      }
    }
    .quotes {
      display: inline-block;
      font-size: 1em;
      transform: translateY(-5px);
    }
    p {
      text-align: center;
      padding-left: 0.25rem;
      margin: 1.5rem auto;
    }
    ul {
      list-style: disc;
      padding-left: 2rem;
    }
    li {
      &::marker {
        color: $color-success-lt;
      }
    }
  }
}
</style>
