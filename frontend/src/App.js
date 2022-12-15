// import React from "react"
// import "./App.css"

// function App() {
// 	const [fruitItems, setFruitItems] = React.useState([
// 		"Apple",
// 		"Banana",
// 		"Orange",
// 	])
  
// 	const [newFruitItem, setNewFruitItem] = React.useState("")

	
// 	const dragItem = React.useRef(null)
// 	const dragOverItem = React.useRef(null)

	
// 	const handleSort = () => {
	
// 		let _fruitItems = [...fruitItems]

		
// 		const draggedItemContent = _fruitItems.splice(dragItem.current, 1)[0]

		
// 		_fruitItems.splice(dragOverItem.current, 0, draggedItemContent)

	
// 		dragItem.current = null
// 		dragOverItem.current = null

		
// 		setFruitItems(_fruitItems)
// 	}

	
// 	const handleNameChange = (e) => {
// 		setNewFruitItem(e.target.value)
// 	}

	
// 	const handleAddItem = () => {
// 		const _fruitItems = [...fruitItems]
// 		_fruitItems.push(newFruitItem)
// 		setFruitItems(_fruitItems)
// 	}

// 	return (
// 		<div className="app">
//       <div className="phase1">
//       <h2>Fruit List</h2>
// 			<div className="input-group">
// 				<input
// 					type="text"
// 					name="fruitName"
// 					placeholder="e.g Banana"
// 					onChange={handleNameChange}
// 				/>
// 				<button className="btn" onClick={handleAddItem}>
// 					Add item
// 				</button>
// 			</div>


// 			<div className="list-container">
// 				{fruitItems.map((item, index) => (
// 					<div
// 						key={index}
// 						className="list-item"
// 						draggable
// 						onDragStart={(e) => (dragItem.current = index)}
// 						onDragEnter={(e) => (dragOverItem.current = index)}
// 						onDragEnd={handleSort}
// 						onDragOver={(e) => e.preventDefault()}>
						
// 						<h3>{item}</h3>
// 					</div>
// 				))}
// 			</div>

//       </div>
			




// 		</div>
// 	)
// }

// export default App







import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderColors } from "./reorder";
import userdata from "./tempData.json";
import { AuthorList } from "./AuthorList";

const App = () => {
  const [colorMap, setColors] = React.useState({
    Red: ["jknk","bjhbhjbhjbhj","huhugugyu"],
    blue: ["pink"],
    green: ["green", "tan"],
    black: ["jhghjb", "takjkkn"]

  });
console.log(userdata.data)


  return (
    <>
    <DragDropContext
      onDragEnd={({ destination, source }) => {
      
        if (!destination) {
          return;
        }

        setColors(reorderColors(colorMap, source, destination));
      }}
    >
      <div style={{ display:"flex",gap:"100px"}}  className="maindiv">
        {Object.entries(colorMap).map(([k, v]) => (
          <AuthorList
            internalScroll
            key={k}
            listId={k}
            listType="CARD"
            colors={v}
          />
        ))}
      </div>
    </DragDropContext>

    </>
    
    
  );
};

export default App;







