<template>
  <ACard theme="blue" heading drawer>
    <template #heading>
      <h2>Bio</h2>
    </template>
    <template #drawer>
      <!-- <AnAccordion theme="clr" :btnTheme="isMobile() ? 'dk' : 'lt'" borderless @accordionClick="accordionClick"> -->
      <div class="bio-wrapper">
        <ACard theme="blue" drawer>
          <template #drawer>
            <ADrawer>
              <template #heading>
                <h6 class="intro">I didn't start out in tech</h6>
              </template>
              <template #content>
                <div class="details">
                  <p>Before that my background was in construction and the service industry.</p>
                  <p>The trades satisfied my love of problem solving, fixing things and figuring out how things work. And Bartending was a lot of fun. And I was good at both. But neither was my end game.</p>
                  <p>When my son was diagnosed with Autism, I volunteered to stay home with the kids. There was no other option really. It was rewarding, but once they were all in school full time, I needed to get back to work. But starting over in construction or the service industry lacked appeal.</p>
                  <p>The search for something new led to web development. I had long held the misconception that it was only for the extremely gifted. Learning I was wrong was one of the best discoveries of my life.</p>
                  <p>In 2014 I found some great online resources and I started learning some basic HTML and CSS — like a fish to water. Moved on to JavaScript and the die was cast. When I first designed and programmed my very own little web application, I knew what I wanted to do when I grew up.</p>
                  <p>Studied for a couple years and found a part time contract role as a student mentor at an online coding school. Kept learning and it turned into a full time role. A short time later I was running the Front End Web Development bootcamp, then the Full Stack JavaScript bootcamp.</p>
                  <p>Mentoring was fun and rewarding, but I wanted to write code. In 2021, I accepted a short term contract role as a Front-end React Developer to work on a large e-commerce application offering customizable athletic uniforms and accessories.</p>
                  <p>That first real developer job was scary and challenging, but I learned a lot and grew as a result.</p>
                  <p>In 2022, I accepted a Front-end Vue Developer role to work on 3D product customizer applications that were deployed on the web applications of major brands like XBOX, Hydro Flask, and JBL to name a few.</p>
                  <p>My second real developer job was less scary and less challenging, but more fun, and I learned and grew even more.</p>
                  <p>Unfortunately, changes in the client roster resulted in the elimination of positions and mine was among them. So now I'm looking forward to the next chapter and my next developer role with great enthusiasm.</p>
                  <p>I'm hoping for something long term and remote on a supportive team, but I'm flexible and open to any new opportunities.</p>
                  <div class="flex--row--cent">
                    <p><span class="emoji" role="img" aria-label="Walking emoji">🚶‍♂️</span></p>
                  </div>
                </div>
              </template>
            </ADrawer>
          </template>
        </ACard>
      </div>
    </template>
  </ACard>
</template>

<script setup>
import ACard from '@/components/reusables/ACard.vue';
import ADrawer from '../reusables/ADrawer.vue';
</script>

<style lang="scss" scoped>
.card {
  margin: 0 auto;
  @include sm {
    width: 100%;
    margin: 0;
  }
  h2 {
    color: #fff;
  }
  .bio-wrapper {
    height: 100%;
    margin-top: 0;
    padding: 0.5rem;
    border-radius: 0 0 0.75rem 0.75rem;
    color: $color-text-lt;
    background: $color-text-dk;
    @include md {
      padding: 1rem;
    }
    .intro {
      margin: 2rem auto;
    }
    .details {
      padding: 0 1rem 1rem;
    }
  }
  .emoji {
    font-size: 1.5rem;
  }
}
</style>
