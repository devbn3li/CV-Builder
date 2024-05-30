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

function CVTemplate() {
    // Personal information
    const { userName } = useUserName();
    const { userJob } = useUserJob();
    // const { userAge } = useUserAge();
    const { userPhone } = useUserPhone();
    const { userEmail } = useUserEmail();
    const { userImageUrl, showImage } = useUserImageUrl();
    const { userAbout } = useUserAbout();

    // Social Links
    const { websiteURL } = useWebsiteURL();
    const { facebookURL } = useFacebookURL();
    const { twitterURL } = useTwitterURL();
    const { linkedInURL } = useLinkedInURL();

    // Employment History
    const { employmentHistory } = useEmploymentHistory();

    // Education
    const { education } = useEducation();

    return (
    <section className="bg-white w-[21cm] h-[27.8cm] p-[50px]">
      <div className="text-center">
        <p
          className={`font-semibold ${
            userName.length > 10 ? "text-3xl" : "text-5xl"
          }  min-w-[220px]`}
        >
          {userName}
        </p>
                <p className={`mt-5 ${userJob.length > 20 ? "text-xl" : "text-2xl"}`}>
                    {userJob}
        </p>
        <p className="text-[20px] max-w-[60px] mt-2">{userAbout}</p>
      </div>

      <div className="mt-[10px]">
        <div className="grid gap-8">
          <div>
            <p className="font-bold text-[25px]">Education</p>
            {education.map((ele, idx) => (
              <div key={idx} className="mt-4">
                <p>
                  {ele.startDate} - {ele.endDate}
                </p>
                <p>{ele.degreeName}</p>
                <p>{ele.univercityName}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="font-bold text-[25px]">Contact</p>
            <div className="flex flex-col gap-2 mt-2 text-lg">
              <p className="font-semibold">{userPhone}</p>
              <p className="font-semibold">{userEmail}</p>
              {facebookURL !== `` && (
                <p className="font-semibold">{facebookURL}</p>
              )}
              {twitterURL !== `` && (
                <p className="font-semibold">{twitterURL}</p>
              )}
              {linkedInURL !== `` && (
                <p className="font-semibold">{linkedInURL}</p>
              )}
              {websiteURL !== `` && (
                <p className="font-semibold">{websiteURL}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="font-bold text-[25px]">Experience</p>
        {employmentHistory.map((ele, idx) => (
          <div key={idx} className="mt-4">
            <p className="text-slate-600">
              {ele.startDate} - {ele.endDate}
            </p>
            <p className="text-slate-600">{ele.companyName}</p>
            <p className="font-bold text-[16px] mt-2">{ele.jobTitle}</p>
            <p className="text-slate-600">{ele.details}</p>
          </div>
        ))}
      </div>
    </section >
  );
}

export default CVTemplate;
