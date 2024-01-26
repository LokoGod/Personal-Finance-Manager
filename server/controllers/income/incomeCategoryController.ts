import incomeCategoryRepository from "../../repositories/income/incomeCategoryRepository";

const getAllIncomeCategories = async (req: any, res: any) => {
  try {
    const incomeCategories =
      await incomeCategoryRepository.getAllIncomeCategories();
    res.status(200).json({ incomeCategories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createIncomeCategory = async (req: any, res: any) => {
  try {
    const { income_cat } = req.body;
    const incomeCategories =
      await incomeCategoryRepository.createIncomeCategory(income_cat);
    res.status(201).json({ incomeCategories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllIncomeCategories, createIncomeCategory };
