<template>
<div>

  <span v-if="flip" class="flip">
    <span class="top">
      <span>{{count}}</span>
    </span>
    <span class="bottom">
      <span>{{count}}</span>
    </span>
  </span>
    <span v-else>
      {{count}}
    </span>


  <!-- <input v-model="customSpeed" type="range" min="10" max="400" step="10" /> -->
  
          <!-- -{{customSpeed}}- {{flip}} -->

</div>
</template>

<script>
export default {
  name: "Motherflipper",
  props: ["start", "end", "speed", "flip"],
  data() {
    return {
      customSpeed: null,
      count: 0,
      interval: null
    };
  },
  methods: {
    setTimer() {
      this.interval = setInterval(() => {
        this.counter();
      }, this.customSpeed);
    },
    counter() {
      if (this.count < this.end) {
        ++this.count;
      } else {
        this.count = this.start;
      }
    }
  },
  watch: {
    customSpeed: function() {
      clearInterval(this.interval);
      this.setTimer();
    }
  },
  mounted() {
    this.count = this.start;
    this.customSpeed = this.speed;
    this.setTimer();
  }
};
</script>
<style lang="scss" scoped>
$height: 3em;

body {
  margin: 0;
  padding: 0;
}
span {
  font-size: $height;
  line-height: $height;
  margin: auto;
  width: 100%;
  text-align: center;
  display: block;
}
.flip {
  position: relative;
  height: $height * 3;
  span {
    overflow: hidden;
    &.top {
      position: absolute;
      height: $height / 2;
      margin-bottom: $height / 2;
      span {
        position: relative;
        top: -$height / 3;
        color: blue;
      }
      z-index: 10;
    }
    &.bottom {
      position: absolute;
      height: $height / 2;
      margin-top: $height / 2;
      span {
        position: relative;
        top: -$height / 2;
        color: red;
      }
      z-index: 9;
    }
  }
}
</style>
