import { Landing } from "@/components/landing/Landing";
import ServiceSection from "@/components/landing/servicesSection/ServicesSection";
import {
  apiPlugin,
  storyblokInit,
  getStoryblokApi,
  StoryblokStory,
} from "@storyblok/react/rsc";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    landing: Landing,
    services_section: ServiceSection,
  },
  enableFallbackComponent: true,
  apiOptions: {
    region: "eu",
  },
});

export { getStoryblokApi, StoryblokStory };
