// module.exports = (mongoose) => {
//     const User = mongoose.model(
//         "user",
//         mongoose.Schema(
//             {
//                 userid: Number,
//                 email: String,
//                 first_name: String,
//                 last_name: String,
//                 username: String,
//                 contact: String,
//                 password: String,
//                 role: String,
//                 isLoggedIn: Boolean,
//                 uuid: String,
//                 accesstoken: String,
//                 coupens: {
//                     type: [
//                         {
//                             id: Number,
//                             discountValue: Number,
//                         }
//                     ]
//                 },
//                 bookingRequests: {
//                     type: [
//                         {
//                             reference_number: Number,
//                             coupon_code: Number,
//                             show_id: Number,
//                             tickets: {
//                                 type: [
//                                     {
//                                         type: Number
//                                     }
//                                 ]
//                             }
//                         }
//                     ]
//                 },
//             }
//         )
//     );
//     return User;
// };