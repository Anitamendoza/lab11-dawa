const Tienda = require("../models/Tienda");

exports.crearTienda = async (req, res) => {
    try {
        const tienda = new Tienda(req.body);
        await tienda.save();
        res.send(tienda);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTiendas = async (req, res) => {
    try {
        const tiendas = await Tienda.find();
        res.json(tiendas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarTienda = async (req, res) => {
    try {
        const { departamento, distrito, cantidad } = req.body;
        let tienda = await Tienda.findById(req.params.id);

        if (!tienda) {
            return res.status(404).json({ msg: 'No existe la tienda' });
        }

        tienda.departamento = departamento;
        tienda.distrito = distrito;
        tienda.cantidad = cantidad;

        tienda = await Tienda.findOneAndUpdate({ _id: req.params.id }, tienda, { new: true });
        res.json(tienda);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.verTienda = async (req, res) => {
    try {
        let tienda = await Tienda.findById(req.params.id);

        if (!tienda) {
            return res.status(404).json({ msg: 'No existe la tienda' });
        }

        res.json(tienda);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTienda = async (req, res) => {
    try {
        let tienda = await Tienda.findById(req.params.id);

        if (!tienda) {
            return res.status(404).json({ msg: 'No existe la tienda' });
        }

        tienda = await Tienda.findOneAndRemove(req.params.id);
        res.json({ msg: 'La tienda ha sido eliminada' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
