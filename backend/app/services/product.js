class ProductService {
    constructor() {
        this.products = [
            { id: 1, name: "Torta Chilena", description: "Drinks and refreshments", price: 5.00, stock: 10, category_id: 1 },
            { id: 2, name: "Cafe", description: "Quick bites and light food", price: 2.50, stock: 10, category_id: 2 },
            { id: 3, name: "Matcha", description: "treats and pastries", price: 3.00, stock: 10, category_id: 3 },
            { id: 4, name: "Crema", description: "Hearty meals and dishes", price: 10.00, stock: 10, category_id: 4 },
            { id: 5, name: "Ensalada", description: "Fresh and healthy salads", price: 7.50, stock: 10, category_id: 5 }
        ];
    }

    getAllProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(product => product.id == id);
    }

    createProduct(productData) {
        const newProduct = {
            id: this.products.length + 1,
            ...productData
        };
        this.products.push(newProduct);
        return newProduct;
    }

    updateProduct(id, productData) {
        const product = this.getProductById(id);
        if (!product) return null;

        product.name = productData.name || product.name;
        product.description = productData.description || product.description;
        product.price = productData.price || product.price;
        product.stock = productData.stock || product.stock;
        product.category_id = productData.category_id || product.category_id;
        return product;
    }

    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id == id);
        if (index === -1) return false;

        this.products.splice(index, 1);
        return true;
    }
}

module.exports = new ProductService();