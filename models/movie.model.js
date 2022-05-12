// module.exports = (mongoose) => {
//     const Movie = mongoose.model(
//         "movie",
//         mongoose.Schema(
//             {
//                 movieid: Number,
//                 title: String,
//                 published: Boolean,
//                 released: Boolean,
//                 poster_url: String,
//                 release_date: String,
//                 publish_date: String,
//                 artists: {
//                     type: [
//                         {
//                             artistid: Number,
//                             first_name: String,
//                             last_name: String,
//                             wiki_url: String,
//                             profile_url: String,
//                             movies: {
//                                 type: [
//                                     {
//                                         type: String,
//                                     }

//                                 ]
//                             }
//                         }

//                     ],
//                 },
//                 genres: {
//                     type: [
//                         {
//                             type: String,
//                         }
//                     ]
//                 },
//                 duration: Number,
//                 critic_rating: Number,
//                 trailer_url: String,
//                 wiki_url: String,
//                 story_line: String,
//                 shows: {
//                     type: [
//                         {
//                             id: Number,
//                             theatre: {
//                                 type: [
//                                     {
//                                         name: String,
//                                         city: String,
//                                     }
//                                 ]
//                             },
//                             language: String,
//                             show_timing: String,
//                             available_seats: String,
//                             unit_price: Number,
//                         }
//                     ]
//                 }


//             }
//         )
//     );
//     return Movie;
// };