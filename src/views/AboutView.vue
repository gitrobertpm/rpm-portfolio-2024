<template>
  <main class="main main__about">
    <h1>ABOUT</h1>

    <div class="grid">
      <div class="box">a</div>
      <div class="box">b</div>
      <div class="box">c</div>
      <div class="box">d</div>
      <div class="box">e</div>
      <div class="box">f</div>
      <div class="box">g</div>
      <div class="box">h</div>
      <div class="box">i</div>
      <div class="box">j</div>
      <div class="box">k</div>
      <div class="box">l</div>
      <div class="box">m</div>
      <div class="box">n</div>
    </div>
  </main>
</template>

<style>
.grid {
  display: grid;
  grid-template-rows: 200px;
  grid-template-columns: repeat(4, 1fr);
}

.box {
  border: 1px solid red;
}
</style>
