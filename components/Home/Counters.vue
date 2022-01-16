<template>
  <section class="py-16">
    <div
      class="container mx-auto px-4 sm:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-30"
    >
      <analytics-card
        v-for="(service, index) in services"
        :key="index"
        :service="service"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          source: "github",
          params: {
            id: "chatwoot/chatwoot",
          },
          unit: "stars",
          label: "chatwoot/chatwoot",
          url: "https://github.com/chatwoot/chatwoot",
          image: "https://avatars.githubusercontent.com/u/23416667",
        },
        {
          source: "twitter",
          params: {
            id: "chatwoot",
          },
          unit: "followers",
          label: "@chatwoot",
          url: "https://twitter.com/chatwootapp",
          image: "https://avatars.githubusercontent.com/u/23416667",
        },
        {
          source: "youtube",
          params: {
            id: "chatwoot",
          },
          unit: "subscribers",
          label: "@chatwoot",
          url: "https://twitter.com/chatwootapp",
          image: "https://avatars.githubusercontent.com/u/23416667",
        },
        {
          source: "google-analytics",
          params: {
            id: "chatwoot",
            startDate: "2019-01-01",
          },
          unit: "views",
          label: "@chatwoot",
          url: "https://twitter.com/chatwootapp",
          image: "https://avatars.githubusercontent.com/u/23416667",
        },
        {
          source: "gumroad",
          params: {
            id: "chatwoot/chatwoot",
          },
          unit: "sales",
          label: "Ebook",
          url: "https://github.com/chatwoot/chatwoot",
          image: "https://avatars.githubusercontent.com/u/23416667",
        },
        {
          source: "stripe",
          unit: "stars",
          labelPrefix: "$",
          label: "MRR",
          url: "https://github.com/chatwoot/chatwoot",
          image: "https://avatars.githubusercontent.com/u/23416667",
        },
      ],
    };
  },
};
</script>
