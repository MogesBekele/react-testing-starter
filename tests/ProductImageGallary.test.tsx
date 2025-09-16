import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../src/components/ProductImageGallery";

describe("ProductImageGallary", () => {
  it("should render no list of image when i gallery is empty", () => {
    render(<ProductImageGallery imageUrls={[]} />);

    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });

  it("should render a list of images", () => {
    const imageUrls = [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(imageUrls.length);

    imageUrls.forEach((imageUrl, index) => {
      const image = images[index];
      expect(image).toHaveAttribute("src", imageUrl);
    })
  });

});
