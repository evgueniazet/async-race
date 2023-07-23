export const changeRgbToHex = (rgb: string | null) => {
  function componentToHex(c: number) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  if (rgb) {
    const regex = /rgb\((\d+), (\d+), (\d+)\)/;
    const result = regex.exec(rgb);
    if (result) {
      const r = parseInt(result[1]);
      const g = parseInt(result[2]);
      const b = parseInt(result[3]);
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
  }

  return "#000000";
};
