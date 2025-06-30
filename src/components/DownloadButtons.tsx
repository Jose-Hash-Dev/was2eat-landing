import { Box } from "@mui/material";
import Image from "next/image";

const DownloadButtons: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 1.5, md: 2 },
        mt: 2,
        alignItems: "center",
      }}
    >
      <a href="/application" target="" rel="noopener noreferrer">
        <Image
          src="/images/playmarket-download.png"
          alt="Get it on Google Play"
          width={150}
          height={50}
          style={{
            maxWidth: "140px",
            height: "auto",
            minHeight: "44px",
          }}
        />
      </a>

      <a href="/application" target="" rel="noopener noreferrer">
        <Image
          src="/images/appstore-download.svg"
          alt="Download on the App Store"
          width={150}
          height={50}
          style={{
            maxWidth: "130px",
            height: "auto",
            minHeight: "44px",
          }}
        />
      </a>
    </Box>
  );
};

export default DownloadButtons;
