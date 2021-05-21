<template>
  <div class="marketing-services">
    <div class="banner">
      <img src="../assets/marketing.jpg" alt="" />
      <div class="banner-content">
        <h1>Marketing Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          suscipit dolor animi modi beatae perferendis aliquam dicta
          necessitatibus illum, id aliquid ea perspiciatis itaque facilis quia,
          nihil a? Quia repellat sapiente amet excepturi, cumque similique,
          consequuntur ratione cum nemo dolorem voluptatem 

          libero doloribus asperiores praesentium perferendis, ipsam mollitia a
          assumenda. Cum eaque eos quo?
        </p>
        <!-- <p>{{ aboutUs.introduction }}</p> -->
      </div>
    </div>

    <div class="content">
      <div id="digital-payments">
        <h1>Digital Payments</h1>
        <div v-for="(content, index) in digitalPay.body" :key="index">
          <h3>{{ content.title }}</h3>
          <p v-html="content.paragraph"></p>
          <template v-if="content.list">
            <ul v-for="(item, index) in content.list" :key="index">
              <li>{{ item.item }}</li>
            </ul>
          </template>
        </div>
      </div>

      <div id="wechat-marketing">
        <h1>Wechat Marketing</h1>
        <h3>{{ wmarketing.title }}</h3>
        <p>{{ wmarketing.paragraph }}</p>
        <ul v-for="(func, index) in wmarketing.functions" :key="index">
          <li>{{ func.item }}</li>
        </ul>

        <blockquote>"{{ wmarketing.quote }}"</blockquote>
        <div class="mau-container">
          <!-- <img src="../assets/wechat-mau.png" alt="" /> -->
          <a
            href="https://www.statista.com/statistics/255778/number-of-active-wechat-messenger-accounts/"
            rel="nofollow"
            ><img
              class="card-shadow"
              src="https://www.statista.com/graphic/1/255778/number-of-active-wechat-messenger-accounts.jpg"
              alt="Statistic: Number of monthly active WeChat users from 2nd quarter 2011 to 4th quarter 2020 (in millions) | Statista"
              style="
                width: 100%;
                height: auto !important;
                max-width: 1000px;
                -ms-interpolation-mode: bicubic;
              "
          /></a>
          <p>{{ wmarketing.mau }}</p>
        </div>

        <div class="official-account">
          <h2>{{ wmarketing.owoa.title }}</h2>
          <div class="oa-content">
            <img class="card-shadow" src="../assets/hotrenfrew.png" alt="" />
            <div class="oa-description">
              <p v-html="wmarketing.owoa.description"></p>
              <p>{{ wmarketing.owoa.requirement.intro }}</p>
              <ul
                v-for="(info, index) in wmarketing.owoa.requirement.information"
                :key="index"
              >
                <li>{{ info.item }}</li>
              </ul>
              <p>{{ wmarketing.owoa.additional }}</p>
              <ul v-for="(task, index) in wmarketing.owoa.tasks" :key="index">
                <li>{{ task.item }}</li>
              </ul>
              <p>{{ wmarketing.owoa.followup }}</p>
              <router-link to="/contact">{{ contact }}</router-link>
            </div>
          </div>
        </div>

        <div>
          <h3>{{ wmarketing.miniprogram.title }}</h3>
          <p>{{ wmarketing.miniprogram.description }}</p>
          <ul
            v-for="(item, index) in wmarketing.miniprogram.examples"
            :key="index"
          >
            <li>{{ item.example }}</li>
          </ul>
          <p>{{ wmarketing.miniprogram.summary }}</p>
          <p>{{ wmarketing.miniprogram.followup }}</p>
          <router-link to="/contact">{{ contact }}</router-link>
        </div>

        <div class="case-study">
          <h3>WeChat Case Study: Colton’s Couture</h3>
          <div class="img-wrapper">
            <img
              class="card-shadow"
              src="../assets/coltons.png"
              alt="coltons"
            />
            <p class="img-label">{{ wmarketing.caseStudy.title }}</p>
          </div>
          <div class="case-study-content">
            {{ wmarketing.caseStudy.content }}
          </div>
          <div class="img-wrapper">
            <div class="flex-wrapper card-shadow">
              <img
                src="../assets/coltoninternational1.png"
                alt="conton international 1"
              />
              <img
                src="../assets/coltoninternational2.png"
                alt="conton international 2"
              />
            </div>
            <p class="img-label">{{ wmarketing.caseStudy.highlight }}</p>
          </div>
          <div class="case-study-content">{{ wmarketing.caseStudy.more }}</div>
          <div class="case-study-content">
            {{ wmarketing.caseStudy.followup }}
            <router-link to="/contact">{{ contact }}</router-link>
          </div>
        </div>
      </div>

      <div id="yt-marketing">
        <h1>Youtube Marketing</h1>
        <h3>{{ ymarketing.title }}</h3>
        <div>{{ ymarketing.paragraph }}</div>
        <ul v-for="(pro, index) in ymarketing.list" :key="index">
          <li>
            {{ pro.item }}
            <p v-if="pro.more">{{ pro.more }}</p>
          </li>
        </ul>

        <div class="case-study">
          <h3>{{ ymarketing.caseStudy.title }}</h3>
          <!-- <img src="../assets/turf.png" alt="turf" /> -->
          <div class="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/6Q1dHyH_vKQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div class="img-left">
            <div class="img-wrapper">
              <img class="card-shadow" src="../assets/tags.png" alt="tags" />
              <p class="img-label">
                {{ ymarketing.caseStudy.keywordsComment }}
              </p>
            </div>
            <div class="text-wrapper">
              <p v-html="ymarketing.caseStudy.content"></p>
            </div>
          </div>

          <div class="img-right">
            <div class="text-wrapper">
              <p v-html="ymarketing.caseStudy.more"></p>
              <div>{{ ymarketing.followup }}</div>
              <router-link to="/contact">{{ contact }}</router-link>
            </div>

            <div class="img-wrapper">
              <img
                class="card-shadow"
                src="../assets/traffic.png"
                alt="site traffic"
              />
              <p class="img-label">{{ ymarketing.caseStudy.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <div id="ins-marketing">
        <h1>Instagram Marketing</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, at
          veniam possimus odio mollitia aut libero nobis consectetur minus,
          dolor aspernatur natus itaque quis vero magnam minima repellat
          repellendus commodi quibusdam, asperiores explicabo in porro animi
          adipisci? Id aut quia consequuntur architecto corporis at
          reprehenderit deserunt, laborum assumenda dicta animi qui autem minus
          unde possimus velit tempore quis! Consequuntur delectus accusantium
          quis sunt, nemo atque nisi voluptates. Temporibus, fuga! Inventore,
          quibusdam? Modi veritatis tenetur repellat dolore odio porro, ea
          laudantium unde consequatur, cum accusamus numquam eaque cupiditate
          maxime nam asperiores laborum hic voluptatem voluptas. Iure inventore
          minima sit, earum repudiandae id magnam reprehenderit laborum beatae
          quis ipsam velit pariatur natus tempora soluta eos sapiente esse,
          facilis impedit, blanditiis suscipit tenetur expedita. Ipsam,
          cupiditate veniam officia quae assumenda expedita illo modi saepe quam
          consequuntur totam maxime cumque pariatur aspernatur? Voluptate
          soluta, fuga dolorum, minima molestias corrupti voluptas, nostrum
          autem animi iste non eos distinctio. Ratione, sunt iusto odio qui
          laboriosam nam reprehenderit corporis officia culpa suscipit
          consectetur libero quia nihil soluta mollitia pariatur itaque, labore
          unde repudiandae, provident magni voluptatum neque.
        </p>
      </div>

      <div id="sm-audit">
        <h1>Social Media Audit</h1>
        <template v-for="(item, index) in smAudit.qa" :key="index">
          <h3>{{ item.title }}</h3>
          <div v-if="item.list">
            <ul v-for="(item, index) in item.list" :key="index">
              <li v-if="item.item">{{ item.item }}</li>
              <li v-else>
                <span>
                  {{ item.title }}
                </span>
                <p>{{ item.description }}</p>
              </li>
            </ul>
          </div>
          <p>{{ item.content }}</p>
        </template>
      </div>

      <div id="ik-marketing">
        <h1>Influencer/KOL Marketing</h1>
        <p v-html="ikMarketing.content"></p>
        <div>
          <h4>{{ ikMarketing.campaign.title }}</h4>
          <ul
            v-for="(campaign, index) in ikMarketing.campaign.list"
            :key="index"
          >
            <li>{{ campaign.item }}</li>
          </ul>
        </div>
        <div>{{ ikMarketing.followup }}</div>
        <router-link to="/contact">{{ contact }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import digitalPay from "../content/digital-payments.json";
import wmarketing from "../content/wechat-marketing.json";
import ymarketing from "../content/youtube-marketing.json";
import smAudit from "../content/social-media-audit.json";
import ikMarketing from "../content/ik-marketing.json";

const contact = "Contact our team for more information";
</script>

<style lang = "scss" scoped >
.marketing-services {
  margin: 6rem auto;
}

.banner {
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    min-height: 600px;
    opacity: 0.8;
    filter: brightness(50%);
    transition: transform 10s;
  }
  .banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -32%);
    color: white;
    min-width: 72%;
    min-height: 800px;
    h1 {
      font-size: 5rem;
      padding-bottom: 2.4rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
}

.content {
  a {
    display: inline-block;
    color: grey;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  margin: 3rem auto;
  width: 68%;
  > div {
    margin: 8rem auto;
  }

  font-size: 1.05rem;
  h3 {
    margin: 2rem auto;
  }

  .img-label {
    font-size: 1rem;
    font-weight: 200;
    text-align: center;
    margin-bottom: 4rem;
  }

  #wechat-marketing {
    blockquote {
      font-size: 2rem;
      color: grey;
      padding-top: 60px;
      padding-bottom: 24px;
      text-align: center;
    }

    .mau-container {
      display: flex;
      align-items: center;
      p {
        width: 40%;
        padding-left: 4rem;
        font-size: 1.3rem;
        line-height: 2rem;
      }
      @media only screen and (max-width: 1024px) {
        flex-direction: column;
        flex-wrap: wrap;
        p {
          width: 100%;
        }
      }
    }

    .official-account {
      margin: 6rem auto;
      clear: both;

      .oa-content {
        display: flex;
        align-items: center;
        img {
          max-height: 600px;
          margin: 1rem 3rem;
        }
        .oa-description {
          margin: 1rem 2rem;

          ul:first-child {
            border: solid red 2px;
            li {
              list-style-type: square;
            }
          }
        }

        @media only screen and (max-width: 1024px) {
          flex-direction: column;
          flex-wrap: wrap;
        }
      }
    }

    .case-study {
      margin-top: 10rem;
      .img-wrapper {
        margin-bottom: 3rem;
        img {
          display: block;
          width: 700px;
          margin: 0 auto;

          @media only screen and (max-width: 1024px) {
            width: 100%;
          }
        }

        .flex-wrapper {
          display: flex;
          img {
            max-width: 400px;
            max-height:660px;
            object-fit: contain;

            &:first-child {
              width: 80%;
              object-fit: cover;
            }
          }
          @media only screen and (max-width: 1024px) {
            flex-direction: column;
            flex-wrap: wrap;
          }
        }
      }

      .case-study-content {
        margin: 2rem 6rem;
        &:last-child {
          a {
            padding-left: 1rem;
          }
        }

        @media only screen and (max-width: 1024px) {
          margin: 2rem auto;
        }
      }
    }
  }

  #yt-marketing {
    .case-study {
      .video-wrapper {
        position: relative;
        padding-bottom: 56.25%;
        margin: 2rem auto;
      }
      iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
      }

      .img-left,
      .img-right {
        display: flex;
        clear: both;
        align-items: center;
        margin: 6rem 2rem;
        .img-wrapper {
          img {
            object-fit: contain;
            @media only screen and (max-width: 1024px) {
              width: 100%;
            }
          }
        }
        @media only screen and (max-width: 1024px) {
          flex-direction: column;
          flex-wrap: wrap;
        }
      }

      .img-left {
        img {
          max-width: 700px;
        }
      }
      .img-right {
        img {
          max-width: 420px;
        }
      }

      .text-wrapper {
        margin: 2rem 3rem;
        line-height: 2rem;
        font-size: 1.2rem;
      }
    }
  }

  #ik-marketing {
    a {
      display: inline-block;
      margin-top: 2rem;
    }
  }
}
</style>