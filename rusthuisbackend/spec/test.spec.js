let Request = require('request');
//let mongoose = require('mongoose');
//let Dokter = mongoose.model('Dokter');
describe("server", () => {
    describe("POST /rusthuis/adddokter", () => {
        let data = {};
        beforeAll((done) => {
            Request({
                method: 'POST',
                uri: 'http://localhost:3000/rusthuis/adddokter',
                body: { naam: 'Van Wassenhove', voornaam: 'Ilias',
                        telefoon: '0488 88 88 88', info: 'Extra info'},
                json: true
            },
                (error, response) => {
                    data.status = response.statusCode;
                    data.body = response.body;
                    done();
                }).auth(null, null, true, process.env.VALID_TOKEN)
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

        describe("DELETE /rusthuis/verwijderdokter", () => {
            let data = {};
            beforeAll(() => {
                Request.delete("http://localhost:3000/API/verwijderdokter/${dokterId}",
                    (error, response) => {
                        data.status = response.statusCode;
                        done();
                    }).auth(null, null, true, process.env.VALID_TOKEN)
            });

            it("status", () => {
                expect(data.status).toBe(200);
            });
        })

        describe("GET /rusthuis/dokter/:id", () => {
            let data = {};
            beforeAll(() => {
                Request.get("http://localhost:3000/API/dokter/${dokterId}",
                    (error, response) => {
                        data.status = response.statusCode;
                        data.body = JSON.parse(response.body);
                        done();
                    }).auth(null, null, true, process.env.VALID_TOKEN)
            });

            it("status", () => {
                expect(data.status).toBe(200);
            });

            it("body", () => {
                //Aanpassen?
                expect(data.body.length).toBe(0);
            });
        })
    });
});