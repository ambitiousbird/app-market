<template>
  <footer class="footer">
    <div class="footer__addr">
      <h1 class="footer__logo">APP Marketing</h1>
      <address>
        5534 Somewhere In. The World 22193-10212<br />
        <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
      </address>
    </div>

    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title">Explore</h2>

        <ul class="nav__ul">
          <li>
            <router-link to="/about-us">About Us</router-link>
          </li>
          <li>
            <router-link to="/clients">Our Clients</router-link>
          </li>
        </ul>
      </li>
      <li class="nav__item">
        <h2 class="nav__title">Consulting Services</h2>

        <ul class="nav__ul">
          <li>
            <router-link to="/consulting-services#di-consulting"
              >Domestic & International Consulting</router-link
            >
          </li>
          <li>
            <router-link to="/consulting-services#ec-planning"
              >Event and Campaign Planning</router-link
            >
          </li>
        </ul>
      </li>

      <li class="nav__item nav__item--extra">
        <h2 class="nav__title">Marketing Services</h2>
        <ul class="nav__ul nav__ul--extra">
          <li>
            <router-link to="/marketing-services#digital-payments"
              >Digital Payments</router-link
            >
          </li>
          <li>
            <router-link to="/marketing-services#wechat-marketing"
              >WeChat Marketing</router-link
            >
          </li>
          <li>
            <router-link to="/marketing-services#yt-marketing"
              >YouTube Marketing</router-link
            >
          </li>
          <li>
            <router-link to="/marketing-services#ins-marketing"
              >Instagram Marketing</router-link
            >
          </li>
          <li>
            <router-link to="/marketing-services#sm-audit"
              >Social Media Audit</router-link
            >
          </li>
          <li>
            <router-link to="/marketing-services#ik-marketing"
              >Influencer/KOL Marketing</router-link
            >
          </li>
        </ul>
      </li>

    </ul>

    <div class="legal">
      <p>Copyright &copy; 2021 www.appmarketing.ca All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang = "scss" scoped >
.footer {
  min-height:320px;
  display: flex;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  color: #2f2f2f;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
}

.footer > * {
  flex: 1 100%;
}

.footer__addr {
  margin-right: 1.25em;
  margin-bottom: 2em;
  @media only screen and (max-width: 1068px) {
    address {
      a {
        margin: 2rem auto;
      }
    }
  }
}

/* .footer__logo {
  font-family: "Pacifico";
  font-weight: 400;
  font-size: 1.5rem;
} */

.footer__addr h2 {
  margin-top: 1.3em;
  font-size: 15px;
  font-weight: 400;
}

.nav__title {
  font-weight: 400;
  font-size: 15px;
}

.footer address {
  font-style: normal;
  color: #999;
}

.footer__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: rgb(33, 33, 33, 0.07);
  border-radius: 100px;
  color: #2f2f2f;
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  padding: 0 1.3em;
}

.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer li {
  line-height: 2em;
}

.footer a {
  text-decoration: none;
}

.footer__nav {
  display: flex;
  flex-flow: row wrap;
}

.footer__nav > * {
  flex: 1 50%;
  margin-right: 1.25em;
}

.nav__ul a {
  color: #999;
}

.nav__ul--extra {
  column-count: 2;
  column-gap: 1.25em;
}

.legal {
  /* text-align: center; */
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  color: #999;
}

/* .legal__links {
  display: flex;
  align-items: center;
}


@media screen and (min-width: 24.375em) {
  .legal .legal__links {
    margin-left: auto;
  }
} */

@media screen and (min-width: 40.375em) {
  .footer__nav > * {
    flex: 1;
  }

  /* .nav__item--extra {
    flex-grow: 2;
  } */

  .footer__addr {
    flex: 1 0px;
  }

  .footer__nav {
    flex: 3 0px;
  }

  .nav__item:first-child{
    padding-left:2rem;
  }
}
</style>
