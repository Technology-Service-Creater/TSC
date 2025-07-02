import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';
import Contact from '../pages/Contact/Contact';
import WhatWeDo from '../pages/WhatWeDo/WhatWeDo';
import ServiceDetails from '../pages/WhatWeDo/Services/ServiceDetails';
import DigitalMarketingOnlineGrowth from '../pages/WhatWeDo/Industries/DigitalMarketingOnlineGrowth/DigitalMarketingOnlineGrowth';
import CustomerExperienceMarketingStrategy from '../pages/WhatWeDo/Industries/CustomerExperienceMarketingStrategy/CustomerExperienceMarketingStrategy';
import IntegratedMarketingBrandCommunications from '../pages/WhatWeDo/Industries/IntegratedMarketingBrandCommunications/IntegratedMarketingBrandCommunications';
import EmailPerformanceMarketing from '../pages/WhatWeDo/Industries/EmailPerformanceMarketing/EmailPerformanceMarketing';
import ExperientialEventBasedMarketing from '../pages/WhatWeDo/Industries/ExperientialEventBasedMarketing/ExperientialEventBasedMarketing';
import ECommerceGrowthMarketing from '../pages/WhatWeDo/Industries/ECommerceGrowthMarketing/ECommerceGrowthMarketing';
import AIAutomationMarketing from '../pages/WhatWeDo/Industries/AIAutomationMarketing/AIAutomationMarketing';
import VisualVideoMarketing from '../pages/WhatWeDo/Industries/VisualVideoMarketing/VisualVideoMarketing';
import TraditionalOfflineMarketing from '../pages/WhatWeDo/Industries/TraditionalOfflineMarketing/TraditionalOfflineMarketing';
import SocialMediaCommunityEngagement from '../pages/WhatWeDo/Industries/SocialMediaCommunityEngagement/SocialMediaCommunityEngagement';
import SoftwareDevelopment from '../pages/WhatWeDo/Industries/SoftwareDevelopment/SoftwareDevelopment';
import EventServicesMarketing from '../pages/WhatWeDo/Industries/EventServicesMarketing/EventServicesMarketing';
import MarketingAnalysisResearch from '../pages/WhatWeDo/Industries/MarketingAnalysisResearch/MarketingAnalysisResearch';
import LegalCompliance from '../pages/WhatWeDo/Industries/LegalCompliance/LegalCompliance';
import DesignServices from '../pages/WhatWeDo/Industries/DesignServices/DesignServices';
import ErrorBoundary from '../components/common/ErrorBoundary';

const industryComponents = {
  'digital-marketing-online-growth': DigitalMarketingOnlineGrowth,
  'customer-experience-marketing-strategy': CustomerExperienceMarketingStrategy,
  'integrated-marketing-brand-communications': IntegratedMarketingBrandCommunications,
  'email-performance-marketing': EmailPerformanceMarketing,
  'experiential-event-based-marketing': ExperientialEventBasedMarketing,
  'e-commerce-growth-marketing': ECommerceGrowthMarketing,
  'ai-automation-marketing': AIAutomationMarketing,
  'ai-automation-in-marketing': AIAutomationMarketing,
  'visual-video-marketing': VisualVideoMarketing,
  'traditional-offline-marketing': TraditionalOfflineMarketing,
  'social-media-community-engagement': SocialMediaCommunityEngagement,
  'software-development': SoftwareDevelopment,
  'event-services-marketing': EventServicesMarketing,
  'marketing-analysis-research': MarketingAnalysisResearch,
  'legal-compliance': LegalCompliance,
  'design-services': DesignServices,
};

const subPageFileMap = {
  'event-services-marketing': {
    'brand-acts': 'BrandActs',
    'event-marketing': 'EventMarketing',
    'employee-experience': 'EmployeeExperience',
    'integrated-marketing': 'IntegratedMarketing',
    'sponsorship-activation': 'SponsorshipActivation',
    'digital-experience': 'DigitalExperience',
    'experience-content': 'ExperienceContent',
    'broadcast-design': 'BroadcastDesign',
    'trade-show-displays-experiences': 'TradeShowDisplaysExperiences',
    weddings: 'Weddings',
    'corporate-events': 'CorporateEvents',
    'conventions-trade-shows': 'ConventionsTradeShows',
    'music-festivals-concerts': 'MusicFestivalsConcerts',
    'sports-events': 'SportsEvents',
    'meetings-incentives': 'MeetingsIncentives',
    'social-galas-fundraisers': 'SocialGalasFundraisers',
    'product-launches': 'ProductLaunches',
    'experiential-marketing': 'ExperientialMarketing',
    'virtual-hybrid-events': 'VirtualHybridEvents',
  },
  'design-services': {
    'fashion-design': 'FashionDesign',
    'motion-graphics-design': 'MotionGraphicsDesign',
    'digital-design': 'DigitalDesign',
    'social-media-graphics': 'SocialMediaGraphics',
    'logo-redesign-refresh': 'LogoRedesignRefresh',
    'graphic-design': 'GraphicDesign',
  },
  'legal-compliance': {
    'financial-regulatory-risk': 'FinancialRegulatoryRisk',
    'governance-risk-compliance-grc': 'GovernanceRiskComplianceGRC',
    'cybersecurity-data-privacy': 'CybersecurityDataPrivacy',
    'legal-advisory-business-risk-advisory': 'LegalAdvisoryBusinessRiskAdvisory',
    'legal-advisory-and-business-risk-advisory': 'LegalAdvisoryBusinessRiskAdvisory',
    'tax-compliance-reporting': 'TaxComplianceReporting',
    'indirect-taxes': 'IndirectTaxes',
    'transfer-pricing': 'TransferPricing',
    'contract-management': 'ContractManagement',
    'regulatory-compliance': 'RegulatoryCompliance',
    'intellectual-property-protection': 'IntellectualPropertyProtection',
    'indirect-taxes-vat-gst': 'IndirectTaxes',
  },
  'marketing-analysis-research': {
    'customer-segmentation': 'CustomerSegmentation',
    'competitive-analysis': 'CompetitiveAnalysis',
    'industry-trends-forecasting': 'IndustryTrendsForecasting',
  },
  'software-development': {
    'ui-ux-design': 'UIUXDesign',
    'mobile-app-development': 'MobileAppDevelopment',
    'web-development': 'WebDevelopment',
    cybersecurity: 'Cybersecurity',
    'artificial-intelligence-machine-learning': 'ArtificialIntelligenceMachineLearning',
  },
  'social-media-community-engagement': {
    'crisis-management-reputation-handling': 'CrisisManagementReputationHandling',
    'social-listening-consumer-insights': 'SocialListeningConsumerInsights',
    'user-generated-content-ugc': 'UserGeneratedContentUGC',
    'platform-specific-strategies': 'PlatformSpecificStrategies',
  },
  'traditional-offline-marketing': {
    'retail-in-store-marketing': 'RetailInStoreMarketing',
    'product-packaging-design': 'ProductPackagingDesign',
    'direct-mail-campaigns': 'DirectMailCampaigns',
    'out-of-home-ooh-advertising': 'OutOfHomeOOHAdvertising',
    'print-advertising': 'PrintAdvertising',
  },
  'visual-video-marketing': {
    'aerial-photography-videography': 'AerialPhotographyVideography',
    'corporate-files-promotional-videos': 'CorporateFilesPromotionalVideos',
    'storytelling-branding-video': 'StorytellingBrandingVideo',
    'digital-experience-branding': 'DigitalExperienceBranding',
  },
  'ai-automation-marketing': {
    'ai-powered-chatbots-customer-support': 'AIPoweredChatbotsCustomerSupport',
    'automated-ad-campaigns': 'AutomatedAdCampaigns',
    'predictive-marketing': 'PredictiveMarketing',
    'ai-driven-personalization': 'AIDrivenPersonalization',
  },
  'ai-automation-in-marketing': {
    'ai-powered-chatbots-customer-support': 'AIPoweredChatbotsCustomerSupport',
    'automated-ad-campaigns': 'AutomatedAdCampaigns',
    'predictive-marketing': 'PredictiveMarketing',
    'ai-driven-personalization': 'AIDrivenPersonalization',
  },
  'e-commerce-growth-marketing': {
    'conversion-rate-optimization-cro': 'ConversionRateOptimizationCRO',
    'customer-retention-loyalty-programs': 'CustomerRetentionLoyaltyPrograms',
    'subscription-based-marketing': 'SubscriptionBasedMarketing',
    'upselling-cross-selling-strategies': 'UpsellingCrossSellingStrategies',
  },
  'experiential-event-based-marketing': {
    'sponsorship-activation': 'SponsorshipActivation',
    'virtual-hybrid-events': 'VirtualHybridEvents',
    'consumer-engagement-brand-experiences': 'ConsumerEngagementBrandExperiences',
    'product-launches-brand-activations': 'ProductLaunchesBrandActivations',
  },
  'email-performance-marketing': {
    'crm-integrated-email-marketing': 'CRMIntegratedEmailMarketing',
    'ai-powered-personalization': 'AIPoweredPersonalization',
    'lead-nurturing-segmentation': 'LeadNurturingSegmentation',
    'campaign-automation': 'CampaignAutomation',
    'transactional-emails-newsletters': 'TransactionalEmailsNewsletters',
    'web-mobile-analytics': 'WebMobileAnalytics',
    'product-content-analytics': 'ProductContentAnalytics',
    'ai-driven-marketing-analytics': 'AIDrivenMarketingAnalytics',
    'performance-tracking-reporting': 'PerformanceTrackingReporting',
    'a-b-testing-optimization': 'A_BTestingOptimization',
  },
  'integrated-marketing-brand-communications': {
    'trade-show-displays-experiences': 'TradeShowDisplaysExperiences',
    'corporate-communications': 'CorporateCommunications',
    'public-relations-pr': 'PublicRelationsPR',
    'advertising-campaigns': 'AdvertisingCampaigns',
  },
  'digital-marketing-online-growth': {
    'influencer-marketing': 'InfluencerMarketing',
    'pay-per-click-ppc-advertising': 'PayPerClickPPCAdvertising',
    'online-reputation-management-orm': 'OnlineReputationManagementORM',
    'affiliate-marketing': 'AffiliateMarketing',
    'app-store-optimization-aso': 'AppStoreOptimizationASO',
    'email-marketing': 'EmailMarketing',
    'search-engine-marketing-sem': 'SearchEngineMarketingSEM',
    'search-engine-optimization-seo': 'SearchEngineOptimizationSEO',
    'social-media-marketing-smm': 'SocialMediaMarketingSMM',
    'content-marketing': 'ContentMarketing',
  },
  'customer-experience-marketing-strategy': {
    'consumer-insights': 'ConsumerInsights',
    'customer-journey-mapping': 'CustomerJourneyMapping',
    'pricing-strategy': 'PricingStrategy',
    'personalization-customer-experience-cx': 'PersonalizationCustomerExperienceCX',
    'market-research-analytics': 'MarketResearchAnalytics',
    'brand-positioning': 'BrandPositioning',
  },
};

// Add normalization function at the top
function normalizeIndustryId(industryId) {
  if (industryId === 'legal-and-compliance') return 'legal-compliance';
  if (industryId === 'ai-automation-in-marketing') return 'ai-automation-marketing';
  return industryId;
}

function IndustryPageWrapper() {
  const { industryId } = useParams();
  const normalizedIndustryId = normalizeIndustryId(industryId);
  const Component = industryComponents[normalizedIndustryId];
  if (!Component) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Industry not found.</div>;
  }
  return <Component />;
}

function IndustrySubPageWrapper() {
  const { industryId, subPageId } = useParams();
  const normalizedIndustryId = normalizeIndustryId(industryId);
  let fileName = subPageFileMap[normalizedIndustryId]?.[subPageId];
  if (!fileName && normalizedIndustryId === 'ai-automation-marketing') {
    fileName = subPageFileMap['ai-automation-in-marketing']?.[subPageId];
  }
  if (!fileName) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Subpage not found.</div>;
  }
  // Hardcode folder name for AI Automation Marketing
  let industryFolder;
  if (normalizedIndustryId === 'ai-automation-marketing') {
    industryFolder = 'AIAutomationMarketing';
  } else if (normalizedIndustryId === 'marketing-analysis-research') {
    industryFolder = 'MarketingAnalysisResearch';
  } else if (normalizedIndustryId === 'legal-compliance') {
    industryFolder = 'LegalCompliance';
  } else {
    industryFolder = normalizedIndustryId
      .split('-')
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join('');
  }
  const SubPage = React.lazy(() =>
    import(`../pages/WhatWeDo/Industries/${industryFolder}/SubPages/${fileName}.jsx`)
      .then(module => module)
      .catch(() => ({
        default: () => (
          <div style={{ padding: '2rem', textAlign: 'center' }}>Subpage not found.</div>
        ),
      }))
  );
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <SubPage />
      </Suspense>
    </ErrorBoundary>
  );
}

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/industries/:industryId" element={<IndustryPageWrapper />} />
          <Route path="/industries/:industryId/:subPageId" element={<IndustrySubPageWrapper />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
