// Example of the test file using imports
import { render, screen } from "@testing-library/react";
import ProjectTable from "../ProjectTable";
import axios from "axios";

// Mock the API call
jest.mock("axios");

test("renders project table", async () => {
  const data = [
    { "percentage.funded": 186, "amount.pledged": 15283 },
    { "percentage.funded": 90, "amount.pledged": 5000 },
  ];

  axios.get.mockResolvedValue({ data });

  render(<ProjectTable />);

  // Wait for the table rows to appear
  const rows = await screen.findAllByRole("row");
  expect(rows.length).toBeGreaterThan(1); // It should render at least one row
});
