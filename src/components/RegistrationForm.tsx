"use client";
import React, { useState } from 'react';
import clsx from 'clsx';
import { translations } from '@/data/translations';
import { type Locale } from '@/lib/i18n';

interface RegistrationFormProps {
  locale: Locale;
}

interface FormData {
  // Student Information
  studentName: string;
  nationality: string;
  birthDate: string;
  idNumber: string;
  educationLevel: string;
  grade: string;
  previousSchool: string;
  studentPhone: string;
  
  // Guardian Information
  fatherName: string;
  fatherIdNumber: string;
  guardianName: string;
  guardianIdNumber: string;
  relationship: string;
  jobTitle: string;
  workplace: string;
  homeAddress: string;
  email: string;
  postalCode: string;
  poBox: string;
  alternatePhone: string;
  guardianPhone: string;
  motherPhone: string;
  emergencyContact: string;
  emergencyRelationship: string;
  emergencyPhone: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ locale }) => {
  const t = translations[locale];
  const isRTL = locale === 'ar';

  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    nationality: '',
    birthDate: '',
    idNumber: '',
    educationLevel: '',
    grade: '',
    previousSchool: '',
    studentPhone: '',
    fatherName: '',
    fatherIdNumber: '',
    guardianName: '',
    guardianIdNumber: '',
    relationship: '',
    jobTitle: '',
    workplace: '',
    homeAddress: '',
    email: '',
    postalCode: '',
    poBox: '',
    alternatePhone: '',
    guardianPhone: '',
    motherPhone: '',
    emergencyContact: '',
    emergencyRelationship: '',
    emergencyPhone: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const requiredFields: (keyof FormData)[] = [
      'studentName', 'nationality', 'birthDate', 'idNumber', 'educationLevel', 
      'grade', 'previousSchool', 'studentPhone', 'fatherName', 'fatherIdNumber',
      'guardianName', 'guardianIdNumber', 'relationship', 'jobTitle', 'workplace',
      'homeAddress', 'email', 'postalCode', 'poBox', 'guardianPhone', 'motherPhone',
      'emergencyContact', 'emergencyRelationship', 'emergencyPhone'
    ];

    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = t.registration.required;
      }
    });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      console.log('Form Data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Registration submitted successfully!');
      
      // Reset form
      setFormData({
        studentName: '',
        nationality: '',
        birthDate: '',
        idNumber: '',
        educationLevel: '',
        grade: '',
        previousSchool: '',
        studentPhone: '',
        fatherName: '',
        fatherIdNumber: '',
        guardianName: '',
        guardianIdNumber: '',
        relationship: '',
        jobTitle: '',
        workplace: '',
        homeAddress: '',
        email: '',
        postalCode: '',
        poBox: '',
        alternatePhone: '',
        guardianPhone: '',
        motherPhone: '',
        emergencyContact: '',
        emergencyRelationship: '',
        emergencyPhone: ''
      });
    } catch (error) {
      alert('Error submitting registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors";
  const labelClasses = `block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`;
  const sectionClasses = "bg-white p-6 rounded-xl shadow-lg mb-8";
  
  const Label = ({ children, required = false }: { children: React.ReactNode; required?: boolean }) => (
    <label className={labelClasses}>
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );

  return (
    <div className={`max-w-4xl mx-auto p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t.registration.title}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Student Information Section */}
        <div className={sectionClasses}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
            {t.registration.studentInfo}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label required>
                {t.registration.fields.studentName}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.studentName && 'border-red-500')}
                placeholder={t.registration.placeholders.studentName}
                value={formData.studentName}
                onChange={(e) => handleInputChange('studentName', e.target.value)}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {errors.studentName && <span className="text-red-500 text-sm mt-1">{errors.studentName}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.nationality}
              </Label>
              <select
                className={clsx(inputClasses, errors.nationality && 'border-red-500')}
                value={formData.nationality}
                onChange={(e) => handleInputChange('nationality', e.target.value)}
              >
                <option value="">{t.registration.placeholders.nationality}</option>
                <option value="saudi">السعودية</option>
                <option value="egyptian">مصر</option>
                <option value="jordanian">الأردن</option>
                <option value="syrian">سوريا</option>
                <option value="lebanese">لبنان</option>
                <option value="other">أخرى</option>
              </select>
              {errors.nationality && <span className="text-red-500 text-sm mt-1">{errors.nationality}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.birthDate}
              </Label>
              <input
                type="date"
                className={clsx(inputClasses, errors.birthDate && 'border-red-500')}
                value={formData.birthDate}
                onChange={(e) => handleInputChange('birthDate', e.target.value)}
              />
              {errors.birthDate && <span className="text-red-500 text-sm mt-1">{errors.birthDate}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.idNumber}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.idNumber && 'border-red-500')}
                placeholder={t.registration.placeholders.idNumber}
                value={formData.idNumber}
                onChange={(e) => handleInputChange('idNumber', e.target.value)}
              />
              {errors.idNumber && <span className="text-red-500 text-sm mt-1">{errors.idNumber}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.educationLevel}
              </Label>
              <select
                className={clsx(inputClasses, errors.educationLevel && 'border-red-500')}
                value={formData.educationLevel}
                onChange={(e) => handleInputChange('educationLevel', e.target.value)}
              >
                <option value="">{t.registration.placeholders.educationLevel}</option>
                <option value="kg">رياض الأطفال</option>
                <option value="elementary">المرحلة الابتدائية</option>
                <option value="middle">المرحلة المتوسطة</option>
                <option value="high">المرحلة الثانوية</option>
              </select>
              {errors.educationLevel && <span className="text-red-500 text-sm mt-1">{errors.educationLevel}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.grade}
              </Label>
              <select
                className={clsx(inputClasses, errors.grade && 'border-red-500')}
                value={formData.grade}
                onChange={(e) => handleInputChange('grade', e.target.value)}
              >
                <option value="">{t.registration.placeholders.grade}</option>
                <option value="kg1">KG1</option>
                <option value="kg2">KG2</option>
                <option value="1">الصف الأول</option>
                <option value="2">الصف الثاني</option>
                <option value="3">الصف الثالث</option>
                <option value="4">الصف الرابع</option>
                <option value="5">الصف الخامس</option>
                <option value="6">الصف السادس</option>
                <option value="7">الصف السابع</option>
                <option value="8">الصف الثامن</option>
                <option value="9">الصف التاسع</option>
                <option value="10">الصف العاشر</option>
                <option value="11">الصف الحادي عشر</option>
                <option value="12">الصف الثاني عشر</option>
              </select>
              {errors.grade && <span className="text-red-500 text-sm mt-1">{errors.grade}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.previousSchool}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.previousSchool && 'border-red-500')}
                placeholder={t.registration.placeholders.previousSchool}
                value={formData.previousSchool}
                onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {errors.previousSchool && <span className="text-red-500 text-sm mt-1">{errors.previousSchool}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.studentPhone}
              </Label>
              <input
                type="tel"
                className={clsx(inputClasses, errors.studentPhone && 'border-red-500')}
                placeholder={t.registration.placeholders.studentPhone}
                value={formData.studentPhone}
                onChange={(e) => handleInputChange('studentPhone', e.target.value)}
              />
              {errors.studentPhone && <span className="text-red-500 text-sm mt-1">{errors.studentPhone}</span>}
            </div>
          </div>
        </div>

        {/* Guardian Information Section */}
        <div className={sectionClasses}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
            {t.registration.guardianInfo}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label required>
                {t.registration.fields.fatherName}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.fatherName && 'border-red-500')}
                placeholder={t.registration.placeholders.fatherName}
                value={formData.fatherName}
                onChange={(e) => handleInputChange('fatherName', e.target.value)}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {errors.fatherName && <span className="text-red-500 text-sm mt-1">{errors.fatherName}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.fatherIdNumber}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.fatherIdNumber && 'border-red-500')}
                placeholder={t.registration.placeholders.fatherIdNumber}
                value={formData.fatherIdNumber}
                onChange={(e) => handleInputChange('fatherIdNumber', e.target.value)}
              />
              {errors.fatherIdNumber && <span className="text-red-500 text-sm mt-1">{errors.fatherIdNumber}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.guardianName}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.guardianName && 'border-red-500')}
                placeholder={t.registration.placeholders.guardianName}
                value={formData.guardianName}
                onChange={(e) => handleInputChange('guardianName', e.target.value)}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {errors.guardianName && <span className="text-red-500 text-sm mt-1">{errors.guardianName}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.guardianIdNumber}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.guardianIdNumber && 'border-red-500')}
                placeholder={t.registration.placeholders.guardianIdNumber}
                value={formData.guardianIdNumber}
                onChange={(e) => handleInputChange('guardianIdNumber', e.target.value)}
              />
              {errors.guardianIdNumber && <span className="text-red-500 text-sm mt-1">{errors.guardianIdNumber}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.relationship}
              </Label>
              <select
                className={clsx(inputClasses, errors.relationship && 'border-red-500')}
                value={formData.relationship}
                onChange={(e) => handleInputChange('relationship', e.target.value)}
              >
                <option value="">{t.registration.placeholders.relationship}</option>
                <option value="father">الأب</option>
                <option value="mother">الأم</option>
                <option value="brother">الأخ</option>
                <option value="sister">الأخت</option>
                <option value="uncle">العم</option>
                <option value="aunt">العمة</option>
                <option value="grandfather">الجد</option>
                <option value="grandmother">الجدة</option>
                <option value="other">أخرى</option>
              </select>
              {errors.relationship && <span className="text-red-500 text-sm mt-1">{errors.relationship}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.jobTitle}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.jobTitle && 'border-red-500')}
                placeholder={t.registration.placeholders.jobTitle}
                value={formData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {errors.jobTitle && <span className="text-red-500 text-sm mt-1">{errors.jobTitle}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.workplace}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.workplace && 'border-red-500')}
                placeholder={t.registration.placeholders.workplace}
                value={formData.workplace}
                onChange={(e) => handleInputChange('workplace', e.target.value)}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {errors.workplace && <span className="text-red-500 text-sm mt-1">{errors.workplace}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.homeAddress}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.homeAddress && 'border-red-500')}
                placeholder={t.registration.placeholders.homeAddress}
                value={formData.homeAddress}
                onChange={(e) => handleInputChange('homeAddress', e.target.value)}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {errors.homeAddress && <span className="text-red-500 text-sm mt-1">{errors.homeAddress}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.email}
              </Label>
              <input
                type="email"
                className={clsx(inputClasses, errors.email && 'border-red-500')}
                placeholder={t.registration.placeholders.email}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.postalCode}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.postalCode && 'border-red-500')}
                placeholder={t.registration.placeholders.postalCode}
                value={formData.postalCode}
                onChange={(e) => handleInputChange('postalCode', e.target.value)}
              />
              {errors.postalCode && <span className="text-red-500 text-sm mt-1">{errors.postalCode}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.poBox}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.poBox && 'border-red-500')}
                placeholder={t.registration.placeholders.poBox}
                value={formData.poBox}
                onChange={(e) => handleInputChange('poBox', e.target.value)}
              />
              {errors.poBox && <span className="text-red-500 text-sm mt-1">{errors.poBox}</span>}
            </div>

            <div>
              <Label>
                {t.registration.fields.alternatePhone}
              </Label>
              <input
                type="tel"
                className={inputClasses}
                placeholder={t.registration.placeholders.alternatePhone}
                value={formData.alternatePhone}
                onChange={(e) => handleInputChange('alternatePhone', e.target.value)}
              />
            </div>

            <div>
              <Label required>
                {t.registration.fields.guardianPhone}
              </Label>
              <input
                type="tel"
                className={clsx(inputClasses, errors.guardianPhone && 'border-red-500')}
                placeholder={t.registration.placeholders.guardianPhone}
                value={formData.guardianPhone}
                onChange={(e) => handleInputChange('guardianPhone', e.target.value)}
              />
              {errors.guardianPhone && <span className="text-red-500 text-sm mt-1">{errors.guardianPhone}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.motherPhone}
              </Label>
              <input
                type="tel"
                className={clsx(inputClasses, errors.motherPhone && 'border-red-500')}
                placeholder={t.registration.placeholders.motherPhone}
                value={formData.motherPhone}
                onChange={(e) => handleInputChange('motherPhone', e.target.value)}
              />
              {errors.motherPhone && <span className="text-red-500 text-sm mt-1">{errors.motherPhone}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.emergencyContact}
              </Label>
              <input
                type="text"
                className={clsx(inputClasses, errors.emergencyContact && 'border-red-500')}
                placeholder={t.registration.placeholders.emergencyContact}
                value={formData.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {errors.emergencyContact && <span className="text-red-500 text-sm mt-1">{errors.emergencyContact}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.emergencyRelationship}
              </Label>
              <select
                className={clsx(inputClasses, errors.emergencyRelationship && 'border-red-500')}
                value={formData.emergencyRelationship}
                onChange={(e) => handleInputChange('emergencyRelationship', e.target.value)}
              >
                <option value="">{t.registration.placeholders.emergencyRelationship}</option>
                <option value="father">الأب</option>
                <option value="mother">الأم</option>
                <option value="brother">الأخ</option>
                <option value="sister">الأخت</option>
                <option value="uncle">العم</option>
                <option value="aunt">العمة</option>
                <option value="grandfather">الجد</option>
                <option value="grandmother">الجدة</option>
                <option value="friend">صديق</option>
                <option value="other">أخرى</option>
              </select>
              {errors.emergencyRelationship && <span className="text-red-500 text-sm mt-1">{errors.emergencyRelationship}</span>}
            </div>

            <div>
              <Label required>
                {t.registration.fields.emergencyPhone}
              </Label>
              <input
                type="tel"
                className={clsx(inputClasses, errors.emergencyPhone && 'border-red-500')}
                placeholder={t.registration.placeholders.emergencyPhone}
                value={formData.emergencyPhone}
                onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
              />
              {errors.emergencyPhone && <span className="text-red-500 text-sm mt-1">{errors.emergencyPhone}</span>}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={clsx(
              "bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-400 text-black font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
              isSubmitting && "cursor-not-allowed"
            )}
          >
            {isSubmitting ? 'Submitting...' : t.registration.submit}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;