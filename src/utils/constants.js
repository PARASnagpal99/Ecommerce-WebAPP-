import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Passion',
    text:
      'We dare to dream, we always aim higher. By constantly setting new standards in who we are and what we do, our passion will spur us on.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'Our Strength : RD',
    text:
    'We value innovation over anything. Our dedicated research and development team ensures that all our products are cutting edge and top of the line.',
  } ,
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'PartnerShip',
    text:
    'We work as a team with mutual trust and shared accountability towards a common goal in a collaborative environment, to meet the needs and expectations of all stakeholders. We always stand behind our promises and act with complete integrity.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
