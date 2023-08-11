import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="h-20 border-b border-[#eaeaea]"></div>
      <div className="container mx-auto pt-20 mb-20">
        <div className="mt-[70px]">
          <h2 className="text-3xl font-normal mb-10">Checkout</h2>
          <div className="bg-[#f7f7f7] border border-[#ccc] p-4 mb-5 text-base">
            <p>
              <strong>Important Notice:</strong> This website is for
              demonstration purposes only and does not support real
              transactions. We do not have an active payment method implemented.
              Any attempts to make payments will not be processed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
