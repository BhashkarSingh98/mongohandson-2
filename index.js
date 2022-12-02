const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Human_Resource");

const Productschema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  lastCompany: {
    type: String,
  },
  lastSalary: {
    type: Number,
  },
  overallExp: {
    type: Number,
  },
  contactInfo: {
    type: Number,
  },
  yearGrad: {
    type: Number,
  },
  gradStream: {
    type: String,
  },
});
const main = async () => {
  const employee = mongoose.model("employee", Productschema);
  let employee1 = new employee({
    firstName: "John",
    lastName: "Doe",
    salary: 25000,
    department: "HR",
    lastCompany: "X",
    lastSalary: 10000,
    overallExp: 2,
    contactInfo: 1234567890,
    yearGrad: 2016,
    gradStream: "CSE",
  });

  let employee2 = new employee({
    firstName: "Rohan",
    lastName: "Jame",
    salary: 30000,
    department: "Technical",
    lastCompany: "Y",
    lastSalary: 15000,
    overallExp: 1,
    contactInfo: 1234567860,
    yearGrad: 2015,
    gradStream: "CSE",
  });
  let employee3 = new employee({
    firstName: "Jame",
    lastName: "Doe",
    salary: 35000,
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: 20000,
    overallExp: 1,
    contactInfo: 123567890,
    yearGrad: 2019,
    gradStream: "ECE",
  });
  let employee4 = new employee({
    firstName: "Sao",
    lastName: "Avika",
    salary: 30000,
    department: "Sales",
    lastCompany: "Y",
    lastSalary: 15000,
    overallExp: 2,
    contactInfo: 1234567860,
    yearGrad: 2015,
    gradStream: "CSE",
  });
  let employee5 = new employee({
    firstName: "Jame",
    lastName: "roh",
    salary: 35000,
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: 15000,
    overallExp: 2,
    contactInfo: 123567890,
    yearGrad: 2019,
    gradStream: "EEE",
  });
  let employee6 = new employee({
    firstName: "Rohan",
    lastName: "Jame",
    salary: 30000,
    department: "Technical",
    lastCompany: "Y",
    lastSalary: 15000,
    overallExp: 1,
    contactInfo: 1234567860,
    yearGrad: 2015,
    gradStream: "CSE",
  });
  let employee7 = new employee({
    firstName: "Jame",
    lastName: "Doe",
    salary: 35000,
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: 20000,
    overallExp: 1,
    contactInfo: 123567890,
    yearGrad: 2019,
    gradStream: "ECE",
  });
  let employee8 = new employee({
    firstName: "Sao",
    lastName: "Avika",
    salary: 30000,
    department: "Sales",
    lastCompany: "Y",
    lastSalary: 15000,
    overallExp: 2,
    contactInfo: 1234567860,
    yearGrad: 2015,
    gradStream: "CSE",
  });
  let employee9 = new employee({
    firstName: "Jame",
    lastName: "Doe",
    salary: 35000,
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: 15000,
    overallExp: 2,
    contactInfo: 123567890,
    yearGrad: 2019,
    gradStream: "EEE",
  });
  let employee10 = new employee({
    firstName: "Rohan",
    lastName: "Jame",
    salary: 30000,
    department: "Technical",
    lastCompany: "Y",
    lastSalary: 15000,
    overallExp: 1,
    contactInfo: 1234567860,
    yearGrad: 2015,
    gradStream: "CSE",
  });
  let employee11 = new employee({
    firstName: "Jame",
    lastName: "Doe",
    salary: 35000,
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: 20000,
    overallExp: 1,
    contactInfo: 123567890,
    yearGrad: 2019,
    gradStream: "ECE",
  });
  let employee12 = new employee({
    firstName: "Sao",
    lastName: "Avika",
    salary: 30000,
    department: "Sales",
    lastCompany: "Y",
    lastSalary: 15000,
    overallExp: 2,
    contactInfo: 1234567860,
    yearGrad: 2015,
    gradStream: "CSE",
  });
  let employee13 = new employee({
    firstName: "Jame",
    lastName: "Doe",
    salary: 35000,
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: 15000,
    overallExp: 2,
    contactInfo: 123567890,
    yearGrad: 2019,
    gradStream: "EEE",
  });

  const addempoyee = [
    employee1,
    employee2,
    employee3,
    employee4,
    employee5,
    employee6,
    employee7,
    employee8,
    employee9,
    employee10,
    employee11,
    employee12,
    employee13,
  ];

  const addemployee = await employee.insertMany(addempoyee);
  console.log("added-employee", addemployee);


//Q2. Query the collection ""employee"" and list the employees who are having salary more than 30000


const findemp= await employee.find({
    salary:{$gt:3000},
});

console.log(findemp);

//Q3. Query the collection ""employee"" and list the employees who are having experience more than 2 years.

const findemp2 = await employee.find({
    overallExp: { $gt: 2 },
  });

  console.log(findemp2);


  //Q4. Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year

  const findemp3 = await employee.find({
    $and: [
      {
        yearGrad: { $gt: 2015 },
      },
      {
        overallExp: { $gt: 1 },
      },
    ],
  });
  console.log(findemp3);


  //Q5. Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.

  const findemp4 = await employee.updateMany(
    {
      salary: { $gt: 15000 },
    },
    {
      $set: {
        salary: 25000,
      },
    }
  );
  console.log(findemp4);

 //Q5. Delete all the documents from ""employee"" where last company is Y"

 const findemp5 = await employee.deleteMany({
    lastCompany: "Y",
  });
  console.log(findemp5);






  

};
main();