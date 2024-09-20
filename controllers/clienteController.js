const Cliente = require('../models/Cliente');

//funcion para obtener el siguiente _id disponible para un usuario

const getNextClientId = async () => {
    try {
        const lastCliente = await Cliente.findOne().sort({ _id: -1 }).exec();
        if (lastCliente) {
            const lastId = parseInt(lastCliente._id.replace('cliente_', ''));
            const nextId = lastId + 1;
            return `cliente_${nextId.toString().padStart(3, '0')}`;
        }
        return 'cliente_001';
    } catch (error) {
        throw new Error('Error al obtener el siguiente ID de usuario');
    }
};

// Trae la lista completa de los clientes de la base de datos.
exports.getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Busca un cliente en la base de datos utilizando el ID proporcionado.
exports.getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crea un nuevo cliente en la base de datos
exports.createCliente = async (req, res) => {
    try {
        const { nombre, apellido, email, telefono, direccion } = req.body;

        const nextId = await getNextClientId();

        const cliente = new Cliente({
            _id: nextId,
            nombre,
            apellido,
            email,
            telefono,
            direccion
        });

        const nuevoCliente = await cliente.save();
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualiza la información de un cliente existente en la base de datos utilizando su ID.
exports.updateCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.status(200).json(cliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Elimina un cliente de la base de datos utilizando su ID.
exports.deleteCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.status(200).json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
