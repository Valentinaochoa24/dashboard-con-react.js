import { TeamOutlined } from '@ant-design/icons';

const icons = {
  TeamOutlined
};

const teachers = {
  id: 'teachers',
  title: 'Teachers',
  type: 'group',
  children: [
    {
      id: 'teachers',
      title: 'Teachers',
      type: 'item',
      url: '/teachers',
      icon: icons.TeamOutlined
    }
  ]
};

export default teachers;
