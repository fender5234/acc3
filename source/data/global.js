export default () => ({
  getImages(filename, additions = {}, useTablet = true, useMobile = true) {
    const tabletSuffix = useTablet ? '-tablet' : '';
    const mobileSuffix = useMobile ? '-mobile' : tabletSuffix;

    return Object.assign(additions, {
      default: `img/${filename}.jpg`,
      default2x: `img/${filename}@2x.jpg`,
      webp: `img/${filename}.webp`,
      webp2x: `img/${filename}@2x.webp`,
      webpTablet: `img/${filename}${tabletSuffix}.webp`,
      webpTablet2x: `img/${filename}${tabletSuffix}@2x.webp`,
      webpMobile: `img/${filename}${mobileSuffix}.webp`,
      webpMobile2x: `img/${filename}${mobileSuffix}@2x.webp`,
    });
  },
  projectName: 'SUPERGYM',
});
