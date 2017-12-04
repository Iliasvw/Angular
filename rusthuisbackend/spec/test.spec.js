let Request = require('request');
//let mongoose = require('mongoose');
//let Dokter = mongoose.model('Dokter');
describe("server", () => {
    let server;
    let dokterId;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
    });

    describe("POST /rusthuis/adddokter", () => {
        var data = {};
        beforeAll((done) => {
            Request({
                method: 'POST',
                uri: 'http://localhost:3000/rusthuis/adddokter',
                body: {
                    naam: 'Van Wassenhove', voornaam: 'Ilias',
                    telefoon: '0488 88 88 88', info: 'Extra info'
                },
                json: true
            },
                (error, response) => {
                    data.status = response.statusCode;
                    data.body = response.body;
                    done();
                }).auth(null, null, true, process.env.TEST_VALID_TOKEN)
        })

        it("status", () => {
            expect(data.status).toBe(200);
        });

        it("body", () => {
            expect(data.body.naam).toBe("Van Wassenhove");
            expect(data.body.voornaam).toBe("Ilias");
            expect(data.body.telefoon).toBe("0488 88 88 88");
            expect(data.body.info).toBe("Extra info");
            expect(data.body._id).toBeDefined();
            dokterId = data.body._id;
        });
    });

    describe("GET /rusthuis/dokter/:id", () => {
        var data = {};
        beforeAll((done) => {
            Request({
                method: 'GET',
                uri: "http://localhost:3000/rusthuis/dokter/" + dokterId,
                json: true
            },
                (error, response, body) => {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                }).auth(null, null, true, process.env.TEST_VALID_TOKEN)
        });

        it("status", () => {
            expect(data.status).toBe(200);
        });

        it("body", () => {
            expect(data.body.naam).toBe('Van Wassenhove');
        });
    });

    describe("DELETE /rusthuis/verwijderdokter/:id", () => {
        var data = {};
        beforeAll((done) => {
            Request({
                method: 'DELETE',
                uri: "http://localhost:3000/rusthuis/verwijderdokter/" + dokterId,
                json: true
            },
                (error, response, body) => {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                }).auth(null, null, true, process.env.TEST_VALID_TOKEN)
        });

        it("status", () => {
            expect(data.status).toBe(200);
        });

        it("body", () => {
            expect(data.body).toBe("removed dokter");
        });
    })
});