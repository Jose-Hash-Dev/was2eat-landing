import { Box, Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 3,
        width: "100%",
        borderBottomRightRadius: "50px",
        borderBottomLeftRadius: "50px",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
          }}
        >
          <Link href="/">
            <Image
              src="/images/logo-transparent-with-text.png"
              alt="Company Logo"
              width={120}
              height={70}
            />
          </Link>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Button href="#application" color="inherit">
              Application
            </Button>
            <Button href="#about" color="inherit">
              About Us
            </Button>
            <Button href="#careers" color="inherit">
              Careers
            </Button>
            <Button href="#contact-us" color="inherit">
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navigation;
