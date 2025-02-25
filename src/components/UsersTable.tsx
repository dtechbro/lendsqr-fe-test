import { HiDotsVertical } from "react-icons/hi";
import { MdFilterList } from "react-icons/md";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { User } from "../types";
import "../styles/userstable.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import FilterModal from "./UsersFilterModal";
import Pagination from "./Pagination";
import {
  ActivateUserIcon,
  BlacklistUserIcon,
  ViewDetailsIcon,
} from "../assets/svg";

interface UsersTableProps {
  users: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  const navigate = useNavigate();
  const [filterModalOpen, setFilterModalOpen] = React.useState(false);
  const [actionModalOpen, setActionModalOpen] = React.useState<string | null>(
    null
  );
  const [filterValues, setFilterValues] = React.useState({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    dateJoined: "",
    status: "",
  });

  const handleFilterClick = () => {
    setFilterModalOpen(!filterModalOpen);
  };

  const handleActionClick = (userId: string) => {
    setActionModalOpen(actionModalOpen === userId ? null : userId);
  };

  const columns: ColumnDef<User>[] = [
    {
      header: "Organization",
      accessorKey: "organization",
    },
    {
      header: "Username",
      accessorKey: "username",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Phone Number",
      accessorKey: "phone",
    },
    {
      header: "Date Joined",
      accessorKey: "dateJoined",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (info) => (
        <span
          className={`status-badge ${(
            info.getValue() as string
          ).toLowerCase()}`}
        >
          {info.getValue() as string}
        </span>
      ),
    },
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="users-table">
      <div className="table-wrapper">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} onClick={handleFilterClick}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <MdFilterList
                      className="filter-icon"
                      style={{ cursor: "pointer", marginLeft: "5px" }}
                    />
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="action-btn">
                  <HiDotsVertical
                    onClick={() => handleActionClick(row.original.userId)}
                    style={{ cursor: "pointer" }}
                  />
                  {actionModalOpen === row.original.userId && (
                    <div className="action-modal">
                      <button
                        onClick={() => {
                          // Store the selected user in localStorage
                          localStorage.setItem(
                            "selectedUser",
                            JSON.stringify(row.original)
                          );
                          // Navigate to the User Details page
                          navigate(`/users/${row.original.userId}`);
                        }}
                      >
                        <ViewDetailsIcon />
                        View Details
                      </button>

                      <button>
                        <BlacklistUserIcon /> Blacklist User
                      </button>

                      <button>
                        <ActivateUserIcon /> Activate User
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

          {/* filter modal  */}
          <tfoot className="filter-modal">
            <FilterModal
              isOpen={filterModalOpen}
              onClose={() => setFilterModalOpen(false)}
              filterValues={filterValues}
              setFilterValues={setFilterValues}
            />
          </tfoot>
        </table>
      </div>

      {/* table pagination */}
      <Pagination table={table} />
    </div>
  );
};

export default UsersTable;
