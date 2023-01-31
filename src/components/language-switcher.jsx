import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
  const router = useRouter()

  const { locales, locale: activeLocale } = router

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== 'default'
  )

  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router
        return (
          <span key={'locale-' + locale}>
            <Link
              className="flex items-center justify-center align-middle"
              href={{ pathname, query }}
              as={asPath}
              locale={locale}
            >
              <a>
                {locale === 'en'
                  ? 'English'
                  : locale === 'ka'
                  ? 'Kannada'
                  : null}
              </a>
            </Link>
          </span>
        )
      })}
    </span>
  )
}
