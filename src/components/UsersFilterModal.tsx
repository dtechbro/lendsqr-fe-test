import React from "react";
import '../styles/usersfiltermodal.scss';

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
        <input
          type="text"
          placeholder="Filter by organization"
          value={filterValues.organization}
          onChange={(e) =>
            setFilterValues({ ...filterValues, organization: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Filter by username"
          value={filterValues.username}
          onChange={(e) =>
            setFilterValues({ ...filterValues, username: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Filter by email"
          value={filterValues.email}
          onChange={(e) =>
            setFilterValues({ ...filterValues, email: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Filter by phone number"
          value={filterValues.phoneNumber}
          onChange={(e) =>
            setFilterValues({ ...filterValues, phoneNumber: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="Filter by date joined"
          value={filterValues.dateJoined}
          onChange={(e) =>
            setFilterValues({ ...filterValues, dateJoined: e.target.value })
          }
        />
        <select
          value={filterValues.status}
          onChange={(e) =>
            setFilterValues({ ...filterValues, status: e.target.value })
          }
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
          <option value="Blacklisted">Blacklisted</option>
        </select>

        <div>
          <button onClick={onClose}>Cancel</button>
          <button onClick={onClose}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
