import cv2
import numpy as np

img = cv2.imread("public/hero-section-clean-widescreen.jpg")
h, w = img.shape[:2]

crop_x1, crop_y1 = int(w * 0.1), int(h * 0.3)
crop_x2, crop_y2 = int(w * 0.5), int(h * 0.8)
roi = img[crop_y1:crop_y2, crop_x1:crop_x2]

gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)
cv2.imwrite("thresh.jpg", thresh)

# Let's find contours in the thresholded image
contours, _ = cv2.findContours(thresh, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)

img_debug = roi.copy()
cv2.drawContours(img_debug, contours, -1, (0, 255, 0), 2)
cv2.imwrite("contours.jpg", img_debug)
