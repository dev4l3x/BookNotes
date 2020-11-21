const assert = require('assert');
const { response } = require('express');
const AuthenticateUserService = require('../src/auth/application/authenticateUserService');

require('dotenv').config();


describe('AuthenticateUserService', async () => {
    describe('when user is valid', async () => {
        it('should return an object with authorized and token', async () => {
            let mockRepository = {};
            mockRepository.findUserByUsernameAndPasswordOrNull = function(user){
                return { _id: 'testid' };
            };
    
            let authService = new AuthenticateUserService(mockRepository);
            let response = await authService.authenticate({password: 'testpass'});
    
            assert.strictEqual(response.authorized, true);
            assert.notStrictEqual(response.token, '');
            assert.notStrictEqual(response.token, null);
            assert.notStrictEqual(response.token, undefined);
        });
    });

    describe('when user is invalid', async () => {
        it('should return an object with authorized false and that does not have token', async () => {
            let mockRepository = {};
            mockRepository.findUserByUsernameAndPasswordOrNull = function(user){
                return null;
            };

            let authService = new AuthenticateUserService(mockRepository);
            let response = await authService.authenticate({password: 'testpass'});

            assert.strictEqual(response.authorized, false);
            assert.strictEqual(response.hasOwnProperty('token'), false);
        });
    });
});
