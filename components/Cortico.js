import React from 'react'
import Page from './Page'
import {HSnapStack} from './Stack'
import {Header, Image, PortfolioLink, Button} from './Basics'
import {Fragment, useEffect} from 'react'
import {Alerts} from './Alert'
import useNav from '../model/useNav'
import usePopup, {Popups} from '../model/usePopup'
import useScreenSize from '../hooks/useScreenSize'
import {openInNewTab} from '../utils/nav'

import corticoDashboard from '../public/images/cortico-dashboard.png'
import corticoConvo from '../public/images/cortico-convo.jpg'
import corticoTranscript from '../public/images/cortico-transcript.jpg'
import corticoHighlight from '../public/images/cortico-highlight.jpg'
import corticoHome from '../public/images/cortico-mobile-home.jpg'

const PageId = 'cortico'
const HasSeenIntroKey = 'bubblesBuilds.hasSeenIntro'
const MobileScreenWidth = 640

export default function Cortico(p) {
  const {page} = useNav()
  const {showPopup} = usePopup()

  useEffect(() => {
    const hasSeenIntro = localStorage[HasSeenIntroKey]
    if (page.id === PageId && !hasSeenIntro) {
      showPopup(Popups.NavIntro)
      localStorage[HasSeenIntroKey] = 'true'
    }
  }, [page.id])

  return pug`
    Page(
      id=PageId index=p.index title='Cortico' shaderId='4dfGRr'
      how=HowConfig why=WhyConfig
    )

      HSnapStack(items=Items)
  `
}

var Items = [
  {
    id: 'cortico-dashboard',
    Content: (p) => pug`
      Fragment
        Header.text-white cortico desktop
        Image(
          src=corticoDashboard width=1280 height=910 framed
          alt='dashboard of cortico web app'
        )
    `,
  },
  {
    id: 'cortico-convo',
    Content: (p) => pug`
      Fragment
        Header.text-white cortico mobile conversation
        Image(
          src=corticoConvo width=591 height=1280 framed
          alt='screenshot of a conversation in the cortico app'
        )
    `,
  },
  {
    id: 'cortico-transcript',
    Content: (p) => pug`
      Fragment
        Header.text-white cortico mobile transcript
        Image(
          src=corticoTranscript width=591 height=1280 framed
          alt='screenshot of a transcript in the cortico app'
        )
    `,
  },
  {
    id: 'cortico-highlight',
    Content: (p) => pug`
      Fragment
        Header.text-white cortico mobile highlight
        Image(
          src=corticoHighlight width=591 height=1280 framed
          alt='screenshot of a highlight in the cortico app'
        )
    `,
  },
  {
    id: 'cortico-mobile-home',
    Content: (p) => pug`
      Fragment
        Header.text-white cortico mobile home page
        Image(
          src=corticoHome width=591 height=1280 framed
          alt='screenshot of a home page in the cortico app'
        )
    `,
  },
]

const Convo = (p) => pug`
  Image(
    src=corticoConvo width=591 height=1280 framed
    alt='screenshot of a conversation in the cortico app'
  )
`
const Transcript = (p) => pug`
  Image(
    src=corticoTranscript width=591 height=1280 framed
    alt='screenshot of a transcript in the cortico app'
  )
`

const Highlight = (p) => pug`
  Image(
    src=corticoHighlight width=591 height=1280 framed
    alt='screenshot of a highlight in the cortico app'
  )
`

const MobileItems = [
  {
    id: 'cortico-convo',
    Content: Convo,
  },
  {
    id: 'cortico-transcript',
    Content: Transcript,
  },
  {
    id: 'cortico-highlight',
    Content: Highlight,
  },
]

var HowConfig = [
  'Typescript',
  'HTML / JSX / Pug',
  'CSS',
  'Webpack',
  'React',
  'Cortico',
  'VSCode',
  'Git',
  'SASS',
  'BSE Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Cortico’s process blends scientific rigor with human connection to create safe spaces for sharing real truths, helping us all get better at the art of weaving our lives together.',

  love: 'One of Cortico‘s main goals is to elevate underheard voices to people in power so that they can make better decisions. This community-building approach was one of the main reasons I was drawn to the company.',

  play: 'Our work at Cortico was often focused on simplicity, accessibility and also fun! We aimed to help people feel comfortable and safe enough to explore deep issues and leave feeling heard and motivated.',
}
