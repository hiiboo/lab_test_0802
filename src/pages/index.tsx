import Image from 'next/image'
import { Inter } from 'next/font/google'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true, //スライダー下の点の表示/非表示
    infinite: true, //無限スクロールの有効/無効
    speed: 500, //スライド切り替えの速度
    slidesToShow: 3, //一度に表示するスライド数
    slidesToScroll: 3, //一度にスライドする枚数
  };

  return (
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
        {/* ここに2番目のカードの内容を追加 */}
      </div>
      <div>
        <img src="https://cdn-ak.f.st-hatena.com/images/fotolife/g/g913/20170204/20170204102113.jpg" />
        <h3>ウヴォーギン</h3>
        {/* ここに2番目のカードの内容を追加 */}
      </div>
      <div>
        <img src="https://comic-kingdom.jp/wp-content/uploads/2020/05/8-3.jpg" />
        <h3>トンパ</h3>
        {/* ここに2番目のカードの内容を追加 */}
      </div>
    </Slider>
  );
}