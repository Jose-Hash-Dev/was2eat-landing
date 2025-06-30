"use client";

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LegalPageProps {
  pageType: "privacy" | "terms" | "help";
}

// All page data
const pageData = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "June 2025",
    sections: {
      introduction: {
        title: "Introduction",
        content: [
          'This Privacy Policy explains how Was2Eat ("we," "us," or "our") collects, uses, and protects your information when you use our mobile application.',
          "Was2Eat is a food nutrition analysis app that helps users make informed dietary choices through barcode scanning and AI-powered recommendations.",
          "By using our app, you agree to the collection and use of information in accordance with this policy.",
        ],
      },
      cameraUsage: {
        title: "Camera Permission and Usage",
        content: [
          "Our app requires camera permission solely for barcode scanning functionality to help you identify food products.",
          "We do not store, record, transmit, or share any camera images or video.",
          "The camera is used only locally on your device to read product barcodes and is never saved to our servers or your device storage.",
          "When you scan a barcode, the camera captures the barcode data (numbers/text) but no actual images are retained.",
          "All camera processing happens locally on your device.",
        ],
      },
      informationCollection: {
        title: "Information We Collect",
        content: [
          "Account Information (Optional): Email address, name and profile information, country and language preferences (if you create an account).",
          "Usage Data: Products you scan (barcode numbers and product information), search queries within the app, app interaction patterns and preferences, scan history (stored locally on your device for 60 days).",
          "Device Information: Device type and operating system, app version for technical support, crash reports and performance data (anonymized).",
          "Location Data: Only if you grant permission, used for regional product recommendations, never shared with third parties.",
        ],
      },
      howWeUseInformation: {
        title: "How We Use Your Information",
        content: [
          "Provide barcode scanning and product analysis",
          "Deliver personalized nutrition recommendations",
          "Improve our product database and AI algorithms",
          "Provide customer support",
          "Send important app updates (if you have an account)",
          "Analyze usage patterns to enhance user experience",
          "Comply with legal obligations",
        ],
      },
      dataSourcesAccuracy: {
        title: "Data Sources and Accuracy",
        content: [
          "Product Information: We source product data from OpenFoodFacts, the world's largest collaborative food database, and other verified public databases.",
          "Additive Safety Data: Safety information comes from official sources including EFSA (European Food Safety Authority), FDA, and other regulatory bodies.",
          "AI Enhancement: Our AI fills gaps in official data using established regulatory patterns and scientific literature. All AI-generated content is clearly labeled and distinguished from official data.",
        ],
      },
      dataSharingDisclosure: {
        title: "Data Sharing and Disclosure",
        content: [
          "We do not sell, rent, or trade your personal information to third parties.",
          "We may share information only in these limited circumstances:",
          "With trusted service providers who help operate our app (under strict confidentiality agreements)",
          "Anonymized, aggregated data for research and improvement purposes",
          "When required by law or to protect our rights and users' safety",
          "In case of business transfer (under the same privacy protections)",
        ],
      },
      yourRightsChoices: {
        title: "Your Rights and Choices",
        content: [
          "Access: Request a copy of your personal data",
          "Correction: Update or correct inaccurate information",
          "Deletion: Request deletion of your personal data",
          "Portability: Request your data in a portable format",
          "Opt-out: Unsubscribe from communications at any time",
          "To exercise these rights, contact us at info@was2eat.com",
        ],
      },
      dataRetentionSecurity: {
        title: "Data Retention and Security",
        content: [
          "Retention Periods: Account data until you delete your account, scan history automatically deleted after 60 days (stored locally), usage data may be retained in anonymized form for service improvement.",
          "Security Measures: Industry-standard encryption for data in transit and at rest, secure cloud infrastructure with regular security updates, regular security audits and vulnerability assessments, limited access to personal data on a need-to-know basis.",
        ],
      },
      childrensPrivacy: {
        title: "Children's Privacy",
        content: [
          "Was2Eat is not intended for children under 13.",
          "We do not knowingly collect personal information from children under 13.",
          "If we become aware that we have collected such information, we will delete it immediately.",
        ],
      },
      internationalDataTransfers: {
        title: "International Data Transfers",
        content: [
          "Your information may be transferred to and processed in countries other than your own.",
          "We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.",
        ],
      },
      policyChanges: {
        title: "Changes to This Privacy Policy",
        content: [
          "We may update this Privacy Policy periodically.",
          "Significant changes will be communicated through the app or via email (if you have an account) with at least 30 days advance notice.",
          "Your continued use of Was2Eat after changes constitutes acceptance of the updated policy.",
        ],
      },
      thirdPartyServices: {
        title: "Third-Party Services",
        content: [
          "Our app may contain links to third-party websites or services.",
          "This Privacy Policy does not apply to those external sites.",
          "We encourage you to review their privacy policies.",
        ],
      },
      contactInformation: {
        title: "Contact Information",
        content: [
          "For questions about this Privacy Policy or to exercise your privacy rights:",
          "Email: info@was2eat.com",
          "Address: Sepapaja tn 6, 15551 Tallinn, Harju Maakond, Estonia",
          "We respond to privacy inquiries within 30 days as required by applicable law.",
        ],
      },
      gdprLegalBasis: {
        title: "Legal Basis for Processing (GDPR)",
        content: [
          "For users in the European Union, our legal basis for processing your data includes:",
          "Consent: For optional features like location services",
          "Contract: To provide our app services",
          "Legitimate Interest: To improve our services and provide support",
          "Legal Obligation: To comply with applicable laws",
          "You have the right to lodge a complaint with your local data protection authority if you have concerns about our data processing.",
        ],
      },
    },
  },
  terms: {
    title: "Terms and Conditions",
    lastUpdated: "January 2025",
    sections: {
      introduction: {
        title: "Introduction and Acceptance",
        content: [
          "Welcome to Was2Eat, a mobile application that provides food nutrition analysis, additive safety information, and health guidance through barcode scanning technology.",
          "These Terms and Conditions ('Terms') govern your use of the Was2Eat mobile application ('App', 'Service') operated by Was2Eat ('we', 'us', 'our').",
          "By downloading, installing, or using Was2Eat, you agree to be bound by these Terms.",
          "If you do not agree to these Terms, please do not use our App.",
          "We may update these Terms periodically, and continued use constitutes acceptance of any changes.",
          "You must be at least 13 years old to use Was2Eat, or have parental consent if younger.",
        ],
      },
      services: {
        title: "Description of Services",
        content: [
          "Was2Eat provides food product analysis by scanning barcodes and retrieving data from OpenFoodFacts and other public food databases.",
          "Our App offers nutrition information, additive safety assessments, and personalized health recommendations.",
          "We use artificial intelligence and machine learning to provide health scores and dietary guidance.",
          "Product information is sourced from third-party databases and may not always be complete or current.",
          "Was2Eat is for informational purposes only and should not replace professional medical or nutritional advice.",
          "We continuously work to improve our database and analysis accuracy.",
        ],
      },
      userResponsibilities: {
        title: "User Responsibilities and Acceptable Use",
        content: [
          "You are responsible for maintaining the confidentiality of your account credentials.",
          "You must provide accurate information when creating your account.",
          "You may use Was2Eat only for lawful purposes and in accordance with these Terms.",
          "You agree not to misuse our services, attempt to hack our systems, or interfere with other users.",
          "You may not use automated systems to access our App without permission.",
          "Commercial use of our data or services requires separate written permission from Was2Eat.",
        ],
      },
      intellectualProperty: {
        title: "Intellectual Property Rights",
        content: [
          "The Was2Eat App, including its design, algorithms, AI models, and proprietary health scoring system, is owned by Was2Eat and protected by intellectual property laws.",
          "You may not copy, modify, distribute, or reverse engineer any part of our App.",
          "Product data from third-party sources remains subject to their respective licenses.",
          "You retain ownership of any personal data you provide to us.",
          "Our trademarks, logos, and brand elements may not be used without permission.",
          "We respect intellectual property rights and expect users to do the same.",
        ],
      },
      privacy: {
        title: "Privacy and Data Protection",
        content: [
          "Your privacy is important to us. Please review our Privacy Policy for details on data collection and use.",
          "We collect minimal personal information necessary to provide our services.",
          "Your scanning history and preferences are stored securely and used to improve your experience.",
          "We do not sell your personal data to third parties.",
          "You have rights to access, correct, delete, or export your personal data. Contact us at info@was2eat.com for data requests.",
          "We implement appropriate security measures to protect your information.",
        ],
      },
      disclaimers: {
        title: "Disclaimers and Limitations",
        content: [
          "Was2Eat is provided 'as is' without warranties of any kind, express or implied, including accuracy, completeness, or fitness for a particular purpose.",
          "We do not guarantee that product information is always current, complete, or error-free.",
          "Health recommendations are general guidance and should not replace professional medical advice.",
          "We are not liable for decisions made based on information provided by our App.",
          "Our liability is limited to the maximum extent permitted by law.",
          "We disclaim responsibility for third-party content and external links.",
        ],
      },
      termination: {
        title: "Account Termination",
        content: [
          "You may delete your account at any time through the App settings.",
          "We may suspend or terminate accounts that violate these Terms.",
          "Upon termination, your access to the App will cease, but these Terms remain in effect for applicable provisions.",
          "We will retain some information as required by law or for legitimate business purposes.",
          "Termination does not affect any rights or obligations that arose before termination.",
        ],
      },
      governing: {
        title: "Governing Law and Jurisdiction",
        content: [
          "These Terms are governed by the laws of Estonia, without regard to conflict of law principles.",
          "Any disputes arising from these Terms or use of Was2Eat will be resolved in Estonian courts.",
          "If any provision of these Terms is found invalid, the remaining provisions continue in effect.",
          "These Terms constitute the entire agreement between you and Was2Eat regarding use of our App.",
        ],
      },
      changes: {
        title: "Changes to Terms",
        content: [
          "We reserve the right to modify these Terms at any time.",
          "Significant changes to these Terms will be communicated through the App or via email with at least 30 days advance notice.",
          "Your continued use of Was2Eat after changes constitutes acceptance of the new Terms.",
          "We encourage you to review these Terms periodically.",
        ],
      },
      contact: {
        title: "Contact Information and Support",
        content: [
          "For questions about these Terms, contact us at info@was2eat.com or through the App's support section.",
          "For privacy-related inquiries or data requests, contact info@was2eat.com.",
          "For technical support or app issues, use the Help Center within the App or contact info@was2eat.com.",
          "Mailing address: Sepapaja tn 6, 15551 Tallinn, Harju Maakond, Estonia",
          "We aim to respond to all inquiries within 48 hours during business days.",
        ],
      },
    },
  },
  help: {
    title: "Help Center",
    lastUpdated: null,
    sections: {
      gettingStarted: {
        title: "Getting Started",
        content: [
          "Download Was2Eat from the App Store or Google Play Store",
          "Create an account or use the app without registration",
          "Allow camera permission for barcode scanning functionality",
          "Start scanning products by pointing your camera at barcodes",
          "Explore your scan history and favorite products",
          "Set up your health preferences for personalized recommendations",
        ],
      },
      scanningAnalysis: {
        title: "Scanning and Analysis",
        content: [
          "Point your camera at any product barcode to get instant analysis",
          "Our AI provides dual scoring: Official Nutri-Score (A-E) + AI Health Score (0-100)",
          "View detailed nutrition breakdown including macros and micronutrients",
          "Check additive safety information based on EFSA guidelines",
          "Compare similar products to make better choices",
          "Save products to your favorites for quick access later",
        ],
      },
      healthTracker: {
        title: "Health Tracker",
        content: [
          "Monitor your daily nutrition intake with our Health Tracker",
          "View weekly and monthly nutrition trends and patterns",
          "Set personal health goals and track your progress",
          "Get insights into your eating habits and dietary patterns",
          "Receive personalized recommendations based on your scan history",
          "Export your health data for sharing with healthcare providers",
        ],
      },
      keyFeatures: {
        title: "Key Features Explained",
        content: [
          "Dual Scoring System: Official Nutri-Score + AI Health Score for comprehensive analysis",
          "Shopping Basket: Plan meals and organize your grocery shopping",
          "Product Comparison: Side-by-side nutritional analysis of similar products",
          "Additive Safety: Detailed safety information for food additives",
          "Offline Access: View your favorites and scan history without internet",
          "Multi-language Support: Available in English, German, French, and Turkish",
        ],
      },
      troubleshooting: {
        title: "Troubleshooting",
        content: [
          "If barcode scanning isn't working, ensure good lighting and steady hands",
          "Clean your camera lens for better barcode recognition",
          "Check that you've granted camera permission to the app",
          "Restart the app if you experience performance issues",
          "Update to the latest version for bug fixes and improvements",
          "Contact support if problems persist after trying these steps",
        ],
      },
      accountData: {
        title: "Account and Data Management",
        content: [
          "Create an account to sync your data across devices",
          "Your scan history is automatically organized and cleaned after 60 days",
          "Export your personal data anytime from account settings",
          "Delete your account and all associated data if needed",
          "Manage your privacy preferences and data sharing settings",
          "Contact us for any data-related requests or concerns",
        ],
      },
      privacyData: {
        title: "Privacy and Data",
        content: [
          "We prioritize your privacy and data security",
          "Camera images are never stored - only barcode data is processed",
          "Your personal information is encrypted and securely stored",
          "We don't sell your data to third parties",
          "You have full control over your data and privacy settings",
          "Read our Privacy Policy for complete details on data handling",
        ],
      },
      support: {
        title: "Getting Help and Support",
        content: [
          "Browse this Help Center for answers to common questions",
          "Contact our support team at info@was2eat.com",
          "Report bugs or suggest features through the app feedback option",
          "Follow us on social media for updates and tips",
          "Check our website for the latest news and announcements",
          "We aim to respond to all inquiries within 48 hours",
        ],
      },
    },
  },
};

export default function LegalPage({ pageType }: LegalPageProps) {
  const currentPageData = pageData[pageType];

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 }, flex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: "Kalam, cursive",
              fontWeight: 400,
              color: "#00BF63",
              fontSize: { xs: "1.7rem", md: "2rem" },
              mb: 2,
            }}
          >
            {currentPageData.title}
          </Typography>
          {currentPageData.lastUpdated && (
            <Typography
              variant="body1"
              sx={{
                color: "#7f8c8d",
                fontWeight: 400,
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Last Updated: {currentPageData.lastUpdated}
            </Typography>
          )}
        </Box>

        {/* Sections */}
        <Box sx={{ maxWidth: "600px", mx: "auto" }}>
          {Object.entries(currentPageData.sections).map(([key, section]) => (
            <Accordion
              key={key}
              sx={{
                mb: 2,
                "&:before": {
                  display: "none",
                },
                boxShadow: "none",
                border: "none",
                "&.Mui-expanded": {
                  margin: "0 0 16px 0",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#666" }} />}
                sx={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  minHeight: "auto",
                  border: "1px solid #e9ecef",
                  "&.Mui-expanded": {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottom: "none",
                  },
                  "& .MuiAccordionSummary-content": {
                    alignItems: "center",
                    margin: 0,
                  },
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    marginLeft: "auto",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "inherit",
                    fontWeight: 500,
                    color: "#000",
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                  }}
                >
                  {section.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid #e9ecef",
                  borderTop: "none",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  padding: "16px",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {section.content.map((item, itemIndex) => (
                    <Box key={itemIndex} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                      <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                        <Image
                          src="/images/logo.png"
                          alt="Was2Eat Logo"
                          width={16}
                          height={16}
                          style={{
                            width: "16px",
                            height: "16px",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          fontSize: { xs: "0.9rem", md: "0.95rem" },
                          lineHeight: 1.6,
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Footer Note */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            backgroundColor: "#f8f9fa",
            borderRadius: "16px",
            textAlign: "center",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              fontSize: { xs: "0.85rem", md: "0.9rem" },
              lineHeight: 1.6,
            }}
          >
            {pageType === "help"
              ? "Still need help? Contact us at info@was2eat.com and we'll get back to you within 48 hours."
              : `This ${
                  pageType === "privacy" ? "privacy policy" : "terms and conditions"
                } is effective as of the date listed above and applies to all users of the Was2Eat mobile application.`}
          </Typography>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
