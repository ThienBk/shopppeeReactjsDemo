import React from "react";
import "./home.scss";
import banner1 from "../../../assets/public/img/banner-img-left.png";
import banner2 from "../../../assets/public/img/banner-img-left1.png";
import banner3 from "../../../assets/public/img/banner-img-left2.png";
import event1 from "../../../assets/public/img/event1.png";
import event2 from "../../../assets/public/img/event2.png";
import event3 from "../../../assets/public/img/event3.png";
import event4 from "../../../assets/public/img/event4.png";
import event5 from "../../../assets/public/img/event5.png";
import event6 from "../../../assets/public/img/event6.png";
import event7 from "../../../assets/public/img/event7.png";
import event8 from "../../../assets/public/img/event8.png";
import event9 from "../../../assets/public/img/event9.png";
import directory1 from "../../../assets/public/img/P2-item1.png";
import directory2 from "../../../assets/public/img/P2-item2.png";
import directory3 from "../../../assets/public/img/P2-item3.png";
import directory4 from "../../../assets/public/img/P2-item4.png";
import directory5 from "../../../assets/public/img/P2-item5.png";
import directory6 from "../../../assets/public/img/P2-item6.png";
import directory7 from "../../../assets/public/img/P2-item7.png";
import directory8 from "../../../assets/public/img/P2-item8.png";
import directory9 from "../../../assets/public/img/P2-item9.png";
import directory10 from "../../../assets/public/img/P2-item10.png";
import directory11 from "../../../assets/public/img/P2-item11.png";
import directory12 from "../../../assets/public/img/P2-item12.png";
import directory13 from "../../../assets/public/img/P2-item13.png";
import directory14 from "../../../assets/public/img/P2-item14.png";
import directory15 from "../../../assets/public/img/P2-item15.png";
import directory16 from "../../../assets/public/img/P2-item16.png";
import directory17 from "../../../assets/public/img/P2-item17.png";
import directory18 from "../../../assets/public/img/P2-item18.png";
import directory19 from "../../../assets/public/img/P2-item19.png";
import directory20 from "../../../assets/public/img/P2-item20.png";

import tabsImg1 from "../../../assets/public/img/tabs-item-1.jpg";
import tabsImg2 from "../../../assets/public/img/tabs-item-2.jpg";
import tabsImg3 from "../../../assets/public/img/tabs-item-3.jpg";
import tabsImg4 from "../../../assets/public/img/tabs-item-4.jpg";
import tabsImg5 from "../../../assets/public/img/tabs-item-5.jpg";
import tabsImg6 from "../../../assets/public/img/tabs-item-6.jpg";
import tabsImg7 from "../../../assets/public/img/tabs-item-7.jpg";
import tabsImg8 from "../../../assets/public/img/tabs-item-8.jpg";
import tabsImg9 from "../../../assets/public/img/tabs-item-9.jpg";
import tabsImg10 from "../../../assets/public/img/tabs-item-10.jpg";
import tabsImg11 from "../../../assets/public/img/tabs-item-11.jpg";
import tabsImg12 from "../../../assets/public/img/tabs-item-12.jpg";

export default function Home() {
  return (
    <div className="mt-5">
      {/* Banner */}
      <div className="container home">
        <div
          id="carouselExampleIndicators"
          className="carousel slide mx-auto"
          data-bs-ride="carousel"
          style={{ width: "100%", height: "" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Event */}
        <div className="event d-flex">
          <div className="event_item">
            <img src={event1} alt="" />
            <p>Khung gi??? s??n sale</p>
          </div>
          <div className="event_item">
            <img src={event2} alt="" />
            <p>G?? C??ng R??? - Mua L?? Freeship</p>
          </div>
          <div className="event_item">
            <img src={event3} alt="" />
            <p>Mi???n Ph?? V???n Chuy???n</p>
          </div>
          <div className="event_item">
            <img src={event4} alt="" />
            <p>B???t Trend - Gi?? S???c</p>
          </div>
          <div className="event_item">
            <img src={event5} alt="" />
            <p>Ho??n Xu Xtra T??? 100K</p>
          </div>
          <div className="event_item">
            <img src={event6} alt="" />
            <p>H??ng Hi???u Gi?? T???t</p>
          </div>
          <div className="event_item">
            <img src={event7} alt="" />
            <p>H??ng Qu???c T??? - Deal x9K</p>
          </div>
          <div className="event_item">
            <img src={event8} alt="" />
            <p>N???p Th??? & D???ch V???</p>
          </div>
          <div className="event_item">
            <img src={event9} alt="" />
            <p>Khung gi??? s??n sale</p>
          </div>
        </div>

        {/* Directory */}
        <div className="directory">
          <div className="directory_title border py-3 ps-3">
            <h4>Danh m???c</h4>
          </div>
          <div className="directory_content">
            <div className="directory_item">
              <img src={directory1} alt="" />
              <p>Th???i trang nam</p>
            </div>
            <div className="directory_item">
              <img src={directory2} alt="" />
              <p>??i???n tho???i v?? ph??? ki???n</p>
            </div>
            <div className="directory_item">
              <img src={directory3} alt="" />
              <p>Thi???t b??? ??i???n t???</p>
            </div>
            <div className="directory_item">
              <img src={directory4} alt="" />
              <p>M??y t??nh v?? laptop</p>
            </div>
            <div className="directory_item">
              <img src={directory5} alt="" />
              <p>M??y ???nh v?? m??y quay phim</p>
            </div>
            <div className="directory_item">
              <img src={directory6} alt="" />
              <p>?????ng h???</p>
            </div>
            <div className="directory_item">
              <img src={directory7} alt="" />
              <p>Gi??y d??p nam</p>
            </div>
            <div className="directory_item">
              <img src={directory8} alt="" />
              <p>Thi???t b??? ??i???n gia d???ng</p>
            </div>
            <div className="directory_item">
              <img src={directory9} alt="" />
              <p>Th??? thao v?? du l???ch</p>
            </div>
            <div className="directory_item">
              <img src={directory10} alt="" />
              <p>?? t??, xe m??y v?? xe ?????p</p>
            </div>
            <div className="directory_item">
              <img src={directory11} alt="" />
              <p>Th???i trang n???</p>
            </div>
            <div className="directory_item">
              <img src={directory12} alt="" />
              <p>M??? & b??</p>
            </div>
            <div className="directory_item">
              <img src={directory13} alt="" />
              <p>Nh?? c???a & ?????i s???ng</p>
            </div>
            <div className="directory_item">
              <img src={directory14} alt="" />
              <p>S???c ?????p</p>
            </div>
            <div className="directory_item">
              <img src={directory15} alt="" />
              <p>S???c kh???e</p>
            </div>
            <div className="directory_item">
              <img src={directory16} alt="" />
              <p>Gi??y d??p n???</p>
            </div>
            <div className="directory_item">
              <img src={directory17} alt="" />
              <p>T??i v?? n???</p>
            </div>
            <div className="directory_item">
              <img src={directory18} alt="" />
              <p>Ph??? ki???n & trang s???c</p>
            </div>
            <div className="directory_item">
              <img src={directory19} alt="" />
              <p>B??ch h??a online</p>
            </div>
            <div className="directory_item">
              <img src={directory20} alt="" />
              <p>Nh?? S??ch online</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="content_title mt-5 text-center py-4">
          <h4 className="text-danger">G???i ?? h??m nay</h4>
        </div>
        <div className="content">
          <div className="content_item">
            <img src={tabsImg1} alt="" />
            <p class="description">
              [???? X??? KHO] Gi??y ???????????????? tr???ng, ???????????????? AF1 M??u Tr???ng B???n ?????p Ti??u Chu???n
              Hot Hit 2021
            </p>
          </div>
          <div className="content_item">
            <img src={tabsImg2} alt="" />
            <p class="description">
              [???? X??? KHO] Gi??y ???????????????? tr???ng, ???????????????? AF1 M??u Tr???ng B???n ?????p Ti??u Chu???n
              Hot Hit 2021
            </p>
          </div>
          <div className="content_item">
            <img src={tabsImg3} alt="" />
            <p class="description">
              [???? X??? KHO] Gi??y ???????????????? tr???ng, ???????????????? AF1 M??u Tr???ng B???n ?????p Ti??u Chu???n
              Hot Hit 2021
            </p>
          </div>
          <div className="content_item">
            <img src={tabsImg4} alt="" />
            <p class="description">
              [???? X??? KHO] Gi??y ???????????????? tr???ng, ???????????????? AF1 M??u Tr???ng B???n ?????p Ti??u Chu???n
              Hot Hit 2021
            </p>
          </div>
          <div className="content_item">
            <img src={tabsImg5} alt="" />
            <p class="description">
              [???? X??? KHO] Gi??y ???????????????? tr???ng, ???????????????? AF1 M??u Tr???ng B???n ?????p Ti??u Chu???n
              Hot Hit 2021
            </p>
          </div>
          <div className="content_item">
            <img src={tabsImg6} alt="" />
            <p class="description">
              [???? X??? KHO] Gi??y ???????????????? tr???ng, ???????????????? AF1 M??u Tr???ng B???n ?????p Ti??u Chu???n
              Hot Hit 2021
            </p>
          </div>
          <div className="content_item">
            <img src={tabsImg7} alt="" />
            <p class="description">
              [???? X??? KHO] Gi??y ???????????????? tr???ng, ???????????????? AF1 M??u Tr???ng B???n ?????p Ti??u Chu???n
              Hot Hit 2021
            </p>
          </div>
          <div className="content_item">
            <img src={tabsImg8} alt="" />
            <p class="description">
              [???? X??? KHO] Gi??y ???????????????? tr???ng, ???????????????? AF1 M??u Tr???ng B???n ?????p Ti??u Chu???n
              Hot Hit 2021
            </p>
          </div>
          <div className="content_item">
            <img src={tabsImg9} alt="" />
            <p class="description">
              [???? X??? KHO] Gi??y ???????????????? tr???ng, ???????????????? AF1 M??u Tr???ng B???n ?????p Ti??u Chu???n
              Hot Hit 2021
            </p>
          </div>
          <div className="content_item">
            <img src={tabsImg10} alt="" />
            <p class="description">
              [???? X??? KHO] Gi??y ???????????????? tr???ng, ???????????????? AF1 M??u Tr???ng B???n ?????p Ti??u Chu???n
              Hot Hit 2021
            </p>
          </div>
          <div className="content_item">
            <img src={tabsImg11} alt="" />
            <p class="description">
              [???? X??? KHO] Gi??y ???????????????? tr???ng, ???????????????? AF1 M??u Tr???ng B???n ?????p Ti??u Chu???n
              Hot Hit 2021
            </p>
          </div>
          <div className="content_item">
            <img src={tabsImg12} alt="" />
            <p class="description">
              [???? X??? KHO] Gi??y ???????????????? tr???ng, ???????????????? AF1 M??u Tr???ng B???n ?????p Ti??u Chu???n
              Hot Hit 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
