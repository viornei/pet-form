import Landing from "@/components/landing/Landing";
import { getStoryblokApi } from "@/lib/storyblock/storyblock";
const fetchLandingPageData = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`landing/services-section`, {
    version: "draft",
  });
  return response.data.story;
};
const Page = async () => {
  const servicesData = await fetchLandingPageData();
  return <Landing services={servicesData.content.body} />;
};
export default Page;
