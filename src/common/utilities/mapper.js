
module.exports = function mapObject(mapInfo, source) {
  const tempObj = {};
  for (const property of mapInfo.properties) {
    let sourceValue = source[property];
    if ((sourceValue === undefined || sourceValue === null) &&
        property === 'id') {
      sourceValue = source._id;
    }
    tempObj[property] = sourceValue;
  }

  /* eslint-disable */
  return new mapInfo.type(tempObj);
};
