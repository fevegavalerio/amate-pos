class SaleItemService {
    constructor() {
        this.saleItems = [
            {
                id: 1,
                sale_id: 1,
                product_id: 1,
                quantity: 2,
                price: 5.00,
                subtotal: 10.00
            },
            {
                id: 2,
                sale_id: 1,
                product_id: 2,
                quantity: 1,
                price: 15.00,
                subtotal: 15.00
            }
        ];
    }

    getAllSaleItems() {
        return this.saleItems;
    }

    getSaleItemById(id) {
        return this.saleItems.find(item => item.id == id);
    }

    createSaleItem(itemData) {
        const newItem = {
            id: this.saleItems.length + 1,
            ...itemData
        };
        this.saleItems.push(newItem);
        return newItem;
    }

    updateSaleItem(id, itemData) {
        const item = this.getSaleItemById(id);
        if (!item) return null;

        item.sale_id = itemData.sale_id || item.sale_id;
        item.product_id = itemData.product_id || item.product_id;
        item.quantity = itemData.quantity || item.quantity;
        item.price = itemData.price || item.price;
        item.subtotal = itemData.subtotal || item.subtotal;
        return item;
    }

    deleteSaleItem(id) {
        const index = this.saleItems.findIndex(item => item.id == id);
        if (index === -1) return false;

        this.saleItems.splice(index, 1);
        return true;
    }
}

module.exports = new SaleItemService();