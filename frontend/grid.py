from PIL import Image, ImageDraw

img = Image.open("public/hero-section-img.png").convert("RGB")
draw = ImageDraw.Draw(img)

width, height = img.size

step = 100
for x in range(0, width, step):
    draw.line([(x, 0), (x, height)], fill="red", width=2)
    draw.text((x+5, 5), str(x), fill="red")

for y in range(0, height, step):
    draw.line([(0, y), (width, y)], fill="red", width=2)
    draw.text((5, y+5), str(y), fill="red")

img.save("grid.jpg", quality=50)
