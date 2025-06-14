import { Box, Container, Typography, Divider, Paper } from "@mui/material";

export default function PrivacyPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: "20px",
          bgcolor: "background.paper",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#00bf63",
            fontWeight: "bold",
            mb: 3,
          }}
        >
          Privacy Policy for Was2Eat
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "text.secondary",
            mb: 4,
          }}
        >
          Last Updated: January 2025
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Box sx={{ "& > *": { mb: 3 } }}>
          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              1. INTRODUCTION
            </Typography>
            <Typography variant="body2" paragraph>
              This Privacy Policy explains how Was2Eat (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) collects, uses, and protects your information when you use our mobile
              application. Was2Eat is a food nutrition analysis app that helps users make informed
              dietary choices through barcode scanning and AI-powered recommendations.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              2. CAMERA PERMISSION AND USAGE
            </Typography>
            <Typography
              variant="subtitle1"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              Camera Access:
            </Typography>
            <Typography variant="body2" paragraph>
              Our app requires camera permission solely for barcode scanning functionality to help
              you identify food products. We do not store, record, transmit, or share any camera
              images or video. The camera is used only locally on your device to read product
              barcodes and is never saved to our servers or your device storage.
            </Typography>
            <Typography
              variant="subtitle1"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              No Image Storage:
            </Typography>
            <Typography variant="body2" paragraph>
              When you scan a barcode, the camera captures the barcode data (numbers/text) but no
              actual images are retained. All camera processing happens locally on your device.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              3. INFORMATION WE COLLECT
            </Typography>
            <Typography
              variant="subtitle1"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              Account Information (Optional):
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2">
                Email address (if you create an account)
              </Typography>
              <Typography component="li" variant="body2">
                Name and profile information (if provided)
              </Typography>
              <Typography component="li" variant="body2">
                Country and language preferences
              </Typography>
            </Box>

            <Typography
              variant="subtitle1"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              Usage Data:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2">
                Products you scan (barcode numbers and product information)
              </Typography>
              <Typography component="li" variant="body2">
                Search queries within the app
              </Typography>
              <Typography component="li" variant="body2">
                App interaction patterns and preferences
              </Typography>
              <Typography component="li" variant="body2">
                Scan history (stored locally on your device for 60 days)
              </Typography>
            </Box>

            <Typography
              variant="subtitle1"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              Device Information:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2">
                Device type and operating system
              </Typography>
              <Typography component="li" variant="body2">
                App version for technical support
              </Typography>
              <Typography component="li" variant="body2">
                Crash reports and performance data (anonymized)
              </Typography>
            </Box>

            <Typography
              variant="subtitle1"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              Location Data:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2">
                Only if you grant permission
              </Typography>
              <Typography component="li" variant="body2">
                Used for regional product recommendations
              </Typography>
              <Typography component="li" variant="body2">
                Never shared with third parties
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              4. HOW WE USE YOUR INFORMATION
            </Typography>
            <Typography variant="body2" paragraph>
              We use collected information to:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2">
                Provide barcode scanning and product analysis
              </Typography>
              <Typography component="li" variant="body2">
                Deliver personalized nutrition recommendations
              </Typography>
              <Typography component="li" variant="body2">
                Improve our product database and AI algorithms
              </Typography>
              <Typography component="li" variant="body2">
                Provide customer support
              </Typography>
              <Typography component="li" variant="body2">
                Send important app updates (if you have an account)
              </Typography>
              <Typography component="li" variant="body2">
                Analyze usage patterns to enhance user experience
              </Typography>
              <Typography component="li" variant="body2">
                Comply with legal obligations
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              5. DATA SOURCES AND ACCURACY
            </Typography>
            <Typography
              variant="subtitle1"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              Product Information:
            </Typography>
            <Typography variant="body2" paragraph>
              We source product data from OpenFoodFacts, the world&apos;s largest collaborative food
              database, and other verified public databases.
            </Typography>
            <Typography
              variant="subtitle1"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              Additive Safety Data:
            </Typography>
            <Typography variant="body2" paragraph>
              Safety information comes from official sources including EFSA (European Food Safety
              Authority), FDA, and other regulatory bodies.
            </Typography>
            <Typography
              variant="subtitle1"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              AI Enhancement:
            </Typography>
            <Typography variant="body2" paragraph>
              Our AI fills gaps in official data using established regulatory patterns and
              scientific literature. All AI-generated content is clearly labeled and distinguished
              from official data.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              6. DATA SHARING AND DISCLOSURE
            </Typography>
            <Typography variant="body2" paragraph>
              We do not sell, rent, or trade your personal information to third parties.
            </Typography>
            <Typography variant="body2" paragraph>
              We may share information only in these limited circumstances:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2">
                With trusted service providers who help operate our app (under strict
                confidentiality agreements)
              </Typography>
              <Typography component="li" variant="body2">
                Anonymized, aggregated data for research and improvement purposes
              </Typography>
              <Typography component="li" variant="body2">
                When required by law or to protect our rights and users&apos; safety
              </Typography>
              <Typography component="li" variant="body2">
                In case of business transfer (under the same privacy protections)
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              7. YOUR RIGHTS AND CHOICES
            </Typography>
            <Typography variant="body2" paragraph>
              You have the right to:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2">
                <strong>Access:</strong> Request a copy of your personal data
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Correction:</strong> Update or correct inaccurate information
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Deletion:</strong> Request deletion of your personal data
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Portability:</strong> Request your data in a portable format
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Opt-out:</strong> Unsubscribe from communications at any time
              </Typography>
            </Box>
            <Typography variant="body2" paragraph sx={{ mt: 2 }}>
              To exercise these rights, contact us at <strong>info@was2eat.com</strong>
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              8. DATA RETENTION AND SECURITY
            </Typography>
            <Typography
              variant="subtitle1"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              Retention Periods:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2">
                Account data: Until you delete your account
              </Typography>
              <Typography component="li" variant="body2">
                Scan history: Automatically deleted after 60 days (stored locally)
              </Typography>
              <Typography component="li" variant="body2">
                Usage data: May be retained in anonymized form for service improvement
              </Typography>
            </Box>

            <Typography
              variant="subtitle1"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              Security Measures:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2">
                Industry-standard encryption for data in transit and at rest
              </Typography>
              <Typography component="li" variant="body2">
                Secure cloud infrastructure with regular security updates
              </Typography>
              <Typography component="li" variant="body2">
                Regular security audits and vulnerability assessments
              </Typography>
              <Typography component="li" variant="body2">
                Limited access to personal data on a need-to-know basis
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              9. CHILDREN&apos;S PRIVACY
            </Typography>
            <Typography variant="body2" paragraph>
              Was2Eat is not intended for children under 13. We do not knowingly collect personal
              information from children under 13. If we become aware that we have collected such
              information, we will delete it immediately.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              10. INTERNATIONAL DATA TRANSFERS
            </Typography>
            <Typography variant="body2" paragraph>
              Your information may be transferred to and processed in countries other than your own.
              We ensure appropriate safeguards are in place to protect your data in accordance with
              applicable privacy laws.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              11. CHANGES TO THIS PRIVACY POLICY
            </Typography>
            <Typography variant="body2" paragraph>
              We may update this Privacy Policy periodically. Significant changes will be
              communicated through the app or via email (if you have an account) with at least 30
              days advance notice. Your continued use of Was2Eat after changes constitutes
              acceptance of the updated policy.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              12. THIRD-PARTY SERVICES
            </Typography>
            <Typography variant="body2" paragraph>
              Our app may contain links to third-party websites or services. This Privacy Policy
              does not apply to those external sites. We encourage you to review their privacy
              policies.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              13. CONTACT INFORMATION
            </Typography>
            <Typography variant="body2" paragraph>
              For questions about this Privacy Policy or to exercise your privacy rights:
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>Email:</strong> info@was2eat.com
              <br />
              <strong>Address:</strong> Sepapaja tn 6, 15551 Tallinn, Harju Maakond, Estonia
            </Typography>
            <Typography variant="body2" paragraph>
              We respond to privacy inquiries within 30 days as required by applicable law.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ color: "#00bf63", fontWeight: "bold" }}
            >
              14. LEGAL BASIS FOR PROCESSING (GDPR)
            </Typography>
            <Typography variant="body2" paragraph>
              For users in the European Union, our legal basis for processing your data includes:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2">
                <strong>Consent:</strong> For optional features like location services
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Contract:</strong> To provide our app services
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Legitimate Interest:</strong> To improve our services and provide support
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Legal Obligation:</strong> To comply with applicable laws
              </Typography>
            </Box>
            <Typography variant="body2" paragraph sx={{ mt: 2 }}>
              You have the right to lodge a complaint with your local data protection authority if
              you have concerns about our data processing.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ textAlign: "center", p: 2, bgcolor: "grey.50", borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary">
              This privacy policy is effective as of the date listed above and applies to all users
              of the Was2Eat mobile application.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
