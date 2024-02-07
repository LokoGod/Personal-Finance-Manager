import incomeRepository from "../../repositories/income/incomeRepository";

const allRecordedIncome = async (req: any, res: any) => {
  try {
    const income = await incomeRepository.getAllRecordedIncome();
    res.status(200).json({ income });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error " });
  }
};

const createIncome = async (req: any, res: any) => {
  try {
    const {
      income_title,
      income_amount,
      income_category,
      recurring,
      received_date,
      receving_date,
    } = req.body;
    const income = await incomeRepository.postIncome(
      income_title,
      income_amount,
      income_category,
      recurring,
      received_date,
      receving_date
    );
    res.status(201).json({ income });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const specificIncome = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const income = await incomeRepository.getSpecificIncome(id);
    res.status(200).json({ income });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { allRecordedIncome, createIncome, specificIncome };
