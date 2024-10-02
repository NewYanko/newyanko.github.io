export default {
  Delay: (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
};
