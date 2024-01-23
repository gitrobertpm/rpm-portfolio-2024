<template>
  <h1>STYLE GUIDE</h1>
  <main class="style-guide">
    <hr>
    <div class="section">
      <h2>Buttons & Links</h2>

      <div class="text-block--lt flex--row--between" style="gap: 25px">
        <button class="btn btn--primary">Primary</button>
        <button class="btn btn--secondary">Secondary</button>
        <button class="btn btn-hover-styles">Hover</button>
        <button class="btn btn--active">Active</button>
        <button class="btn btn--focus">Focus</button>
        <button class="btn" disabled>Disabled</button>
      </div>

      <div class="text-block--dk flex--row--between" style="gap: 25px">
        <button class="btn btn--primary">Primary</button>
        <button class="btn btn--secondary">Secondary</button>
        <button class="btn btn-hover-styles">Hover</button>
        <button class="btn btn--active">Active</button>
        <button class="btn btn--focus">Focus</button>
        <button class="btn" disabled>Disabled</button>
      </div>

      <div class="text-block--lt flex--row--between" style="gap: 25px">
        <a href="#">Link</a>
        <a href="#" class="link--hover">Hover</a>
        <a href="#" class="link--active">Active</a>
        <a href="#" class="link--focus">Focus</a>
        <a href="#" class="link--visited">Visited</a>
        <a href="#" class="link--disabled" disabled>Disabled</a>
      </div>

      <div class="text-block--dk flex--row--between" style="gap: 25px">
        <a href="#">Link</a>
        <a href="#" class="link--hover">Hover</a>
        <a href="#" class="link--active">Active</a>
        <a href="#" class="link--focus">Focus</a>
        <a href="#" class="link--visited">Visited</a>
        <a href="#" class="link--disabled" disabled>Disabled</a>
      </div>

      <br>
      <br>
      <br>
    </div>
    <hr>

    <div class="section">
      <h2>Text Blocks</h2>

      <div class="text-block--dk">
          <p>This is a dark text block. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Here's a <a href="#">link</a>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Here's <a href="#">another link</a>, and <a href="#">here is a third link</a> dude.</p>
        </div>

        <div class="text-block--lt">
          <p>This is a light text block. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Here's a <a href="#">link</a>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Here's <a href="#">another link</a>, and <a href="#">here is a third link</a> dude.</p>
        </div>
        <hr>
    </div>

    <div class="section">
      <h2>Cards & Lists</h2>

      <div class="card--lt">
        <h3>Light Card</h3>
        <p>...with <code>p</code> tag and both unordered and ordered lists.</p>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
        <ol>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ol>
      </div>

      <div class="card--dk">
        <h3>Dark Card</h3>
        <p>...with <code>p</code> tag and both unordered and ordered lists.</p>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
        <ol>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ol>
      </div>
      <hr>
    </div>
    
    <div class="section">
      <h1>This is an h1 heading</h1>
      <h2>This is an h2 heading</h2>
      <h3>This is an h3 heading</h3>
      <h4>This is an h4 heading</h4>
      <h5>This is an h5 heading</h5>
      <h6>This is an h6 heading</h6>
      <hr>
    </div>

    <div class="section">
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
      <hr>
    </div>
  </main>
</template>

<style lang="scss" scoped>

.default {
  width: 90%;
  max-width: 1224px;
  padding: 10px 0px;
  margin: auto auto 50px;
}

.btn-hover-styles {
  color: $color-alert;
  border: 1px solid $color-dodger;
  box-shadow: 1px 1px 10px $color-dodger inset, -1px -1px 10px $color-dodger inset;
}
</style>
