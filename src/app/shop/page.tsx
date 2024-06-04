import Card from "@/components/Card";

const Shop = () => {
  const arr = [];
  for (let i = 0; i <= 10; i++) {
    arr.push(i);
  }
  console.log(arr);
  console.log(4);

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 p-6">
        {arr.map((item, index) => (
          <Card
            key={item}
            style={`min-w-full ${index % 2 === 0 ? "mt-6" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
