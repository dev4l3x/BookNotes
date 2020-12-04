
module.exports = function mapObject(mapInfo, source){
    let tempObj = {};
    for(let property of mapInfo.properties){
        let sourceValue = source[property];
        if((sourceValue === undefined || sourceValue === null) && property === "id"){
            sourceValue = source._id;
        }
        tempObj[property] = sourceValue;
    }

    return new mapInfo.type(tempObj);
}