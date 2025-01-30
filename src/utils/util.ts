import { format, formatDuration, intervalToDuration } from "date-fns";

export const getFormatDate = (date: string) => {
  const newDate = new Date(date);
  return format(newDate, "dd/MM/yyyy");
};

export const getFormatRunTime = (runtime: number): string => {
  const duration = intervalToDuration({ start: 0, end: runtime * 60 * 1000 });
  const formattedDuration = formatDuration(duration, { format: ["hours", "minutes"] });
  return formattedDuration.replace(/ hours?/, "h").replace(/ minutes?/, "min");
};

export const getUSDFormat = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
  }).format(value);
};

export const getLanguageName = (langCode: string, englishName?: string) => {
  const language = new Intl.DisplayNames(['pt-BR'], { type: 'language' });
  const languageName = language.of(langCode) || langCode;
  const finalLanguageName = ((languageName === langCode) && englishName) ? englishName : languageName;
  return finalLanguageName.charAt(0).toLocaleUpperCase() + finalLanguageName.slice(1);
};
