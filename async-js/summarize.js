export function summarize(...args) {
  return Promise.all(args).then((values) =>
    values.reduce((sum, n) => sum + n, 0)
  );
}