const categories = ["Groceries", 'Utilities', 'Entertainment'] as const; // to make it a readonly array (because we are using it in zod schema)
export default categories;