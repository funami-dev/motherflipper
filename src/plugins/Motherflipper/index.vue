<template>
  <span>
    {{count}}
  </span>
</template>

<script>
export default {
  name: "Flipper",
  props: {
    start: {
      type: Number,
      required: false,
      default: 0
    },
    end: {
      type: Number,
      required: false,
      default: 100
    },
    speed: {
      type: Number,
      required: false,
      default: 100
    }
  },
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
        if (this.infinite) {
          this.count = this.start;
        }
      }
    }
  },
  mounted() {
    this.count = this.start;
    this.customSpeed = this.speed;
    this.setTimer();
  }
};
</script>
