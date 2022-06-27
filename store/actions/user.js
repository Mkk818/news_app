export const addClip = ({ clip }) => {
  return {
    type: 'ADD_CLIP',
    // clip: clip ↓省略
    clip,
  };
};

export const deleteClip = ({ clip }) => {
  return {
    type: 'DELETE_CLIP',
    clip,
  };
};
