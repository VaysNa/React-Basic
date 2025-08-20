export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TabButton Component  yang rendering.. ");
  // console.log akan dieksekusi 4x karena kita punya  4 button kan
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
