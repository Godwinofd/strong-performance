import handler from './api/checkout.js';

const req = {
    method: 'POST',
    body: {
        cartItems: [
            { id: 'preworkout-mango', name: 'Pre-Workout Powder — Mango', price: 25, quantity: 1, type: 'product' }
        ],
        customerEmail: 'test@example.com',
        customerName: 'Test',
        shippingAddress: '123 Fake st',
        phone: '555-5555'
    },
    headers: {
        origin: 'http://localhost:3000'
    }
};

const res = {
    status: function (code) {
        console.log('STATUS:', code);
        return this;
    },
    json: function (data) {
        console.log('JSON:', data);
    },
    setHeader: function () { },
    end: function () { }
};

handler(req, res).catch(console.error);
