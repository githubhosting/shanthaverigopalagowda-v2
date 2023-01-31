import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import LocaleSwitcher from './language-switcher'

export default function Navigation() {
  const router = useRouter()

  const { t } = useTranslation('')

  useEffect(() => {
    let lang = router.locale == 'ka' ? 'ka' : 'en'
    document.querySelector('html').setAttribute('lang', lang)
  }, [router.locale])

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="navbar-collapse" id="navbarText">
          {/* <ul className="navbar-nav me-auto mb-lg-0 mb-2">
            <li className="nav-item">
              <Link href="/">
                <a
                  className={`nav-link ${
                    router?.pathname === '/' ? 'active' : ''
                  }`}
                >
                  {t('header.Home')}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a
                  className={`nav-link ${
                    router?.pathname === '/about' ? 'active' : ''
                  }`}
                >
                  {t('header.About')}
                </a>
              </Link>
            </li>
          </ul> */}
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  )
}
