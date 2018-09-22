import React from 'react';
import GetSenderAddress from './get-sender-details';
import GetReceiverAddress from './get-receiver-details';
import Weight from './weight';
import ShippingOption from './shipping-option';
import Confirm from './confirm';

const steps = [
    <GetSenderAddress wizardContext={'from'} onAction={'handleData'} />,
    <GetReceiverAddress wizardContext={'to'} onAction={'handleData'}/>,
    <Weight wizardContext={'weight'} onAction={'handleOtherData'} />,
    <ShippingOption wizardContext={'shippingLabel'} onAction={'handleOtherData'}/>,
    <Confirm wizardContext={'confirm'} onAction={'onComplete'}/>
];

export default steps;