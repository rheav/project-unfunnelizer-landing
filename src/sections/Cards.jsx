import React from "react";
import Card from "../components/Card";
import SmartMode from "../img/smartModePop.mp4";
import CTAvideo from "../img/cta-video.mp4";
import CheckoutVideo from "../img/checkout-video.mp4";

const CardSection = ({ video, children }) => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          <Card video={SmartMode}>{"1-click firing!"}</Card>
          <Card video={CTAvideo}>
            {" "}
            {"Wait for the 'pitch' to check the CTA? Forget it..."}
          </Card>
          <Card video={CheckoutVideo}>
            {"Ta-da! Easy access to their checkout"}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
