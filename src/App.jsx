/** @format */

import { useState } from "react";
import HeaderBaner from "./assets/3443.jpg";
import Image1 from "./assets/images-1.jpg";
import Image2 from "./assets/191151536079021.jpg";
import Image3 from "./assets/1-750x430.jpg";
import Image4 from "./assets/5df22e902e7beffd52001ad1.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img className='banner' src={HeaderBaner} />
      <h1>مقاولات أسفلت عسير </h1>
      <div className='info'>
        <h3>مقاولات أسفلت عسير 0558695304 أعمال المقاولات للايجار</h3>
        <p>
          لجميع أعمال الاسفلت واجهات عماير ومستودعات وطرق فرعية واحواش ومحطات
          ومخططات ومشاريع حكوميه ولدينا اسفلت مبشور وتدوير دفان الجميع انواعه
          بسكورس وصنبيص وبدره ونقوم بأختيار الارضيه قبل طبقة الاسفلت ولدينا
          جميعمعدات الاسفلت لتنفيذ الاعمال المطلوبه
        </p>
        <p>رقم التواصل 0558695304 موجود واتساب</p>
        <img src={Image1} />
        <h3>أسعار مقاول أسفلت ببيشه</h3>
        <p>
          تتيمز شركة راحتك بأنها أفضل شركة خدمات تنظيف مقابل سعر رخيص ومميز
          بالنسبة للشركات الأخري حيث وفرت مقاول أسفلت ببيشه خدمات أسفلت بابها
          بأفضل الأسعار والعروض الجبارة كما تقدم ضمانات لتنفيذ الخدمة بالكفاءة
          المطلوبة مقابل السعر المميز المتناسب لجميع العملاء.
        </p>
        <img src={Image2} />
        <h3>شركة مقاول أسفلت ببيشه</h3>
        <p>
          حيث تتميز مقاول أسفلت ببيشه بأستخدام أفضل مواد الأسفلت في صناعة طبقات
          الأسفلت المخصصة لرصف طريق العميل،كما يوجد لدي مقاول أسفلت ببيشه أفضل
          عمال لتنفيذ خدمات الأسفلت ببيشه،كما تضم أكبر الألات التي تسهل المهمة
          وتعمل علي تنفيذها في وقت قصير وسريع.
        </p>
        <img src={Image3} />
        <h3>مقاول لااعمال اسفلت ببيشه</h3>
        <p>
          شركة اسفلت مقاول اسفلت اعمال اسفلت مخازن اسفلت مستودعات اسفلت مصانع
          اسفلت امام المنزل انشاءات اسفلت ردم وتسهيل مقاول عام لجميع اعمال
          البناء اسفلت ببيشه نقوم بتنفيذ اعمال الاسفلت في بيشه في جميع المناطق
          وفي جميع الطلبات من حفر وتسهيل وسفلته واسفلت للطرق.
        </p>
        <h3>مقاول أسفلت ببيشه</h3>
        <ul>
          <li>
            إذا كنت ترغب في استئجار مقاول أعمال الأسفلت بشكل يومي في أي وقت خلال
            أربع وعشرين ساعة ، فستجدنا. يوجد عدة أرقام لتلقي جميع المكالمات
            والاستفسارات ، وفي أيام العطلات تجدنا. يمكنك أيضًا التواصل على صفحات
            شركتنا ، وسيتم الرد بمجرد إرسال الرسائل لتنفيذ الخدمة.
          </li>
          <li>
            مقاول الأسفلت ببيشه يقوم بصيانة وإصلاح الأضرار والشقوق في الطرق بأقل
            تكلفة وأقل وقت. نقوم بترميم جميع الشوارع للقضاء على مشكلة ترسبات
            المياه في منتصف الشارع والتي تؤدي إلى مشاكل لا حصر لها. كيف تتم
            عملية ترميم وصيانة الشوارع بأفضل أنواع الأسمنت العالمية.
          </li>
          <li>
            بعد الحجز والاستعلام عن جميع الشروط يتوجه المندوب إلى المكان الذي
            يريد العميل صيانته وترميمه أو تركيب الأسفلت للحد من مشكلة الحوادث
            ورواسب المياه.
          </li>
          <li>
            بعد العقد ، يسافر فريق مقاول أسفلت ببيشه في سيارات جاهزة للاستخدام
            متخصصة في نقل العمال والمعدات والمواد اللازمة لصيانة الطرق وترميمها
            وصيانتها. العمال من خلال معدات وادوات الاسفلت والترميم والصيانة
            بتعليمات افضل المهندسين في العالم يزيلون جميع العوائق او الاحجار من
            اجل ترميم واصلاح الطريق يتم الجمع بين المواد مع بعضها البعض بفضل
            أحدث وأفضل التقنيات العالمية التي تنجز المهمة في أقل وقت ممكن.
          </li>
        </ul>
        <img src={Image4} />
      </div>
    </div>
  );
}

export default App;
