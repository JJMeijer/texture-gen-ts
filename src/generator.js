const generatePaletteColorArray = (palette) => {
  const hexArrays = palette.map((color) => Array(color.prio).fill(color.hex));
  return hexArrays.flat();
};

const getRandomColor = (paletteColorArray) => {
  const randomIndex = Math.floor(Math.random() * paletteColorArray.length);
  return paletteColorArray[randomIndex];
};

export default function generate() {
  const palette = [
    {
      hex: '#362417',
      prio: 80,
    },
    {
      hex: '#855838',
      prio: 20,
    },
  ];

  const pixelSize = 20;

  const texture = document.getElementById('texture');
  const { width, height } = texture;

  for (let i = 0; i < width / pixelSize; i += 1) {
    for (let j = 0; j < height / pixelSize; j += 1) {
      const ctx = texture.getContext('2d');
      ctx.fillStyle = getRandomColor(generatePaletteColorArray(palette));
      ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
    }
  }
}
