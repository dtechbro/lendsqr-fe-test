import { User } from "../types";
import "../styles/generaldetails.scss";

interface GeneralDetailsProps {
  user: User;
}

const GeneralDetails: React.FC<GeneralDetailsProps> = ({ user }) => {
  return (
    <div className="general-details">
      <h2>Personal Information</h2>
      <div className="grid">
        <div>
          <span>FULL NAME</span>
          <p>{user.personalInfo.fullName}</p>
        </div>
        <div>
          <span>PHONE NUMBER</span>
          <p>{user.phone}</p>
        </div>
        <div>
          <span>EMAIL ADDRESS</span>
          <p>{user.email}</p>
        </div>
        <div>
          <span>BVN</span>
          <p>{user.personalInfo.bvn}</p>
        </div>
        <div>
          <span>GENDER</span>
          <p>{user.personalInfo.gender}</p>
        </div>
        <div>
          <span>MARITAL STATUS</span>
          <p>{user.personalInfo.maritalStatus}</p>
        </div>
        <div>
          <span>CHILDREN</span>
          <p>{user.personalInfo.children}</p>
        </div>
        <div>
          <span>TYPE OF RESIDENCE</span>
          <p>{user.personalInfo.residenceType}</p>
        </div>
      </div>

      <hr />

      <h2>Education and Employment</h2>
      <div className="grid">
        <div>
          <span>LEVEL OF EDUCATION</span>
          <p>{user.employment.education}</p>
        </div>
        <div>
          <span>EMPLOYMENT STATUS</span>
          <p>{user.employment.status}</p>
        </div>
        <div>
          <span>SECTOR OF EMPLOYMENT</span>
          <p>{user.employment.sector}</p>
        </div>
        <div>
          <span>DURATION OF EMPLOYMENT</span>
          <p>{user.employment.experience}</p>
        </div>
        <div>
          <span>OFFICE EMAIL</span>
          <p>{user.email}</p>
        </div>
        <div>
          <span>MONTHLY INCOME</span>
          <p>{user.employment.monthlyIncome}</p>
        </div>
        <div>
          <span>LOAN REPAYMENT</span>
          <p>{user.employment.loanRepayment}</p>
        </div>
      </div>

      <hr />

      <h2>Socials</h2>
      <div className="grid">
        <div>
          <span>TWITTER</span>
          <p>{user.socials.twitter}</p>
        </div>
        <div>
          <span>FACEBOOK</span>
          <p>{user.socials.facebook}</p>
        </div>
        <div>
          <span>INSTAGRAM</span>
          <p>{user.socials.instagram}</p>
        </div>
      </div>

      <hr />

      <h2>Guarantor</h2>
      <div className="guarantor-grid">
        {user.guarantors.map((guarantor, index) => (
          <div key={index} className="guarantor">
            <div>
              <span>FULL NAME</span>
              <p>{guarantor.fullName}</p>
            </div>
            <div>
              <span>PHONE NUMBER</span>
              <p>{guarantor.phone}</p>
            </div>
            <div>
              <span>EMAIL ADDRESS</span>
              <p>{guarantor.email}</p>
            </div>
            <div>
              <span>RELATIONSHIP</span>
              <p>{guarantor.relationship}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralDetails;