import React, { useEffect } from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";

import userdata from "./tempData.json";

export const AuthorList = ({ listId, listType, colors }) => {

const handleDelete=(e)=>{
  colors.splice(e,1)
  console.log(colors)
 

}

console.log(listId)

  return (
    <Droppable
      droppableId={listId}
      type={listType}
      direction="horizontal"
      isCombineEnabled={false}
    >
      {dropProvided => (
        <div {...dropProvided.droppableProps}>
          <div>
            <div>
              {listId}
              <div  ref={dropProvided.innerRef}>
                {colors.map((color, index) => (
                  <Draggable key={color} draggableId={color} index={index}>
                    {dragProvided => (
                      <div 
                        {...dragProvided.dragHandleProps}
                        {...dragProvided.draggableProps}
                        ref={dragProvided.innerRef}
                      >
                        <div>{color} <button onClick={(e)=>handleDelete(index)}>del</button>  </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </div>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
};
