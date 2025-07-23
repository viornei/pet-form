import Landing from "@/components/landing/Landing";
import { getStoryblokApi } from "@/lib/storyblock/storyblock";
const fetchLandingPageData = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`landing/services-section`, {
    version: "draft",
  });
  return response.data.story;
};
const LandingPage = async () => {
  const servicesData = await fetchLandingPageData();
  return <Landing services={servicesData} />;
};
export default LandingPage;
