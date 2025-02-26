export default function GridItem({ children }) {
  return (
    <div className="w-75 h-75 bg-jasmine flex items-center justify-center rounded-lg shadow-lg">
      {children}
    </div>
  );
}
