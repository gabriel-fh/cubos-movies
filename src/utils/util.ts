import { format, formatDuration, intervalToDuration } from "date-fns";

export const getFormatDate = (date: string): string => {
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

export const getLanguageName = (langCode: string, englishName?: string): string => {
  const language = new Intl.DisplayNames(['pt-BR'], { type: 'language' });
  const languageName = language.of(langCode) || langCode;
  const finalLanguageName = ((languageName === langCode) && englishName) ? englishName : languageName;
  return finalLanguageName.charAt(0).toLocaleUpperCase() + finalLanguageName.slice(1);
};


export const getTrailerId = (videos: Video[]): string | undefined => {
  if (!videos?.length) return undefined;

  const findTrailer = (languageCode: string | null): Video | undefined => {
    return videos.find(
      (x) =>
        (x.type === "Trailer" || x.type === "Teaser") && 
        (languageCode ? x.iso_639_1 === languageCode : true) 
    );
  };

  const preferredLanguages = ["pt", "en"];
  
  for (const lang of preferredLanguages) {
    const video = findTrailer(lang);
    if (video) return video.key;
  }

  const anyVideo = findTrailer(null);
  return anyVideo?.key;
};

