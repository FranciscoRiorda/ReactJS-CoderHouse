const generateOrderObject = (nombre, apellido, telefono, correo, dni, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            dni: dni,
            correo: correo
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrderObject;