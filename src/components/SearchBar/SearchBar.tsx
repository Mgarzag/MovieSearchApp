// Import only the ChangeEvent type from React.
// This is used to properly type the input's onChange event.
import type { ChangeEvent } from "react";

// Define the props that the SearchBar component expects.
interface SearchBarProps {
  // The current value displayed in the input field.  
  searchTerm: string;
  // Function that runs whenever the user types into the input.
  // It receives the input change event as its parameter.
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// Define the SearchBar component.
// The props are destructured directly from the SearchBarProps interface.
function SearchBar({
  searchTerm,
  onSearchChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search for a movie..."
      // Controlled component:
      // The value displayed always comes from React state.
      value={searchTerm}
      // Whenever the user types, call the parent component's
      // event handler to update the search term state.
      onChange={onSearchChange}
    />
  );
}

export default SearchBar;