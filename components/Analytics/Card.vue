<template>
  <div>
    <div class="analytics-card flex flex-col justify-between">
      <div class="flex-between p-8">
        <component :is="`icon-${service.source}`" class="h-8 w-auto" />
        <img
          v-if="service.image"
          :src="service.image"
          :alt="service.username"
          class="h-8 w-8 rounded-full overflow-hidden border-gray-100"
        />
      </div>
      <div class="p-8">
        <div class="flex items-baseline space-x-2">
          <analytics-loading-indicator v-if="$fetchState.pending" />
          <analytics-loading-error v-else-if="$fetchState.error" />
          <p v-else class="text-5xl font-bold">
            <span v-if="service.labelPrefix">{{ service.labelPrefix }}</span
            ><span>{{ statistic }}</span>
          </p>
          <span class="text-gray-600 dark:text-gray-300">{{
            service.unit
          }}</span>
        </div>
        <p class="font-medium">
          <a :href="service.url" target="_blank"> {{ service.label }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      statistic: 0,
    };
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
  fetchOnServer: false,
  async fetch() {
    // temporary simulator
    await this.sleep(1500);
    this.statistic = Math.floor(Math.random() * 10000) + 100;
    // Actual Solution
    // this.statistic = await this.$dataApi.getData(
    //   this.service.source,
    //   this.service.params
    // );
  },
};
</script>
