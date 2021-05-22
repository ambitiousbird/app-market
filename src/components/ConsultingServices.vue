<template>
  <div class="consulting-services">
    <div class="banner">
      <img src="../assets/consulting.jpg" alt="" />
      <div class="banner-content">
        <h1>Consulting Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          voluptate, quaerat illum ipsam ratione sint nam, obcaecati officiis
          earum dolores asperiores magni unde doloremque quam voluptates, beatae
          et atque! Soluta quis, recusandae harum quo amet veritatis ullam vel
          maiores impedit obcaecati atque dicta quam pariatur voluptatem
          accusamus aliquam dignissimos? a voluptas. Minus rem mollitia quas
          quidem quos cum molestias!
        </p>
      </div>
    </div>
    <div class="content">
      <div id="di-consulting">
        <h1>Domestic & International Consulting</h1>
        <div v-html="consulting.content"></div>
        <ul v-for="(question, index) in consulting.questions" :key="index">
          <li>{{ question.item }}</li>
        </ul>
        <router-link to="/contact">{{ consulting.followup }}</router-link>
      </div>

      <div id="ec-planning">
        <h1>Event & Campaign Planning</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          asperiores harum impedit minus, officiis quibusdam saepe soluta
          suscipit alias reprehenderit, voluptates et perspiciatis atque dolore
          quo enim. Doloremque, suscipit perferendis? A nesciunt, aut ipsam
          sapiente explicabo facilis voluptates quisquam adipisci corrupti
          aliquid doloremque deleniti odit nihil consectetur dolorem, possimus
          accusamus earum vitae voluptatibus, velit asperiores et dolor in
          tempora? Nam, eligendi? Incidunt fugit aliquam earum id illo alias!
          Natus sunt eos in repellat impedit modi, delectus atque, id corporis
          quas laboriosam vero optio est odio nam doloribus deleniti veniam quo.
          Omnis, fugit id dicta modi explicabo amet. Dolorum maiores quod est
          voluptatum voluptates asperiores quos ullam dignissimos magnam at
          magni sequi voluptatibus, doloremque natus explicabo architecto qui?
          Officiis deserunt sit maxime officia aliquid inventore omnis tempora,
          rerum temporibus, vitae et eaque, doloremque architecto enim delectus
          recusandae debitis sapiente a blanditiis rem beatae! Dolorem,
          architecto eos dignissimos doloremque voluptate
        </p>
        <router-link to="/contact">{{ consulting.followup }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import consulting from "../content/di-consulting.json";
</script>

<style lang = "scss" scoped >
.consulting-services {
  margin-top: 6rem;
  @media only screen and (max-width: 768px) {
    margin-top: 12rem;
  }
}

.content {
  a {
    text-decoration: none;
    color: rgb(107, 100, 112);
    &:hover {
      color: rgb(141, 143, 148);
    }
  }
  width: 80%;
  font-size: 1.2rem;
  margin: 3rem 6rem;
  h1 {
    margin: 3.5rem auto;
  }
  ul {
    list-style-type: square;
  }
  @media only screen and (max-width: 768px) {
    margin: 3rem auto;
    font-size: 1rem;
  }
}
</style>