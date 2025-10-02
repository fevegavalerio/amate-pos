class PaymentService {
    constructor() {
        this.payments = [
            {
                id: 1,
                sale_id: 1,
                amount: 25.00,
                method: "cash",
                paid_at: new Date().toISOString()
            },
            {
                id: 2,
                sale_id: 2,
                amount: 15.50,
                method: "card",
                paid_at: new Date().toISOString()
            }
        ];
    }

    getAllPayments() {
        return this.payments;
    }

    getPaymentById(id) {
        return this.payments.find(payment => payment.id == id);
    }

    createPayment(paymentData) {
        const newPayment = {
            id: this.payments.length + 1,
            ...paymentData,
            paid_at: paymentData.paid_at || new Date().toISOString()
        };
        this.payments.push(newPayment);
        return newPayment;
    }

    updatePayment(id, paymentData) {
        const payment = this.getPaymentById(id);
        if (!payment) return null;

        payment.sale_id = paymentData.sale_id || payment.sale_id;
        payment.amount = paymentData.amount || payment.amount;
        payment.method = paymentData.method || payment.method;
        payment.paid_at = paymentData.paid_at || payment.paid_at;
        return payment;
    }

    deletePayment(id) {
        const index = this.payments.findIndex(payment => payment.id == id);
        if (index === -1) return false;

        this.payments.splice(index, 1);
        return true;
    }
}

module.exports = new PaymentService();