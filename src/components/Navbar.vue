<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about-us">About Us</router-link>
    <div class="dropdown">
      <button class="dropbtn">
        Marketing Services
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Digital Payments </a>
        <a href="#">WeChat Marketing</a>
        <a href="#">YouTube Marketing</a>
        <a href="#">Instagram Marketing </a>
        <a href="#">Social Media Audit</a>
        <a href="#">Influencer/KOL Marketing </a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">
        Consulting Services
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Domestic & International Consulting</a>
        <a href="#">Event and Campaign Planning </a>
      </div>
    </div>
    <a href="#clients">Our Clients</a>
    <a href="#contact">Contact Us</a>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@mixin underline-stroke{
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
  overflow: hidden;
  background-color: white;
  padding-top: 1.5rem;
  >a{
    @include underline-stroke;
  }
}

.navbar a {
  float: left;
  font-size: 18px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  position: relative;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  position:relative;
  font-size: 18px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  @include underline-stroke;
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

</style>
