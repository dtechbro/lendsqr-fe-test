import React from "react";
import "../styles/usersfiltermodal.scss";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filterValues: {
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
  };
  setFilterValues: React.Dispatch<
    React.SetStateAction<{
      organization: string;
      username: string;
      email: string;
      phoneNumber: string;
      dateJoined: string;
      status: string;
    }>
  >;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  filterValues,
  setFilterValues,
}) => {
  if (!isOpen) return null;

  return (
    <div>
      <div className="filter">
        <label htmlFor="">Organization</label>
        <select name="" id="">
          <option value="">Select</option>
          <option value="Organization 1">Kredi</option>
          <option value="Organization 2">Irorun</option>
          <option value="Organization 3">Lendsqr</option>
        </select>

        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Username"
          value={filterValues.username}
          onChange={(e) =>
            setFilterValues({ ...filterValues, username: e.target.value })
          }
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Email"
          value={filterValues.email}
          onChange={(e) =>
            setFilterValues({ ...filterValues, email: e.target.value })
          }
        />

        <label htmlFor="">Phone number</label>
        <input
          type="text"
          placeholder="Phone number"
          value={filterValues.phoneNumber}
          onChange={(e) =>
            setFilterValues({ ...filterValues, phoneNumber: e.target.value })
          }
        />

        <label htmlFor="">Date Joined</label>
        <input
          type="date"
          placeholder="Date"
          value={filterValues.dateJoined}
          onChange={(e) =>
            setFilterValues({ ...filterValues, dateJoined: e.target.value })
          }
        />

        <label htmlFor="">Status</label>
        <select
          value={filterValues.status}
          onChange={(e) =>
            setFilterValues({ ...filterValues, status: e.target.value })
          }
        >
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
          <option value="Blacklisted">Blacklisted</option>
        </select>

        <div className="btn-wrapper">
          <button onClick={onClose} className="reset-btn">
            Reset
          </button>
          <button onClick={onClose} className="filter-btn">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
