export interface FeatureDetailItem {
  slug: string;
  title: string;
  heroHeading: string;
  heroSubheading: string;
  painBullets: string[];
  solutionBullets: string[];
  metricsOrStats?: string[];
  screenshot: string;
  desktopScreenshot: string;
  tabletScreenshot: string;
  mobileScreenshot: string;
  videoUrl?: string;
  thumbnail: string;
}

import rawDetails from "./features-detail.json";

export const featureDetails = rawDetails as Record<string, FeatureDetailItem>;

