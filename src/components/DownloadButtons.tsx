import { Box } from "@mui/material";
import Image from "next/image";

const DownloadButtons: React.FC = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/playmarket-download.png"
          alt="Get it on Google Play"
          width={150}
          height={50}
          style={{ maxWidth: "110px", height: "auto" }}
        />
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/appstore-download.svg"
          alt="Download on the App Store"
          width={150}
          height={50}
          style={{ maxWidth: "100px", height: "auto" }}
        />
      </a>
    </Box>
  );
};

export default DownloadButtons;
