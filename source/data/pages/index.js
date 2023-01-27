import decline from '../../js/utils/decline.js';
import html from '../../js/utils/html.js';

const getSubscription = (months = 1, discount = 1) => {
  const times = 12 * months;
  const multiplier = parseInt(months * discount, 10);

  return {
    list: [
      {
        description: `${times} ${decline(times, ['занятие', 'занятия', 'занятий'])}`,
        heading: 'С тренером',
        price: 5000 * multiplier,
      },
      {
        description: 'с 8:00 до 17:00 ',
        heading: 'Дневной',
        price: 1700 * multiplier,
      },
      {
        description: 'с 8:00 до 22:00 ',
        heading: 'Полный день',
        price: 2700 * multiplier,
      },
    ].map((tariff) =>
      Object.assign(tariff, {
        link: {
          title: 'Купить абонемент',
          url: '#!',
        },
      })
    ),
    title: `${months} ${decline(months, ['месяц', 'месяца', 'месяцев'])}`,
  };
};

export default ({getImages, tel}) => {
  const trainersList = [
    {
      content: html`<ul>
        <li>Certified Level 3 Trainer</li>
        <li>Победитель чемпионата России по CrossFit</li>
        <li>Опыт — 6 лет</li>
      </ul>`,
      description: 'CrossFit',
      heading: 'Анна Павлова',
    },
    {
      content: html`<ul>
        <li>Certified Level 3 Trainer</li>
        <li>Победитель чемпионата России по CrossFit</li>
        <li>Опыт — 6 лет</li>
      </ul>`,
      description: 'CrossFit',
      heading: 'Алексей Лавров',
    },
    {
      content: html`<ul>
        <li>Certified Level 3 Trainer</li>
        <li>Победитель чемпионата России по CrossFit</li>
        <li>Опыт — 6 лет</li>
      </ul>`,
      description: 'CrossFit',
      heading: 'Александр Пашков',
    },
    {
      content: html`<ul>
        <li>Certified Level 3 Trainer</li>
        <li>Победитель чемпионата России по CrossFit</li>
        <li>Опыт — 6 лет</li>
      </ul>`,
      description: 'CrossFit',
      heading: 'Мария Кетова',
    },
  ].map((trainer, i) =>
    Object.assign(trainer, {
      image: getImages(`trainer-${i + 1}`, {alt: `Тренер ${trainer.heading}.`}, false, false),
    })
  );
  trainersList.push(trainersList[3], trainersList[2], trainersList[1], trainersList[0]);

  return {
    about: {
      content: html`<h2>Тренажерный зал</h2>
        <p>Просторный зал площадью 900 кв/м</p>
        <p>
          Supergym – самый большой фитнес центр за Уралом и идеальное место для укрепления тела и здоровья. Тренажерный
          зал оснащен всем необходимым современным оборудованием для всех спортсменов.
        </p>
        <p>
          В зале расположены отдельная зона для Crossfit и кардио-зона с 40 тренажерами. Также в фитнес центре есть
          несколько оборудованных залов для различных видов групповых занятий.
        </p> `,
      image: getImages('about', {alt: 'Каким выглядит один из наших залов.'}),
      video: {
        poster: getImages('about-video', {}, false, true),
        youtube: '9TZXsZItgdw',
      },
    },
    advantages: {
      heading: 'Наши преимущества',
      list: [
        {
          content: html`<p>Современные тренажеры на все группы мышц</p>`,
          key: 'Тренажеров',
          lead: true,
          value: '100',
        },
        {
          content: html`<h3>Площадь</h3>
            <p>Занимайтесь без очередей и толпучки</p>`,
          key: 'кв/м',
          value: '900',
        },
        {
          content: html`<h3>Собственная парковка</h3>
            <p>Вы всегда найдете место для своей машины на нашей парковке</p>`,
          key: 'машин',
          value: '70',
        },
        {
          content: html`<h3>Комфорт</h3>
            <p>Просторные раздевалки, душевые, фен, Wi-Fi, кулеры</p>`,
          key: 'мест',
          value: '350',
        },
        {
          content: html`<h3>Тренерский опыт</h3>
            <p>Добивайтесь своих целей быстрее с профессиональным тренером</p>`,
          key: 'лет',
          value: '5+',
        },
      ],
    },
    contacts: {
      heading: 'Контакты',
      lists: [
        [
          ['Адрес:', 'г. Омск, ул. 60 лет Октября, 7'],
          ['График работы:', 'Пн-Вс: с 8:00 до 22:00'],
        ],
        [
          ['Телефон:', html`<a href="${tel.url}">${tel.title}</a>`],
          ['Email:', html`<a href="mailto:omsk@supergym.ru">omsk@supergym.ru</a>`],
        ],
      ].map((list) => list.map(([key, value]) => ({key, value}))),
    },
    event: {
      description: html`<p>Ежегодные соревнования по CrossFit</p>`,
      heading: 'Super Games',
      datetime: {
        day: 7,
        month: 'Марта',
        date: '2019-03-07',
        time: '12:00',
        year: 2019,
      },
      image: getImages('supergames', {alt: 'Пловец кролем в брызгах воды.'}, false, false),
      link: {
        title: 'Заполнить заявку',
        url: '#!',
      },
    },
    promo: {
      heading: 'Акции',
      list: [
        {
          content: html`<h3>Год <strong>4999</strong></h3>
            <p>Безлимитный абонемент в тренажерный зал</p>`,
          image: getImages('promo', {alt: 'Спортсменка на фоне голубого неба.'}),
        },
        {
          content: html`<h3>Месяц бесплатно</h3>
            <p>Приведи друга, получи абонемент в подарок</p>`,
        },
        {
          content: html`<h3>Скидка 20%</h3>
            <p>Корпоративный фитнес с командой</p>`,
        },
      ].map((item) =>
        Object.assign(item, {
          link: {
            title: 'Подробнее',
            url: '#!',
          },
        })
      ),
    },
    reviews: {
      heading: 'Отзывы',
      list: Array.from({length: 3}, () => ({
        author: 'Анна Орлова',
        content: html`<p>
          «Хожу в SuperClub уже больше года. Нравится, что в клубе всегда чисто, тренажеры обновляют, персонал
          дружелюбный. Зал просторный, даже в вечернее время нет очередей»
        </p>`,
        image: getImages('avatar', {alt: 'Фото пользователя.'}, false, false),
      })),
    },
    subscriptions: {
      decor: getImages('wheels', {}, false, false),
      heading: 'Абонементы',
      groups: [getSubscription(), getSubscription(6, 0.9), getSubscription(12, 0.8)],
    },
    ticket: {
      action: 'https://echo.htmlacademy.ru',

      fields: [
        html`<input
            id="ticket-name"
            name="name"
            type="text"
            placeholder="Имя"
            pattern="^[A-Za-zА-Яа-яЁё\\- ]+$"
            required
          />
          <label for="ticket-name">Имя.</label>`,
        html`<input
            id="ticket-phone"
            name="phone"
            type="tel"
            placeholder="Телефон"
            pattern="^\\+?[\\d ()-]+$"
            required
          />
          <label for="ticket-phone">Телефон.</label>`,
      ],
      heading: 'Бесплатное занятие',
    },
    teaser: {
      features: ['Тренажёрный зал', 'Групповые занятия', 'Кардио-зона'],
      label: 'Омск',
      link: {
        title: 'Купить абонемент',
        url: '#subscriptions',
      },
      image: getImages('teaser', {alt: 'Каким Вы можете стать благодаря нам.'}, true, false),
      title: 'Фитнес центр',
    },
    trainers: {
      heading: 'Тренеры',
      list: trainersList,
    },
  };
};
