
module.exports = function mapObject(destination, source){
    for(let property in destination){
        destination[property] = source[property];
    }
}