import React from 'react'
import { ImgBanner, StyledByYouWrapper, SwiperSectionWrapper } from '../../UI'
import { CategoryBanner } from '../../Layouts'
import { ColorfulBanner } from '@/components/Layouts/ColorfulBanner/ColorfulBanner'
import { BlackBannerHome, RedBannerHome } from '@/constants'
import { useSelector } from 'react-redux'
import { RootState } from '@/context/store'

const Home = () => {
  const satatus = useSelector((state: RootState) => state.data.satatus)

  return (
    <>
      <main>
        <section className="hero__section">
          <ColorfulBanner
            title={RedBannerHome.title}
            description={RedBannerHome.description}
            supTitle={RedBannerHome.subtitle}
            buttonText={RedBannerHome.Links}
            color={RedBannerHome.ColorfulBanner}
            satatus={satatus}
          />

          <ImgBanner dataIndex={6} satatus={satatus} />

          <ColorfulBanner
            title={BlackBannerHome.title}
            description={BlackBannerHome.description}
            supTitle={BlackBannerHome.subtitle}
            buttonText={BlackBannerHome.Links}
            color={BlackBannerHome.ColorfulBanner}
            satatus={satatus}
          />

          <CategoryBanner dataIndex={0} satatus={satatus} />
        </section>

        <section className="trending__section">
          <SwiperSectionWrapper />
        </section>

        <section className="banner__section">
          <ImgBanner dataIndex={1} satatus={satatus} />
          <ImgBanner dataIndex={3} satatus={satatus} />
          <ImgBanner dataIndex={4} satatus={satatus} />
        </section>

        <section className="styledByYou__section">
          <StyledByYouWrapper />
        </section>
      </main>
    </>
  )
}

export default Home
