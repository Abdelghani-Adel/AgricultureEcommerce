const AdvertiseThree = ({ order }) => {
  return (
    <div className="adv_3">
      <div className="frame-wrapper-2">
        <iframe
          className="iframe_2"
          src="https://www.youtube-nocookie.com/embed/Mz1fql7kr7g?enablejsapi=1"
          title="YouTube video player"
          loading="lazy"
        ></iframe>
      </div>
      <div className="text-end">
        <h4 className="mt-3 mb-1">طريقة رش المبيدات بمزارعنا</h4>
        <p className="iframe_desc">
          مبيدات الآفات هي مواد أو خليط من المواد يُقصد منها الوقاية، تدمير، محاربة وصد، أو التلطيف
          من حدة أثر آفةٍ ما. ومن ثم، فقد يكون مبيد الآفات مادةً كيميائيةً، عنصر أو عامل حيوي
          بيولوجي (مثل الفيروس أو البكتريا)، مضاد للميكروبات، مطهر أو مبيد للجراثيم أو حتى أداة
          تُستخدم ضد أي آفةٍ كانت.
        </p>
      </div>
    </div>
  );
};

export default AdvertiseThree;
