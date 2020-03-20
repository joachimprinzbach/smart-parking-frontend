export interface DateDiff {
  months: number
  days: number
  hours: number
  minutes: number
}

export const diffFromNow = (fromDate: Date): DateDiff => {
  const startDate = new Date(1970, 0, 1, 0).getTime()
  const now = new Date()
  const diff = now.getTime() - fromDate.getTime()
  const date = new Date(startDate + diff)
  // const years = date.getFullYear() - 1970
  const months = date.getMonth()
  const days = date.getDate() - 1
  const hours = date.getHours()
  const minutes = date.getMinutes()
  // const seconds = date.getSeconds()
  const diffDate = {
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  }
  diffDate.months = months > 0 ? months : 0
  diffDate.days = days > 0 ? days : 0
  diffDate.hours = hours > 0 ? hours : 0
  diffDate.minutes = minutes > 0 ? minutes : 0

  if (diffDate.months > 0) {
    diffDate.minutes = 0
  }

  return diffDate
}
