const flatten = items => items.reduce((acc, arr) => [...acc, ...arr], []);

const flatMap = fn => items => flatten(items.map(fn));

export default {
  flatMap,
};