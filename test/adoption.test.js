//
//  test/adoption.test.js
// Esto es un test funcional real, porque:
//      Levanta el servidor
//      Golpea endpoints reales
//      Verifica respuestas HTTP
// -------------------------------------------------- +
import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Adoption Router - Tests Funcionales", () => {
  // Test A
  it("A - Debe obtener todas las adopciones", async () => {
    const res = await requester.get("/api/adoptions");
    expect(res.status).to.equal(200);
    // expect(res.body).to.be.an("array");
    // devolvia: {  "status": "success",  "payload": [...]}
    expect(res.body.payload).to.be.an("array");
  });

  // Test B
    it("B - Debe crear una adopción correctamente", async () => {
    const adoptionMock = {
      userId: '64f000000000000000000001',
      petId: '64f000000000000000000002'
    };

    const res = await requester.post("/api/adoptions").send(adoptionMock);
    expect(res.status).to.be.oneOf([200, 201]);
  });

  // Test C
  it("C - Debe fallar si faltan datos", async () => {
    const res = await requester.post("/api/adoptions").send({});
    expect(res.status).to.equal(400);
  });

  // Test D
  it("D - Debe fallar al buscar una adopción inexistente", async () => {
    // const res = await requester.get("/api/adoptions/invalidID");
    const res = await requester.get("/api/adoptions/a0a0a0a0a0a0a0a0a0a0a0a0");
    expect(res.status).to.be.oneOf([400, 404]);
  });

});
