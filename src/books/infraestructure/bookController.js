const CreateBookCommand = require('../infraestructure/cqrs/commands/createBookCommand');
const CommandBus = require('../../common/commandBus');
const QueryBus = require('../../common/queryBus');
const BadArgumentError = require('../../common/exceptions/badArgumentError');
const GetBooksQuery = require('./cqrs/queries/getBooksQuery');
const {Query} = require('mongoose');

module.exports = class BookController {
  static async book_create_post(req, res, next) {
    const command = new CreateBookCommand(req.body.title, req.body.author, req.user);
    try {
      await CommandBus.instance.dispatch(command);
    } catch (error) {
      return next(error);
    }
    return res.status(201).send('Created');
  }

  static async book_get(req, res, next) {
    const query = new GetBooksQuery(req.user);

    try {
      const books = await QueryBus.instance.dispatch(query);

      return res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }
};
