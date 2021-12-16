import React from "react";
import "antd/dist/antd.css";
import "./process.css";
import { Steps } from "antd";
import LoanTypeInput from "../../components/loanType";
import AmountInput from "../../components/amountInput";
import PersonalInput from "../../components/personalInput";
import PhoneInput from "../../components/phoneInput";




const Process = () => {
  const [current, setCurrent] = React.useState(0);
  const [view, setView] = React.useState(true);
  const [loanType, setLoanType] = React.useState(true);
  const [amount, setAmount] = React.useState(true);
  const [name, setName] = React.useState(true);
  const [phone, setPhone] = React.useState(true);
  const [loanTypeError, setLoanTypeError] = React.useState(null);


  const { Step } = Steps;

  const steps = [
    {
      title: "Loan Type",
      content: <LoanTypeInput loanTypeError={loanTypeError} next={next} />,
    },
    {
      title: "Loan Amount",
      content: <AmountInput next={next2} prev={() => prev()} />,
    },
    {
      title: "Personal Information",
      content: <PersonalInput next={next3} prev={() => prev()} />,
    },
    {
      title: "Enter Phone No.",
      content: <PhoneInput next={next4} prev={() => prev()}/>,
    },
  ];


  function prev () {
    setCurrent(current - 1);
  };
  function next (data) {
    console.log(data)
    setLoanType(data)
    if(!data){
      setLoanTypeError("Please all fieilds are required")
    } else{
    setCurrent(current + 1);
  }
  };
  function next2 (data) {
    console.log(data)
    setAmount(data)
    setCurrent(current + 1);
  };
  function next3 (data) {
    console.log(data)
    setName(data)
    setCurrent(current + 1);
  };
  function next4 (data) {
    console.log(data)
    setPhone(data)
    setView(false);
  };


  return (
    <>
      {view ? (
        <>
        <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <br/>
      <br/>
      <div>{steps[current].content}</div>
      </>
      ) : (
        <p style={{textAlign:"center"}}>Congratulations, <strong>{name}</strong> you have just successfully applied for a <strong>{loanType}</strong> loan of <strong>&pound;{amount}</strong>. Please kindly confirm your phone number: <strong>{phone}</strong>.
        Our representative will reacheout to you soon to process your request and procedures to credit your account.<br/><br/><br/> Thanks and Best Regards. </p>
      )}
      
      
    </>
  );
};

export default Process;
