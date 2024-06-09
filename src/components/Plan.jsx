import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Plan = () => {
  const { t } = useTranslation()
  const planRef = useRef(null)
  const planWall = useRef(null)
  const planInfoBlock = useRef(null)
  const planDateBlock = useRef(null)
  const planCeremonyBlock = useRef(null)
  const planRestaurantBlock = useRef(null)
  const planCakeBlock = useRef(null)
  const planEndBlock = useRef(null)

  const [isVisiblePlan, setIsVisiblePlan] = useState(false)
  const [isVisibleDateBlock, setIsVisibleDateBlock] = useState(false)
  const [isVisibleCeremonyBlock, setIsVisibleCeremonyBlock] = useState(false)
  const [isVisibleRestaurantBlock, setIsVisibleRestaurantBlock] = useState(false)
  const [isVisibleCakeBlock, setIsVisibleCakeBlock] = useState(false)
  const [isVisibleEndBlock, setIsVisibleEndBlock] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > planRef.current.offsetTop - window.innerHeight + planRef.current.clientHeight) {
        setIsVisiblePlan(true)
      } else {
        setIsVisiblePlan(false)
      }

      if (scrollPosition > planDateBlock.current.offsetTop - window.innerHeight + planDateBlock.current.clientHeight) {
        if (scrollPosition < planEndBlock.current.offsetTop - window.innerHeight + planEndBlock.current.clientHeight) {
          planWall.current.style.height = `${scrollPosition - (planDateBlock.current.offsetTop - window.innerHeight) - 50}px`
        }
        setIsVisibleDateBlock(true)
      } else {
        setIsVisibleDateBlock(false)
      }

      if (scrollPosition > planCeremonyBlock.current.offsetTop - window.innerHeight + planCeremonyBlock.current.clientHeight) {
        setIsVisibleCeremonyBlock(true)
      } else {
        setIsVisibleCeremonyBlock(false)
      }

      if (scrollPosition > planRestaurantBlock.current.offsetTop - window.innerHeight + planRestaurantBlock.current.clientHeight) {
        setIsVisibleRestaurantBlock(true)
      } else {
        setIsVisibleRestaurantBlock(false)
      }

      if (scrollPosition > planCakeBlock.current.offsetTop - window.innerHeight + planCakeBlock.current.clientHeight) {
        setIsVisibleCakeBlock(true)
      } else {
        setIsVisibleCakeBlock(false)
      }

      if (scrollPosition > planEndBlock.current.offsetTop - window.innerHeight + planEndBlock.current.clientHeight) {
        setIsVisibleEndBlock(true)
      } else {
        setIsVisibleEndBlock(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <div className="plan-container">
            <span className={`plan ${isVisiblePlan ? 'visible' : ''}`} ref={planRef}>
               {t('plan')}
            </span>
            <div className="plan-info-block" ref={planInfoBlock}>
                <div className="plan-section">
                    <div className={`plan-block ${isVisibleDateBlock ? 'visible' : ''}`} ref={planDateBlock}>
                        <img src="/date.png" alt="wedding ceremony"/>
                        <span className="plan-time">13:00</span>
                        <span className="plan-text">{t('ceremony')}</span>
                    </div>
                    <div className={`plan-block ${isVisibleRestaurantBlock ? 'visible' : ''}`} ref={planRestaurantBlock}>
                        <img src="/restaurant.png" alt="wedding ceremony"/>
                        <span className="plan-time">17:00</span>
                        <span className="plan-text">{t('hall')}</span>
                    </div>
                    <div className={`plan-block ${isVisibleEndBlock ? 'visible' : ''}`} ref={planEndBlock}>
                        <img src="/verj.png" alt="wedding ceremony"/>
                        <span className="plan-time">23:00</span>
                        <span className="plan-text">{t('end')}</span>
                    </div>
                </div>
                <div className="plan-wall" ref={planWall}/>
                <div className="plan-section">
                    <div className={`plan-block ${isVisibleCeremonyBlock ? 'visible' : ''}`} ref={planCeremonyBlock}>
                        <img src="/zaks.png" alt="wedding ceremony"/>
                        <span className="plan-time">14:00</span>
                        <span className="plan-text">{t('registry')}</span>
                    </div>
                    <div className={`plan-block ${isVisibleCakeBlock ? 'visible' : ''}`} ref={planCakeBlock}>
                        <img src="/tort.png" alt="wedding ceremony"/>
                        <span className="plan-time">21:30</span>
                        <span className="plan-text">{t('cake')}</span>
                    </div>
                </div>
            </div>
        </div>
}
