import React from 'react';
import {
  useUserName,
  useUserJob,
  useUserPhone,
  useUserEmail,
  useUserAbout,
  useUserImageUrl,
} from "../Pages/Data/PersonalInformation.data";
import {
  useWebsiteURL,
  useFacebookURL,
  useTwitterURL,
  useLinkedInURL,
} from "../Pages/Data/SocialLinks.data";
import { useEmploymentHistory } from "../Pages/Data/EmpoymentHistory.data";
import { useEducation } from "../Pages/Data/Education.data";
import clsx from 'clsx';

const SectionTitle = ({ children }) => (
  <p className="font-bold text-[25px] break-words">{children}</p>
);

const ContactInfo = ({ info, label }) => (
  info ? <p className="font-semibold">{label}: {info}</p> : null
);

const ExperienceItem = ({ startDate, endDate, companyName, jobTitle, details }) => (
  <div className="mt-4 break-words">
    <p className="text-slate-600">{startDate} - {endDate}</p>
    <p className="text-slate-600">{companyName}</p>
    <p className="font-bold text-[16px] mt-2">{jobTitle}</p>
    <p className="text-slate-600">{details}</p>
  </div>
);

const EducationItem = ({ startDate, endDate, degreeName, universityName }) => (
  <div className="mt-4 break-words">
    <p>{startDate} - {endDate}</p>
    <p>{degreeName}</p>
    <p>{universityName}</p>
  </div>
);

function CVTemplate() {
  const { userName } = useUserName();
  const { userJob } = useUserJob();
  const { userPhone } = useUserPhone();
  const { userEmail } = useUserEmail();
  const { userAbout } = useUserAbout();
  const { websiteURL } = useWebsiteURL();
  const { facebookURL } = useFacebookURL();
  const { twitterURL } = useTwitterURL();
  const { linkedInURL } = useLinkedInURL();
  const { employmentHistory } = useEmploymentHistory();
  const { education } = useEducation();

  return (
    <section className="bg-white w-[21cm] h-[27.8cm] p-[50px]">
      <div className="text-center">
        <p className={clsx("font-semibold break-words", {
          "text-3xl": userName.length > 10,
          "text-5xl": userName.length <= 10,
        })}>
          {userName}
        </p>
        <p className={clsx("mt-5 break-words", {
          "text-xl": userJob.length > 20,
          "text-2xl": userJob.length <= 20,
        })}>
          {userJob}
        </p>
        <p className="text-[20px] mt-2 break-words">{userAbout}</p>
      </div>

      <div className="mt-[10px]">
        <div className="grid gap-8">
          <div>
            <SectionTitle>Education</SectionTitle>
            {education.map((ele, idx) => (
              <EducationItem
                key={idx}
                startDate={ele.startDate}
                endDate={ele.endDate}
                degreeName={ele.degreeName}
                universityName={ele.univercityName}
              />
            ))}
          </div>
          <div>
            <SectionTitle>Contact</SectionTitle>
            <div className="flex flex-col gap-2 mt-2 text-lg break-words">
              <ContactInfo info={userPhone} label="Phone" />
              <ContactInfo info={userEmail} label="Email" />
              <ContactInfo info={facebookURL} label="Facebook" />
              <ContactInfo info={twitterURL} label="Twitter" />
              <ContactInfo info={linkedInURL} label="LinkedIn" />
              <ContactInfo info={websiteURL} label="Website" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <SectionTitle>Experience</SectionTitle>
        {employmentHistory.map((ele, idx) => (
          <ExperienceItem
            key={idx}
            startDate={ele.startDate}
            endDate={ele.endDate}
            companyName={ele.companyName}
            jobTitle={ele.jobTitle}
            details={ele.details}
          />
        ))}
      </div>
    </section>
  );
}

export default CVTemplate;
