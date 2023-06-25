import { Avatar } from './Avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export const WithPicture = {
  args: {
    src: "https://avatars.githubusercontent.com/u/26242553?s=96&v=4",
    size: "sm"
  },
};

export const WithName = {
  args: {
    size: "lg",
    children: "kc" 
  },
};

export const Small = {
  args: {
    size: "sm"
  },
};

export const Large = {
  args: {
    size: "lg"
  },
};

export const WithStyle = {
  args: {
    size: "lg",
    style: {backgroundColor: "green"}
  },
};
