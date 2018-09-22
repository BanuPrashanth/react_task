const ShippingOption = {
    ground: 1,
    priority: 2
}

export const shippingCost = (weight, shippingOption) => {
    const shippingRate = 0.40;
    const shippingCost = weight * shippingRate * 
        (shippingOption == ShippingOption.ground ? 1 : 1.5);
    return shippingCost.toFixed(2); 
};

