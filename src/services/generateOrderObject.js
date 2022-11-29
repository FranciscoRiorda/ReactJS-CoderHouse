const generateOrderObject = (nombre, apellido, telefono, correo, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrderObject;