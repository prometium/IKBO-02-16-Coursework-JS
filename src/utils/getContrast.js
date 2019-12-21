const isHexColor = hexcolor =>
  /^#[0-9A-F]{6}$/i.test(hexcolor) || /^#([0-9A-F]{3}){1,2}$/i.test(hexcolor);

export default function getContrast(hexcolor) {
  hexcolor = hexcolor.trim();

  if (!isHexColor(hexcolor)) {
    throw new Error('Invalid HEX color.');
  }

  hexcolor = hexcolor.replace('#', '');

  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map(component => component + component)
      .join('');
  }

  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);

  const yiq = Math.round(
    (parseInt(r) * 299 + parseInt(g) * 587 + parseInt(b) * 114) / 1000
  );

  return yiq >= 128 ? '#000' : '#fff';
}
