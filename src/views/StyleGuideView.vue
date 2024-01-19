<template>
  <main class="style-guide">
    <h1>This is an h1 heading</h1>
    <h2>This is an h2 heading</h2>
    <h3>This is an h3 heading</h3>
    <h4>This is an h4 heading</h4>
    <h5>This is an h5 heading</h5>
    <h6>This is an h6 heading</h6>

    <br>
    <hr>
    <br>

    <h1>Cards</h1>

    <div style="display: flex; flex-direction: column; max-width: 1224px; padding: 10px 10px 15px">
      <div class="text-card-dk">
        <p style="max-width: 700px">This is a dark text card. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Here's a <a href="#">link</a>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Here's <a href="#">another link</a>, and <a href="#">here is a third link</a> dude.</p>
      </div>

      <br>
      <br>
      <br>

      <div class="text-card-lt">
        <p style="max-width: 700px">This is a light text card. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Here's a <a href="#">link</a>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Here's <a href="#">another link</a>, and <a href="#">here is a third link</a> dude.</p>
      </div>
    </div>

    <br>
    <br>
    <br>

    <div style="display: flex; flex-direction: column; max-width: 1224px; padding: 10px 10px 15px">
      <div class="img-card-dk">
        <p style="max-width: 700px">This is a dark img card. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Here's a <a href="#">link</a>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Here's <a href="#">another link</a>, and <a href="#">here is a third link</a> dude.</p>
      </div>

      <br>
      <br>
      <br>

      <div class="img-card-lt">
        <p style="max-width: 700px">This is a light img card. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Here's a <a href="#">link</a>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Here's <a href="#">another link</a>, and <a href="#">here is a third link</a> dude.</p>
      </div>
    </div>

    <br>
    <hr>
    <br>

    <h1>Lists</h1>

    <div class="text-card-lt">
      <div style="display: flex; justify-content: flex-start; max-width: 420px; padding: 10px 10px 15px">
        <ul>
          <li>Unordered</li>
          <li>List</li>
          <li>With</li>
          <li>Items</li>
        </ul>
        <ol>
          <li>Ordered</li>
          <li>List</li>
          <li>With</li>
          <li>Items</li>
        </ol>
      </div>
    </div>

    <div class="text-card-dk">
      <div style="display: flex; justify-content: flex-start; max-width: 420px; padding: 10px 10px 15px">
        <ul>
          <li>Unordered</li>
          <li>List</li>
          <li>With</li>
          <li>Items</li>
        </ul>
        <ol>
          <li>Ordered</li>
          <li>List</li>
          <li>With</li>
          <li>Items</li>
        </ol>
      </div>
    </div>

    <br>
    <hr>
    <br>

    <h1>Buttons</h1>
    <div style="display: flex; flex-flow: row wrap; justify-content: space-between; width: 90%; max-width: 1224px; padding: 10px 10px 15px">
      
      <br>
      <button class="btn-primary">Primary</button>
      <button class="btn-secondary">Secondary</button>
      <button class="btn-hover">Hover</button>
      <button class="btn-focus">Focus</button>
      <button class="btn-active">Active</button>
      <button class="btn-disabled">Disabled</button>
    </div>

    <br>
    <hr>
    <br>

    <h1>Fonts</h1>

    <p style="font-family: Arial, sans-serif">Arial (sans-serif)</p>
    <p style="font-family: Verdana, sans-serif">Verdana (sans-serif)</p>
    <p style="font-family: Tahoma, sans-serif">Tahoma (sans-serif)</p>
    <p style="font-family: 'Trebuchet MS', sans-serif">Trebuchet MS (sans-serif)</p>
    <p style="font-family: 'Times New Roman', serif">Times New Roman (serif)</p>
    <p style="font-family: Georgia, serif">Georgia (serif)</p>
    <p style="font-family: Garamond, serif">Garamond (serif)</p>
    <p style="font-family: 'Courier New', monospace">Courier New (monospace)</p>
    <p style="font-family: 'Brush Script MT', cursive">Brush Script MT (cursive)</p>

    <br>
    <hr>
    <br>
  </main>
</template>