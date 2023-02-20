const empty = {};

const isObject = (x: unknown): any => Object(x) === x;

export const diff = (left: any, right: any, rel = 'left'): any =>
  Object.entries(left)
    .map(([k, v]) =>
      isObject(v) && isObject(right[k])
        ? [k, diff(v, right[k], rel)]
        : right[k] !== v
        ? [k, { [rel]: v }]
        : [k, empty]
    )
    .reduce((acc, [k, v]) => (v === empty ? acc : { ...acc, [k]: v }), empty);
