var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    vendorId: { type: mongoose.Schema.Types.ObjectId, required: true, default: '5e68af6f7a611343eae69b9a' },
    orderNo: {type: String, required: true, unique: true, default: 'O124'},
    orderTime: {type: Date, required: true, default: new Date()},
    orderDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetail' }],
    estimatedDeliveryTime: {type: Date, required: true, default: new Date()},
    foodReadyTime: {type: Date, required: true, default: new Date()},
    actualDeliveryTime: {type: Date, required: true, default: new Date()},
    deliveryAddress: { type: String, required: true, default: 'Kolkata' },
    deliveryCountry: { type: String, required: true,default: 'India' },
    deliveryCityId: { type: mongoose.Schema.Types.ObjectId, required: true,default: '5e68af6f7a611343eae69b9a' },
    customerId: { type: mongoose.Schema.Types.ObjectId, required: true,default: '5e68af6f7a611343eae69b9a' },
    orderType: { type: String, required: true, enum: ['NORMAL','SCHEDULE'],default: 'NORMAL' },
    orderStatus: { type: String, required: true, enum: ['NEW','ACCEPTED', 'DELAYED', 'DELIVERED', 'COMPLETED','MODIFIED','CANCELLED'],default: 'NEW'  },
    price: {type: Number, required: true,default: 60 },
    discount: {type: Number,default: 15},
    finalPrice: {type: Number, required: true,default: 45},
    specialInstruction: {type: String,default: ''},
    promocodeId: { type: mongoose.Schema.Types.ObjectId, default: '5e68af6f7a611343eae69b9a' }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);