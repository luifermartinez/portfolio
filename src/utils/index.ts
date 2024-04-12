import cvEs from "@cv";
import cvEn from "@cv-en";

export const getLocale = () => {
  const lang = localStorage?.getItem("lang") ?? "es";
  return lang === "es"
    ? {
        ...cvEs,
        locale: "es",
      }
    : {
        ...cvEn,
        locale: "en",
      };
};
