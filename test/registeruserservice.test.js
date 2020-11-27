const assert = require('assert');
const RegisterUserService = require('../src/auth/application/registerUserService');
const crypto = require('crypto');
require('dotenv').config();


describe('RegisterUserService', async () => {
    describe('when register new user', async () => {
        it('should create the user received with the password hashed (sha1)', async () => {
            let created = false;
            let passwordHashed = null;

            let mockRepository = {};
            mockRepository.create = function(user){
                created = true;
                passwordHashed = user.password;
            };
    
            let authService = new RegisterUserService(mockRepository);
            let response = await authService.register({password: 'testpass'});

            let expectedPassHash = crypto.createHash('sha1').update('testpass').digest('hex');
    
            assert.strictEqual(passwordHashed, expectedPassHash);
            assert.strictEqual(created, true);
        });
    });

});
