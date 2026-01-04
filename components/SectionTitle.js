
function SectionTitle({ children, sub }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-extrabold text-black">{children}</h2>
      {sub && <p className="mt-1 text-black">{sub}</p>}
    </div>
  );
}

export default SectionTitle;