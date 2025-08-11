import Hero from "@/components/Hero";
import SchoolFeatures from "@/components/SchoolFeatures";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { translations } from '@/data/translations';
import { type Locale } from '@/lib/i18n';

const HomePage: React.FC<{ params: { locale: Locale } }> = ({ params }) => {
  const t = translations[params.locale];

  return (
    <>
      <Hero locale={params.locale} />
      <Logos />
      <Container>
        <Benefits locale={params.locale} />

        <Section
          id="school-features"
          title=""
          description=""
        >
          <SchoolFeatures locale={params.locale} />
        </Section>

        <CTA locale={params.locale} />
      </Container>
    </>
  );
};

export default HomePage;
