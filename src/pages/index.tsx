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
    slidesToShow: 1, //一度に表示するスライド数
    slidesToScroll: 1, //一度にスライドする枚数
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
      <div>
        <h3>Slide 4</h3>
      </div>
      <div>
        <h3>Slide 5</h3>
      </div>
    </Slider>
  );
}