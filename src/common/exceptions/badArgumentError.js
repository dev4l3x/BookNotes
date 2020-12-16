
module.exports = class BadArgumentError extends Error {
  constructor(message) {
    super(message);
  }
};
