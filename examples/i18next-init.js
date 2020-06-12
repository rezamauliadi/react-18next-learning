import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          title: "Earth",
          content:
            "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, which is Earth's only natural satellite. Earth orbits around the Sun in 365.256 solar days, a period known as an Earth side real year. During this time, Earth rotates about its axis 366.256 times, that is, a side real year has 366.256 side real days.",
          source: "Source: "
        }
      },
      de: {
        translation: {
          title: "Erde",
          content:
            "Die Erde ist der dritte Planet von der Sonne und das einzige astronomische Objekt, von dem bekannt ist, dass es Leben beherbergt. Nach radiometrischen Datierungsschätzungen und anderen Beweisen hat sich die Erde vor über 4,5 Milliarden Jahren gebildet. Die Schwerkraft der Erde interagiert mit anderen Objekten im Weltraum, insbesondere mit Sonne und Mond, dem einzigen natürlichen Satelliten der Erde. Die Erde umkreist die Sonne in 365.256 Sonnentagen, einer Periode, die als erdseitiges reales Jahr bekannt ist. Während dieser Zeit dreht sich die Erde 366,256-mal um ihre Achse, dh ein reales Seitenjahr hat 366,256 reale Seitentage.",
          source: "Quelle: "
        }
      },
      fr: {
        translation: {
          title: "Terre",
          content:
            "La Terre est la troisième planète du Soleil et le seul objet astronomique connu pour abriter la vie. Selon l'estimation radiométrique des datations et d'autres preuves, la Terre s'est formée il y a plus de 4,5 milliards d'années. La gravité de la Terre interagit avec d'autres objets dans l'espace, en particulier le Soleil et la Lune, qui est le seul satellite naturel de la Terre. La Terre tourne autour du Soleil en 365,256 jours solaires, une période connue sous le nom d'année réelle côté Terre. Pendant ce temps, la Terre tourne 366,256 fois autour de son axe, c'est-à-dire qu'une année réelle côté a 366,256 jours réels latéraux.",
          source: "La source: "
        }
      },
      id: {
        translation: {
          title: "Bumi",
          content:
            "Bumi adalah planet ketiga dari Matahari dan satu-satunya objek astronomi yang diketahui memiliki kehidupan. Menurut estimasi penanggalan radiometrik dan bukti lainnya, Bumi terbentuk lebih dari 4,5 miliar tahun yang lalu. Gravitasi bumi berinteraksi dengan benda-benda lain di ruang angkasa, terutama Matahari dan Bulan, yang merupakan satu-satunya satelit alami Bumi. Bumi mengorbit di sekitar Matahari dalam 365,256 hari matahari, periode yang dikenal sebagai tahun nyata sisi Bumi. Selama waktu ini, Bumi berputar sekitar porosnya 366,256 kali, yaitu tahun sisi samping memiliki 366,256 sisi hari nyata.",
          source: "Sumber: "
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
