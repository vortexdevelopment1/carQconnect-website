import cv2
import numpy as np

img = cv2.imread("public/hero-section-clean-widescreen.jpg")
h, w = img.shape[:2]

# Crop roughly to the black box (left: 10% to 50%, top: 30% to 80%)
crop_x1, crop_y1 = int(w * 0.1), int(h * 0.3)
crop_x2, crop_y2 = int(w * 0.5), int(h * 0.8)
roi = img[crop_y1:crop_y2, crop_x1:crop_x2]

# Convert to grayscale and threshold to find the white QR background
gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)

# Find contours
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Find the largest contour that looks like a quad
best_quad = None
max_area = 0

for cnt in contours:
    area = cv2.contourArea(cnt)
    if area > 1000:  # arbitrary min size
        peri = cv2.arcLength(cnt, True)
        approx = cv2.approxPolyDP(cnt, 0.05 * peri, True)
        if len(approx) == 4 and area > max_area:
            max_area = area
            best_quad = approx

if best_quad is not None:
    # Adjust coordinates back to full image
    quad = best_quad.reshape(4, 2)
    quad[:, 0] += crop_x1
    quad[:, 1] += crop_y1
    
    # Sort corners: top-left, top-right, bottom-right, bottom-left
    # based on x+y and x-y
    s = quad.sum(axis=1)
    diff = np.diff(quad, axis=1)
    
    tl = quad[np.argmin(s)]
    br = quad[np.argmax(s)]
    tr = quad[np.argmin(diff)]
    bl = quad[np.argmax(diff)]
    
    ordered_quad = np.array([tl, tr, br, bl])
    
    print("Corners (pixels):")
    for pt in ordered_quad:
        print(f"[{pt[0]}, {pt[1]}]")
        
    print("\nCorners (percentages):")
    for pt in ordered_quad:
        print(f"[{pt[0]/w*100:.2f}, {pt[1]/h*100:.2f}]")
else:
    print("No quad found!")
