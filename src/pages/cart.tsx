import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import  Header  from '../components/Header';
import  Footer  from '../components/Footer';
import Navigation from '../components/Navigation/Navigation';
import { ROUTES } from '@constant/index';


const AboutPage = () => {

  const { t } = useTranslation('aboutpage');

  return (
    <>
      <main>
        <Navigation {...ROUTES}/>
        <Header title={t('title')} description={''} />
        <Link href='/'>
          <button
            type='button'
          >
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
};


export default AboutPage;