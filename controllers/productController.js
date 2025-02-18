import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
    const { name, description, price, stock } = req.body;

    const newProduct = new Product({ name, description, price, stock });

    try {
        const product = await newProduct.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (err) {
        res.status(500).json({ message: 'Error creating product', error: err });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Trouver tous les produits dans la base de données
        res.status(200).json({ products });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des produits', error: err });
    }
};

export const getProductById = async (req, res) => {
    const { id } = req.params;


    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'ID invalide' });
    }

    try {
        const product = await Product.findById(id);
        
    
        if (!product) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }

        res.status(200).json({ product });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération du produit', error: err });
    }
};
