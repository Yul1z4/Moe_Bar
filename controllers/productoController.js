const Producto = require('../models/Producto');

// Trae la lista completa de los productos de la base de datos.
exports.getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error: error.message });
    }
};

// Busca un producto en la base de datos utilizando el ID proporcionado.
exports.getProductoById = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el producto', error: error.message });
    }
};

// Crea un nuevo producto en la base de datos.
exports.createProducto = async (req, res) => {
    const { nombre, descripcion, precio, tipo, cantidad } = req.body;
    
    if (typeof cantidad !== 'number' || cantidad < 0) {
        return res.status(400).json({ message: 'Cantidad debe ser un número positivo' });
    }

    const producto = new Producto({ nombre, descripcion, precio, tipo, cantidad });
    try {
        const nuevoProducto = await producto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el producto', error: error.message });
    }
};

// Actualiza la información de un producto existente en la base de datos utilizando su ID.
exports.updateProducto = async (req, res) => {
    const { nombre, descripcion, precio, tipo, cantidad } = req.body;

    if (typeof cantidad !== 'number' || cantidad < 0) {
        return res.status(400).json({ message: 'Cantidad debe ser un número positivo' });
    }

    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, { nombre, descripcion, precio, tipo, cantidad }, { new: true });
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el producto', error: error.message });
    }
};

// Actualización parcial de un producto (PATCH)
exports.partialUpdateProducto = async (req, res) => {
    const actualizaciones = req.body;

    // Validación de cantidad si está incluida en el body
    if ('cantidad' in actualizaciones && (typeof actualizaciones.cantidad !== 'number' || actualizaciones.cantidad < 0)) {
        return res.status(400).json({ message: 'Cantidad debe ser un número positivo' });
    }

    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        // Actualizar solo los campos que se proporcionan
        Object.keys(actualizaciones).forEach(key => {
            producto[key] = actualizaciones[key];
        });

        const productoActualizado = await producto.save();
        res.status(200).json(productoActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto parcialmente', error: error.message });
    }
};

// Elimina un producto de la base de datos utilizando su ID.
exports.deleteProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error: error.message });
    }
};
