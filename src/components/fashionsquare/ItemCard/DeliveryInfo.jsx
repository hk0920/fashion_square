import React from "react";

const DeliveryInfo = ({ deliveryText }) => {
  return (
    <div class="box__itemcard-delivery">
      <span class="text__delivery">{deliveryText}</span>
    </div>
  );
};

export default DeliveryInfo;
