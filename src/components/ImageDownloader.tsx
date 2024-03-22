import React from "react";

interface ImageDownloaderProps {
  imageUrl: string;
  imageName?: string;
}

const ImageDownloader: React.FC<ImageDownloaderProps> = ({
  imageUrl,
  imageName = "image.jpg",
}) => {
  const downloadImage = () => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a new anchor element
        const anchor = document.createElement("a");
        anchor.href = window.URL.createObjectURL(blob);
        anchor.download = imageName;

        // Triggering the download by simulating click
        document.body.appendChild(anchor);
        anchor.click();

        // Clean up
        document.body.removeChild(anchor);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  return <button onClick={downloadImage}>Download Image</button>;
};

// Example usage:
const ExampleComponent: React.FC = () => {
  return (
    <div>
      <h1>Image Downloader</h1>
      <ImageDownloader
        imageUrl="https://photow-profile-images.s3.us-west-2.amazonaws.com/files/missions/check-in/74766974-2cbe-4207-8bb1-110c5aade9f2.jpg"
        imageName="downloaded001.jpg"
      />
    </div>
  );
};

export default ExampleComponent;
