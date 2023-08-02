import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <h1>INTERVIEW</h1> {/* スライダーの上に"INTERVIEW"を表示 */}
      <h2>ハンターハンターキャラ紹介</h2>{" "}
      <Slider {...settings}>
        <div>
          <img src="https://kai-you.net/r/img_words/844301/c688x516/75935d7fc0bccd4ff4d24c7c88f2aa1e.jpg" />
          <h3>ヒソカ</h3>
        </div>
        <div>
          <img src="https://cdn-ak.f.st-hatena.com/images/fotolife/g/g913/20170107/20170107091158.jpg" />
          <h3>イルミ</h3>
        </div>
        <div>
          <img src="https://cdn-ak.f.st-hatena.com/images/fotolife/g/g913/20170515/20170515114123.jpg" />
          <h3>ゴレイヌ</h3>
        </div>
        <div>
          <img src="https://cdn-ak.f.st-hatena.com/images/fotolife/g/g913/20170204/20170204102113.jpg" />
          <h3>ウヴォーギン</h3>
        </div>
        <div>
          <img src="https://comic-kingdom.jp/wp-content/uploads/2020/05/8-3.jpg" />
          <h3>トンパ</h3>
        </div>
      </Slider>
      {/* スライダーの下に"ハンターハンターキャラ紹介"を表示 */}
    </div>
  );
}
