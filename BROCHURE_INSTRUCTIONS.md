# Adding Brochure Images

To add brochure images to the website, follow these steps:

1. **Prepare Your Images**:
   - Ensure you have 12 brochure pages as JPG or PNG files
   - Name them in sequence: `brochure-1.jpg`, `brochure-2.jpg`, etc.
   - Recommended size: 1200x1600px (3:4 aspect ratio)
   - Maximum file size: 1MB per image for optimal loading

2. **Add Images to Project**:
   - Place all 12 images in the `public/brochures/` directory
   - The filenames should be:
     - `brochure-1.jpg`
     - `brochure-2.jpg`
     - ...
     - `brochure-12.jpg`

3. **Test the Brochure Viewer**:
   - Click the "View Brochure" button in the footer
   - You should be able to:
     - Navigate through pages using arrow buttons
     - Click on thumbnails to jump to specific pages
     - Download individual pages

4. **Customization (Optional)**:
   - To change the number of brochure pages, update the `brochureImages` array in `src/components/BrochureGallery.tsx`
   - To modify the styling, edit the `BrochureGallery` component

5. **Troubleshooting**:
   - If images don't appear, check the browser's console for 404 errors
   - Ensure all images are named correctly and in the right directory
   - Verify that image file extensions match exactly (.jpg vs .jpeg vs .png)
