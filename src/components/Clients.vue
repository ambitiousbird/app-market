<template>
  <div class="clients">
    <div class="title">
      <h1>Our Clients</h1>
    </div>
    <div v-for="(content, index) in clients.content" :key="index">
      <div v-if="index === 0" class="social-media">
        <img src="../assets/wechat.svg" alt="wechat logo" />
        <img src="../assets/tiktok.svg" alt="tiktok logo" />
        <img src="../assets/sina-weibo.svg" alt="Sina weibo logo" />
        <img src="../assets/youtube.svg" alt="youtube logo" />
        <img src="../assets/instagram.svg" alt="instagram logo" />
      </div>
      <div v-if="index == 1" class="up-arrow">
        <img src="../assets/up.jpg" alt="up arrow" />
      </div>
      <div v-if="index == 2" class="community">
        <img src="../assets/community.jpg" alt="community" />
      </div>
      <div class="paragraph">{{ content.item }}</div>
    </div>
  </div>
</template>

<script setup>
import clients from "../content/clients.json";
</script>

<style lang = "scss" scoped >
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");

.clients {
  margin-bottom: 10rem;
  margin-top: 6rem;
  @media only screen and (max-width: 768px) {
    margin-top: 12rem;
  }
}

.title {
  padding: 8rem 9rem;
  background-color: rgb(105, 103, 103);
  h1 {
    color: white;
    font-size: 5rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 8rem 0;
    width: 100%;
    h1 {
      font-size: 3rem;
    }
  }
}

.social-media {
  margin: 3rem auto;
  display: flex;
  width: 450px;
  img {
    /* width:10%; */
    max-width: 100px;
    min-width: 70px;
    padding: 0 1rem;

    @media only screen and (max-width: 768px) {
      margin: auto;
      width: 40px;
      min-width: 60px;
      max-height: 50px;
      padding: 0 1rem;
    }

    @media only screen and (max-width: 1024px) {
      max-height: 75px;
    }
  }
  @media only screen and (max-width: 1024px) {
    width: auto;
    margin: 3rem 12px;
  }
}

.up-arrow,
.community {
  padding-top: 4rem;
  width: 640px;
  margin: 0 auto;
  object-fit: contain;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
}

.paragraph {
  padding: 1rem 5rem;
  max-width: 80%;
  margin: 0 auto;
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
    font-size: 1rem;
  }
}

@media only screen and (max-width: 768px) {
  img {
    width: 300px;
    display: block;
    margin: auto;
  }
}
</style>
