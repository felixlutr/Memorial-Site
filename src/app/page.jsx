import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="relative h-screen">
      <div className="bg-[url('/images/goneWallpaper.jpg')] bg-cover bg-center bg-fixed relative">
        <Navbar />
        <div className="xs:text-xl xs:max-w-42 xs:place-items-center mt-60 my-80 relative text-center text-yellow-500 max-w-52 lg:text-6xl lg:max-w-2xl font-bold font-serif">
          "היסטוריה לא כותבים, היסטוריה עושים"
        </div>
        <div className="bg-gray-200">
          <div className="py-10 text-center text-black font-bold text-2xl">
            דוד בן גוריון
          </div>
          <div className="xs:mx-12 lg:mx-20 border-4 border-gray-100 rounded-xl bg-white ">
            <img
              src="images/jonnySinsDoctor.jpg"
              className="float-start mx-4 my-4 rounded-lg"
            ></img>
            <p className="mt-2 mr-4 mb-4">
              דָּוִד בֶּן־גּוּרְיוֹן (גְּרין; 16 באוקטובר 1886, י"ז בתשרי תרמ"ז
              – 1 בדצמבר 1973, ו' בכסלו תשל"ד) היה מדינאי ישראלי וראש הממשלה
              הראשון של מדינת ישראל. בן־גוריון היה איש העלייה השנייה, ממנהיגי
              תנועת העבודה, חבר במפלגות פועלי ציון ואחדות העבודה, מזכירה הכללי
              השני של ההסתדרות הכללית של העובדים בארץ ישראל ומנהיגה הראשון של
              מפא"י. בתפקידיו כיושב ראש הנהלת הסוכנות היהודית ויושב ראש ההנהלה
              הציונית, עמד בראש הנהגת היישוב העברי בארץ ישראל בתקופת המנדט
              הבריטי, ובתפקידו כיושב ראש מנהלת העם מילא תפקיד מרכזי בניסוח מגילת
              העצמאות, היה הראשון לחתום עליה והכריז ב־14 במאי 1948 על הקמת מדינת
              ישראל. עם הקמת המדינה החל לפעול למען הממלכתיות, ובזמן מלחמת
              העצמאות החליט על פירוק המחתרות, וחתם על הפקודה להקמת צה"ל. על מנת
              לקיים צבא ממלכתי אחד, הורה על הפגזת האונייה אלטלנה ועל פירוק מטה
              הפלמ"ח. הוא הנהיג את מדינת ישראל כראש הממשלה וכשר הביטחון במשך
              עשור וחצי עד 1963 (מלבד פסק זמן בן כשנתיים, בשנים 1953–1955). כראש
              הממשלה הראשון היה אחראי במידה רבה על עיצוב דמותה הדמוקרטית של
              ישראל, על אופי יחסי הגומלין בין מגזרים שונים בחברה הישראלית, ועל
              עיצוב מנגנוני הביצוע של רבים ממשרדי הממשלה. במהלך כהונתו נחתם הסכם
              השילומים עם גרמניה המערבית, נערכה מלחמת סיני, הוקם הכור הגרעיני
              בדימונה, ונקלטו מאות אלפי עולים. לאחר התפטרותו מראשות הממשלה
              ופרישתו ממפא"י, הקים ב־1965 את רשימת פועלי ישראל (רפ"י). ב־1970
              פרש מהחיים הפוליטיים.
            </p>
            <p className="ml-4 mr-4 mb-4">
              בן-גוריון נולד בשם דוד יוסף גרין לשיינדל ולחבר "חובבי ציון"
              אביגדור גרין, בעיירה פלונסק שבפולין (אז בתחום האימפריה הרוסית).
              במשפחה היו חמישה ילדים – שלושה בנים ושתי בנות. דוד היה הבן הרביעי.
              אפשר שנולד עמו בן תאום שנפטר בשעת הלידה. הוא קרוי על שם סבו מצד
              אימו, דוד יוסף פרידמן. ביתם שכן בקצה "רחוב העזים". המשפחה התגוררה
              בקומה התחתונה, ואילו בקומה העליונה התגוררה משפחה שטיפלה בבעלי
              החיים שבחצר האחורית והייתה מופקדת על ניקיון הבית ובישול הארוחות.
              בבית הסמוך התגורר אברהם, אחיו הנשוי של דוד. בבית בן-גוריון דיברו
              יידיש, אך גם רוסית ופולנית.
            </p>
            <p className="ml-4 mr-4 mb-4">
              דוד בן־גוריון, שכונה בילדותו "דובצ'ה" וגם "דוידל", למד מגיל 5 אצל
              מלמד בחדר מסורתי, ובגיל 7 עבר למלמד "מודרני". מאוחר יותר עבר לחדר
              מתוקן שהקים אביו, שם למד עברית בשיטה ייחודית. בגיל 11 התייתם
              מאִמו, שנפטרה כתוצאה מסיבוכי לידה ומאלח דם. שנתיים לאחר מכן נשא
              אביו אישה שנייה. הוא למד בחדר עד גיל הבר מצווה, ולאחר מכן למד במשך
              שנה או שנתיים אצל מלמד בבית המדרש, ואז הפסיק את לימודיו. בערך
              באותו זמן חדל גם לקיים מצוות, אולם המשיך ללבוש את הבגדים המסורתיים
              עד נסיעתו לוורשה בגיל 18. מלבד החינוך היהודי, למד גם בבית ספר
              ממשלתי רוסי, בו למד את השפה הרוסית. בחנוכה 1900, חרף גילו הצעיר
              (14), בעידודו של אביו, הקים יחד עם חבריו, שלמה צמח, שמואל פוקס
              ושלמה לביא (לבקוביץ'), את אגודת "עזרא", על שם עזרא הסופר, שהכשירה
              את חבריה לקראת עלייה לארץ ישראל, ושמה לעצמה מטרה להחיות את השפה
              העברית. חברי האגודה התחייבו לדבר עברית בינם לבין עצמם ופעלו ללימוד
              השפה בקרב צעירי העיירה. פעילות האגודה ארכה שש שנים. בשלב מסוים
              בתקופה זו הפסיק להניח תפילין. ב־1 בנובמבר 1901, כשהיה בן 15, שלח
              אביו בקשה לתיאודור הרצל, לסייע במתן השכלה לבנו.
            </p>
            <p className="ml-4 mr-4 mb-4">
              ב־1904 עבר לוורשה. תחילה התגורר אצל משפחת קרובים, ולאחר שהשיג
              עבודה חלקית כמורה פרטי ב"חדר מתוקן", שכר חדר במשותף עם ידיד.
              ביולי 1904 נפטר בנימין זאב הרצל. הייתה זו מהלומה בעבור בן־גוריון.
              הוא כתב לשמואל פוקס: "נתיתמו תקוותינו, חלומותינו! מחוללן ומטפחן
              מת... קר וחושך מסביב, אין שפעת אור התקוה... השמש איננו, אבל אורו
              עוד זורח!... רק פעם במשך אלפי שנים ייולד איש פלאים כזה".
              בן־גוריון שהה בוורשה במשך שנה וחצי, שם התפרנס מהוראה והצטרף
              לחוגים יהודיים ציוניים. במרץ 1905 חזר בן־גוריון לפלונסק.
              באותו חודש שלח מכתב למנחם אוסישקין, וביקש בשמו ובשמם של צעירים
              רווקים לעלות לארץ ישראל, אך מכתבו לא נענה. באמצע 1905,
              בעקבות מהפכת 1905 ברוסיה (שמאוחר יותר תגרום לו לדיכוי ובסופו של
              דבר לעלות לארץ ישראל), הצטרף למפלגת "פועלי ציון" הפולנית,
              ששילבה בין ציונות וסוציאליזם מרקסיסטי על פי תורתו של דב בר
              בורוכוב, לאחר שהשתתף בוועידת היסוד שלה בביתו של יצחק טבנקין. הוא
              השתתף בישיבות המפלגה והפיץ חומרי תעמולה. בן-גוריון ייסד סניף
              של המפלגה בפלונסק וארגן את השביתות הראשונות של החייטים ופועלי
              החבלים, וניהל את מאבקם לשיפור תנאי עבודתם. הוא צירף את שוליות
              בעלי המלאכה כחברים במפלגה ואף ארגן אותם לשביתה למען יום עבודה של
              12 שעות, שהשיגה את יעדה. הוא נאבק נגד תועמלנים של הבונד שהגיעו
              לפלונסק לעשות נפשות לאידאולוגיה שלהם, והצליח לבלומם ולהפוך את
              "פועלי ציון" לזרם המרכזי בקרב צעירי העיר. מרכז המפלגה בוורשה החל
              לשגר אותו בשליחויות שונות למחוזות הסמוכים. כאשר נוצרה מתיחות
              עקב חשש מפוגרום, החל בן־גוריון לשאת אקדח, ארגן את שוליות בעלי
              המלאכה להגנה עצמית והדריך באגודת עזרא שימוש בנשק. על פעילותו
              המהפכנית נאסר פעמיים. בפעם הראשונה שיחדו חבריו למפלגה פקיד, שמסר
              להם את החומר האסור שנמצא אצל בן־גוריון, וזה שוחרר מבית הסוהר בשל
              חוסר הוכחות. בפעם השנייה הצליח אביו לשכנע את קצין המשטרה
              לשחררו באמצעות שוחד.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}