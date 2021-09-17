import User from './models/user';

export default function () {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    const testuser = new User({
      firstname: "testMan",
      lastname: "I am ",
      email: "test@bakery.com",
      phoneNumber: "+1 (111) 111-1111",
      password: "$2b$10$0aStd9TJJKJYvpnC2ioJqueI4q1LHmoojGgKGRapIjVIZrNJniW0O", //123456
      token: process.env.REACT_APP_TEST_TOKEN,
      payment: null,
      paymentToken: null,
      customer_id: null,
      address: [],
    });

    User.create([testuser], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
