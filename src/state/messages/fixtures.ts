import { User, Channel } from "@messenger/state/messages/types";

const users = [
  {
    id: 'jdoe',
    displayName: 'John Doe',
  },
  {
    id: 'ckatia',
    displayName: 'Christel Katia',
  },
  {
    id: 'fville',
    displayName: 'Flora Ville',
  },
  {
    id: 'vavidan',
    displayName: 'Victor Avidan',
  },
] satisfies User[];

const me = users[0];

const channels = [
  {
    ...users[1],
    messages: [
      {
        timestamp: new Date(2024, 11, 8, 12, 34, 55),
        senderId: users[1].id,
        content: 'Hello!',
        isRead: true,
      },
      {
        timestamp: new Date(2024, 11, 8, 12, 35, 35),
        senderId: me.id,
        content: 'Hi!',
        isRead: true,
      },
      {
        timestamp: new Date(2024, 11, 8, 12, 36, 12),
        senderId: users[1].id,
        content: 'Fancy new app you have here.',
        isRead: true,
      },
    ],
  },
  {
    ...users[2],
    messages: [
      {
        timestamp: new Date(2024, 11, 9, 8, 23, 12),
        senderId: users[2].id,
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque, elit ac sodales pellentesque, metus nisl tempor ante, a dignissim eros turpis in dui. Sed at lectus augue. Vestibulum sed velit mauris. Nulla at interdum dui. Morbi eu urna dignissim, tempus justo aliquet, laoreet libero. Suspendisse porta enim est, eu sagittis tellus faucibus sed. Integer faucibus metus sit amet congue pretium.',
        isRead: true,
      },
      {
        timestamp: new Date(2024, 11, 10, 10, 21, 16),
        senderId: me.id,
        content:
          'In non imperdiet dolor, nec lacinia felis. Suspendisse condimentum orci ut lobortis commodo. Donec id ex tellus. Vivamus egestas quam a neque pharetra, in ornare tellus eleifend. Donec finibus at sem quis posuere. Maecenas eget elit ornare, ultrices turpis a, ornare libero. Ut id pellentesque sem, quis viverra erat. Nulla congue hendrerit posuere. Phasellus bibendum eros eget lobortis sagittis.',
        isRead: true,
      },
      {
        timestamp: new Date(2024, 11, 10, 12, 36, 12),
        senderId: users[2].id,
        content:
          'Nam eget eros tristique, feugiat tellus non, facilisis tortor. Cras in lacinia velit. Suspendisse dignissim nisl eget dolor hendrerit, in dapibus lectus malesuada. Aliquam mollis ipsum in ligula viverra dignissim. Donec nec ante eget tortor cursus posuere in id dolor. Donec iaculis lorem malesuada nibh tempus, sit amet tincidunt augue sagittis. Aliquam rutrum facilisis ipsum, et malesuada justo viverra ac.',
        isRead: false,
      },
      {
        timestamp: new Date(2024, 11, 10, 15, 55, 31),
        senderId: users[2].id,
        content:
          'Vestibulum lobortis, lacus in laoreet tincidunt, nisi est posuere ex, et porta magna mauris in turpis. Curabitur quis fermentum velit. Suspendisse blandit erat non lectus varius pellentesque. Proin fermentum pretium neque sed viverra. Vestibulum nunc orci, porttitor eu efficitur ut, congue ut tellus. Sed efficitur dictum eros sed viverra. In ac eleifend libero. Nam ac iaculis nisl, vitae finibus leo.',
        isRead: false,
      },
    ],
  },
] satisfies Channel[];

export default {
  users,
  me,
  channels,
};
