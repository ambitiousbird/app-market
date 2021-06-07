<template>
  <div class="about-us">
    <div class="banner">
      <img src="../assets/about-us.jpg" alt="" />
      <div class="banner-content">
        <h1>About Us</h1>
        <p>{{ aboutUs.introduction }}</p>
      </div>
    </div>

    <div class="clients">
      <h2>Our previous clients include:</h2>
      <div class="img-container">
        <img src="../assets/shu-uemura-logo-vector.svg" alt="" />
        <img src="../assets/Jurlique-logo.jpeg" alt="" />
        <img src="../assets/Audemars_Piguet.png" alt="" />
        <img src="../assets/Mercedes-Benz_Logo.png" alt="" />
        <img src="../assets/PGA_Tour_logo_R.png" alt="" />
        <img src="../assets/T&T_Supermarket_Logo.png" alt="" />
      </div>
    </div>

    <div class="services">
      <h2>Some of our services include:</h2>
      <div class="card-container">
        <div
          class="card card-shadow"
          v-for="(service, index) in aboutUs.serviceCategory"
          v-bind:key="index"
        >
          <img
            v-if="index === 0"
            src="../assets/wechat-payment.jpg"
            alt="wechat payment"
          />
          <img
            v-if="index === 1"
            src="../assets/wechat-marketing.png"
            alt="wechat marketing"
          />
          <img
            v-if="index === 2"
            src="../assets/influencer.jpg"
            alt="influencer"
          />
          <img
            v-if="index === 3"
            src="../assets/social-media.jpg"
            alt="social media management"
          />
          <img
            v-if="index === 4"
            src="../assets/di-consulting.jpg"
            alt="domestic and international consulting"
          />
          <img
            v-if="index === 5"
            src="../assets/event.jpg"
            alt="event and compaign planning"
          />
          <div class="service-content">
            <h3>{{ service.serviceItem }}</h3>
            <div v-if="service.paymentMethods">
              {{ service.paymentMethods }}
            </div>
            <div class="description">{{ service.description }}</div>
            <router-link :to="service.path">{{ findOurMore }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import aboutUs from "../content/about-us.json";
const findOurMore = "Find Our More";
</script>

<style lang = "scss" scoped >
.about-us {
  margin: 6rem auto;
  @media only screen and (max-width: 768px) {
      margin: 4rem auto;
  }
  /* @media only screen and (max-width:600px){
    margin: 1rem auto;
  } */
}

.banner {
  img {
    filter: brightness(65%);
  }
  .banner-content {
    @media only screen and (max-width: 768px) {
      top: 60%;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-top: 8rem;
  }
}

.clients {
  margin: 3rem auto;
  h2 {
    font-size: 2rem;
    margin-left: 2rem;
  }

  .img-container {
    margin: 3rem auto;
    display: flex;
    flex-wrap: wrap;
    img {
      max-width: 226px;
      padding: 1rem 3rem;
      object-fit: contain;
    }

    @media only screen and (max-width: 1024px) {
      margin: 0;
      img {
        max-width: 200px;
        max-height:135px;
        padding: 1rem 3rem;
        object-fit: contain;
        margin: 0 auto;
      }
    }
  }
}

.services {
  margin: auto 1rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  h3 {
    margin: 1.5rem auto;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card {
      position: relative;
      font-family: Calibre, Helvetica, Arial, sans-serif;
      transition: 0.3s;
      width: 500px;
      height: 620px;
      margin: 2rem auto;
      img {
        object-fit: cover;
        max-width: 500px;
        max-height: 400px;
        min-height: 375px;
        @media only screen and (max-width: 768px) {
          width: 100%;
        }
      }

      @media only screen and (max-width: 768px) {
        width: 100%;
        height: 660px;
      }
      .service-content {
        padding: 2px 16px;
        font-size: 1.1rem;

        a {
          bottom: 5%;
          color: black;
          display: inline-block;
          text-decoration: none;
          /* transform: ; */
          position: absolute;
          bottom: 5%;
          left: 50%;
          transform: translate(-50%, 0);

          &:hover {
            color: rgb(148, 158, 12);
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
