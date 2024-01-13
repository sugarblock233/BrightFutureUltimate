import React from 'react';
import { useTranslation } from 'react-i18next';



const PrivacyPolicyLink = ({ onShowPrivacyPolicy }) => {
    const {t} = useTranslation();
    return (
        <div className="flex flex-row px-4 py-4 items-center">
            <a
                href="#"
                onClick={onShowPrivacyPolicy}
                className="text-gray-700 text-xs hover:text-blue-500 cursor-pointer"
                aria-label="Read privacy policy"
            >
                {t('PRIVACYPOLICY')}
            </a>
        </div>
    )
};

export default PrivacyPolicyLink;
