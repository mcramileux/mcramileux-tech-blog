// followed the mini-project's solved folder

// // Format date as DD/MM/YYYY
// module.exports = {
//   format_date: (date) => {
//       // return date.toLocaleDateString();
//       return `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`;  
//   },
// };

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${
      new Date(date).getFullYear() + 5
    }`;
  },
};