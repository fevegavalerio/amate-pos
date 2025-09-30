const categories = [
    { id: 1, name: "Beverages", description: "Drinks and refreshments" },
    { id: 2, name: "Snacks", description: "Quick bites and light food" },
    { id: 3, name: "Desserts", description: "Sweet treats and pastries" },
    { id: 4, name: "Main Course", description: "Hearty meals and dishes" },
    { id: 5, name: "Salads", description: "Fresh and healthy salads" }
  ];

exports.getCategories = (req, res) => {
    
  const response = {status: 200, data: categories};

  res.json(response);
};

exports.getCategoryById = (req, res) => {
  const categoryId = req.params.id;

  for (let category of categories) {
    if (category.id == categoryId) {
      const response = {status: 200, data: category};
      return res.json(response);
    }
  }

  const response = {status: 404, message: "Category not found"};
  res.status(404).json(response);
}

exports.createCategory = (req, res) => {
  const { name, description } = req.body;
  const newCategory = {
    id: categories.length + 1,
    name,
    description
  };
  categories.push(newCategory);
  const response = {status: 201, data: newCategory};
  res.status(201).json(response);
};

exports.updateCategory = (req, res) => {
  const categoryId = req.params.id;
  const { name, description } = req.body;

  for (let category of categories) {
    if (category.id == categoryId) {
      category.name = name || category.name;
      category.description = description || category.description;
      const response = {status: 200, data: category};
      return res.json(response);
    }
  }

  const response = {status: 404, message: "Category not found"};
  res.status(404).json(response);
};

exports.deleteCategory = (req, res) => {
  const categoryId = req.params.id;

  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id == categoryId) {
      categories.splice(i, 1);
      const response = {status: 200, message: "Category deleted"};
      return res.json(response);
    }
  }

  const response = {status: 404, message: "Category not found"};
  res.status(404).json(response);
};