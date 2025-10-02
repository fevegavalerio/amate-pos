class CategoryService {
    constructor() {
        this.categories = [
            { id: 1, name: "Beverages", description: "Drinks and refreshments" },
            { id: 2, name: "Snacks", description: "Quick bites and light food" },
            { id: 3, name: "Desserts", description: "Sweet treats and pastries" },
            { id: 4, name: "Main Course", description: "Hearty meals and dishes" },
            { id: 5, name: "Salads", description: "Fresh and healthy salads" }
        ];
    }

    getAllCategories() {
        return this.categories;
    }

    getCategoryById(id) {
        return this.categories.find(category => category.id == id);
    }

    createCategory(categoryData) {
        const newCategory = {
            id: this.categories.length + 1,
            ...categoryData
        };
        this.categories.push(newCategory);
        return newCategory;
    }

    updateCategory(id, categoryData) {
        const category = this.getCategoryById(id);
        if (!category) return null;
        
        category.name = categoryData.name || category.name;
        category.description = categoryData.description || category.description;
        return category;
    }

    deleteCategory(id) {
        const index = this.categories.findIndex(category => category.id == id);
        if (index === -1) return false;
        
        this.categories.splice(index, 1);
        return true;
    }
}

module.exports = new CategoryService();