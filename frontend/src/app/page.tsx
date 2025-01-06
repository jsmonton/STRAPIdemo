import { FeaturedSection } from "@/components/custom/FeaturedSection";
import { HeroSection } from "@/components/custom/HeroSection";
import { getHomePageData } from "@/data/loader";

const blockComponents = {
  "layout.hero-section": HeroSection,
  "layout.featured-section": FeaturedSection,
};

function blockRenderer(block: any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  return Component ? <Component key={block.id} data={block} /> : null;
}

export default async function Home() {
  const strapiData = await getHomePageData();

  console.dir(strapiData, { depth: null });

  const { blocks } = strapiData?.data || [];
  return <main>{blocks.map(blockRenderer)}</main>;
}