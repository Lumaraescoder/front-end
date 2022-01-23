import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navigation from '../components/Navigation/Navigation';
import { ROUTES } from '@constant/index';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Homepage = () => {

  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <>
      <main>
        <Navigation {...ROUTES}/>
        <Header title={t('title')} description={''} />
        <div>
          <Link
            href='/'
            locale={router.locale === 'en' ? 'pt' : 'en'}
          >
            <button>
              {t('change-locale')}
            </button>
          </Link>
          <Link href='/about'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
});

export default Homepage;