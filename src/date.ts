function increaseMonth(month: number): number {

  if (month === 0) {
    return month = month += 1
  }
  if (month === 11) {
    return month += 1
  }
  return month += 1
}


const float = (n) => ((n < 10) ? '0' + n : n);


export function getDateArrival(): string {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const year = date.getFullYear();
  const day = float(date.getDate());
  const months = date.getMonth();
  const month = float(increaseMonth(months));
  
  return `${year}-${month}-${day}`
}


export function getDateDeparture(): string {
  const date = new Date();
  date.setFullYear(date.getFullYear());
  date.setDate(date.getDate() + 3);
  date.setMonth(date.getMonth() );
  const year = date.getFullYear();
  const months = date.getMonth();
  const month = float(increaseMonth(months));
  const day = float(date.getDate());
  console.log(typeof(day))
  
  return `${year}-${month}-${day}`
}


export function minDate(): string {
  const date = new Date();
  const year = date.getFullYear();
  const day = float(date.getDate());
  const months = date.getMonth();
  const month = float(increaseMonth(months));
  
  return `${year}-${month}-${day}`
}


export function maxDate(): string {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  date.setFullYear(date.getFullYear());
  const year = date.getFullYear();
  const months = date.getMonth();
  const month = float(increaseMonth(months))
  const lastDay = new Date(year, month, 0);
  const day = float(lastDay.getDate());
  
  return `${year}-${month}-${day}`;
}

