const WeekdayMapping = {
  0: '星期日',
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六',
}

const formatDate = (dateString) => {
  let dateObj = new Date(dateString);
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth();
  let day = dateObj.getDay();
  let date = dateObj.getDate();
  let weekday = WeekdayMapping[day];
  return `${year}年${month + 1}月${date}日 ${weekday}`;
};

export {
  formatDate
};
