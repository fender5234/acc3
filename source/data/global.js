const addFakeUrl = (payload) => {
  const data = typeof payload === 'string' ? {title: payload} : payload;
  data.url = '#!';
  return data;
};

const projectName = 'SUPERGYM';

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
  description: `Сайт омского спортивного клуба ${projectName}.`,
  navLinks: ['Услуги', 'Абонементы', 'Акции', 'Тренеры', 'Расписание'].map(addFakeUrl),
  projectName,
  socials: [
    {
      id: 'vk',
      title: 'Мы в Вконтакте',
    },
    {
      id: 'ok',
      title: 'Мы в Одноклассниках',
    },
    {
      id: 'reddit',
      title: 'Мы в Reddit',
    },
  ].map(addFakeUrl),
  tel: {
    title: '8-800-555-55-55',
    url: 'tel:+78005555555',
  },
});
