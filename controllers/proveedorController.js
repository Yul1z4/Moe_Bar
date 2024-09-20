const Proveedor = require('../models/Proveedor');

// Función para obtener el siguiente ID secuencial
const getNextId = async () => {
    const lastProveedor = await Proveedor.findOne().sort({ _id: -1 }).exec();
    if (!lastProveedor) {
        return 'Proveedor_001'; // Primer ID
    }

    const lastId = lastProveedor._id;
    const lastNumber = parseInt(lastId.split('_')[1], 10);
    const nextNumber = lastNumber + 1;
    return `Proveedor_${nextNumber.toString().padStart(3, '0')}`;
};

// Obtener todos los proveedores
exports.getProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un proveedor por ID
exports.getProveedorById = async (req, res) => {
    try {
        const proveedor = await Proveedor.findById(req.params.id);
        if (!proveedor) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        res.status(200).json(proveedor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo proveedor
exports.createProveedor = async (req, res) => {
    try {
        const nextId = await getNextId(); // Generar el siguiente ID secuencial
        const proveedor = new Proveedor({ _id: nextId, ...req.body });
        const nuevoProveedor = await proveedor.save();
        res.status(201).json(nuevoProveedor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un proveedor por ID
exports.updateProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findById(req.params.id);
        if (!proveedor) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        // No permitir cambios en el campo _id
        Object.assign(proveedor, req.body);
        const proveedorActualizado = await proveedor.save();
        res.status(200).json(proveedorActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un proveedor por ID
exports.deleteProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findById(req.params.id);
        if (!proveedor) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        await Proveedor.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'Proveedor eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
