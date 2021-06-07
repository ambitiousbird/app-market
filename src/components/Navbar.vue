<template>
  <nav class="navbar" v-bind:class="{ homepage: isHomepage }">
    <router-link to="/">Home</router-link>
    <router-link to="/about-us">About Us</router-link>
    <div class="dropdown">
      <button class="dropbtn" @click="$router.push('marketing-services')">
        Marketing Services
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <router-link to="/marketing-services#digital-payments"
          >Digital Payments</router-link
        >
        <router-link to="/marketing-services#wechat-marketing"
          >WeChat Marketing</router-link
        >
        <router-link to="/marketing-services#yt-marketing"
          >YouTube Marketing</router-link
        >
        <router-link to="/marketing-services#ins-marketing"
          >Instagram Marketing</router-link
        >
        <router-link to="/marketing-services#sm-audit"
          >Social Media Audit</router-link
        >
        <router-link to="/marketing-services#ik-marketing"
          >Influencer/KOL Marketing</router-link
        >
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn" @click="$router.push('consulting-services')">
        Consulting Services
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <router-link to="/consulting-services#di-consulting"
          >Domestic & International Consulting</router-link
        >
        <router-link to="/consulting-services#ec-planning"
          >Event and Campaign Planning</router-link
        >
      </div>
    </div>
    <router-link to="/clients">Our Clients</router-link>
    <router-link to="/contact">Contact Us</router-link>
  </nav>
</template>

<script >
let prevScrollpos = window.pageYOffset;
let shouldhide = false;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 280 || prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar")[0].style.top = "0";
  } else {
    document.getElementsByClassName("navbar")[0].style.top = "-200px";
    document.getElementsByClassName("navbar")[0].style.transition = "top .6s";
  }
  prevScrollpos = currentScrollPos;
};

export default {
  computed: {
    isHomepage: function () {
      return this.$route.path === "/";
    },
  },
};

// document.addEventListener("DOMContentLoaded", function (e) {
//   let dropdownItems = document.getElementsByClassName("dropdown-content");
//   console.log(dropdownItems);
//   for (let i = 0; i < dropdownItems.length; i++) {
//     dropdownItems[i].onclick =function(){
//       console.log("clicked")
//       dropdownItems[i].style.display = 'none';
//     };
//   }
// });
</script>

<style lang="scss" scoped>
@mixin underline-stroke {
  &:after,
  :before {
    transition: all 0.5s;
  }

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: ".";
    color: transparent;
    background: rgb(110, 107, 107);
    height: 2px;
  }

  &:hover:after {
    width: 100%;
  }
}

.navbar {
  box-shadow: 0 0 6px 0;
  z-index: 100;
  position: fixed;
  width: 100%;
  background-color: white;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  > a {
    @include underline-stroke;
  }
}

.navbar a {
  float: left;
  font-size: 18px;
  color: black;
  text-align: center;
  padding: 14px 22px;
  text-decoration: none;
  position: relative;
}

.dropdown {
  float: left;
  // overflow: hidden;
}

.dropdown .dropbtn {
  position: relative;
  font-size: 18px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 22px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  @include underline-stroke;

  &:hover {
    cursor: pointer;
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  // z-index: 1000;
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.homepage {
  background-color: #096653;
  a {
    color: white;
  }

  .dropdown .dropbtn {
    color: white;
  }
  .dropdown-content a {
    color: black;
  }
}
</style>
