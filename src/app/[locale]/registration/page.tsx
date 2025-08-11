import RegistrationForm from '@/components/RegistrationForm';
import { type Locale } from '@/lib/i18n';

interface RegistrationPageProps {
  params: {
    locale: Locale;
  };
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ params }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <RegistrationForm locale={params.locale} />
    </div>
  );
};

export default RegistrationPage;