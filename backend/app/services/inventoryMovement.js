class InventoryMovementService {
    constructor() {
        this.inventoryMovements = [
            {
                id: 1,
                product_id: 1,
                quantity: 10,
                movement_type: "IN",
                reason: "Initial stock",
                created_at: new Date().toISOString()
            },
            {
                id: 2,
                product_id: 2,
                quantity: -2,
                movement_type: "OUT",
                reason: "Sale",
                created_at: new Date().toISOString()
            }
        ];
    }

    getAllInventoryMovements() {
        return this.inventoryMovements;
    }

    getInventoryMovementById(id) {
        return this.inventoryMovements.find(movement => movement.id == id);
    }

    createInventoryMovement(movementData) {
        const newMovement = {
            id: this.inventoryMovements.length + 1,
            ...movementData,
            created_at: movementData.created_at || new Date().toISOString()
        };
        this.inventoryMovements.push(newMovement);
        return newMovement;
    }

    updateInventoryMovement(id, movementData) {
        const movement = this.getInventoryMovementById(id);
        if (!movement) return null;

        movement.product_id = movementData.product_id || movement.product_id;
        movement.quantity = movementData.quantity || movement.quantity;
        movement.movement_type = movementData.movement_type || movement.movement_type;
        movement.reason = movementData.reason || movement.reason;
        movement.created_at = movementData.created_at || movement.created_at;
        return movement;
    }

    deleteInventoryMovement(id) {
        const index = this.inventoryMovements.findIndex(movement => movement.id == id);
        if (index === -1) return false;

        this.inventoryMovements.splice(index, 1);
        return true;
    }
}

module.exports = new InventoryMovementService();