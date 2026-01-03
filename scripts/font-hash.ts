const FONT_KEY = (() => {
  const input = "Montserrat Variable|Poppins";
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return `__f${Math.abs(hash)}`;
})();
