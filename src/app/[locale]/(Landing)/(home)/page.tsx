// home/page.tsx
import { Metadata } from "next";
import FeatureJumbotronSection from "@/features/FeatureJumbotronSection";
import FeatureOurClientsSection from "@/features/FeatureOurClientsSection";
import FeatureBottomCTASection from "@/features/FeatureBottomCTASection";
import FeatureHowItWorksSection from "@/features/FeatureHowItWorksSection";
import FeatureKeyFeaturesSection from "@/features/FeatureKeyFeaturesSection";
import FeaturePricelistSection from "@/features/FeaturePricelistSection";
import CustomerServiceChat from "./CustomerServiceChat"; // 导入客服组件

interface Params {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params: { locale } }: Params): Promise<Metadata> {
  return {
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    title: "SALESUP AI - Raise your beauty sales with automatic AI!",
    description: "Build trust, create promo plans, and complete sales-all automatically with salesup. ai.",
    twitter: {
      title: "SALESUP AI - Raise your beauty sales with automatic AI!",
      description: "Build trust, create promo plans, and complete sales-all automatically with salesup. ai.",
    },
    openGraph: {
      title: "SALESUP AI - Raise your beauty sales with automatic AI!",
      description: "Build trust, create promo plans, and complete sales-all automatically with salesup. ai.",
    }
  }
}

export default function HomePage() {
  return (
    <>
      {/* <LogAnalytics eventName="page_view" eventParams={{ page: "home" }} /> */}

      <FeatureJumbotronSection />
      <FeatureHowItWorksSection />
      <FeaturePricelistSection />
      <FeatureBottomCTASection />
      
      {/* 添加客服机器人对话框 */}
      <CustomerServiceChat />
    </>
  );
}