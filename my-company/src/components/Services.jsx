function Services() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "blue", textAlign: "center" }}>Our Services</h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
