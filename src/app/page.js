import React from "react";
import Head from "next/head";
import { getStaticProps } from "next/server";

async function getStaticProp() {
  const response = await fetch("/API/route");
  const data = await response.json();

  return {
    props: {
      emp_name: data.emp_name,
    },
  };
}

const OfferLetter = ({ emp_name }) => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>BizBezzie Offer Letter</title>
      </Head>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Biz Bezzie</h1>
        <div className="text-sm">Your Technology Partner</div>
      </header>
      <hr className="mb-4 border-gray-300" />
      <div className="flex justify-between items-center mb-2">
        <div className="text-base font-light text-gray-500">
          Outer No: 001/employee/2024
        </div>
        <div className="text-base font-light text-gray-500">
          Date: 1 January, 2024 Page: 1 of 9
        </div>
      </div>
      <div className="text-center font-bold text-xl mb-4 text-gray-800">
        [Cover Letter]
      </div>
      <div className="text-base mb-4">
        <span className="font-light text-gray-500">To</span>, <br />
        <span className="text-gray-800">{emp_name}</span>, <br />
        <span className="text-gray-800">S/O Rajesh Kumar Sharma</span>, <br />
        <span className="text-gray-800">119, U.I.T. Quarters, M.P. Colony</span>
        , <br />
        <span className="text-gray-800">Bikaner, Rajasthan, 334004.</span>
      </div>
      <div className="text-base mb-4 text-gray-800">
        Dear Mudit Sharma, <br />
        Congratulations! This letter confirms our offer of employment with
        BizBezzie Private Limited (India) (the "Company"), under the terms and
        conditions stated in the Appointment Letter attached with this letter.
      </div>
      <div className="text-base mb-4 text-gray-800">
        Subject to the terms of attached Appointment Letter, You are scheduled
        to report to actual work on 1st January 2024 commence your employment
        with the BizBezzie Private Limited (India). Your contact is Navin Patil.
      </div>
      <div className="text-base mb-4 text-gray-800">
        I am pleased to offer you a job under the conditions set out in the
        Appointment Letter. Your Position will be "Junior Frontend Web
        Developer" with "Web Development Department" of BizBezzie Private
        Limited at work from home basis. Your Department leader will be Navin
        Patil, CEO.
      </div>
      <div className="text-base mb-4 text-gray-800">
        Your Appointment status will be at full time. However, this is not a
        guarantee of hours and your schedule may vary according to seasonal
        fluctuations and service requirements. You are scheduled to work on 1
        January 2024 to commence your employment with BizBezzie Private Limited.
      </div>
      <div className="text-base mb-4 text-gray-800">
        Your employment provides an initial probationary period of six months of
        actual work. Your employment may be terminated at any time for any
        reason during this period without any notice or severance pay.
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-base text-gray-800">Navin Patil</div>
        <div className="text-base text-gray-800">Director</div>
      </div>
      <div className="text-center mt-4 text-gray-800">
        BizBezzie Private Limited
      </div>
      <div className="flex justify-between items-center mt-2 text-gray-500">
        <div className="text-base">(+91) 9766 675 475</div>
        <div className="text-base">www.bizbezzie.com contact@bizbezzie.com</div>
      </div>
    </div>
  );
};

export default OfferLetter;
