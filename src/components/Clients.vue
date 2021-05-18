<template>
  <div class="clients">
    <div class="title">
      <h1>Our Clients</h1>
    </div>
    <div v-for="(content, index) in clients.content" :key="index">
            <div v-if="index===0" class="social-media">
                <img src="../assets/wechat.svg" alt="wechat logo">
                <img src="../assets/tiktok.svg" alt="tiktok logo">
                <img src="../assets/youtube.svg" alt="youtube logo">
                <img src="../assets/instagram.svg" alt="instagram logo">
            </div>
        <div v-if="index==1" class="up-arrow">
            <img src="../assets/up.jpg" alt="up arrow">
        </div>
        <div v-if="index==2" class="community">
            <img src="../assets/community.jpg" alt="community">
        </div>
      <div class="paragraph">{{ content.item }}</div>
    </div>
  </div>
</template>

<script setup>
import clients from "../content/clients.json";
</script>

<style lang = "scss" scoped >
@import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');


.clients{
    margin-bottom: 10rem;
}

.paragraph {
  padding: 1rem 5rem;
  max-width: 80%;
  margin: 0 auto;
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
}

.title{
    padding: 2rem 10%;
    background-color: rgba(226, 225, 225, 0.74);
    font-family: 'Viga', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;

    h1{
        color:rgb(36, 35, 35);
    }
}

.social-media{
    margin:3rem auto;
    display:flex;
    width:450px;
    img{
        /* width:10%; */
        max-width: 100px;
        min-width: 70px;
        padding: 0 1rem;
    }
}

.up-arrow, .community{
    padding-top: 4rem;
    width:640px;
    margin: 0 auto;
}


</style>
