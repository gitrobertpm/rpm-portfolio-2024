<template>
  <main class="main main__style-guide">
    <h1>STYLE GUIDE</h1>

    <div class="cutout--dk--fat">
      <p style="margin: 1rem auto">For now, this style guide is mostly a staging area where I can experiment with new features and styles. Eventually, this section will serve as an example of the final styles and reusable features in this portfolio. Which I hope will serve as a something of a template for bootstrapping future projects.</p>
    </div>

    <ASection 
      light
      borderless 
      hero 
      heading 
      subheading 
      text 
      footer
    >
      <template #hero>
        <img src="@/assets/img/logos/rpm-logos/vectors/rpm-logo-fill-sunset.svg" width="130px" alt="My Logo">
      </template>

      <template #heading>
        <h2>Light Section</h2>
      </template>

      <template #subheading>
        <h3>Reusable Component</h3>
      </template>

      <template #text>
        <p>This is a reusable <code>Section</code> component. The use of slots facilitates content injection. Which means the headings, this block of text, the footer below, and even the accordion after that are completely optional, adding to the component's flexibility.</p>
        <p>Modular Sass with a blend of helpful utility classes and BEM selectors makes this component more maintainable and a breeze to use with little-to-no added styles.</p>
      </template>

      <template #footer>
        <p><b>Section footer:</b> for <a href="Links">Links</a>, <button style="border: 1px solid rgba(0, 0, 0, 0.1)">Buttons</button>, notes, or whatever.</p>
      </template>

      <template #supplemental>
        <div class="flex--row--right">
          <OldAccordion theme="lt" heading text footer>
          <template #heading>
            <h3>Light Accordion</h3>
          </template>

          <template #text>
            <p>This is a reusable <code>Accordion</code> component. The use of slots facilitates content injection. Which means the headings, this block of text, the footer below, and even the accordion after that are completely optional, adding to the component's flexibility.</p>
            <p>Modular Sass with a blend of helpful utility classes and BEM selectors makes this component more maintainable and a breeze to use with little-to-no added styles.</p>
          </template>

          <div class="card-box">
            <ACard theme="red" heading text footer drawer>
              <template #heading>
                <h4>Red Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>

            <ACard theme="green" heading text footer drawer>
              <template #heading>
                <h4>Green Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>

            <ACard theme="blue" heading text footer drawer>
              <template #heading>
                <h4>Blue Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>

            <ACard theme="yellow" heading text footer drawer>
              <template #heading>
                <h4>Yellow Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>

            <ACard theme="lt" heading text footer drawer>
              <template #heading>
                <h4>Light Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>

            <ACard theme="dk" heading text footer drawer>
              <template #heading>
                <h4>Dark Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>            

            <ACard theme="clr" heading text footer drawer>
              <template #heading>
                <h4>Clear Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>
          </div>

          <template #footer>
            <p>This is a footer</p>
          </template>
        </OldAccordion>
        </div>
      </template>
    </ASection>

    <ASection
      hero 
      borderless
      heading 
      subheading 
      text 
      footer
    >
      <template #hero>
        <img src="@/assets/img/logos/rpm-logos/vectors/rpm-logo-stroke-sunset.svg" width="130px" alt="My Logo">
      </template>

      <template #heading>
        <h2>Dark Section</h2>
      </template>

      <template #subheading>
        <h3>Reusable Component</h3>
      </template>

      <template #text>
        <p>This is a reusable <code>Section</code> component. The use of slots facilitates content injection. Which means the headings, this block of text, the footer below, and even the accordion after that are completely optional, adding to the component's flexibility.</p>
        <p>Modular Sass with a blend of helpful utility classes and BEM selectors makes this component more maintainable and a breeze to use with little-to-no added styles.</p>
      </template>

      <template #footer>
        <p><b>Section footer:</b> for <a href="Links">Links</a>, <button style="color: #eee; border: 1px solid rgba(255, 255, 255, 0.1)">Buttons</button>, notes, or whatever.</p>
      </template>

      <template #supplemental>
        <OldAccordion theme="dk" heading text footer>
          <template #heading>
            <h3>Dark Accordion</h3>
          </template>

          <template #text>
            <p>This is a reusable <code>Accordion</code> component. The use of slots facilitates content injection. Which means the headings, this block of text, the footer below, and even the accordion after that are completely optional, adding to the component's flexibility.</p>
            <p>Modular Sass with a blend of helpful utility classes and BEM selectors makes this component more maintainable and a breeze to use with little-to-no added styles.</p>
          </template>

          <div class="card-box">
            <ACard theme="red" heading text footer drawer>
              <template #heading>
                <h4>Red Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>

            <ACard theme="green" heading text footer drawer>
              <template #heading>
                <h4>Green Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>

            <ACard theme="blue" heading text footer drawer>
              <template #heading>
                <h4>Blue Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>

            <ACard theme="yellow" heading text footer drawer>
              <template #heading>
                <h4>Yellow Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>

            <ACard theme="lt" heading text footer drawer>
              <template #heading>
                <h4>Light Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>

            <ACard theme="dk" heading text footer drawer>
              <template #heading>
                <h4>Dark Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>

            <ACard theme="clr" heading text footer drawer>
              <template #heading>
                <h4>Clear Card</h4>
              </template>

              <template #text>
                <p>This is a reusable card component</p>
              </template>

              <template #footer>
                <p>Footer</p>
              </template>

              <template #drawer>
                <OldAccordion borderless heading text footer>
                  <template #heading>
                    <h5>Clear Borderless Accordion</h5>
                  </template>

                  <template #text>
                    <p>Text content goes here.</p>
                  </template>

                  <template #footer>
                    <p>Footer</p>
                  </template>
                </OldAccordion>
              </template>
            </ACard>
          </div>

          <template #footer>
            <p>Footer</p>
          </template>
        </OldAccordion>
      </template>
    </ASection>

    <hr>
    <div class="cutout--dk">
      <h2>Cards — light, clear, dark</h2>
    </div>

    
    <div class="flex--row--left">
      <OldAccordion heading text footer>
        <template #heading>
          <h5>Clear Accordion</h5>
        </template>

        <template #text>
          <p>Text content goes here.</p>
        </template>
        <div class="card-box">
      <ACard theme="lt" heading text footer drawer>
        <template #heading>
          <h4>Light Card</h4>
        </template>

        <template #text>
          <p>This is a reusable card component</p>
        </template>

        <template #footer>
          <p>Footer</p>
        </template>

        <template #drawer>
          <OldAccordion borderless heading text footer>
            <template #heading>
              <h5>Clear Borderless Accordion</h5>
            </template>

            <template #text>
              <p>Text content goes here.</p>
            </template>

            <template #footer>
              <p>Footer</p>
            </template>
          </OldAccordion>
        </template>
      </ACard>

      <ACard theme="clr" heading text footer drawer>
        <template #heading>
          <h4>Clear Card</h4>
        </template>

        <template #text>
          <p>This is a reusable card component</p>
        </template>

        <template #footer>
          <p>Footer</p>
        </template>

        <template #drawer>
          <OldAccordion borderless heading text footer>
            <template #heading>
              <h5>Clear Borderless Accordion</h5>
            </template>

            <template #text>
              <p>Text content goes here.</p>
            </template>

            <template #footer>
              <p>Footer</p>
            </template>
          </OldAccordion>
        </template>
      </ACard>

      <ACard theme="dk" heading text footer drawer>
        <template #heading>
          <h4>Dark Card</h4>
        </template>

        <template #text>
          <p>This is a reusable card component</p>
        </template>

        <template #footer>
          <p>Footer</p>
        </template>

        <template #drawer>
          <OldAccordion borderless heading text footer>
            <template #heading>
              <h5>Clear Borderless Accordion</h5>
            </template>

            <template #text>
              <p>Text content goes here.</p>
            </template>

            <template #footer>
              <p>Footer</p>
            </template>
          </OldAccordion>
        </template>
      </ACard>
    </div>
    <div class="card-box">
      <ACard theme="dk" heading text footer drawer>
        <template #heading>
          <h4>Dark Card</h4>
        </template>

        <template #text>
          <p>This is a reusable card component</p>
        </template>

        <template #footer>
          <p>Footer</p>
        </template>

        <template #drawer>
          <OldAccordion borderless heading text footer>
            <template #heading>
              <h5>Clear Borderless Accordion</h5>
            </template>

            <template #text>
              <p>Text content goes here.</p>
            </template>

            <template #footer>
              <p>Footer</p>
            </template>
          </OldAccordion>
        </template>
      </ACard>

      <ACard theme="clr" heading text footer drawer>
        <template #heading>
          <h4>Clear Card</h4>
        </template>

        <template #text>
          <p>This is a reusable card component</p>
        </template>

        <template #footer>
          <p>Footer</p>
        </template>

        <template #drawer>
          <OldAccordion borderless heading text footer>
            <template #heading>
              <h5>Clear Borderless Accordion</h5>
            </template>

            <template #text>
              <p>Text content goes here.</p>
            </template>

            <template #footer>
              <p>Footer</p>
            </template>
          </OldAccordion>
        </template>
      </ACard>

      <ACard theme="lt" heading text footer drawer>
        <template #heading>
          <h4>Light Card</h4>
        </template>

        <template #text>
          <p>This is a reusable card component</p>
        </template>

        <template #footer>
          <p>Footer</p>
        </template>

        <template #drawer>
          <OldAccordion borderless heading text footer>
            <template #heading>
              <h5>Clear Borderless Accordion</h5>
            </template>

            <template #text>
              <p>Text content goes here.</p>
            </template>

            <template #footer>
              <p>Footer</p>
            </template>
          </OldAccordion>
        </template>
      </ACard>
    </div>
    <div class="card-box">
      <ACard theme="lt" heading text footer drawer>
        <template #heading>
          <h4>Light Card</h4>
        </template>

        <template #text>
          <p>This is a reusable card component</p>
        </template>

        <template #footer>
          <p>Footer</p>
        </template>

        <template #drawer>
          <OldAccordion borderless heading text footer>
            <template #heading>
              <h5>Clear Borderless Accordion</h5>
            </template>

            <template #text>
              <p>Text content goes here.</p>
            </template>

            <template #footer>
              <p>Footer</p>
            </template>
          </OldAccordion>
        </template>
      </ACard>
    </div>
    <div class="card-box">
      <ACard theme="clr" heading text footer drawer>
        <template #heading>
          <h4>Clear Card</h4>
        </template>

        <template #text>
          <p>This is a reusable card component</p>
        </template>

        <template #footer>
          <p>Footer</p>
        </template>

        <template #drawer>
          <OldAccordion borderless heading text footer>
            <template #heading>
              <h5>Clear Borderless Accordion</h5>
            </template>

            <template #text>
              <p>Text content goes here.</p>
            </template>

            <template #footer>
              <p>Footer</p>
            </template>
          </OldAccordion>
        </template>
      </ACard>
    </div>
    <div class="card-box">
      <ACard theme="dk" heading text footer drawer>
        <template #heading>
          <h4>Dark Card</h4>
        </template>

        <template #text>
          <p>This is a reusable card component</p>
        </template>

        <template #footer>
          <p>Footer</p>
        </template>

        <template #drawer>
          <OldAccordion borderless heading text footer>
            <template #heading>
              <h5>Clear Borderless Accordion</h5>
            </template>

            <template #text>
              <p>Text content goes here.</p>
            </template>

            <template #footer>
              <p>Footer</p>
            </template>
          </OldAccordion>
        </template>
      </ACard>
    </div>
        <template #footer>
          <p>Footer</p>
        </template>
      </OldAccordion>
    </div>

    <br>
    <hr>

    <ASection 
      light 
      hero
      heading
      subheading
    >
      <template #hero>
        <img src="@/assets/img/logos/rpm-logos/vectors/rpm-logo-fill-sunset.svg" width="130px" alt="My Logo">
      </template>

      <template #heading>
        <h2>Light Section</h2>
      </template>

      <template #subheading>
        <h3>Links & Buttons</h3>
      </template>

      <template #supplemental>
        <div class="flex--row--right">
          <OldAccordion theme="lt" heading text footer>
            <template #heading>
              <h3>Light Accordion</h3>
            </template>

            <template #text>
              <p>Text content goes here.</p>
            </template>
            <div class="flex--row--se--wrap gap--10 pad-xy--10 mar-xy--10">
              <a href="#">Link</a>
              <a href="#" class="link--hover">Hover</a>
              <a href="#" class="link--active">Active</a>
              <a href="#" class="link--focus">Focus</a>
              <a href="#" class="link--focus-visible">Focus Visible</a>
              <a href="#" class="link--visited">Visited</a>
              <a href="#" class="link--disabled" disabled>Disabled</a>
            </div>
            <div class="flex--row--se gap--10 pad-xy--10 mar-xy--10">
              <button class="btn btn--primary">Primary</button>
              <button class="btn btn--secondary">Secondary</button>
            </div>
            <div class="flex--row--sa gap--10 pad-xy--10 mar-xy--10">
              <button class="btn btn--hover">Hover</button>
              <button class="btn btn--active">Active</button>
              <button class="btn btn--focus">Focus</button>
              <button class="btn btn--focus-visible">Focus Visible</button>
              <button class="btn" disabled>Disabled</button>
            </div>

            <template #footer>
              <p>This is a footer.</p>
            </template>
          </OldAccordion>
        </div>
      </template>
    </ASection>

    <ASection
      hero
      heading
      subheading
    >
      <template #hero>
        <img src="@/assets/img/logos/rpm-logos/vectors/rpm-logo-stroke-sunset.svg" width="130px" alt="My Logo">
      </template>

      <template #heading>
        <h2>Dark Section</h2>
      </template>

      <template #subheading>
        <h3>Links & Buttons</h3>
      </template>

      <template #supplemental>
        <OldAccordion theme="dk" heading text footer>
          <template #heading>
            <h3>Dark Accordion</h3>
          </template>

          <template #text>
            <p>Text content goes here.</p>
          </template>
          <div class="flex--row--se--wrap gap--10 pad-xy--10 mar-xy--10">
            <a href="#">Link</a>
            <a href="#" class="link--hover">Hover</a>
            <a href="#" class="link--active">Active</a>
            <a href="#" class="link--focus">Focus</a>
            <a href="#" class="link--focus-visible">Focus Visible</a>
            <a href="#" class="link--visited">Visited</a>
            <a href="#" class="link--disabled" disabled>Disabled</a>
          </div>
          <div class="flex--row--se gap--10 pad-xy--10 mar-xy--10">
            <button class="btn btn--primary">Primary</button>
            <button class="btn btn--secondary">Secondary</button>
          </div>
          <div class="flex--row--sa gap--10 pad-xy--10 mar-xy--10">
            <button class="btn btn--hover">Hover</button>
            <button class="btn btn--active">Active</button>
            <button class="btn btn--focus">Focus</button>
            <button class="btn btn--focus-visible">Focus Visible</button>
            <button class="btn" disabled>Disabled</button>
          </div>
          <template #footer>
            <p>Footer.</p>
          </template>
        </OldAccordion>
      </template>
    </ASection>

    <!-- <div class="section">
      <div class="cutout--dk">
        <h2>Text, Lists & imgs</h2>
      </div>

      <div class="card--lt">
        <h3>Light Card</h3>
        <div class="text-block--lt">
          <p>Here's some <code>&lt;p&gt;</code> and <code>&lt;a&gt;</code> tags in a <code>&lt;div class="text-block--lt"&gt;</code>. Here's a <a href="#">link</a>, and <a href="#">here's another link</a>.</p>
          <p>And here's a second <code>&lt;p&gt;</code> tag dude.</p>
        </div>
        <div class="text-block--lt">
          <p>Here's a <code>&lt;ul&gt;</code> with four <code>&lt;li&gt;</code> tags.</p>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>

        </div>
        
        <div class="text-block--lt">
          <p>Here's an <code>&lt;ol&gt;</code> with four <code>&lt;li&gt;</code> tags.</p>
          <ol>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ol>
        </div>
        
      </div>

      <div class="card--dk">
        <h3>Dark Card</h3>
        <div class="text-block--dk">
          <p>Here's some <code>&lt;p&gt;</code> and <code>&lt;a&gt;</code> tags in a <code>&lt;div class="text-block--dk"&gt;</code>. Here's a <a href="#">link</a>, and <a href="#">here's another link</a>.</p>
          <p>And here's a second <code>&lt;p&gt;</code> tag dude.</p>
        </div>
        <div class="text-block--dk">
          <p>Here's a <code>&lt;ul&gt;</code> with four <code>&lt;li&gt;</code> tags.</p>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
        
        <div class="text-block--dk">
          <p>Here's an <code>&lt;ol&gt;</code> with four <code>&lt;li&gt;</code> tags.</p>
          <ol>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ol>
        </div>
        
      </div>
    </div> -->
    
    <!-- <div class="section">
      <h1>This is an h1 heading</h1>
      <div class="cutout--lt">
        <h2>This is an h2 heading</h2>
      </div>
      <div class="cutout--dk">
        <h3>This is an h3 heading</h3>
      </div>
      <div class="cutout--lt">
        <h4>This is an h4 heading</h4>
      </div>
      <div class="cutout--dk">
        <h5>This is an h5 heading</h5>
      </div>
      <div class="cutout--lt">
        <h6>This is an h6 heading</h6>
      </div>
    </div> -->

    <!-- <div class="section section-icons">
      <div class="cutout--dk">
        <h2>Icons</h2>
      </div>
      <div class="cutout--lt flex--row--around">
        <IconHamburger />
        <IconHome />
        <IconProjects />
        <IconAbout />
        <IconContact />
        <IconStyleguide />
        <IconClose />
      </div>

      <div class="cutout--lt flex--row--around">
        <DocumentationIcon />
        <ToolingIcon />
        <EcosystemIcon />
        <CommunityIcon />
        <SupportIcon />
      </div>
    </div> -->

    <!-- <div class="section section--fonts">
      <div class="card--lt">
        <h2>Web Safe Fonts</h2>
        <div class="text-block--lt">
          <h3 class="text-block-heading">Copy</h3>
          <p style="font-family: Tahoma, sans-serif">Tahoma (sans-serif)</p>
          <p style="font-family: 'Trebuchet MS', sans-serif">Trebuchet MS (sans-serif)</p>
          <p style="font-family: Verdana, sans-serif">Verdana (sans-serif)</p>
          <p style="font-family: Arial, sans-serif">Arial (sans-serif)</p>
        </div>

        <div class="text-block--dk">
          <h3 class="text-block-heading">Headings</h3>
          <p style="font-family: Georgia, serif">Georgia (serif)</p>
          <p style="font-family: Garamond, serif">Garamond (serif)</p>
          <p style="font-family: 'Times New Roman', serif">Times New Roman (serif)</p>
        </div>

        <div class="text-block--lt">
          <h3 class="text-block-heading">Code</h3>
          <p style="font-family: 'Courier New', monospace">Courier New (monospace)</p>
        </div>

        <div class="text-block--dk">
          <h3 class="text-block-heading">Buttons</h3>
          <p style="font-family: 'Brush Script MT', cursive">Brush Script MT (cursive)</p>
        </div>
      </div>
    </div> -->
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import ASection from '@/components/reusables/ASection.vue';
import OldAccordion from '@/components/reusables/OldAccordion.vue';
import ACard from '@/components/reusables/ACard.vue';
// import IconHamburger from '@/components/icons/IconHamburger.vue';
// import IconHome from '@/components/icons/IconHome.vue';
// import IconProjects from '@/components/icons/IconProjects.vue';
// import IconAbout from '@/components/icons/IconAbout.vue';
// import IconContact from '@/components/icons/IconContact.vue';
// import IconStyleguide from '@/components/icons/IconStyleguide.vue';
// import IconClose from '@/components/icons/IconClose.vue';
// import DocumentationIcon from '@/components/icons/IconDocumentation.vue';
// import ToolingIcon from '@/components/icons/IconTooling.vue';
// import EcosystemIcon from '@/components/icons/IconEcosystem.vue';
// import CommunityIcon from '@/components/icons/IconCommunity.vue';
// import SupportIcon from '@/components/icons/IconSupport.vue';

const initialize = () => window.scrollTo(0,0);
onMounted(initialize);
</script>

<style lang="scss" scoped>
.section-icons {
  svg {
    width: 75px;
    height: 75px;
  }
}
.default {
  width: 90%;
  max-width: 1224px;
  padding: 10px 0px;
  margin: auto auto 50px;
}
.last-row::after {
  content: "";
  flex: auto;
}
</style>
