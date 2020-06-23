export default {
  parseInt(value) {
    if (typeof value === 'number') return value;
    if (!value) return value;
    return parseInt(value) || 0;
  },
};
