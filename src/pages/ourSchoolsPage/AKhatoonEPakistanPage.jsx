import React from 'react';
import AchievementHeader from '../../components/AchievementHeader';
import KhtoonBeforeAfterSlider from '../../components/KhtoonBeforeAfterSlider';
import MakeDonation from '../../components/MakeDonation/MakeDonation';
import OurSchoolBanner from '../../components/OurSchoolBanner';
import AcademicsResult from '../../components/ui/AcademicsResult';
import ContactDetails from '../../components/ui/ContactDetails';


const AKhatoonEPakistanPage = () => {
    return (
        <div className=''>
     <OurSchoolBanner></OurSchoolBanner>
      <AchievementHeader className="text-[#FF6400]" achiveHeader="BEFORE AND AFTER GALLERY" achiveDescription="Hold and slide right to see the school transform from before to after our intervention" />
      <KhtoonBeforeAfterSlider></KhtoonBeforeAfterSlider>
      <AcademicsResult></AcademicsResult>
      <ContactDetails></ContactDetails>
  <MakeDonation></MakeDonation>
        </div>
    );
}

export default AKhatoonEPakistanPage;
