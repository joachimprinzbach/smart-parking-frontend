import { IVueI18n } from "vue-i18n"

export interface DateDiff {
  months: number
  days: number
  hours: number
  minutes: number
}

const formatNumber = (num: number): string =>
  num < 10 ? `0${num.toString()}` : num.toString()

export const formatStringDate = (dateString: string | null): string => {
  if (dateString) {
    return formatDate(new Date(dateString))
  }
  return "-"
}

export const formatDate = (date: Date | null): string => {
  if (date) {
    const days = formatNumber(date.getDate())
    const months = formatNumber(date.getMonth() + 1)
    const years = formatNumber(date.getFullYear())
    const hours = formatNumber(date.getHours())
    const minutes = formatNumber(date.getMinutes())
    return `${days}.${months}.${years} ${hours}:${minutes}`
  }
  return "-"
}

export const diffFrom = (
  fromDate: Date | null,
  toDate: Date | null,
): DateDiff => {
  const diffDate = {
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  }
  if (!(fromDate && toDate)) {
    return diffDate
  }
  const startDate = new Date(1970, 0, 1, 0).getTime()
  const now = toDate
  const diff = now.getTime() - fromDate.getTime()
  const date = new Date(startDate + diff)
  const months = date.getMonth()
  const days = date.getDate() - 1
  const hours = date.getHours()
  const minutes = date.getMinutes()

  diffDate.months = months > 0 ? months : 0
  diffDate.days = days > 0 ? days : 0
  diffDate.hours = hours > 0 ? hours : 0
  diffDate.minutes = minutes > 0 ? minutes : 0

  if (diffDate.months > 0) {
    diffDate.minutes = 0
  }

  return diffDate
}

export const diffFromNow = (fromDate: Date | null): DateDiff =>
  diffFrom(fromDate, new Date())

export const dateDiffToString = (
  root: { $i18n: IVueI18n },
  dateDiff: DateDiff,
): string => {
  const outputs: string[] = []
  const removePlural = (str: string) => str.substring(0, str.length - 1)
  Object.keys(dateDiff).forEach(key => {
    if (key) {
      const value = (dateDiff as any)[key]
      if (value && value > 0) {
        outputs.push(
          root.$i18n
            .t(`common.date.${value === 1 ? removePlural(key) : key}`, {
              value,
            })
            .toString(),
        )
      }
    }
  })
  const timeString = outputs.join(" ")
  return timeString.length > 2
    ? timeString
    : "< " + root.$i18n.t("common.date.minute", { value: 1 }).toString()
}
