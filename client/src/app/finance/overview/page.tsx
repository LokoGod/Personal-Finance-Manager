import React from "react";

const getData = async () => {
  const res = await fetch('http://localhost:5000/api/v1/income')

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  
  const data = await res.json();
  const updatedData = data.income.map((item: any) => {
    return {
      ...item,
      income_cat: item.category ? item.category.income_cat : null
    }
  });
  console.log(updatedData); // Add this line to log the updated data
  return updatedData;
}

const Overview = async () => {
 
  const data = await getData(); // Add await here to ensure the data is fetched before rendering

  return (
    <div>
      <h1>Hello</h1>
      {data.map((item: any) => (
        <div key={item.id}>
          <p>Income Title: {item.income_title}</p>
          <p>Income Amount: {item.income_amount}</p>
          <p>Received Date: {item.received_date}</p>
          <p>Income Category:{item.category.income_cat}</p> {/* Add this line to display the income_cat */}
        </div>
      ))}
    </div>
  );
};

export default Overview;
