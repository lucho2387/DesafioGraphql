const buttonForm = document.getElementById("publish");
buttonForm.addEventListener("click", (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `mutation {
                        createProducto(datos: {
                                nombre: "camarainalambrica",
                                descripcion: "asdsa",
                                codigo: 020,
                                imagen: "wwasdsa",
                                precio: 12500,
                                stock: 10
                            }) {
                                id
                            }
                        }
                    `,
        })
    ,})
    .then((res) => res.json())
    .then((res) => console.log(res));
});