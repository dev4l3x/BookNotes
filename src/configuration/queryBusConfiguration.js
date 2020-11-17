const QueryBus = require('../common/queryBus');
const GetTokenQuery = require('../auth/infraestructure/getTokenQuery');
const GetTokenQueryHandler = require('../auth/infraestructure/getTokenQueryHandler');

module.exports = function configureQueryBus(){
    QueryBus.instance.addQueryHandler(GetTokenQuery.name, GetTokenQueryHandler);
}