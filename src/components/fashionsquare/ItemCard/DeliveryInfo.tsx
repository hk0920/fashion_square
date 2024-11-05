import React from "react";
import { DeliveryElement } from "../../../styles/ItemcardStyle";


const DeliveryInfo = ({ deliveryText }: {deliveryText:string}) => {
  return (
    <DeliveryElement>
      <span className="text__delivery">{deliveryText}</span>
    </DeliveryElement>
  );
};

export default DeliveryInfo;
