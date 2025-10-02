class SaleService {
    constructor() {
        this.sales = [
            {
                id: 1,
                total_amount: 25.00,
                created_at: new Date().toISOString()
            },
            {
                id: 2,
                total_amount: 15.50,
                created_at: new Date().toISOString()
            }
        ];
    }

    getAllSales() {
        return this.sales;
    }

    getSaleById(id) {
        return this.sales.find(sale => sale.id == id);
    }

    createSale(saleData) {
        const newSale = {
            id: this.sales.length + 1,
            ...saleData,
            created_at: saleData.created_at || new Date().toISOString()
        };
        this.sales.push(newSale);
        return newSale;
    }

    updateSale(id, saleData) {
        const sale = this.getSaleById(id);
        if (!sale) return null;

        sale.total_amount = saleData.total_amount || sale.total_amount;
        sale.created_at = saleData.created_at || sale.created_at;
        return sale;
    }

    deleteSale(id) {
        const index = this.sales.findIndex(sale => sale.id == id);
        if (index === -1) return false;

        this.sales.splice(index, 1);
        return true;
    }
}

module.exports = new SaleService();