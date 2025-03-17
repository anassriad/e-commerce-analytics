export function MostOrderedFood() {
  const foodItems = [
    {
      name: "Fresh Salad Bowl",
      price: "IDR 45.000",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Chicken Noodles",
      price: "IDR 75.000",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Smoothie Fruits",
      price: "IDR 45.000",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Hot Chicken Wings",
      price: "IDR 45.000",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div>
      {foodItems.map((item, index) => (
        <div key={index} className="food-item">
          <div className="food-info">
            <div className="food-image">
              <img src={item.image || "/placeholder.svg"} alt={item.name} />
            </div>
            <span className="food-name">{item.name}</span>
          </div>
          <span className="food-price">{item.price}</span>
        </div>
      ))}
    </div>
  )
}

