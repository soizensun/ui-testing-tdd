import Avatar from './Avatar';

export default {
    title: 'Example/Avatar',
    component: Avatar,
    tags: ['autodocs'],
};

export const WithPicture = {
    args: {
        src: "https://avatars.githubusercontent.com/u/26242553?s=96&v=4",
    }
}

export const WithName = {
    args: {
        children: "kc"
    },
};

export const WithIcon = {
    args: {
    },
  };

  export const WithStyle = {
    args: {
      style: { backgroundColor: "green" }
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