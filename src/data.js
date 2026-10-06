export const PHONE_DISPLAY = '(909) 409-3913';
export const PHONE_E164 = '+19094093913';
export const ADDRESS_LINE_1 = '28480 CA-74';
export const ADDRESS_LINE_2 = 'Romoland, CA 92585';
export const MAPS_URL = 'https://maps.google.com/?q=28480+CA-74+Romoland+CA+92585';

export const services = [
  {
    name: 'Cut & style',
    items: ['Haircut', 'Bang trim', 'Curly hair', 'Blowdry', 'Blowouts', 'Hairstyling', 'Updos'],
  },
  {
    name: 'Color',
    items: [
      'Hair coloring',
      'Balayage',
      'Hair highlighting',
      'Ombre hair color',
      'Gloss or Glaze',
      'Hair glossing',
      'Hair glazing',
    ],
  },
  {
    name: 'Treatments & extensions',
    items: [
      'Keratin treatments',
      'Brazilian hair straightening',
      'Hair straightening',
      'Hair hydration treatments',
      'Hair extensions',
    ],
  },
];

export const serviceOptions = ['Not sure yet', ...services.flatMap((g) => g.items)];

export const timesOfDay = ['Morning', 'Midday', 'Afternoon'];

export const gallery = [
  { src: '/img/blonde.jpg', label: 'Icy blonde' },
  { src: '/img/balayage.png', label: 'Soft balayage' },
  { src: '/img/hair-3.jpg', label: 'Violet' },
  { src: '/img/hair-2.jpg', label: 'Mushroom blend' },
  { src: '/img/hair-1.jpg', label: 'Copper waves' },
];

// Monday-first; Sunday closed.
export const hours = [
  { day: 'Monday', time: '9am – 5pm' },
  { day: 'Tuesday', time: '9am – 5pm' },
  { day: 'Wednesday', time: '9am – 5pm' },
  { day: 'Thursday', time: '9am – 5pm' },
  { day: 'Friday', time: '9am – 5pm' },
  { day: 'Saturday', time: '9am – 5pm' },
  { day: 'Sunday', time: 'Closed', closed: true },
];

export const reviews = [
  {
    name: 'Elva Acosta',
    when: '4 months ago',
    text: 'I had a great experience here! The atmosphere is so cute and classy and clean. Amanda did my hair and I love it!😍 She was so kind, nice, and we had a good conversation. She was also very attentive and made sure to keep me updated with the …',
  },
  {
    name: 'Brisa Renteria',
    when: '3 months ago',
    text: "I had such a great experience with Amanda! From the moment I walked in, she was friendly, professional, and made me feel completely comfortable. She took the time to listen to exactly what I wanted and made sure every detail was perfect. My hair turned out even better than I expected, and I’ve received so many compliments since my appointment.\n\nAmanda is incredibly talented, knowledgeable, and truly cares about her clients. The salon was clean, welcoming, and had a great atmosphere. I highly recommend Amanda to anyone looking for quality service and beautiful results. I’ll definitely be coming back for my future appointments!\n\nThank you, Amanda, for making me feel so confident and happy with my hair! 💕✨",
  },
  {
    name: 'Brenda Lopez',
    when: '4 months ago',
    text: "Very happy I have found this hidden gem! Amanda has been the best. My first time I came in with her was in January for a haircut which I absolutely loved, she did face framing and long layers. This second time I decided to trust her with coloring my virgen hair and I loved it! She listened to me when I told her I wanted to do something low maintenance and not too blonde. Ever since, I've received so many compliments on my hair and I feel so much better. It's exactly what I needed. Amanda is the best!",
  },
  {
    name: 'diamond gutierrez',
    when: '2 months ago',
    text: 'Absolutely loved how my hair came out feels so healthy and shiny. I booked with Amanda she is the sweetest and really informative. I trusted her and I have no regrets! Definitely will be back',
  },
  {
    name: 'Elise Varner',
    when: '2 months ago',
    text: 'I LOVVEEE my hair. Amanda literally did exactly what I asked for. I wanted ashy highlights & that’s exactly what i got. She analyzed my hair well & even recommended ideas to better help with achieving my results. Definitely am coming back for low lights & toner to achieve a blonder look due to having a warm undertone. She definitely knows what she is talking about & is so nice. The beauty salon was also so cute & clean. Thank you so much Amanda!',
  },
];
