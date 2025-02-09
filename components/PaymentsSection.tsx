"use client";
import Image from "next/image";

const PaymentsSection = () => {
  return (
    <div className="w-full py-10 bg-white px-4 md:px-[7%] flex gap-8 items-center justify-center">
      <Image
        src="https://img-cdn-02.megaboutique.com.au/icons/payments/payment-visa.png"
        alt="Visa"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-12 max-h-12 max-w-24 object-contain"
        style={{ minWidth: "auto", minHeight: "auto" }}
      />
      <Image
        src="https://img-cdn-02.megaboutique.com.au/icons/payments/payment-mastercard.png"
        alt="Visa"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-12 max-h-12 max-w-24 object-contain"
        style={{ minWidth: "auto", minHeight: "auto" }}
      />
      <Image
        src="https://img-cdn-02.megaboutique.com.au/icons/payments/payment-paypal.png"
        alt="Visa"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-12 max-h-12 max-w-32 object-contain"
        style={{ minWidth: "auto", minHeight: "auto" }}
      />
    </div>
  );
};
export default PaymentsSection;
