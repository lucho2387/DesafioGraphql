const request = require('supertest')
const { expect } = require('chai')

describe("test api rest full", () => {
	describe("Probando el GET", () => {
		it("debería retornar un status 200", async () => {
			let response = await request("http://localhost:8080").get(
				"/api/products"
			);
			expect(response.status).to.eql(200);
		});
	});
	describe("Probando el POST", () => {
		it("debería incorporar un producto", async () => {
			let producto = {
				nombre: "Nuevo Producto",
                descripcion: "prueba de un nuevo producto",
                codigo: "010",
                imagen: "https://http2.mlstatic.com/D_NQ_NP_878234-MLA48771138882_012022-O.webp",
				precio: 10950,
                stock: 5,
			};
			let response = await request("http://localhost:8080")
				.post("/api/products")
				.send(producto);
			expect(response.status).to.eql(200);
		});
	});
	describe("Probando el PUT", () => {
		it("debería actualizar un producto", async () => {
			let producto = {
				nombre: "Camara de Seguridad Sony",
				precio: 12500,
				stock: 6
			};
			let response = await request("http://localhost:8080")
				.put("/api/products/62e68c0814df2c2e0c22a137")
				.send(producto);

			expect(response.status).to.eql(200);
		});
	});
	describe("Probando el DELETE", () => {
		it("debería borrar un producto", async () => {
			let response = await request("http://localhost:8080").delete(
				"/api/products/62e68c0814df2c2e0c22a137"
			);
			expect(response.status).to.eql(200);
		});
	});
});
