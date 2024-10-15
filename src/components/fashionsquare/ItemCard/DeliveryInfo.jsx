import React from "react";
import { DeliveryElement } from "../../../styles/ItemcardStyle";

const DeliveryInfo = ({ deliveryText }) => {
  return (
    <DeliveryElement>
      <span class="text__delivery">{deliveryText}</span>
    </DeliveryElement>
  );
};

export default DeliveryInfo;
