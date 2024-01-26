import incomeDetailsRepository from "../../repositories/income/incomeDetailsRepository";

const allRecordedIncomeDetails = async (req: any, res: any) => {
  try {
    const incomeDetails =
      await incomeDetailsRepository.getAllRecordedIncomeDetails();
    res.status(200).json({ incomeDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error " });
  }
};

const createIncomeDetails = async (req: any, res: any) => {
  try {
    const { income_title, income_amount } = req.body;
    const incomeDetails = await incomeDetailsRepository.postIncomeDetails(
      income_title,
      income_amount
    );
    res.status(201).json({ incomeDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const specificIncomeDetails = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const incomeDetails = await incomeDetailsRepository.getSpecificIncomeDetails(id);
    res.status(200).json({ incomeDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { allRecordedIncomeDetails, createIncomeDetails, specificIncomeDetails };
