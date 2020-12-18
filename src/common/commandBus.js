
module.exports = class CommandBus {
    constructor()
    {
        this._commandHandlers = {}
    }

    addCommandHandler(commandName, commandHandler)
    {
        if(typeof commandName !== 'string')
            throw new Error(`commandName is type of ${typeof commandName}. It must be string.`);
        this._commandHandlers[commandName] = commandHandler;
    }

    dispatch(command)
    {
        let CommandHandlerType = this._commandHandlers[command.constructor.name];
        let commandHandler = new CommandHandlerType(command);
        return commandHandler.handle();
    }

    static get instance() {
        if(CommandBus._instance === null || CommandBus._instance === undefined)
            CommandBus._instance = new CommandBus();
        return CommandBus._instance;
    }
}