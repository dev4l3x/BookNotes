

module.exports = class QueryBus {

    static _instance;

    constructor()
    {
        this._queryHandlers = {}
    }

    addQueryHandler(queryName, queryHandler){
        if(typeof queryName !== 'string')
            throw new Error(`queryName is type of ${typeof queryName}. It must be string.`);

        this._queryHandlers[queryName] = queryHandler;
    }

    dispatch(query)
    {
        const QueryHandlerType = this._queryHandlers[query.constructor.name];
        const queryHandler = new QueryHandlerType(query);
        return queryHandler.handle();
    }

    static get instance() {
        if(QueryBus._instance === null || QueryBus._instance === undefined)
            QueryBus._instance = new QueryBus();
        return QueryBus._instance;
    }
}