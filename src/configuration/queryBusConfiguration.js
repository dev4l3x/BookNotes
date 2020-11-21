const QueryBus = require('../common/queryBus');
const GetTokenQuery = require('../auth/infraestructure/cqrs/queries/getTokenQuery');
const GetTokenQueryHandler = require('../auth/infraestructure/cqrs/handlers/getTokenQueryHandler');

module.exports = function configureQueryBus(){
    QueryBus.instance.addQueryHandler(GetTokenQuery.name, GetTokenQueryHandler);
}