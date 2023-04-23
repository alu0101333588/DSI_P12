
import 'mocha';
import {expect} from 'chai';
import request from 'request';



describe('Propuestas FunkoExpressServer', () => {

    it('Acceso con parametros mal introducidos - Retorna 404', (done) => {
        const url = `http://localhost:3000/execmd/lk`;
        request({url: url, json: true}, (error, response) => {
            expect(response.statusCode).to.be.equal(404);
            done();
        });
    });
});