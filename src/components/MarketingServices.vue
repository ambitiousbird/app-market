<template>
  <div class="marketing-services">
    <div id="digital-payments">
      <h1>Digital Payments</h1>
      <div v-for="(content, index) in digitalPay.body" :key="index">
        <h4>{{ content.title }}</h4>
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
      <p>{{ wmarketing.mau }}</p>
      <img src="../assets/wechat-mau.png" alt="" />

      <div>
        <h3>{{ wmarketing.owoa.title }}</h3>
        <img src="../assets/hotrenfrew.png" alt="" />
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

      <div>
        <h3>WeChat Case Study</h3>
        <div>{{ wmarketing.caseStudy.title }}</div>
        <img src="../assets/coltons.png" alt="coltons" />
        <div>{{ wmarketing.caseStudy.content }}</div>
        <h4>{{ wmarketing.caseStudy.highlight }}</h4>
        <div>
          <img
            src="../assets/coltoninternational1.png"
            alt="conton international 1"
          />
          <img
            src="../assets/coltoninternational2.png"
            alt="conton international 2"
          />
        </div>
        <div>{{ wmarketing.caseStudy.more }}</div>
        <div>{{ wmarketing.caseStudy.followup }}</div>
        <router-link to="/contact">{{ contact }}</router-link>
      </div>
    </div>

    <div class="yt-marketing">
      <h1>Youtube Marketing</h1>
      <h3>{{ ymarketing.title }}</h3>
      <div>{{ ymarketing.paragraph }}</div>
      <ul v-for="(pro, index) in ymarketing.list" :key="index">
        <li>
          {{ pro.item }}
          <p v-if="pro.more">{{ pro.more }}</p>
        </li>
      </ul>

      <div>
        <h3>{{ ymarketing.caseStudy.title }}</h3>
        <img src="../assets/turf.png" alt="turf" />
        <p v-html="ymarketing.caseStudy.content"></p>
        <img src="../assets/tags.png" alt="tags" />
        <div>{{ ymarketing.caseStudy.keywordsComment }}</div>
        <div>
          <img src="../assets/traffic.png" alt="site traffic" />
          <div>{{ ymarketing.caseStudy.label }}</div>
        </div>

        <p v-html="ymarketing.caseStudy.more"></p>
        <div>{{ ymarketing.followup }}</div>
        <router-link to="/contact">{{ contact }}</router-link>
      </div>
    </div>

    <div id="ins-marketing">
      <h1>Instagram Marketing</h1>
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
        <ul v-for="(campaign, index) in ikMarketing.campaign.list" :key="index">
          <li>{{ campaign.item }}</li>
        </ul>
      </div>
      <div>{{ ikMarketing.followup }}</div>
      <router-link to="/contact">{{ contact }}</router-link>
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
</style>