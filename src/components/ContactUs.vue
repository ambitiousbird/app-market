<template>
  <div class="contact-us">
    <div class="title">
      <h1>Contact Us</h1>
      <div>Questions? We're here for you.</div>
    </div>

    <div class="container" v-bind:class="{ posted: posted }">
      <div class="form-container" v-if="!posted">
        <form action="https://app.99inbound.com/api/e/bvjHUwZk" method="POST">
          <label for="fname">Your First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your first name.."
          />

          <label for="lname">Your Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="email">Your Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your@example.com"
          />

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style="height: 50px"
          ></textarea>
          <label for="message">Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style="height: 200px"
          ></textarea>
          <input type="submit" value="Submit" v-on:click="onClick" />
        </form>

        <div style="position: absolute; left: -5000px">
          <input
            type="checkbox"
            name="dancing_silver_tartan_carpenter"
            value="1"
            tabindex="-1"
            autocomplete="no"
          />
        </div>
      </div>

      <div class="success" v-if="posted">
        <h2>Success</h2>
        <div class="content">
          <p>Your message has been submitted. We'll reach out to you soon.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      posted: false,
    };
  },
  methods: {
    onClick: function (e) {
      e.preventDefault();
      this.posted = true;
    },
  },
};
</script>

<style lang = "scss" scoped >
.contact-us {
  position: relative;
  margin-top: 6rem;
  @media only screen and (max-width: 768px) {
    margin-top: 12rem;
  }
}

.title {
  background-color: rgba(131, 113, 10, 0.829);
  min-height: 360px;
  text-align: center;
  padding-top: 1rem;
  h1 {
    padding-top: 50px;
    font-size: 3rem;
  }
  div {
    margin: 1.2rem auto;
    font-size: 1.5rem;
  }
}

.container {
  height: 720px;
  font-size: 1.05rem;
}

.posted {
  height: 550px;
}

.form-container,
.success {
  font-weight: 500;
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  width: 60%;
  max-width: 720px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  box-shadow: 0 0 6px 0.5px black;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
}

.success {
  min-height: 400px;
  text-align: center;
  transform: translate(-50%, -55%);
  -ms-transform: translate(-50%, -55%);
}

.content {
  height: 200px;
  text-align: center;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: rgba(21, 49, 95, 0.829);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"] {
  margin: 0 auto;
  display: block;
  width: 40%;
  &:hover {
    background-color: #45a049;
  }
}
</style>