import React, { MutableRefObject, Suspense, useRef } from "react";
import { RootState } from "@/context/store";
import { useSelector } from "react-redux";

import { ImgBanner, MagazineCard, Navigation, LinkButton } from "../../UI";
import { CategoryBanner, Filter, Swiper } from "../../Layouts";
import PaginationStep from "../../../utils/PaginationStep";
import PaginationIndex from "../../../utils/PaginationIndex/idnex";
import PaginationDot from "../../Layouts/Swiper/PaginationDot";

import { magazine } from "../../../constants";

const Home = () => {
  const pagenaationRef1 = useRef() as MutableRefObject<HTMLDivElement>;
  const swiperContainerRef1 = useRef() as MutableRefObject<HTMLUListElement>;
  const swiperContainerRef2 = useRef() as MutableRefObject<HTMLUListElement>;
  const swiperContainerRef3 = useRef() as MutableRefObject<HTMLUListElement>;
  const swiperContainerRef4 = useRef() as MutableRefObject<HTMLUListElement>;

  const selector = useSelector((state: RootState) => state.data);
  const selector2 = useSelector((state: RootState) => state.util);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="section pt-0">
          <ImgBanner dataIndex={0} />

          <CategoryBanner categoryData={selector.categoriesData} />
        </section>

     {/*   <section className="section">
          <div>
            <h2
              className="
                  text-start
                  text-[1.2rem]
                  font-semibold
                "
            >
              Trending Now
            </h2>

            <div
              className="
                  flex
                  items-center
                  justify-between
                  gap-[3.5rem]
                "
            >
              <Filter />
              <Navigation
                navigationFunction={PaginationIndex}
                DOT_REF={pagenaationRef1}
                SWIPER_REF={swiperContainerRef1}
              />
            </div>
          </div>

          <Swiper
            FILTER__QUERY={selector2.currentFilter}
            DATA__NAME={selector.products}
            ref={swiperContainerRef1}
            DOT_REF={pagenaationRef1}
            SWIPER__REF={swiperContainerRef1}
          />

          <div
            className="
                pagination_container
                flex
                items-center
                justify-center
                gap-2
              "
            ref={pagenaationRef1}
          >
            <PaginationDot />
            <PaginationDot />
          </div>
        </section>*/}

     {/*   <section
          className="
              section
              relative
              pb-8
            "
        >
          <h2
            className="
                text-center
                text-[1.2rem]
                font-semibold
              "
          >
            Recommended for you
          </h2>
          <Navigation
            navigationFunction={PaginationStep}
            flex_mode={true}
            btnClassName="navigation_flex"
            SWIPER_REF={swiperContainerRef2}
          />

          <Swiper
            // FILTER__QUERY={selector.currentFilter}
            DATA__NAME={selector.products}
            ref={swiperContainerRef2}
            SWIPER__REF={swiperContainerRef2}
          />
        </section>*/}

        <section className="section pb-6 pt-0">
          <ImgBanner dataIndex={1} />
        </section>

        <section className="section pb-6 pt-0">
          <ImgBanner dataIndex={2} />
        </section>

     {/*   <section
          className="
              section
              relative
              pb-8
              pt-0
            "
        >
          <h2
            className="
                text-center
                text-[1.2rem]
                font-semibold
              "
          >
            Customers Also Viewed
          </h2>
          <Navigation
            navigationFunction={PaginationStep}
            flex_mode={true}
            btnClassName="navigation_flex"
            SWIPER_REF={swiperContainerRef3}
          />


          <Swiper
            FILTER__QUERY={selector.currentFilter}
            DATA__NAME={selector.products}
            ref={swiperContainerRef3}
            SWIPER__REF={swiperContainerRef3}
          />
        </section>*/}

        <section className="styledByYou__section section">
          <div>
            <h3>Styled by you</h3>
            <p>
              We love to see how you style your favourites from BeliBeli: Keep
              sharing your personal style with @BeliBeli and #BeliBelixME for a
              chance to be featured at hm.com, in our marketing materials and in
              our stores.
            </p>

            <LinkButton href={`/BeliBeli`}>Visit BeliBeli</LinkButton>
          </div>

         {/* <div>
            <Navigation
              navigationFunction={PaginationStep}
              flex_mode={true}
              btnClassName="navigation_flex"
              SWIPER_REF={swiperContainerRef4}
              className="styled"
            />

            <Swiper
              FILTER__QUERY="styledbyyou"
              DATA__NAME={selector.products}
              ref={swiperContainerRef4}
              SWIPER__REF={swiperContainerRef4}
              MAGAZINE__TYPE={true}
            />
          </div>*/}
        </section>

      {/*  <section className="magazine__section">
          <div className="section magazine__container mb-[2rem]">
            <h2>MAGAZINE</h2>

            <LinkButton href={"/Magazine"}>READ BeliBeli MAGAZINE</LinkButton>

            <div>
              {magazine.map((data, index) => {
                return (
                  <MagazineCard key={index} img={data.img} title={data.title} />
                );
              })}
            </div>
          </div>
        </section>*/}
      </main>
    </>
  );
};

export default Home;
