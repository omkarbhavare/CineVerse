// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "header": "🎬 CineVerse 🎥",
          "tv_series": "TV Series",
          "TV Series": "TV Series",
          "Movies": "Movies",
          "Trending": "Trending",
          "like": "Like",
          "Search": "Search",
          "trending_today": "Trending Today",
        }
      },
      fr: {
        translation: {
          "header": "🎬 CinéMonde 🎥",
          "tv_series": "Série TV",
          "TV Series": "Série TV",
          "Movies": "Film",
          "Trending": "Tendances",
          "Like": "Aimer",
          "Search": "Chercher",
          "trending_today": "Tendances aujourd'hui",
        }
      },
      hi: {
        translation: {
          "header": "🎬 सिनेवर्स 🎥",
          "tv_series": "टीवी श्रृंखला",
          "TV Series": "टीवी श्रृंखला",
          "Movies": "फिल्म",
          "Trending": "प्रवृत्तियाँ",
          "Like": "पसंद करें",
          "Search": "खोजें",
          "trending_today": "आज की प्रवृत्तियाँ",
        }
      },
      ja: {
        translation: {
          "header": "🎬 シネバース 🎥",
          "tv_series": "テレビシリーズ",
          "TV Series": "テレビシリーズ",
          "Movies": "映画",
          "Trending": "トレンド",
          "Like": "いいね",
          "Search": "検索",
          "trending_today": "今日のトレンド",
        }
      },
      mr: {
        translation: {
          "header": "🎬 सिनेवर्स 🎥",
          "tv_series": "टीवी शृंखला",
          "TV Series": "टीवी शृंखला",
          "Movies": "चित्रपट",
          "Trending": "ट्रेंडिंग",
          "Like": "आवडते",
          "Search": "शोधा",
          "trending_today": "आजचे ट्रेंड",
        }
      },
      es: {
        translation: {
          "header": "🎬 CineVerso 🎥",
          "tv_series": "Series de TV",
          "TV Series": "Series de TV",
          "Movies": "Película",
          "Trending": "Tendencias",
          "Like": "Me gusta",
          "Search": "Buscar",
          "trending_today": "Tendencias de hoy",
        }
      },
      zh: {
        translation: {
          "header": "🎬 电影宇宙 🎥",
          "tv_series": "电视剧",
          "TV Series": "电视剧",
          "Movies": "电影",
          "Trending": "趋势",
          "Like": "喜欢",
          "Search": "搜索",
          "trending_today": "今日趋势",
        }
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
