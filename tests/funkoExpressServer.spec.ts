import 'mocha';
import {expect} from 'chai';
import request from 'request';



describe('Propuestas ejercicioPE', () => {

    it('Acceso con parametros sin introducir', (done) => {
        const url = `http://localhost:3000/funkos`;
        request({url: url, json: true}, (error, response, body) => {
            expect(body.success).to.be.equal(false);
            done();
        });
    });

    it('Acceso con parametros mal introducidos', (done) => {
        const url = `http://localhost:3000/funkos?nombreUsuario=andres&id=pepe`;
        request({url: url, json: true}, (error, response, body) => {
            expect(body.success).to.be.equal(false);
            done();
        });
    });

    it('Acceso con parametros bien introducidos', (done) => {
        const url = `http://localhost:3000/funkos?nombreUsuario=andres`;
        request({url: url, json: true}, (error, response, body) => {
            expect(body.success).to.be.equal(true);
            done();
        });
    });
});