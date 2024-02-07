<template>
  <div class="intro-section-wrapper">

    <div class="logo-box">
      <img src="@/assets/img/logos/rpm-logos/vectors/rpm-logo-fill-sunset.svg" width="130px" alt="My Logo">
    </div>

    <div class="header-box">
      <h4>Portfolio - 2024</h4>
    </div>

    <div class="home-copy-wrapper">
      <p>I've worked on a number of production applications with some amazing, diverse and remote teams in <code>Agile</code>-like, <code>CI/CD</code> environments. Some of those projects live on web apps for <code>XBOX</code>, <code>Hydro Flask</code> and <code>Leatherman</code>, among others.</p>

      <p>Most of my experience is building things with <code>JavaScript</code> FE libraries, <code>React</code> and <code>Vue</code>, and styling them with <code>CSS</code>/<code>Ssas</code>. But I have worked with Backend and database technologies as well.</p>
      <p>My contributions have included:</p>
      <ul>
        <li>new features</li>
        <li>bug fixes</li>
        <li>style refactors</li>
        <li>accessibility updates</li>
        <li>dependency and version updates</li>
        <li>unit tests</li>
        <li>internationalization</li>
        <li>documentation</li>
      </ul>

      <p>But perhaps the most valuable asset I bring is an optimistic and encouraging attitude. What fuels this positive temperament? I'm a bit of a people-pleaser. I dislike conflict and when others feel bad. And a friendly smile and good cheer tend to get <code>better results</code> than the alternative.</p>

      <p>So, whether your team is building something new, maintaining or updating something old, or just tackling tech debt, <code>reach out</code>. I'm happy to help.</p>
      <p>Best wishes!<span class="emoji" role="img" aria-label="Vulcan salute emoji">🖖</span></p>
    </div>
  </div>
</template>

<script setup></script>

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
    margin: 1rem auto;
    background: #fff;
    border-radius: 0.5rem;
    @include md {
      width: 575px;
      border-radius: 4rem;
    }
    @include lg {
      margin: 2rem auto;
      width: 700px;
    }
  }
  .home-copy-wrapper {
    color: #fff;
    width: calc(100% - 1.5rem);
    padding: 0.5rem 1.5rem;
    margin: 1rem auto;
    background: #000;
    border-radius: 0.75rem;
    @include md {
      width: 615px;
      padding: 1rem 3rem;
      border-radius: 4rem;
    }
    @include lg {
      width: 775px;
      padding: 2rem 3rem;
      margin: 2rem auto;
      background: linear-gradient(to right, #000 75%, transparent);
    }
    p {
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
