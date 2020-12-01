const QueryBus = require('../common/queryBus');
const GetTokenQuery = require('../auth/infraestructure/cqrs/queries/getTokenQuery');
const GetTokenQueryHandler = require('../auth/infraestructure/cqrs/handlers/getTokenQueryHandler');
const GetBooksQuery = require('../books/infraestructure/cqrs/queries/getBooksQuery');
const GetBooksQueryHandler = require('../books/infraestructure/cqrs/handlers/getBooksQueryHandler');

module.exports = function configureQueryBus(){
    QueryBus.instance.addQueryHandler(GetTokenQuery.name, GetTokenQueryHandler);
    QueryBus.instance.addQueryHandler(GetBooksQuery.name, GetBooksQueryHandler);
}