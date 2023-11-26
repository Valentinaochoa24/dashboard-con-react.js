import { TeamOutlined } from '@ant-design/icons';

const icons = {
  TeamOutlined
};

const students = {
  id: 'students',
  title: 'Students',
  type: 'group',
  children: [
    {
      id: 'students',
      title: 'Students',
      type: 'item',
      url: '/students',
      icon: icons.TeamOutlined
    }
  ]
};

export default students;
